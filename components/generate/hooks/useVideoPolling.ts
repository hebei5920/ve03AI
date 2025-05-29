import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from '@/providers/language-provider'
import { VideoStatus } from '../types'

interface UseVideoPollingOptions {
  onComplete?: (videoUrl: string) => void
  onError?: (error: string) => void
  pollingInterval?: number // 轮询间隔，默认10秒
}

interface VideoPollingResult {
  status: VideoStatus
  progress: number
  error: string | null
  videoId: string | null
  startPolling: (itvId: string) => void
  stopPolling: () => void
  resetState: () => void
  updateProgress: (updater: (prev: number) => number) => void
  complete: (videoUrl: string) => void
  setError: (error: string) => void
  setGenerating: () => void
}

export function useVideoPolling(options: UseVideoPollingOptions = {}): VideoPollingResult {
  const { onComplete, onError, pollingInterval = 6000 } = options
  const { t } = useTranslation()
  
  const [status, setStatus] = useState<VideoStatus>('idle')
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [videoId, setVideoId] = useState<string | null>(null)
  const [pollingTimer, setPollingTimer] = useState<NodeJS.Timeout | null>(null)
  const [currentItvId, setCurrentItvId] = useState<string | null>(null)

  // 清理轮询定时器
  const stopPolling = useCallback(() => {
    if (pollingTimer) {
      clearInterval(pollingTimer)
      setPollingTimer(null)
    }
  }, [pollingTimer])

  // 重置状态
  const resetState = useCallback(() => {
    setStatus('idle')
    setProgress(0)
    setError(null)
    setVideoId(null)
    setCurrentItvId(null)
    stopPolling()
  }, [stopPolling])

  // 检查视频状态
  const checkVideoStatus = useCallback(async (itvId: string) => {
    try {
      const response = await fetch(`/api/video/status/${itvId}`)
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to check video status')
      }

      const videoStatus = result.data.status

      // 更新进度
      if (videoStatus === 5) {
        // 仍在生成中 - 逐步增加进度
        setProgress(prev => Math.min(prev + 5, 90))
      } else if (videoStatus === 1) {
        // 生成完成
        setProgress(100)
        setStatus('success')
        setVideoId(result.data.video?.url || null)
        
        // 停止轮询
        stopPolling()
        
        // 回调通知完成
        if (onComplete && result.data.video?.url) {
          onComplete(result.data.video.url)
        }
      } else if (videoStatus === 7) {
        // 内容审核失败
        throw new Error(t('generator.errors.moderationFailed') || 'Content moderation failed')
      } else if (videoStatus === 8) {
        // 生成失败
        throw new Error(t('generator.errors.generationFailed') || 'Video generation failed')
      }

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'
      setError(errorMessage)
      setStatus('error')
      
      // 停止轮询
      stopPolling()
      
      // 回调通知错误
      if (onError) {
        onError(errorMessage)
      }
    }
  }, [t, onComplete, onError, stopPolling])

  // 开始轮询
  const startPolling = useCallback((itvId: string) => {
    // 停止之前的轮询
    stopPolling()
    
    // 设置状态
    setCurrentItvId(itvId)
    setStatus('generating')
    setProgress(50)
    setError(null)
    setVideoId(null)
    
    // 立即检查一次
    checkVideoStatus(itvId)
    
    // 设置定时轮询
    const timer = setInterval(() => {
      checkVideoStatus(itvId)
    }, pollingInterval)
    
    setPollingTimer(timer)
  }, [checkVideoStatus, pollingInterval, stopPolling])

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      stopPolling()
    }
  }, [stopPolling])

  // 更新进度
  const updateProgress = useCallback((updater: (prev: number) => number) => {
    setProgress(updater)
  }, [])

  // 手动完成
  const complete = useCallback((videoUrl: string) => {
    setProgress(100)
    setStatus('success')
    setVideoId(videoUrl)
    stopPolling()
    
    if (onComplete) {
      onComplete(videoUrl)
    }
  }, [onComplete, stopPolling])

  // 手动设置错误
  const setVideoError = useCallback((errorMessage: string) => {
    setError(errorMessage)
    setStatus('error')
    stopPolling()
    
    if (onError) {
      onError(errorMessage)
    }
  }, [onError, stopPolling])

  // 设置生成状态
  const setGenerating = useCallback(() => {
    setStatus('generating')
  }, [])

  return {
    status,
    progress,
    error,
    videoId,
    startPolling,
    stopPolling,
    resetState,
    updateProgress,
    complete,
    setError: setVideoError,
    setGenerating
  }
} 