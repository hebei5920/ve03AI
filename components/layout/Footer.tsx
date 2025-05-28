'use client';

import Link from 'next/link';
import { useTranslation } from '@/providers/language-provider';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const languages = [
    { code: 'ar', name: '🇪🇬العربية' },
    { code: 'de', name: '🇩🇪Deutsch' },
    { code: 'en', name: '🇬🇧English' },
    { code: 'es', name: '🇪🇸Español' },
    { code: 'zh', name: '🇨🇳简体中文' },
    { code: 'fr', name: '🇫🇷Français' },
    { code: 'it', name: '🇮🇹Italiano' },
    { code: 'ja', name: '🇯🇵日本語' },
    { code: 'ko', name: '🇰🇷한국어' },
    { code: 'nl', name: '🇳🇱Nederlands' },
    { code: 'pt', name: '🇧🇷Português' },
    { code: 'ru', name: '🇷🇺Русский' },
    { code: 'tr', name: '🇹🇷Türkçe' },
  ];

  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container py-12 px-4 md:px-6">
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
                <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
                  <Link 
                    key={lang.code}
                    href={`/${lang.code}`} 
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {lang.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Veo 3 주식회사 블루콜(BLUE CALL). {t('footer.allRightsReserved')}</p>
          <p className="mt-2 text-xs">
            Veo3.ai {t('footer.independent')}
          </p>
        </div>
      </div>
    </footer>
  );
}
