'use client';

import Link from 'next/link';
import { useTranslation } from '@/providers/language-provider';
import { SupportedLanguage } from '@/i18n';
import { languages } from '@/i18n/index'

export default function Footer() {
  const { t, setLanguage, language } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container py-12 px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.platform')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link href="/generate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.generate')}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.pricing')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.termsOfService')}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('footer.refundPolicy')}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.contactUs')}</h3>
            <a href="mailto:support@veo3.ai" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              support@veo3.ai
            </a>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">{t('footer.languages')}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as SupportedLanguage)}
                    className={`text-xs transition-colors px-2 py-1 rounded
                      ${language === lang.code
                        ? 'bg-orange-500 text-white'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'}
                    `}
                    type="button"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}