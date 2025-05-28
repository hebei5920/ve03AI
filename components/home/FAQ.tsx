'use client';

import { useState } from 'react';
import { useTranslation } from '@/providers/language-provider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const { t } = useTranslation();
  
  const faqs = [
    {
      id: 'what-is-veo3',
      question: t('faq.questions.whatIsVeo3.question'),
      answer: t('faq.questions.whatIsVeo3.answer'),
    },
    {
      id: 'longer-videos',
      question: t('faq.questions.longerVideos.question'),
      answer: t('faq.questions.longerVideos.answer'),
    },
    {
      id: 'commercial-use',
      question: t('faq.questions.commercialUse.question'),
      answer: t('faq.questions.commercialUse.answer'),
    },
    {
      id: 'audio-types',
      question: t('faq.questions.audioTypes.question'),
      answer: t('faq.questions.audioTypes.answer'),
    },
    {
      id: 'social-media',
      question: t('faq.questions.socialMedia.question'),
      answer: t('faq.questions.socialMedia.answer'),
    },
    {
      id: 'beginner-friendly',
      question: t('faq.questions.beginnerFriendly.question'),
      answer: t('faq.questions.beginnerFriendly.answer'),
    },
    {
      id: 'comparison',
      question: t('faq.questions.comparison.question'),
      answer: t('faq.questions.comparison.answer'),
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-t from-white to-amber-50/30 dark:from-background dark:to-orange-950/10">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-orange-500">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('faq.description')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="px-6 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
