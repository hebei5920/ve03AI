'use client';

import { useTranslation } from '@/providers/language-provider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Examples />
        <Features />
        <Showcase />
        <HowToUse />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}