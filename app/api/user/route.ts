import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { AuthService } from '@/service/auth-service'

// Force dynamic rendering since we use cookies for authentication
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    // 获取当前 Supabase 用户
    const supabase = createClient()
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' }, 
        { status: 401 }
      )
    }

    // 获取数据库中的用户信息
    const userInfo = await AuthService.getUserInfo(user.id)

    if (!userInfo) {
      return NextResponse.json(
        { error: 'User not found in database' }, 
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      user: userInfo,
      success: true 
    })

  } catch (error) {
    console.error('Error in user API route:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
} 