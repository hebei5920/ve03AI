'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FaClock, FaFileAlt, FaImage, FaInfoCircle, FaSpinner, FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link'
import { useTranslation } from '@/providers/language-provider'
import Image from 'next/image'

interface HistoryItemProps {
  id: string
  type: 'text-to-video' | 'image-to-video'
  prompt: string
  imageUrl?: string
  status: string
  createdAt: string
  video?: {
    id: string
    url?: string
    width?: number
    height?: number
    resolution?: string
  }
  modelVersion?: string
  duration?: number
  quality?: string
}

const formatTimeAgo = (dateString: string) => {
  const { t } = useTranslation()
  
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
  if (diffInSeconds < 60) {
    return t('history.timeAgo.justNow')
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60)
    return t('history.timeAgo.minutesAgo').replace('{minutes}', minutes.toString())
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600)
    return t('history.timeAgo.hoursAgo').replace('{hours}', hours.toString())
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400)
    return t('history.timeAgo.daysAgo').replace('{days}', days.toString())
  } else {
    return date.toLocaleDateString('zh-CN')
  }
}

// 获取视频尺寸信息
const getVideoSize = (video?: { width?: number, height?: number, resolution?: string }) => {
  if (video?.width && video?.height) {
    return `${video.width}×${video.height}`
  }
  if (video?.resolution) {
    return video.resolution
  }
  return null
}

// 状态组件
function StatusBadge({ status }: { status: string }) {
  const { t } = useTranslation()
  
  switch (status) {
    case 'completed':
      return <Badge variant="default" className="bg-green-500 text-xs px-1.5 py-0.5">{t('history.status.completed')}</Badge>
    case 'processing':
      return <Badge variant="default" className="bg-blue-500 text-xs px-1.5 py-0.5">{t('history.status.processing')}</Badge>
    case 'failed':
      return <Badge variant="destructive" className="text-xs px-1.5 py-0.5">{t('history.status.failed')}</Badge>
    default:
      return <Badge variant="secondary" className="text-xs px-1.5 py-0.5">{t('history.status.pending')}</Badge>
  }
}

export default function HistoryItem({
  id,
  type,
  prompt,
  imageUrl,
  status,
  createdAt,
  video,
  modelVersion,
  duration,
  quality
}: HistoryItemProps) {
  const { t } = useTranslation()
  const videoSize = getVideoSize(video)
  
  return (
    <Card className="w-full hover:shadow-md transition-shadow border-l-4 border-l-orange-200 dark:border-l-orange-800">
      <CardContent className="p-3">
        <div className="flex gap-3">
          {/* 左侧图标 */}
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800">
              {type === 'text-to-video' ? (
                <FaFileAlt className="h-4 w-4 text-orange-600 dark:text-orange-300" />
              ) : (
                <FaImage className="h-4 w-4 text-orange-600 dark:text-orange-300" />
              )}
            </div>
          </div>

          {/* 中间内容区域 */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-1.5">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {type === 'text-to-video' ? t('historyDetail.type.textToVideo') : t('historyDetail.type.imageToVideo')}
                </h3>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <FaClock className="h-3 w-3" />
                  <span>{formatTimeAgo(createdAt)}</span>
                </div>
              </div>
              <StatusBadge status={status} />
            </div>

            {/* 提示词 */}
            <div className="mb-2">
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                {prompt}
              </p>
            </div>

            {/* 参数和操作按钮 */}
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {modelVersion && (
                  <Badge variant="outline" className="text-xs px-1.5 py-0.5">{modelVersion}</Badge>
                )}
                {duration && (
                  <Badge variant="outline" className="text-xs px-1.5 py-0.5">{duration}s</Badge>
                )}
                {videoSize && (
                  <Badge variant="outline" className="text-xs px-1.5 py-0.5">{videoSize}</Badge>
                )}
                {quality && (
                  <Badge variant="outline" className="text-xs px-1.5 py-0.5">{quality}</Badge>
                )}
              </div>
              
              <Link href={`/history/detail/${id}`}>
                <Button size="sm" variant="outline" className="text-xs h-7 px-2">
                  <FaInfoCircle className="h-3 w-3 mr-1" />
                  {t('common.details')}
                </Button>
              </Link>
            </div>

            {/* 状态指示 */}
            {status === 'processing' && (
              <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 mt-1.5">
                <div className="animate-spin h-3 w-3 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                {t('history.processingMessage')}
              </div>
            )}

            {status === 'failed' && (
              <div className="text-xs text-red-600 dark:text-red-400 mt-1.5">
                {t('history.failedMessage')}
              </div>
            )}
          </div>

          {/* 右侧缩略图（仅图像转视频） */}
          {type === 'image-to-video' && imageUrl && (
            <div className="flex-shrink-0">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <img 
                  src={imageUrl} 
                  alt="Source" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 