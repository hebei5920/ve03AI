import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { createPixVerseService } from '@/service/pixverse-service'
import { createServerMediaService } from '@/service/media-service'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const itvId = params.id

    // 首先查找ITV记录
    let itv = await prisma.iTV.findFirst({
      where: {
        id: itvId,
        userId: user.id
      },
      include: {
        video: true
      }
    })

    // 如果没找到ITV，查找TTV记录
    let ttv = null
    if (!itv) {
      ttv = await prisma.tTV.findFirst({
        where: {
          id: itvId,
          userId: user.id
        },
        include: {
          video: true
        }
      })
    }

    // 如果都没找到，返回404
    if (!itv && !ttv) {
      return NextResponse.json(
        { error: 'Video generation record not found' },
        { status: 404 }
      )
    }

    // 使用找到的记录
    const record = itv || ttv!
    const recordType = itv ? 'ITV' : 'TTV'

    // 如果已经完成，直接返回结果
    if (record.status === 1) {
      return NextResponse.json({
        success: true,
        data: {
          id: record.id,
          status: record.status,
          video: record.video
        }
      })
    }

    // 如果失败，返回错误状态
    if (record.status === 7 || record.status === 8) {
      const errorMessages = {
        7: 'Content moderation failed - The generated video was rejected by content moderation system',
        8: 'Video generation failed - Please try again with different parameters'
      }
      
      return NextResponse.json({
        success: false,
        data: {
          id: record.id,
          status: record.status,
          error: errorMessages[record.status as 7 | 8]
        }
      })
    }

    // 如果正在生成中，检查PixVerse状态
    if (record.status === 5) {
      const pixverseService = createPixVerseService()
      const statusResult = await pixverseService.getVideoStatus((record as any).pvid)

      if (statusResult.ErrCode !== 0) {
        throw new Error(`PixVerse status check failed: ${statusResult.ErrMsg}`)
      }

      const pixverseStatus = statusResult.Resp.status

      // 更新数据库状态
      const updatedRecord = itv 
        ? await prisma.iTV.update({
            where: { id: record.id },
            data: { status: pixverseStatus }
          })
        : await prisma.tTV.update({
            where: { id: record.id },
            data: { status: pixverseStatus }
          })

      // 如果视频生成完成
      if (pixverseStatus === 1 && statusResult.Resp.url) {
        console.log('Video generation completed, downloading and storing video...')
        
        try {
          // 下载视频并转存到Storage
          const mediaService = createServerMediaService()
          const videoResponse = await fetch(statusResult.Resp.url)
          
          if (!videoResponse.ok) {
            throw new Error('Failed to download video from PixVerse')
          }
          
          const videoBuffer = await videoResponse.arrayBuffer()
          const videoFile = new File([videoBuffer], `video_${record.id}.mp4`, {
            type: 'video/mp4'
          })
          
          // 上传到Storage
          const storageResult = await mediaService.uploadVideo({
            file: videoFile,
            userId: user.id,
            compress: false // 视频通常不需要压缩
          })
          
          console.log('Video uploaded to storage:', storageResult.url)
          
          // 创建Video记录（而不是更新）
          const video = await prisma.video.create({
            data: {
              url: storageResult.url, // 使用Storage的URL
              width: statusResult.Resp.outputWidth,
              height: statusResult.Resp.outputHeight,
              size: statusResult.Resp.size
            }
          })

          // 更新ITV/TTV记录，关联到新创建的Video
          const updatedRecord = itv 
            ? await prisma.iTV.update({
                where: { id: record.id },
                data: { 
                  status: pixverseStatus,
                  videoId: video.id
                }
              })
            : await prisma.tTV.update({
                where: { id: record.id },
                data: { 
                  status: pixverseStatus,
                  videoId: video.id
                }
              })

          return NextResponse.json({
            success: true,
            data: {
              id: updatedRecord.id,
              status: pixverseStatus,
              video: video
            }
          })
          
        } catch (storageError) {
          console.error('Failed to store video:', storageError)
          
          // 如果Storage上传失败，创建Video记录但使用原始URL
          const video = await prisma.video.create({
            data: {
              url: statusResult.Resp.url, // 使用PixVerse的URL作为备用
              width: statusResult.Resp.outputWidth,
              height: statusResult.Resp.outputHeight,
              size: statusResult.Resp.size
            }
          })

          // 更新ITV/TTV记录，关联到新创建的Video
          const updatedRecord = itv 
            ? await prisma.iTV.update({
                where: { id: record.id },
                data: { 
                  status: pixverseStatus,
                  videoId: video.id
                }
              })
            : await prisma.tTV.update({
                where: { id: record.id },
                data: { 
                  status: pixverseStatus,
                  videoId: video.id
                }
              })
          
          return NextResponse.json({
            success: true,
            data: {
              id: updatedRecord.id,
              status: pixverseStatus,
              video: video
            },
            warning: 'Video generated successfully but failed to transfer to storage. Using original URL.'
          })
        }
      }
      
      // 如果生成失败，返回具体错误信息
      if (pixverseStatus === 7 || pixverseStatus === 8) {
        const errorMessages = {
          7: 'Content moderation failed - The generated video was rejected by content moderation system',
          8: 'Video generation failed - Please try again with different parameters'
        }
        
        return NextResponse.json({
          success: false,
          data: {
            id: updatedRecord.id,
            status: pixverseStatus,
            video: record.video,
            error: errorMessages[pixverseStatus as 7 | 8]
          }
        })
      }

      // 仍在生成中
      return NextResponse.json({
        success: false,
        data: {
          id: updatedRecord.id,
          status: pixverseStatus,
          video: record.video
        }
      })
    }

    return NextResponse.json({
      success: false,
      data: {
        id: record.id,
        status: record.status,
        video: record.video
      }
    })

  } catch (error) {
    console.error('Error checking video status:', error)
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