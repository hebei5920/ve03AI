// Input type for the generator
export type InputType = 'image' | 'text'

// Status of video generation
export type VideoStatus = 'idle' | 'generating' | 'success' | 'error'

// Model version options
export type ModelVersion = 'v3.5' | 'v4' | 'v4.5'

// Video quality options
export type VideoQuality = '360p' | '540p' | '720p' | '1080p'

// Video duration options (in seconds)
export type VideoDuration = 5 | 8

// Video style options (only for v3.5)
export type VideoStyle = 'anime' | '3d_animation' | 'clay' | 'comic' | 'cyberpunk'

// Motion mode options
export type MotionMode = 'normal' | 'fast'

// Aspect ratio options (for text-to-video)
export type AspectRatio = '16:9' | '4:3' | '1:1' | '3:4' | '9:16'

// Base form data for both generators
export interface BaseFormData {
  duration: VideoDuration
  modelVersion: ModelVersion
  quality: VideoQuality
  prompt: string
  motionMode?: MotionMode
  negativePrompt?: string
  seed?: number
  style?: VideoStyle
  watermark?: boolean
}

// Image to video specific data
export interface ImageToVideoFormData extends BaseFormData {
  image: File | null
}

// Text to video specific data
export interface TextToVideoFormData extends BaseFormData {
  aspectRatio: AspectRatio
}

// Combined form data with input type
export interface GenerationFormData {
  inputType: InputType
  image?: File | null
  text?: string
  aspectRatio?: AspectRatio
  duration: VideoDuration
  modelVersion: ModelVersion
  quality: VideoQuality
  prompt: string
  motionMode?: MotionMode
  negativePrompt?: string
  seed?: number
  style?: VideoStyle
  watermark?: boolean
}
