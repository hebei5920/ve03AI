'use client';

import { useTranslation } from '@/providers/language-provider';
import PricingPlans from '@/components/pricing/PricingPlans';
import PricingComparison from '@/components/pricing/PricingComparison';
import PricingFAQ from '@/components/pricing/PricingFAQ';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PricingPage() {
  const { t } = useTranslation();

  return (
    <>
      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-amber-50/50 to-white dark:from-orange-950/20 dark:to-background">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-orange-500 sm:text-5xl md:text-6xl mb-6">
                {t('pricing.hero.title')}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
                {t('pricing.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Pricing plans section */}
        <PricingPlans />

        {/* Feature comparison table */}
        <PricingComparison />

        {/* FAQ section */}
        <PricingFAQ />

        {/* CTA section */}
        <section className="py-12 bg-orange-500 text-white">
          <div className="container px-4 mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                {t('pricing.cta.title')}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {t('pricing.cta.description')}
              </p>
              <Link href="/login">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-500 hover:bg-gray-100 font-medium px-8 rounded-full"
                >
                  {t('pricing.cta.button')}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
