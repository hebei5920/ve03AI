import { createClient } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'
import { AuthService } from '@/service/auth-service'

// Force dynamic rendering since we use cookies for authentication
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') || '/'

  if (code) {
    const supabase = createClient()

    try {
      // 交换授权码获取会话
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)

      if (error) {
        console.error('Error exchanging code for session:', error)
        return NextResponse.redirect(`${origin}/auth/error?error=${encodeURIComponent(error.message)}`)
      }


      if (data.user) {
        try {

          // 使用我们的认证处理器处理用户
          await AuthService.handleOAuthCallback(data.user)

          return NextResponse.redirect(`${origin}${next}`)


        } catch (userError) {
          console.error('Error processing user in OAuth callback:', userError)
          // 用户处理失败，但 Supabase 认证成功，重定向到错误页面
          return NextResponse.redirect(`${origin}/auth/error?error=${encodeURIComponent('User data processing failed')}`)
        }
      } else {
        console.error('No user data received from Supabase')
        return NextResponse.redirect(`${origin}/auth/error?error=${encodeURIComponent('No user data received')}`)
      }

    } catch (error) {
      console.error('Unexpected error in OAuth callback:', error)
      return NextResponse.redirect(`${origin}/auth/error?error=${encodeURIComponent('Authentication error occurred')}`)
    }
  }

  // 没有授权码，重定向到错误页面
  return NextResponse.redirect(`${origin}/auth/error?error=${encodeURIComponent('Missing authorization code')}`)
}


