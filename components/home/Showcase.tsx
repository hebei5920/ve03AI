'use client';

import { useTranslation } from '@/providers/language-provider';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export default function Showcase() {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Sample showcase videos
  const videos = [
    { id: 'video1', thumbnail: '/images/showcase/showcase-1.jpg', alt: 'Futuristic character' },
    { id: 'video2', thumbnail: '/images/showcase/showcase-2.jpg', alt: 'Penguin character' },
    { id: 'video3', thumbnail: '/images/showcase/showcase-3.jpg', alt: 'Business character' },
    { id: 'video4', thumbnail: '/images/showcase/showcase-4.jpg', alt: 'Robot character' },
    { id: 'video5', thumbnail: '/images/showcase/showcase-5.jpg', alt: 'Explorer character' },
    { id: 'video6', thumbnail: '/images/showcase/showcase-6.jpg', alt: 'Fantasy character' },
    { id: 'video7', thumbnail: '/images/showcase/showcase-7.jpg', alt: 'Cityscape' },
  ];

  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold text-orange-500 mb-8">
          {t('showcase.title')}
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative aspect-[9/16] rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 cursor-pointer group"
              onClick={() => setActiveVideo(video.id)}
            >
              {/* This would be an actual image in production */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button 
                  variant="default" 
                  size="icon" 
                  className="h-10 w-10 rounded-full bg-orange-500 hover:bg-orange-600"
                >
                  <Play className="h-5 w-5 text-white" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Video modal would be implemented here in a real application */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden max-w-3xl w-full max-h-[80vh] relative">
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute top-2 right-2 z-10" 
                onClick={() => setActiveVideo(null)}
              >
                {t('showcase.close')}
              </Button>
              <div className="aspect-video w-full bg-black">
                {/* Video player would go here */}
                <div className="flex items-center justify-center h-full text-white">
                  {t('showcase.videoPlaying', { id: activeVideo })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
