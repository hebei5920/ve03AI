'use client';

import { useTranslation } from '@/providers/language-provider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function PricingFAQ() {
  const { t } = useTranslation();
  
  const faqs = [
    {
      id: 'credits',
      question: t('pricing.faq.questions.credits.question'),
      answer: t('pricing.faq.questions.credits.answer'),
    },
    {
      id: 'payment',
      question: t('pricing.faq.questions.payment.question'),
      answer: t('pricing.faq.questions.payment.answer'),
    },
    {
      id: 'cancel',
      question: t('pricing.faq.questions.cancel.question'),
      answer: t('pricing.faq.questions.cancel.answer'),
    },
    {
      id: 'refunds',
      question: t('pricing.faq.questions.refunds.question'),
      answer: t('pricing.faq.questions.refunds.answer'),
    },
    {
      id: 'enterprise',
      question: t('pricing.faq.questions.enterprise.question'),
      answer: t('pricing.faq.questions.enterprise.answer'),
    },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-orange-500">
            {t('pricing.faq.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('pricing.faq.description')}
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800/50 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
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
