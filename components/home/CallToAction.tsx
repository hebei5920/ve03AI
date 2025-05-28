'use client';

import { useTranslation } from '@/providers/language-provider';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-orange-500 text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('cta.description')}
          </p>
          <Link href="/generate">
            <Button 
              size="lg" 
              className="bg-white text-orange-500 hover:bg-gray-100 font-medium px-8 rounded-full"
            >
              {t('cta.buttonText')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
