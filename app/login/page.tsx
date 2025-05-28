'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { useTranslation } from '@/providers/language-provider'
import { useAuth } from '@/hooks/useAuth'

export default function LoginPage() {
  const [loginLoading, setLoginLoading] = useState<string | null>(null)
  const router = useRouter()
  const { t } = useTranslation()
  const { user, loading, signInWithProvider } = useAuth()

  // Handle Google login
  const handleGoogleLogin = async () => {
    setLoginLoading('google')
    try {
      await signInWithProvider('google')
    } catch (error) {
      console.error('Login failed:', error)
      setLoginLoading(null)
    }
  }

  // Handle GitHub login
  const handleGithubLogin = async () => {
    setLoginLoading('github')
    try {
      await signInWithProvider('github')
    } catch (error) {
      console.error('Login failed:', error)
      setLoginLoading(null)
    }
  }

  // Show loading spinner while checking auth status
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-orange-500 border-t-transparent"></div>
      </div>
    )
  }

  // If user is already logged in, redirect to home
  if (user) {
    router.push('/')
    return null
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
        {/* App logo and title area - reduced spacing */}
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="mb-2 relative h-12 w-12">
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
              <span className="text-xl font-bold text-orange-500">VE</span>
            </div>
          </div>

          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t('auth.signIn.title') || 'Sign in to your account'}
          </h2>
        </div>

        {/* Login buttons area - optimized spacing */}
        <div className="space-y-3">
          {/* Social login buttons */}
          <Button
            onClick={handleGoogleLogin}
            disabled={loginLoading !== null}
            variant="outline"
            className="flex w-full items-center justify-center gap-3 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            {loginLoading === 'google' ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-500 border-t-transparent" />
            ) : (
              <FcGoogle className="h-5 w-5" />
            )}
            {loginLoading === 'google'
              ? t('auth.signIn.loggingIn') || 'Logging in...'
              : t('auth.signIn.continueWithGoogle') || 'Continue with Google'
            }
          </Button>

          <Button
            onClick={handleGithubLogin}
            disabled={loginLoading !== null}
            variant="outline"
            className="flex w-full items-center justify-center gap-3 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            {loginLoading === 'github' ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-500 border-t-transparent" />
            ) : (
              <FaGithub className="h-5 w-5" />
            )}
            {loginLoading === 'github'
              ? t('auth.signIn.loggingIn') || 'Logging in...'
              : t('auth.signIn.continueWithGithub') || 'Continue with GitHub'
            }
          </Button>

          {/* Divider */}
          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                {t('auth.signIn.or') || 'or'}
              </span>
            </div>
          </div>

          {/* Back to home button */}
          <Link href="/">
            <Button
              variant="outline"
              className="w-full text-gray-700 dark:text-gray-200"
            >
              {t('common.backToHome') || 'Back to home'}
            </Button>
          </Link>

          {/* Terms and conditions */}
          <div className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
            <p>
              {t('auth.signIn.termsMessage') || 'By signing in, you agree to our'}{' '}
              <Link href="/terms" className="text-orange-600 hover:underline dark:text-orange-400">
                {t('common.terms') || 'Terms'}
              </Link>{' '}
              {t('common.and') || '&'}{' '}
              <Link href="/privacy" className="text-orange-600 hover:underline dark:text-orange-400">
                {t('common.privacy') || 'Privacy'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}