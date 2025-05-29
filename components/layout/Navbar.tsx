'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/providers/language-provider';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, Globe } from 'lucide-react';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import UserMenu from '@/components/layout/UserMenu';
import { SupportedLanguage } from '@/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { languages } from '@/i18n';
export default function Navbar() {
  const { t, setLanguage, language } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-orange-500">Veo 3</span>
          </Link>
          <nav className="hidden md:flex gap-6 ml-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-orange-500">
              {t('navbar.home')}
            </Link>
            <Link href="/generate" className="text-sm font-medium transition-colors hover:text-orange-500">
              {t('navbar.generate')}
            </Link>
            <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-orange-500">
              {t('navbar.pricing')}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Select language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as SupportedLanguage)}
                  className={`flex items-center gap-2 ${language === lang.code ? 'bg-accent' : ''
                    }`}
                >
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-4">
            <UserMenu variant="compact" />
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {t('navbar.home')}
                </Link>
                <Link
                  href="/generate"
                  className="px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {t('navbar.generate')}
                </Link>
                <Link
                  href="/pricing"
                  className="px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {t('navbar.pricing')}
                </Link>
                <div className="mt-4 px-4 flex justify-center">
                  <UserMenu variant="compact" />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
