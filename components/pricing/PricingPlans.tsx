'use client';

import { useState } from 'react';
import { useTranslation } from '@/providers/language-provider';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '../../components/ui/switch';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function PricingPlans() {
  const { t } = useTranslation();
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'annual'>('monthly');

  const toggleBilling = () => {
    setBillingInterval(billingInterval === 'monthly' ? 'annual' : 'monthly');
  };

  // Calculate savings percentage for annual billing
  const annualSavings = 20; // 20% savings for annual plans

  // Pricing plans data
  const plans = [
    {
      name: t('pricing.plans.free.name'),
      description: t('pricing.plans.free.description'),
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        t('pricing.plans.free.features.feature1'),
        t('pricing.plans.free.features.feature2'),
        t('pricing.plans.free.features.feature3'),
      ],
      limitations: [
        t('pricing.plans.free.limitations.limitation1'),
      ],
      buttonText: t('pricing.plans.free.buttonText'),
      buttonVariant: 'outline' as const,
    },
    {
      name: t('pricing.plans.pro.name'),
      description: t('pricing.plans.pro.description'),
      monthlyPrice: 29,
      annualPrice: Math.round(29 * 12 * (1 - annualSavings / 100)),
      features: [
        t('pricing.plans.pro.features.feature1'),
        t('pricing.plans.pro.features.feature2'),
        t('pricing.plans.pro.features.feature3'),
        t('pricing.plans.pro.features.feature4'),
        t('pricing.plans.pro.features.feature5'),
      ],
      buttonText: t('pricing.plans.pro.buttonText'),
      buttonVariant: 'default' as const,
      popular: true,
    },
    {
      name: t('pricing.plans.enterprise.name'),
      description: t('pricing.plans.enterprise.description'),
      monthlyPrice: 99,
      annualPrice: Math.round(99 * 12 * (1 - annualSavings / 100)),
      features: [
        t('pricing.plans.enterprise.features.feature1'),
        t('pricing.plans.enterprise.features.feature2'),
        t('pricing.plans.enterprise.features.feature3'),
        t('pricing.plans.enterprise.features.feature4'),
        t('pricing.plans.enterprise.features.feature5'),
        t('pricing.plans.enterprise.features.feature6'),
      ],
      buttonText: t('pricing.plans.enterprise.buttonText'),
      buttonVariant: 'default' as const,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-orange-500 mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.description')}
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mx-auto mb-12 flex items-center justify-center gap-4">
          <span className={`text-sm ${billingInterval === 'monthly' ? 'font-medium' : 'text-muted-foreground'}`}>
            {t('pricing.monthly')}
          </span>
          <Switch
            checked={billingInterval === 'annual'}
            onCheckedChange={toggleBilling}
            className="data-[state=checked]:bg-orange-500"
          />
          <span className="flex items-center gap-1.5">
            <span className={`text-sm ${billingInterval === 'annual' ? 'font-medium' : 'text-muted-foreground'}`}>
              {t('pricing.annual')}
            </span>
            <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-100 dark:bg-orange-950/20 dark:text-orange-400 dark:border-orange-900/50">
              {t('pricing.save')} {annualSavings}%
            </Badge>
          </span>
        </div>

        {/* Pricing cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-3 justify-items-center">
            {plans.map((plan) => (
              <div 
                key={plan.name} 
                className={`relative flex flex-col rounded-2xl border bg-white dark:bg-gray-800 p-8 shadow-lg transition-all hover:shadow-xl w-full max-w-sm ${
                  plan.popular 
                    ? 'border-orange-200 dark:border-orange-800 shadow-orange-100 dark:shadow-orange-900/20 scale-105' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600 px-4 py-1">
                    {t('pricing.popular')}
                  </Badge>
                )}
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mb-8 text-center">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold">
                      ${billingInterval === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="ml-2 text-lg text-muted-foreground">
                      {billingInterval === 'monthly' ? t('pricing.perMonth') : t('pricing.perYear')}
                    </span>
                  </div>
                </div>
                <ul className="mb-8 space-y-4 text-sm flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.limitations && plan.limitations.map((limitation, index) => (
                    <li key={`limit-${index}`} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link href="/login">
                    <Button 
                      className={`w-full py-3 text-base font-medium rounded-xl ${
                        plan.buttonVariant === 'default' 
                          ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                          : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                      }`}
                      variant={plan.buttonVariant}
                      size="lg"
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}