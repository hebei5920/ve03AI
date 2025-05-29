import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { PrismaClient } from '@prisma/client'

// Force dynamic rendering since we use cookies for authentication
export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()

// Helper function to convert BigInt values to strings recursively
function convertBigIntToString(obj: any): any {
  if (obj === null || obj === undefined) {
    return obj
  }
  
  if (typeof obj === 'bigint') {
    return obj.toString()
  }
  
  // 特殊处理Date对象
  if (obj instanceof Date) {
    return obj
  }
  
  if (Array.isArray(obj)) {
    return obj.map(convertBigIntToString)
  }
  
  if (typeof obj === 'object') {
    const converted: any = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        converted[key] = convertBigIntToString(obj[key])
      }
    }
    return converted
  }
  
  return obj
}

// Helper function to convert status number to string
function convertStatusToString(status: number): string {
  switch (status) {
    case 1:
      return 'completed'
    case 5:
      return 'processing'
    case 7:
      return 'failed' // moderation failed
    case 8:
      return 'failed'
    default:
      return 'pending'
  }
}

export async function GET(request: NextRequest) {
  try {
    // 验证用户身份
    const supabase = createClient()
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // 获取URL参数
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') // 'text', 'image', or null for all
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = (page - 1) * limit

    const orderBy = { createdAt: 'desc' as const }

    // 获取文本转视频历史记录
    const textToVideoHistory = type === 'image' ? [] : await prisma.tTV.findMany({
      where: { userId: user.id },
      include: {
        video: true
      },
      orderBy,
      skip: type === 'text' ? offset : 0,
      take: type === 'text' ? limit : undefined
    })
    console.log("textToVideoHistory",textToVideoHistory);
    
    // 获取图像转视频历史记录
    const imageToVideoHistory = type === 'text' ? [] : await prisma.iTV.findMany({
      where: { userId: user.id },
      include: {
        video: true
      },
      orderBy,
      skip: type === 'image' ? offset : 0,
      take: type === 'image' ? limit : undefined
    })

    // 合并并排序所有记录（如果是获取全部历史）
    let allHistory: any[] = []
    
    if (type === null || type === 'all') {
      const textRecords = textToVideoHistory.map(record => ({
        ...convertBigIntToString(record),
        type: 'text-to-video',
        imageUrl: null,
        status: convertStatusToString(record.status),
        modelVersion: record.model
      }))
      
      const imageRecords = imageToVideoHistory.map(record => ({
        ...convertBigIntToString(record),
        type: 'image-to-video',
        imageUrl: record.imageURL, // 映射正确的字段名
        status: convertStatusToString(record.status),
        modelVersion: record.model
      }))
      
      allHistory = [...textRecords, ...imageRecords]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(offset, offset + limit)
    } else if (type === 'text') {
      allHistory = textToVideoHistory.map(record => ({
        ...convertBigIntToString(record),
        type: 'text-to-video',
        imageUrl: null,
        status: convertStatusToString(record.status),
        modelVersion: record.model
      }))
    } else if (type === 'image') {
      allHistory = imageToVideoHistory.map(record => ({
        ...convertBigIntToString(record),
        type: 'image-to-video',
        imageUrl: record.imageURL, // 映射正确的字段名
        status: convertStatusToString(record.status),
        modelVersion: record.model
      }))
    }

    // 获取总数
    const textCount = type === 'image' ? 0 : Number(await prisma.tTV.count({
      where: { userId: user.id }
    }))
    
    const imageCount = type === 'text' ? 0 : Number(await prisma.iTV.count({
      where: { userId: user.id }
    }))
    
    const totalCount = type === 'text' ? textCount : 
                      type === 'image' ? imageCount : 
                      textCount + imageCount

    console.log("Final allHistory:", allHistory);

    return NextResponse.json({
      success: true,
      data: {
        history: allHistory,
        pagination: {
          page,
          limit,
          total: totalCount,
          totalPages: Math.ceil(totalCount / limit)
        }
      }
    })

  } catch (error) {
    console.error('Error fetching history:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
} 