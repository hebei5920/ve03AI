'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FaHistory, FaFileAlt, FaImage, FaSpinner, FaVideo, FaPlus, FaSync } from 'react-icons/fa'
import HistoryItem from '@/components/history/HistoryItem'
import { useTranslation } from '@/providers/language-provider'
import { Badge } from '@/components/ui/badge'

interface HistoryRecord {
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

interface HistoryResponse {
  success: boolean
  data: {
    history: HistoryRecord[]
    pagination: {
      page: number
      limit: number
      total: number
      totalPages: number
    }
  }
}

export default function HistoryPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [historyData, setHistoryData] = useState<HistoryRecord[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState('all')
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  })

  // 使用 ref 来避免重复请求
  const cache = useRef<Map<string, { data: HistoryRecord[], pagination: any, timestamp: number }>>(new Map())
  const isInitialized = useRef(false)
  const requestInProgress = useRef(false)

  const { t } = useTranslation()

  // Redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  // Fetch history data with caching
  const fetchHistory = useCallback(async (type: string = 'all', page: number = 1, force: boolean = false) => {
    if (requestInProgress.current && !force) return
    
    const cacheKey = `${type}-${page}`
    const cached = cache.current.get(cacheKey)
    const now = Date.now()
    
    // 使用缓存数据（5分钟内有效）
    if (cached && !force && (now - cached.timestamp < 5 * 60 * 1000)) {
      setHistoryData(cached.data)
      setPagination(cached.pagination)
      setIsLoading(false)
      return
    }

    try {
      requestInProgress.current = true
      setIsLoading(true)
      
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10'
      })
      
      if (type !== 'all') {
        params.append('type', type)
      }

      const response = await fetch(`/api/history?${params}`)
      const data: HistoryResponse = await response.json()

      if (data.success) {
        // 缓存数据
        cache.current.set(cacheKey, {
          data: data.data.history,
          pagination: data.data.pagination,
          timestamp: now
        })
        
        setHistoryData(data.data.history)
        setPagination(data.data.pagination)
      }
    } catch (error) {
      console.error('Failed to fetch history:', error)
    } finally {
      setIsLoading(false)
      requestInProgress.current = false
    }
  }, [])

  useEffect(() => {
    if (user && !isInitialized.current) {
      isInitialized.current = true
      fetchHistory(activeTab, currentPage)
    }
  }, [user, fetchHistory])

  // 监听页面可见性变化，避免在切换tab时重复请求
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && user && isInitialized.current) {
        // 只有在页面重新可见且超过1分钟没有更新时才刷新
        const lastUpdate = Math.max(...Array.from(cache.current.values()).map(c => c.timestamp))
        if (Date.now() - lastUpdate > 60 * 1000) {
          fetchHistory(activeTab, currentPage, true)
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [user, activeTab, currentPage, fetchHistory])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setCurrentPage(1)
    if (user) {
      fetchHistory(value, 1)
    }
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (user) {
      fetchHistory(activeTab, page)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <FaSpinner className="animate-spin h-8 w-8 text-orange-500" />
      </div>
    )
  }

  if (!user) {
    return null
  }

  // 过滤数据
  const filteredData = historyData.filter(item => {
    if (activeTab === 'all') return true
    if (activeTab === 'text') return item.type === 'text-to-video'
    if (activeTab === 'image') return item.type === 'image-to-video'
    return true
  })

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex h-[calc(100vh-8rem)] gap-6">
        {/* 左侧边栏 - 筛选和统计 */}
        <div className="w-72 flex-shrink-0">
          <Card className="h-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <FaHistory className="h-5 w-5" />
                {t('history.title')}
              </CardTitle>
              <p className="text-sm text-gray-500">
                共 {pagination.total} 条记录
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 筛选选项 */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">筛选选项</h3>
                
                {/* 全部历史 */}
                <Button
                  variant={activeTab === 'all' ? 'default' : 'ghost'}
                  className="w-full justify-between h-auto py-3 px-4"
                  onClick={() => handleTabChange('all')}
                >
                  <div className="flex items-center gap-3">
                    <FaHistory className="h-4 w-4" />
                    <span>{t('history.filters.all')}</span>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {historyData.filter(item => item.type === 'text-to-video').length}
                  </Badge>
                </Button>

                {/* 文本转视频 */}
                <Button
                  variant={activeTab === 'text' ? 'default' : 'ghost'}
                  className="w-full justify-between h-auto py-3 px-4"
                  onClick={() => handleTabChange('text')}
                >
                  <div className="flex items-center gap-3">
                    <FaVideo className="h-4 w-4" />
                    <span>{t('history.filters.textToVideo')}</span>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {historyData.filter(item => item.type === 'text-to-video').length}
                  </Badge>
                </Button>

                {/* 图像转视频 */}
                <Button
                  variant={activeTab === 'image' ? 'default' : 'ghost'}
                  className="w-full justify-between h-auto py-3 px-4"
                  onClick={() => handleTabChange('image')}
                >
                  <div className="flex items-center gap-3">
                    <FaImage className="h-4 w-4" />
                    <span>{t('history.filters.imageToVideo')}</span>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {historyData.filter(item => item.type === 'image-to-video').length}
                  </Badge>
                </Button>
              </div>

              {/* 快速操作 */}
              <div className="pt-4 border-t">
                <Button
                  onClick={() => router.push('/generate')}
                  className="w-full flex items-center gap-2"
                >
                  <FaPlus className="h-4 w-4" />
                  {t('history.quickActions.generateNew')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 右侧内容区域 */}
        <div className="flex-1 flex flex-col min-h-0">
          {/* 顶部操作栏 */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{t('history.currentView')}</span>
              <Badge variant="outline">
                {activeTab === 'all' && t('history.filters.all')}
                {activeTab === 'text' && t('history.filters.textToVideo')}
                {activeTab === 'image' && t('history.filters.imageToVideo')}
              </Badge>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => fetchHistory(activeTab, currentPage, true)}
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              {isLoading ? <FaSpinner className="animate-spin h-4 w-4" /> : <FaSync className="h-4 w-4" />}
              {t('history.refreshData')}
            </Button>
          </div>

          {/* 历史记录列表 */}
          <div className="flex-1 overflow-hidden">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <FaSpinner className="animate-spin h-8 w-8 text-orange-500" />
              </div>
            ) : filteredData.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <FaHistory className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {activeTab === 'all' && t('history.empty.title.all')}
                  {activeTab === 'text' && t('history.empty.title.textToVideo')}
                  {activeTab === 'image' && t('history.empty.title.imageToVideo')}
                </h3>
                <p className="text-gray-500 mb-6">
                  {activeTab === 'all' && t('history.empty.description.all')}
                  {activeTab === 'text' && t('history.empty.description.textToVideo')}
                  {activeTab === 'image' && t('history.empty.description.imageToVideo')}
                </p>
                <Button onClick={() => router.push('/generate')}>
                  {t('history.empty.action')}
                </Button>
              </div>
            ) : (
              <div className="space-y-3 overflow-y-auto h-full pr-2">
                {filteredData.map((item) => (
                  <HistoryItem
                    key={item.id}
                    {...item}
                  />
                ))}
              </div>
            )}
          </div>

          {/* 分页 */}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-between pt-6 border-t">
              <Button
                variant="outline"
                onClick={() => handlePageChange(pagination.page - 1)}
                disabled={pagination.page === 1}
              >
                {t('common.previous')}
              </Button>
              <span className="text-sm text-gray-500">
                第 {pagination.page} 页，共 {pagination.totalPages} 页
              </span>
              <Button
                variant="outline"
                onClick={() => handlePageChange(pagination.page + 1)}
                disabled={pagination.page === pagination.totalPages}
              >
                {t('common.next')}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 