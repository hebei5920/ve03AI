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

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const recordId = params.id

    // 尝试从文本转视频表中查找
    const textToVideoRecord = await prisma.tTV.findFirst({
      where: { 
        id: recordId,
        userId: user.id 
      },
      include: {
        video: true
      }
    })

    if (textToVideoRecord) {
      const record = {
        ...convertBigIntToString(textToVideoRecord),
        type: 'text-to-video',
        imageUrl: null,
        status: convertStatusToString(textToVideoRecord.status),
        modelVersion: textToVideoRecord.model
      }
      
      return NextResponse.json({
        success: true,
        data: record
      })
    }

    // 尝试从图像转视频表中查找
    const imageToVideoRecord = await prisma.iTV.findFirst({
      where: { 
        id: recordId,
        userId: user.id 
      },
      include: {
        video: true
      }
    })

    if (imageToVideoRecord) {
      const record = {
        ...convertBigIntToString(imageToVideoRecord),
        type: 'image-to-video',
        imageUrl: imageToVideoRecord.imageURL, // 映射正确的字段名
        status: convertStatusToString(imageToVideoRecord.status),
        modelVersion: imageToVideoRecord.model
      }
      
      return NextResponse.json({
        success: true,
        data: record
      })
    }

    // 如果找不到记录
    return NextResponse.json(
      { error: 'Record not found' },
      { status: 404 }
    )

  } catch (error) {
    console.error('Error fetching history detail:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
} 