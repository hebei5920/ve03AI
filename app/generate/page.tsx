'use client'

import { useTranslation } from '@/providers/language-provider'
import VideoGenerator from '@/components/generate/VideoGenerator'

export default function GeneratePage() {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {t('generator.title') || 'AI Video Generator'}
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300">
          {t('generator.subtitle') || 'Transform your images and text into stunning videos with AI'}
        </p>
      </div>
      
      <VideoGenerator />
    </div>
  )
}
