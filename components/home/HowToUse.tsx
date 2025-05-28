'use client';

import { useTranslation } from '@/providers/language-provider';
import { Button } from '@/components/ui/button';
import { 
  UserPlus, 
  MessageSquare, 
  Music, 
  Video
} from 'lucide-react';
import Link from 'next/link';

export default function HowToUse() {
  const { t } = useTranslation();

  const steps = [
    {
      id: 1,
      icon: UserPlus,
      title: t('howToUse.steps.register.title'),
      description: t('howToUse.steps.register.description'),
    },
    {
      id: 2,
      icon: MessageSquare,
      title: t('howToUse.steps.prompt.title'),
      description: t('howToUse.steps.prompt.description'),
    },
    {
      id: 3,
      icon: Music,
      title: t('howToUse.steps.audio.title'),
      description: t('howToUse.steps.audio.description'),
    },
    {
      id: 4,
      icon: Video,
      title: t('howToUse.steps.generate.title'),
      description: t('howToUse.steps.generate.description'),
    },
  ];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-orange-500">
            {t('howToUse.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('howToUse.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            
            return (
              <div key={step.id} className="text-center">
                <div className="mb-4 flex items-center justify-center">
                  <div className="relative">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-500 mx-auto">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                      {step.id}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link href="/dashboard">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 rounded-full"
            >
              {t('howToUse.cta')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
