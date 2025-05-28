'use client';

import { useState } from 'react';
import { useTranslation } from '@/providers/language-provider';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const { t } = useTranslation();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-white dark:from-orange-950/20 dark:to-background"></div>
      
      {/* Hero content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-orange-500 sm:text-5xl md:text-6xl mb-6">
            {t('hero.title')}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/generate">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 rounded-full"
              >
                {t('hero.cta')}
              </Button>
            </Link>
          </div>
        </div>

        {/* Video preview area */}
        <div className="mt-16 relative mx-auto max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-900">
          {isVideoPlaying ? (
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Veo3 Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div 
              className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center cursor-pointer group"
              onClick={() => setIsVideoPlaying(true)}
            >
              {/* Play button */}
              <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center transition-transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              {/* Background image placeholder */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-800 to-gray-900">
                {/* We'd use an actual image here in production */}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
