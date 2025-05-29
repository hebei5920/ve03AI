'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { FaHistory, FaFileAlt, FaImage, FaSpinner } from 'react-icons/fa'
import HistoryItem from '@/components/history/HistoryItem'

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
    <div className="h-screen overflow-hidden">
      <div className="flex h-full">
        {/* 左侧边栏 - 筛选和统计 */}
        <div className="w-72 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="p-5 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              生成历史
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              共 {pagination.total} 条记录
            </p>
          </div>
          
          {/* 筛选选项 */}
          <div className="p-4 space-y-2">
            <button
              onClick={() => handleTabChange('all')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                activeTab === 'all'
                  ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <FaHistory className="h-4 w-4" />
              <span>全部历史</span>
              <span className="ml-auto text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                {pagination.total}
              </span>
            </button>
            
            <button
              onClick={() => handleTabChange('text')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                activeTab === 'text'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <FaFileAlt className="h-4 w-4" />
              <span>文本转视频</span>
              <span className="ml-auto text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                {historyData.filter(item => item.type === 'text-to-video').length}
              </span>
            </button>
            
            <button
              onClick={() => handleTabChange('image')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                activeTab === 'image'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <FaImage className="h-4 w-4" />
              <span>图像转视频</span>
              <span className="ml-auto text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                {historyData.filter(item => item.type === 'image-to-video').length}
              </span>
            </button>
          </div>

          {/* 快速操作 */}
          <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
            <Button
              onClick={() => router.push('/generate')}
              className="w-full"
              size="sm"
            >
              生成新视频
            </Button>
          </div>
        </div>

        {/* 右侧内容区域 */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* 顶部操作栏 */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  当前显示: 
                </span>
                <span className="text-sm font-medium">
                  {activeTab === 'all' && '全部历史'}
                  {activeTab === 'text' && '文本转视频'}
                  {activeTab === 'image' && '图像转视频'}
                </span>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => fetchHistory(activeTab, currentPage, true)}
                disabled={isLoading}
              >
                {isLoading ? <FaSpinner className="animate-spin h-4 w-4" /> : '刷新'}
              </Button>
            </div>
          </div>

          {/* 历史记录列表 */}
          <div className="flex-1 overflow-auto p-4">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <FaSpinner className="animate-spin h-8 w-8 text-orange-500" />
              </div>
            ) : filteredData.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <Card className="w-full max-w-md">
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    {activeTab === 'all' && <FaHistory className="h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" />}
                    {activeTab === 'text' && <FaFileAlt className="h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" />}
                    {activeTab === 'image' && <FaImage className="h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" />}
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      {activeTab === 'all' && '暂无历史记录'}
                      {activeTab === 'text' && '暂无文本转视频记录'}
                      {activeTab === 'image' && '暂无图像转视频记录'}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4 text-center">
                      {activeTab === 'all' && '开始生成您的第一个视频吧！'}
                      {activeTab === 'text' && '尝试使用文本生成您的第一个视频！'}
                      {activeTab === 'image' && '上传图像生成您的第一个视频！'}
                    </p>
                    <Button onClick={() => router.push('/generate')}>
                      开始生成
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="space-y-4">
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
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page <= 1}
                >
                  上一页
                </Button>
                
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  第 {pagination.page} 页，共 {pagination.totalPages} 页
                </span>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page >= pagination.totalPages}
                >
                  下一页
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 