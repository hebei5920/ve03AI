'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { FaArrowLeft, FaDownload, FaPlay, FaClock, FaImage, FaFileAlt, FaVideo, FaCalendarAlt, FaUser, FaCog, FaSpinner, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'
import Image from 'next/image'

interface HistoryDetail {
  id: string
  type: 'text-to-video' | 'image-to-video'
  prompt: string
  imageUrl?: string
  modelVersion?: string
  duration?: number
  quality?: string
  status: string
  createdAt: string
  updatedAt: string
  video?: {
    id: string
    url: string
    thumbnailUrl?: string
    size?: number
    format?: string
    resolution?: string
    width?: number
    height?: number
  }
}

// 格式化日期
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  
  return `${year}-${month}-${day} ${hours}:${minutes}`
}

// 格式化文件大小
function formatFileSize(bytes?: number): string {
  if (!bytes) return '未知'
  
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`
}

// 解析分辨率字符串
function parseResolution(resolution?: string): { width: number, height: number } | null {
  if (!resolution) return null
  
  const match = resolution.match(/(\d+)x(\d+)/)
  if (match) {
    return {
      width: parseInt(match[1]),
      height: parseInt(match[2])
    }
  }
  return null
}

// 获取视频尺寸
function getVideoDimensions(detail: HistoryDetail): { width: number, height: number, aspectRatio: number } {
  // 优先使用明确的宽高字段
  if (detail.video?.width && detail.video?.height) {
    return {
      width: detail.video.width,
      height: detail.video.height,
      aspectRatio: detail.video.width / detail.video.height
    }
  }
  
  // 尝试从分辨率字符串解析
  const parsed = parseResolution(detail.video?.resolution)
  if (parsed) {
    return {
      width: parsed.width,
      height: parsed.height,
      aspectRatio: parsed.width / parsed.height
    }
  }
  
  // 默认16:9比例
  return {
    width: 1920,
    height: 1080,
    aspectRatio: 16 / 9
  }
}

export default function HistoryDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [detail, setDetail] = useState<HistoryDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadMessage, setDownloadMessage] = useState<{
    type: 'success' | 'error' | null
    text: string
  }>({ type: null, text: '' })

  useEffect(() => {
    if (params.id) {
      fetchDetail(params.id as string)
    }
  }, [params.id])

  const fetchDetail = async (id: string) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/history/detail/${id}`)
      const data = await response.json()

      if (data.success) {
        setDetail(data.data)
      } else {
        setError(data.error || '获取详情失败')
      }
    } catch (err) {
      setError('获取详情失败')
      console.error('Error fetching detail:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async () => {
    if (!detail?.video?.url) {
      setDownloadMessage({ type: 'error', text: '视频文件不可用' })
      setTimeout(() => setDownloadMessage({ type: null, text: '' }), 3000)
      return
    }

    try {
      setIsDownloading(true)
      setDownloadMessage({ type: null, text: '' })

      // 生成文件名
      const timestamp = new Date(detail.createdAt).toISOString().slice(0, 10)
      const typePrefix = detail.type === 'text-to-video' ? 'TTV' : 'ITV'
      const videoFormat = detail.video.format || 'mp4'
      const fileName = `${typePrefix}_${timestamp}_${detail.id.slice(-8)}.${videoFormat}`

      console.log('开始下载:', detail.video.url)

      try {
        // 首先尝试直接下载
        const response = await fetch(detail.video.url, {
          method: 'GET',
          headers: {
            'Accept': 'video/*',
          },
        })
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }

        // 检查响应类型
        const contentType = response.headers.get('content-type')
        console.log('Content-Type:', contentType)
        
        if (!contentType || !contentType.startsWith('video/')) {
          console.warn('响应不是视频文件类型:', contentType)
        }

        const blob = await response.blob()
        console.log('下载完成，文件大小:', blob.size, 'bytes')
        
        if (blob.size === 0) {
          throw new Error('下载的文件为空')
        }

        const downloadUrl = window.URL.createObjectURL(blob)
        
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = downloadUrl
        a.download = fileName
        document.body.appendChild(a)
        a.click()
        
        // 清理
        setTimeout(() => {
          window.URL.revokeObjectURL(downloadUrl)
          document.body.removeChild(a)
        }, 100)
        
        setDownloadMessage({ type: 'success', text: `视频下载成功！文件名: ${fileName}` })
        
      } catch (fetchError) {
        console.error('Fetch下载失败:', fetchError)
        
        // 如果fetch失败，尝试使用window.open作为备选方案
        console.log('尝试备选下载方案...')
        
        try {
          // 创建下载链接
          const a = document.createElement('a')
          a.href = detail.video.url
          a.download = fileName
          a.target = '_blank'
          a.rel = 'noopener noreferrer'
          
          // 尝试触发下载
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
          
          setDownloadMessage({ type: 'success', text: '已在新窗口中打开下载链接' })
          
        } catch (linkError) {
          console.error('链接下载也失败:', linkError)
          const fetchErrorMessage = fetchError instanceof Error ? fetchError.message : '网络错误'
          throw new Error(`下载失败: ${fetchErrorMessage}`)
        }
      }

      // 3秒后清除成功消息
      setTimeout(() => setDownloadMessage({ type: null, text: '' }), 3000)

    } catch (error) {
      console.error('Download failed:', error)
      const errorMessage = error instanceof Error ? error.message : '下载失败，请稍后重试'
      setDownloadMessage({ type: 'error', text: errorMessage })
      setTimeout(() => setDownloadMessage({ type: null, text: '' }), 5000)
    } finally {
      setIsDownloading(false)
    }
  }

  const getStatusBadge = (status: string) => {
    const statusMap = {
      'pending': { text: '等待中', variant: 'secondary' as const },
      'processing': { text: '处理中', variant: 'default' as const },
      'completed': { text: '已完成', variant: 'default' as const },
      'failed': { text: '失败', variant: 'destructive' as const }
    }
    
    return statusMap[status as keyof typeof statusMap] || { text: status, variant: 'secondary' as const }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-lg">加载中...</div>
        </div>
      </div>
    )
  }

  if (error || !detail) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="text-lg text-red-500 mb-4">{error || '记录不存在'}</div>
            <Button onClick={() => router.back()}>
              <FaArrowLeft className="mr-2 h-4 w-4" />
              返回
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const statusBadge = getStatusBadge(detail.status)
  const videoDimensions = getVideoDimensions(detail)

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* 顶部导航 */}
      <div className="flex items-center justify-between mb-6">
        <Button 
          variant="outline" 
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <FaArrowLeft className="h-4 w-4" />
          返回历史记录
        </Button>
        
        <div className="flex items-center gap-2">
          {detail.type === 'text-to-video' ? (
            <FaFileAlt className="h-5 w-5 text-blue-500" />
          ) : (
            <FaImage className="h-5 w-5 text-green-500" />
          )}
          <span className="text-lg font-semibold">
            {detail.type === 'text-to-video' ? '文本转视频' : '图像转视频'}
          </span>
          <Badge variant={statusBadge.variant}>{statusBadge.text}</Badge>
        </div>
      </div>

      <div className="space-y-6">
        {/* 上半部分：视频播放区域 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaVideo className="h-5 w-5" />
                生成的视频
                {detail.video?.width && detail.video?.height && (
                  <Badge variant="outline" className="text-xs">
                    {detail.video.width} × {detail.video.height}
                  </Badge>
                )}
              </div>
              {detail.video?.url && detail.status === 'completed' && (
                <Button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex items-center gap-2"
                >
                  {isDownloading ? (
                    <FaSpinner className="h-4 w-4 animate-spin" />
                  ) : (
                    <FaDownload className="h-4 w-4" />
                  )}
                  {isDownloading ? '下载中...' : '下载视频'}
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Download Message */}
            {downloadMessage.type && (
              <Alert className={`mb-4 ${downloadMessage.type === 'success' ? 'border-green-200 bg-green-50 dark:bg-green-950/10' : 'border-red-200 bg-red-50 dark:bg-red-950/10'}`}>
                <div className="flex items-center gap-2">
                  {downloadMessage.type === 'success' ? (
                    <FaCheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <FaExclamationTriangle className="h-4 w-4 text-red-600" />
                  )}
                  <AlertDescription className={downloadMessage.type === 'success' ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}>
                    {downloadMessage.text}
                  </AlertDescription>
                </div>
              </Alert>
            )}

            {detail.video?.url && detail.status === 'completed' ? (
              <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div 
                  className="relative w-full"
                  style={{ 
                    aspectRatio: `${videoDimensions.width} / ${videoDimensions.height}`,
                    maxHeight: '70vh' 
                  }}
                >
                  <video 
                    src={detail.video.url} 
                    className="w-full h-full object-contain"
                    controls
                    preload="metadata"
                  />
                </div>
              </div>
            ) : (
              <div 
                className="relative w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                style={{ 
                  aspectRatio: `${videoDimensions.width} / ${videoDimensions.height}`,
                  maxHeight: '70vh',
                  minHeight: '300px'
                }}
              >
                <div className="text-center">
                  <FaPlay className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-500">
                    {detail.status === 'pending' && '视频正在等待生成'}
                    {detail.status === 'processing' && '视频正在生成中'}
                    {detail.status === 'failed' && '视频生成失败'}
                    {detail.status !== 'pending' && detail.status !== 'processing' && detail.status !== 'failed' && '暂无视频'}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 下半部分：详细信息 */}
        <div className="space-y-6">
          {/* 信息标签展示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {/* 创建时间 */}
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="h-4 w-4 text-gray-400 flex-shrink-0" />
              <div>
                <span className="text-sm font-medium text-gray-500">创建时间</span>
                <div className="text-sm">{formatDate(detail.createdAt)}</div>
              </div>
            </div>

            {/* 视频大小 */}
            {detail.video?.size && (
              <div className="flex items-center gap-3">
                <FaVideo className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <div>
                  <span className="text-sm font-medium text-gray-500">视频大小</span>
                  <div className="text-sm">{formatFileSize(detail.video.size)}</div>
                </div>
              </div>
            )}

            {/* 模型版本 */}
            {detail.modelVersion && (
              <div className="flex items-center gap-3">
                <FaCog className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <div>
                  <span className="text-sm font-medium text-gray-500">模型版本</span>
                  <div className="text-sm">
                    <Badge variant="outline">{detail.modelVersion}</Badge>
                  </div>
                </div>
              </div>
            )}

            {/* 视频时长 */}
            {detail.duration && (
              <div className="flex items-center gap-3">
                <FaClock className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <div>
                  <span className="text-sm font-medium text-gray-500">视频时长</span>
                  <div className="text-sm">{detail.duration} 秒</div>
                </div>
              </div>
            )}

            {/* 视频尺寸 */}
            {(detail.video?.width && detail.video?.height) && (
              <div className="flex items-center gap-3">
                <FaVideo className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <div>
                  <span className="text-sm font-medium text-gray-500">视频尺寸</span>
                  <div className="text-sm">
                    <Badge variant="outline">{detail.video.width} × {detail.video.height}</Badge>
                  </div>
                </div>
              </div>
            )}

            {/* 分辨率 */}
            {detail.video?.resolution && (
              <div className="flex items-center gap-3">
                <FaVideo className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <div>
                  <span className="text-sm font-medium text-gray-500">分辨率</span>
                  <div className="text-sm">
                    <Badge variant="outline">{detail.video.resolution}</Badge>
                  </div>
                </div>
              </div>
            )}

            {/* 视频质量 */}
            {detail.quality && (
              <div className="flex items-center gap-3">
                <FaVideo className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <div>
                  <span className="text-sm font-medium text-gray-500">视频质量</span>
                  <div className="text-sm">
                    <Badge variant="outline">{detail.quality}</Badge>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 提示词 */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FaFileAlt className="h-4 w-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-500">提示词</span>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm leading-relaxed">
              {detail.prompt}
            </div>
          </div>

          {/* 源图像（仅图像转视频显示） */}
          {detail.type === 'image-to-video' && detail.imageUrl && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaImage className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-500">源图像</span>
              </div>
              <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={detail.imageUrl}
                  alt="源图像"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 