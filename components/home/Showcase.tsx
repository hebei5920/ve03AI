'use client';

import { useTranslation } from '@/providers/language-provider';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, X } from 'lucide-react';

export default function Showcase() {
  const { t } = useTranslation();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  // 添加ESC键关闭功能
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (activeVideo) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [activeVideo]);

  // 关闭模态框with动画
  const closeModal = () => {
    setIsClosing(true);
    // 等待动画完成后再移除模态框
    setTimeout(() => {
      setActiveVideo(null);
      setIsClosing(false);
    }, 200);
  };

  // 点击遮罩层关闭
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

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

  // 复制视频数组以实现无限滚动
  const duplicatedVideos = [...videos, ...videos, ...videos];

  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold text-orange-500 mb-8">
          {t('showcase.title')}
        </h2>

        <div className="overflow-hidden">
          <div className="flex animate-scroll-infinite gap-4">
            {duplicatedVideos.map((video, index) => (
              <div
                key={`${video.id}-${index}`}
                className="relative aspect-[9/16] w-32 sm:w-40 md:w-48 flex-shrink-0 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 cursor-pointer group"
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
        </div>

        {/* Video modal */}
        {activeVideo && (
          <div 
            className={`fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 transition-all duration-200 ${
              isClosing ? 'opacity-0' : 'opacity-100'
            }`}
            onClick={handleOverlayClick}
          >
            <div className={`bg-white dark:bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] relative transition-all duration-200 ${
              isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black/20 hover:bg-black/40 text-white hover:text-white transition-all duration-200 hover:scale-110" 
                onClick={closeModal}
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="aspect-video w-full bg-black">
                {/* Video player would go here */}
                <div className="flex items-center justify-center h-full text-white">
                  <div className="text-center">
                    <Play className="h-16 w-16 mx-auto mb-4 text-orange-500" />
                    <p className="text-lg">{t('showcase.videoPlaying').replace('{id}', activeVideo)}</p>
                    <p className="text-sm text-gray-400 mt-2">{t('showcase.pressEscToClose')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scroll-infinite {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 30s linear infinite;
        }
        
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
