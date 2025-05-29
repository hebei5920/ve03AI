import { v4 as uuidv4 } from 'uuid'

export interface PixVerseUploadResponse {
  ErrCode: number
  ErrMsg: string
  Resp: {
    img_id: number
    img_url: string
  }
}

export interface PixVerseVideoGenerateResponse {
  ErrCode: number
  ErrMsg: string
  Resp: {
    video_id: number
  }
}

export interface PixVerseVideoStatusResponse {
  ErrCode: number
  ErrMsg: string
  Resp: {
    create_time: string
    id: number
    modify_time: string
    negative_prompt: string
    outputHeight: number
    outputWidth: number
    prompt: string
    resolution_ratio: number
    seed: number
    size: number
    status: number // 1: success, 5: generating, 7: moderation failed, 8: failed
    style: string
    url: string
  }
}

export interface VideoGenerationParams {
  img_id: number
  prompt: string
  duration: number
  model: string
  quality: string
  motion_mode?: string
  negative_prompt?: string
  seed?: number
  style?: string
  water_mark?: boolean
}

export interface TextToVideoParams {
  prompt: string
  duration: number
  model: string
  quality: string
  motion_mode?: string
  negative_prompt?: string
  seed?: number
  style?: string
  water_mark?: boolean
  aspect_ratio?: string
}

export class PixVerseService {
  private readonly API_BASE_URL = 'https://app-api.pixverse.ai/openapi/v2'
  private readonly API_KEY: string

  constructor(apiKey: string) {
    this.API_KEY = apiKey
  }

  private getHeaders() {
    return {
      'API-KEY': 'sk-f118cb032eddfd57c827402ba8b67673',
      'Ai-trace-id': uuidv4(),
      'Content-Type': 'application/json'
    }
  }

  private getUploadHeaders() {
    return {
      'API-KEY': 'sk-f118cb032eddfd57c827402ba8b67673',
      'Ai-trace-id': uuidv4()
    }
  }

  /**
   * 上传图像到PixVerse
   */
  async uploadImage(imageFile: File): Promise<PixVerseUploadResponse> {
    console.log("this.getUploadHeaders()", this.getUploadHeaders());

    const formData = new FormData()
    formData.append('image', imageFile)

    const response = await fetch(`${this.API_BASE_URL}/image/upload`, {
      method: 'POST',
      headers: this.getUploadHeaders(),
      body: formData
    })

    if (!response.ok) {
      throw new Error(`upload failed: ${response.status}`)
    }

    return await response.json()
  }

  /**
   * 生成图像转视频
   */
  async generateImageToVideo(params: VideoGenerationParams): Promise<PixVerseVideoGenerateResponse> {

    const response = await fetch(`${this.API_BASE_URL}/video/img/generate`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(params)
    })

    if (!response.ok) {
      throw new Error(`PixVerse video generation failed: ${response.status}`)
    }

    return await response.json()
  }

  /**
   * 生成文本转视频
   */
  async generateTextToVideo(params: TextToVideoParams): Promise<PixVerseVideoGenerateResponse> {
    const response = await fetch(`${this.API_BASE_URL}/video/text/generate`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(params)
    })

    if (!response.ok) {
      throw new Error(`PixVerse text to video generation failed: ${response.status}`)
    }

    return await response.json()
  }

  /**
   * 获取视频生成状态
   */
  async getVideoStatus(videoId: number): Promise<PixVerseVideoStatusResponse> {
    const response = await fetch(`${this.API_BASE_URL}/video/result/${videoId}`, {
      method: 'GET',
      headers: this.getHeaders()
    })

    if (!response.ok) {
      throw new Error(`PixVerse status check failed: ${response.status}`)
    }

    return await response.json()
  }
}

// 创建服务实例
export function createPixVerseService(): PixVerseService {
  const apiKey = process.env.PV_KEY
  console.log("apiKey+++++", apiKey);

  if (!apiKey) {
    throw new Error('PV_KEY environment variable is required')
  }

  return new PixVerseService(apiKey)
} 