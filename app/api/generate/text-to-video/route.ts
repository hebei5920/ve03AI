import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { createPixVerseService } from '@/service/pixverse-service'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    // 获取用户信息
    const supabase = createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // 确保用户记录存在
    await prisma.user.upsert({
      where: { supabaseId: user.id },
      update: {
        email: user.email || '',
        lastLoginAt: new Date(),
      },
      create: {
        supabaseId: user.id,
        email: user.email || '',
        avatarUrl: user.user_metadata?.avatar_url,
        username: user.user_metadata?.full_name || user.user_metadata?.name,
        provider: user.app_metadata?.provider,
        emailVerified: user.email_confirmed_at ? true : false,
        lastLoginAt: new Date(),
      }
    })

    const body = await request.json()
    const { 
      prompt, 
      model, 
      quality, 
      duration, 
      motionMode, 
      negativePrompt, 
      seed, 
      style, 
      watermark,
      aspectRatio 
    } = body

    // 验证必需参数
    if (!prompt || !model || !quality || !duration) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      )
    }

    console.log('Starting text to video generation process...')

    // 调用PixVerse文本转视频API
    const pixverseService = createPixVerseService()
    const videoGenerationParams = {
      prompt,
      duration: parseInt(duration),
      model,
      quality,
      motion_mode: motionMode,
      negative_prompt: negativePrompt || undefined,
      seed: seed ? parseInt(seed) : undefined,
      style: style || undefined,
      water_mark: watermark === 'true',
      aspect_ratio: aspectRatio || '16:9'
    }

    const videoGenerationResult = await pixverseService.generateTextToVideo(videoGenerationParams)

    if (videoGenerationResult.ErrCode !== 0) {
      throw new Error(`Video generation failed: ${videoGenerationResult.ErrMsg}`)
    }

    console.log('Video generation started, video_id:', videoGenerationResult.Resp.video_id)

    // 创建TTV(Text To Video)记录
    const ttv = await prisma.tTV.create({
      data: {
        userId: user.id,
        pvid: BigInt(videoGenerationResult.Resp.video_id),
        prompt,
        negativePrompt: negativePrompt || null,
        model,
        quality,
        duration: parseInt(duration),
        motionMode,
        aspectRatio: aspectRatio || '16:9',
        seed: seed ? parseInt(seed) : null,
        style: style || null,
        watermark: watermark === 'true',
        status: 5 // 生成中
      }
    })

    console.log('TTV record created, TTV id:', ttv.id)

    return NextResponse.json({
      success: true,
      data: {
        itvId: ttv.id, // 使用相同的字段名以复用轮询逻辑
        videoId: null, // 视频还未生成
        status: 5 // 生成中
      }
    })

  } catch (error) {
    console.error('Error in text to video generation:', error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Internal server error'
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
} 