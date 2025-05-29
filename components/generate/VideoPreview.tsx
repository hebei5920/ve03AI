'use client'

import React from 'react'
import { useTranslation } from '@/providers/language-provider'
import { VideoStatus } from './types'
import { Play, Loader2, AlertCircle, CheckCircle } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import dynamic from 'next/dynamic'

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

interface VideoPreviewProps {
  videoId: string | null
  status: VideoStatus
  progress: number
  error: string | null
}

export default function VideoPreview({ videoId, status, progress, error }: VideoPreviewProps) {
  const { t } = useTranslation()

  // Placeholder/empty state
  if (status === 'idle') {
    return (
      <div className="relative w-full h-0 pb-[56.25%] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <div className="w-16 h-16 mb-4 text-gray-300 dark:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            {t('generator.preview.emptyState') || 'Your generated video will appear here'}
          </p>
        </div>
      </div>
    )
  }

  // Generating state with progress
  if (status === 'generating') {
    return (
      <div className="relative w-full h-0 pb-[56.25%] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <div className="w-12 h-12 mb-4">
            <div className="h-full w-full rounded-full border-4 border-t-orange-500 border-b-orange-300 border-l-orange-300 border-r-orange-300 animate-spin"></div>
          </div>
          <p className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
            {t('generator.preview.generating') || 'Generating Video'}
          </p>
          <div className="w-full max-w-xs mb-2">
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-2 bg-orange-500 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {progress}% {t('generator.preview.complete') || 'complete'}
          </p>
        </div>
      </div>
    )
  }

  // Error state
  if (status === 'error') {
    return (
      <div className="w-full">
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            {error || t('generator.preview.error') || 'Failed to generate video. Please try again.'}
          </AlertDescription>
        </Alert>
        <div className="relative w-full h-0 pb-[56.25%] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              {t('generator.preview.tryAgain') || 'Something went wrong. Please try again with different settings.'}
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Success state with video player
  return (
    <div className="w-full">
      <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden bg-black">
        {videoId && (
          <ReactPlayer
            url={videoId}
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
            controls
            playing
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload', // Disable download button
                },
              },
            }}
            onError={() => {
              console.error('Video playback error')
            }}
          />
        )}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {t('generator.preview.videoReady') || 'Video ready for playback'}
        </p>
      </div>
    </div>
  )
}
