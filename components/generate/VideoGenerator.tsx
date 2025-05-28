'use client'

import { useState, useRef, useEffect } from 'react'
import { useTranslation } from '@/providers/language-provider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ImageToVideo from './ImageToVideo'
import TextToVideo from './TextToVideo'
import VideoPreview from './VideoPreview'
import { GenerationFormData, VideoStatus } from './types'

export default function VideoGenerator() {
  const { t } = useTranslation()
  const [videoStatus, setVideoStatus] = useState<VideoStatus>('idle')
  const [progress, setProgress] = useState(0)
  const [videoId, setVideoId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  
  // For mocking the progress increment
  const progressInterval = useRef<NodeJS.Timeout | null>(null)

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }
    }
  }, [])

  // Mock function to simulate video generation with progress
  const generateVideo = async (formData: GenerationFormData) => {
    // Prevent multiple requests
    if (videoStatus === 'generating') return
    
    // Reset state
    setVideoStatus('generating')
    setProgress(0)
    setVideoId(null)
    setError(null)
    
    try {
      // Simulate progress updates
      progressInterval.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            if (progressInterval.current) clearInterval(progressInterval.current)
            return 100
          }
          // Progress in chunks as specified in requirements
          if (prev < 25) return 25
          if (prev < 50) return 50
          if (prev < 75) return 75
          return 100
        })
      }, 750)
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Simulate failure 10% of the time
      if (Math.random() < 0.1) {
        throw new Error('Video generation failed')
      }
      
      // Mock successful response
      const timestamp = Date.now()
      const newVideoId = formData.inputType === 'image' 
        ? `mock_img_${timestamp}` 
        : `mock_text_${timestamp}`
      
      setVideoId(newVideoId)
      setVideoStatus('success')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
      setVideoStatus('error')
    } finally {
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }
      setProgress(100)
    }
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <Tabs defaultValue="image" className="w-full">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <TabsList className="flex w-full">
              <TabsTrigger 
                value="image" 
                className="flex-1 py-4 px-6 font-medium"
              >
                {t('generator.tabs.imageToVideo') || 'Image to Video'}
              </TabsTrigger>
              <TabsTrigger 
                value="text" 
                className="flex-1 py-4 px-6 font-medium"
              >
                {t('generator.tabs.textToVideo') || 'Text to Video'}
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input section */}
              <div>
                <TabsContent value="image" className="mt-0">
                  <ImageToVideo 
                    onSubmit={(data) => generateVideo({...data, inputType: 'image'})} 
                    isGenerating={videoStatus === 'generating'}
                  />
                </TabsContent>
                
                <TabsContent value="text" className="mt-0">
                  <TextToVideo 
                    onSubmit={(data) => generateVideo({...data, inputType: 'text'})} 
                    isGenerating={videoStatus === 'generating'}
                  />
                </TabsContent>
              </div>
              
              {/* Preview section */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {t('generator.preview.title') || 'Preview'}
                </h3>
                
                <VideoPreview 
                  videoId={videoId}
                  status={videoStatus}
                  progress={progress}
                  error={error}
                />
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
