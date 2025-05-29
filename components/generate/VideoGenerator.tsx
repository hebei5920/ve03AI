'use client'

import { useState } from 'react'
import { useTranslation } from '@/providers/language-provider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ImageToVideo from './ImageToVideo'
import TextToVideo from './TextToVideo'
import VideoPreview from './VideoPreview'
import { GenerationFormData, ImageToVideoFormData } from './types'
import { useVideoPolling } from './hooks/useVideoPolling'

export default function VideoGenerator() {
  const { t } = useTranslation()
  const [itvId, setItvId] = useState<string | null>(null)
  
  // 使用轮询Hook
  const videoPolling = useVideoPolling({
    onComplete: (videoUrl) => {
      console.log('Video generation completed:', videoUrl)
    },
    onError: (error) => {
      console.error('Video generation error:', error)
    }
  })

  // Generate image to video
  const generateImageToVideo = async (formData: ImageToVideoFormData) => {
    // Prevent multiple requests
    if (videoPolling.status === 'generating') return
    
    // Reset previous state and immediately set to generating
    videoPolling.resetState()
    videoPolling.setGenerating() // 立即设置为generating状态
    setItvId(null)
    
    try {
      if (!formData.image) {
        throw new Error('No image selected')
      }

      // Create FormData for API request
      const apiFormData = new FormData()
      apiFormData.append('file', formData.image)
      apiFormData.append('prompt', formData.prompt)
      apiFormData.append('model', formData.modelVersion)
      apiFormData.append('quality', formData.quality)
      apiFormData.append('duration', formData.duration.toString())
      apiFormData.append('motionMode', formData.motionMode || 'normal')
      
      if (formData.negativePrompt) {
        apiFormData.append('negativePrompt', formData.negativePrompt)
      }
      if (formData.seed) {
        apiFormData.append('seed', formData.seed.toString())
      }
      if (formData.style) {
        apiFormData.append('style', formData.style)
      }
      apiFormData.append('watermark', formData.watermark?.toString() || 'false')

      // Call the API (this will return quickly with generating status)
      const response = await fetch('/api/generate/image-to-video', {
        method: 'POST',
        body: apiFormData
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to generate video')
      }

      // Video generation started - begin polling with real ID
      setItvId(result.data.itvId)
      videoPolling.startPolling(result.data.itvId)

    } catch (err) {
      // 使用Hook的错误处理
      videoPolling.setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    }
  }

  // Generate text to video
  const generateTextToVideo = async (formData: any) => {
    // Prevent multiple requests
    if (videoPolling.status === 'generating') return
    
    // Reset state and immediately set to generating
    videoPolling.resetState()
    videoPolling.setGenerating() // 立即设置为generating状态
    setItvId(null)
    
    try {
      // Call the text-to-video API
      const response = await fetch('/api/generate/text-to-video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to generate video')
      }

      // Video generation started - begin polling
      setItvId(result.data.itvId)
      videoPolling.startPolling(result.data.itvId)

    } catch (err) {
      // 使用Hook的错误处理
      videoPolling.setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    }
  }

  // Main generate function
  const generateVideo = async (formData: GenerationFormData) => {
    if (formData.inputType === 'image') {
      await generateImageToVideo(formData as ImageToVideoFormData)
    } else {
      await generateTextToVideo(formData)
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
                    isGenerating={videoPolling.status === 'generating'}
                  />
                </TabsContent>
                
                <TabsContent value="text" className="mt-0">
                  <TextToVideo 
                    onSubmit={(data) => generateVideo({...data, inputType: 'text'})} 
                    isGenerating={videoPolling.status === 'generating'}
                  />
                </TabsContent>
              </div>
              
              {/* Preview section */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {t('generator.preview.title') || 'Preview'}
                </h3>
                
                <VideoPreview 
                  videoId={videoPolling.videoId}
                  status={videoPolling.status}
                  progress={videoPolling.progress}
                  error={videoPolling.error}
                />
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
