'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/providers/auth-provider'
import { useTranslation } from '@/providers/language-provider'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { FaUser, FaSignOutAlt, FaCreditCard } from 'react-icons/fa'
import Link from 'next/link'

interface UserMenuProps {
  variant?: 'default' | 'compact'
}

export default function UserMenu({ variant = 'default' }: UserMenuProps) {
  const { user, logout } = useAuth()
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  if (!user) {
    return (
      <Link href="/login">
        <Button 
          variant={variant === 'compact' ? 'default' : 'outline'} 
          size="sm" 
          className={variant === 'compact' ? 'bg-orange-500 hover:bg-orange-600' : 'border-orange-300 dark:border-orange-800'}
        >
          {t('common.login') || 'Login'}
        </Button>
      </Link>
    )
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {variant === 'compact' ? (
          <Button 
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 px-3"
          >
            <div className="h-6 w-6 rounded-full overflow-hidden">
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                  <FaUser className="h-3 w-3 text-orange-500" />
                </div>
              )}
            </div>
            <span className="text-sm font-medium truncate max-w-[100px]">{user.name}</span>
          </Button>
        ) : (
          <Button variant="outline" size="icon" className="rounded-full overflow-hidden border-orange-300 dark:border-orange-800">
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="h-full w-full object-cover"
              />
            ) : (
              <FaUser className="h-4 w-4" />
            )}
          </Button>
        )}
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-4 py-4 border-b">
            <div className="h-12 w-12 rounded-full overflow-hidden border border-orange-300 dark:border-orange-800">
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                  <FaUser className="h-6 w-6 text-orange-500" />
                </div>
              )}
            </div>
            <div>
              <h3 className="font-medium text-lg">{user.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                  <FaCreditCard className="h-4 w-4 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">{t('user.plan') || 'Current Plan'}</p>
                  <p className="text-xs capitalize text-gray-500 dark:text-gray-400">{user.plan}</p>
                </div>
              </div>
              <Link href="/pricing" onClick={() => setOpen(false)}>
                <Button size="sm" variant="outline">
                  {user.plan === 'free' ? (t('user.upgrade') || 'Upgrade') : (t('user.manage') || 'Manage')}
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-orange-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">{t('user.credits') || 'Credits'}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{user.credits} {t('user.available') || 'available'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t">
            <Button 
              onClick={() => {
                logout()
                setOpen(false)
              }} 
              variant="outline" 
              className="w-full justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/20"
            >
              <FaSignOutAlt className="h-4 w-4" />
              {t('user.logout') || 'Sign Out'}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
