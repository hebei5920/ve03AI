'use client';

import { useTranslation } from '@/providers/language-provider';
import { Check, X } from 'lucide-react';

export default function PricingComparison() {
  const { t } = useTranslation();

  const features = [
    {
      id: 'videoLength',
      name: t('pricing.comparison.features.videoLength'),
      free: '5 seconds',
      pro: '15 seconds',
      enterprise: '30+ seconds',
    },
    {
      id: 'monthlyCredits',
      name: t('pricing.comparison.features.monthlyCredits'),
      free: '20',
      pro: '200',
      enterprise: 'Unlimited',
    },
    {
      id: 'resolution',
      name: t('pricing.comparison.features.resolution'),
      free: '720p',
      pro: '1080p',
      enterprise: '4K',
    },
    {
      id: 'audioTracks',
      name: t('pricing.comparison.features.audioTracks'),
      free: '1',
      pro: '3',
      enterprise: 'Unlimited',
    },
    {
      id: 'customModels',
      name: t('pricing.comparison.features.customModels'),
      free: false,
      pro: false,
      enterprise: true,
    },
    {
      id: 'priorityRendering',
      name: t('pricing.comparison.features.priorityRendering'),
      free: false,
      pro: true,
      enterprise: true,
    },
    {
      id: 'commercialUse',
      name: t('pricing.comparison.features.commercialUse'),
      free: false,
      pro: true,
      enterprise: true,
    },
    {
      id: 'prioritySupport',
      name: t('pricing.comparison.features.prioritySupport'),
      free: false,
      pro: false,
      enterprise: true,
    },
    {
      id: 'api',
      name: t('pricing.comparison.features.api'),
      free: false,
      pro: false,
      enterprise: true,
    },
  ];

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-orange-500">
            {t('pricing.comparison.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('pricing.comparison.description')}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left">{t('pricing.comparison.feature')}</th>
                <th className="p-4 text-center">{t('pricing.comparison.free')}</th>
                <th className="p-4 text-center">{t('pricing.comparison.pro')}</th>
                <th className="p-4 text-center">{t('pricing.comparison.enterprise')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {features.map((feature) => (
                <tr key={feature.id} className="border-b border-gray-100 dark:border-gray-800">
                  <td className="p-4 font-medium">{feature.name}</td>
                  <td className="p-4 text-center">
                    {typeof feature.free === 'boolean' ? (
                      feature.free ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 dark:text-gray-600 mx-auto" />
                      )
                    ) : (
                      <span>{feature.free}</span>
                    )}
                  </td>
                  <td className="p-4 text-center bg-gray-50 dark:bg-gray-800/50">
                    {typeof feature.pro === 'boolean' ? (
                      feature.pro ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 dark:text-gray-600 mx-auto" />
                      )
                    ) : (
                      <span>{feature.pro}</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 dark:text-gray-600 mx-auto" />
                      )
                    ) : (
                      <span>{feature.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
