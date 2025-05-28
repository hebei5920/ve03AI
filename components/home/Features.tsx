'use client';

import { useTranslation } from '@/providers/language-provider';
import { 
  Volume2, 
  Smile, 
  Activity, 
  MessageSquare, 
  Combine, 
  Building 
} from 'lucide-react';

const featureIcons = {
  audio: Volume2,
  lipSync: Smile,
  physics: Activity,
  prompts: MessageSquare,
  flow: Combine,
  vertex: Building
};

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      id: 'audio',
      title: t('features.audio.title'),
      description: t('features.audio.description'),
    },
    {
      id: 'lipSync',
      title: t('features.lipSync.title'),
      description: t('features.lipSync.description'),
    },
    {
      id: 'physics',
      title: t('features.physics.title'),
      description: t('features.physics.description'),
    },
    {
      id: 'prompts',
      title: t('features.prompts.title'),
      description: t('features.prompts.description'),
    },
    {
      id: 'flow',
      title: t('features.flow.title'),
      description: t('features.flow.description'),
    },
    {
      id: 'vertex',
      title: t('features.vertex.title'),
      description: t('features.vertex.description'),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50/30 dark:from-background dark:to-orange-950/10">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-orange-500">
            {t('features.mainTitle')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('features.mainDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = featureIcons[feature.id as keyof typeof featureIcons];
            
            return (
              <div 
                key={feature.id}
                className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-500 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground flex-grow">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
