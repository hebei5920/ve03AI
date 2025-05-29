import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { createServerMediaService } from '@/service/media-service'
import { createPixVerseService } from '@/service/pixverse-service'
import { PrismaClient } from '@prisma/client'

// Force dynamic rendering since we use cookies for authentication
export const dynamic = 'force-dynamic'

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

    const formData = await request.formData()
    const file = formData.get('file') as File
    const prompt = formData.get('prompt') as string
    const model = formData.get('model') as string
    const quality = formData.get('quality') as string
    const duration = parseInt(formData.get('duration') as string)
    const motionMode = formData.get('motionMode') as string
    const negativePrompt = formData.get('negativePrompt') as string
    const seed = formData.get('seed') ? parseInt(formData.get('seed') as string) : undefined
    const style = formData.get('style') as string
    const watermark = formData.get('watermark') === 'true'

    // 验证必需参数
    if (!file || !prompt || !model || !quality || !duration) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      )
    }

    // 验证文件类型
    const validTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPG, PNG, and WEBP are allowed' },
        { status: 400 }
      )
    }

    // 验证文件大小 (20MB - PixVerse限制)
    if (file.size > 20 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size must be less than 20MB' },
        { status: 400 }
      )
    }

    console.log('Starting image to video generation process...')

    // 步骤1: 上传图像到Storage
    const mediaService = createServerMediaService()
    const storageResult = await mediaService.uploadImage({
      file,
      userId: user.id,
      compress: true
    })

    console.log('Image uploaded to storage:', storageResult.url)

    // 步骤2: 上传图像到PixVerse
    const pixverseService = createPixVerseService()
    const pixverseUploadResult = await pixverseService.uploadImage(file)

    if (pixverseUploadResult.ErrCode !== 0) {
      throw new Error(`upload failed: ${pixverseUploadResult.ErrMsg}`)
    }

    console.log('Image uploaded, img_id:', pixverseUploadResult.Resp.img_id)

    // 步骤3: 生成视频
    const videoGenerationParams = {
      img_id: pixverseUploadResult.Resp.img_id,
      prompt,
      duration,
      model,
      quality,
      motion_mode: motionMode,
      negative_prompt: negativePrompt || undefined,
      seed,
      style: style || undefined,
      water_mark: watermark
    }

    const videoGenerationResult = await pixverseService.generateImageToVideo(videoGenerationParams)

    if (videoGenerationResult.ErrCode !== 0) {
      throw new Error(`Video generation failed: ${videoGenerationResult.ErrMsg}`)
    }

    console.log('Video generation started, video_id:', videoGenerationResult.Resp.video_id)

    // 创建ITV记录
    const itv = await prisma.iTV.create({
      data: {
        userId: user.id,
        imageId: BigInt(pixverseUploadResult.Resp.img_id),
        imageURL: storageResult.url,
        pvid: BigInt(videoGenerationResult.Resp.video_id),
        prompt,
        negativePrompt: negativePrompt || null,
        model,
        quality,
        duration,
        motionMode,
        seed,
        style: style || null,
        watermark,
        status: 5 // 生成中
      }
    })

    console.log('ITV record created, ITV id:', itv.id)

    return NextResponse.json({
      success: true,
      data: {
        itvId: itv.id,
        imageUrl: storageResult.url,
        status: 5 // 生成中
      }
    })

  } catch (error) {
    console.error('Error in image to video generation:', error)
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