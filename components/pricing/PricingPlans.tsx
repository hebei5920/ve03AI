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
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-orange-500">
            {t('pricing.title')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('pricing.description')}
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mx-auto mb-10 flex items-center justify-center gap-4">
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-all ${
                plan.popular ? 'border-orange-200 dark:border-orange-800 shadow-orange-100 dark:shadow-orange-900/20' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 right-6 bg-orange-500 hover:bg-orange-600">
                  {t('pricing.popular')}
                </Badge>
              )}
              <div className="mb-4">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">
                    ${billingInterval === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    {billingInterval === 'monthly' ? t('pricing.perMonth') : t('pricing.perYear')}
                  </span>
                </div>
              </div>
              <ul className="mb-6 space-y-3 text-sm">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.limitations && plan.limitations.map((limitation, index) => (
                  <li key={`limit-${index}`} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-muted-foreground" />
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link href="/auth/register">
                  <Button 
                    className={`w-full ${plan.buttonVariant === 'default' ? 'bg-orange-500 hover:bg-orange-600' : ''}`}
                    variant={plan.buttonVariant}
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}