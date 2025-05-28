'use client';

import { useTranslation } from '@/providers/language-provider';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Examples from '@/components/home/Examples';
import HowToUse from '@/components/home/HowToUse';
import FAQ from '@/components/home/FAQ';
import Showcase from '@/components/home/Showcase';
import CallToAction from '@/components/home/CallToAction';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <Examples />
      <Features />
      <Showcase />
      <HowToUse />
      <FAQ />
      <CallToAction />
    </>
  );
}