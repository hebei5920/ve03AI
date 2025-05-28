'use client'

import { useState, useRef } from 'react'
import { useTranslation } from '@/providers/language-provider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { ImageToVideoFormData, ModelVersion, VideoQuality, VideoDuration, VideoStyle } from './types'
import { useForm, Controller } from 'react-hook-form'
import { Info, Upload, X, Loader2 } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { createClient } from '@/lib/supabase-client'
interface ImageToVideoProps {
  onSubmit: (data: ImageToVideoFormData) => void
  isGenerating: boolean
}

const QUALITY_OPTIONS: { value: VideoQuality; label: string }[] = [
  { value: '360p', label: '360p' },
  { value: '540p', label: '540p' },
  { value: '720p', label: '720p' },
  { value: '1080p', label: '1080p' },
]

export default function ImageToVideo({ onSubmit, isGenerating }: ImageToVideoProps) {
  const { t } = useTranslation()
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const supabase = createClient()

  const { register, handleSubmit, watch, control, setValue, formState: { errors, isValid } } = useForm<ImageToVideoFormData>({
    defaultValues: {
      image: null,
      modelVersion: 'v4',
      quality: '720p',
      duration: 5,
      prompt: '',
      motionMode: 'normal',
      negativePrompt: '',
      watermark: false,
    }
  })

  // Watch form values for conditional logic
  const watchModelVersion = watch('modelVersion')
  const watchQuality = watch('quality')
  const watchDuration = watch('duration')

  // Handle file selection
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!validTypes.includes(file.type)) {
      alert(t('generator.errors.invalidFileType') || 'Please upload JPG, PNG, or WEBP images only')
      return
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert(t('generator.errors.fileTooLarge') || 'File size must be less than 10MB')
      return
    }

    try {
      setIsUploading(true)

      // Get current user
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        throw new Error('User not authenticated')
      }

      // Create FormData
      const formData = new FormData()
      formData.append('file', file)
      formData.append('userId', user.id)

      // Upload image using API
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to upload image')
      }

      const result = await response.json()
      console.log('Uploaded image URL:', result.url)
      console.log('Uploaded image path:', result.path)

      setValue('image', file)

      // Create image preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error('Error uploading image:', error)
      alert(t('generator.errors.uploadFailed') || 'Failed to upload image')
    } finally {
      setIsUploading(false)
    }
  }

  // Remove selected image
  const handleRemoveImage = () => {
    setValue('image', null)
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Check if 8s duration is available
  const is8sAvailable = watchQuality !== '1080p'

  // Check if fast motion is available
  const isFastMotionAvailable = watchDuration === 5 && watchQuality !== '1080p'

  // Format quality value for display
  const getQualityValue = (value: number) => {
    const qualities = ['360p', '540p', '720p', '1080p']
    return qualities[value]
  }

  // Process form submission
  const processSubmit = (data: ImageToVideoFormData) => {
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(processSubmit)} className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          {t('generator.imageUpload.title') || 'Upload Your Image'}
        </h3>

        <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".jpg,.jpeg,.png,.webp"
            onChange={handleFileChange}
            disabled={isGenerating || isUploading}
          />

          {!imagePreview ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="cursor-pointer"
            >
              {isUploading ? (
                <Loader2 className="mx-auto h-12 w-12 text-gray-400 animate-spin" />
              ) : (
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
              )}
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {isUploading
                  ? (t('generator.imageUpload.uploading') || 'Uploading...')
                  : (t('generator.imageUpload.instruction') || 'Click or drag and drop to upload an image')}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {t('generator.imageUpload.formats') || 'JPG, PNG or WEBP (max 10MB)'}
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={(e) => {
                  e.stopPropagation()
                  fileInputRef.current?.click()
                }}
                disabled={isGenerating || isUploading}
              >
                {isUploading
                  ? (t('generator.imageUpload.uploading') || 'Uploading...')
                  : (t('generator.imageUpload.button') || 'Select Image')}
              </Button>
            </div>
          ) : (
            <div className="relative">
              <img
                src={imagePreview}
                alt="Preview"
                className="mx-auto max-h-[200px] max-w-[200px] object-contain"
              />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute top-0 right-0"
                onClick={handleRemoveImage}
                disabled={isGenerating}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
        {errors.image && (
          <p className="mt-1 text-sm text-red-500">
            {errors.image.message || t('generator.errors.imageRequired') || 'Please upload an image'}
          </p>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <Label htmlFor="duration">
              {t('generator.params.duration') || 'Video Duration'}
            </Label>
          </div>
          <Controller
            name="duration"
            control={control}
            render={({ field }) => (
              <RadioGroup
                onValueChange={(val) => field.onChange(parseInt(val, 10) as VideoDuration)}
                defaultValue={field.value.toString()}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="5"
                    id="duration-5"
                    disabled={isGenerating}
                  />
                  <Label htmlFor="duration-5">5s</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="8"
                    id="duration-8"
                    disabled={isGenerating || !is8sAvailable}
                  />
                  <Label
                    htmlFor="duration-8"
                    className={!is8sAvailable ? "text-gray-400 dark:text-gray-600" : ""}
                  >
                    8s
                    {!is8sAvailable && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 inline-block ml-1" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{t('generator.tooltips.no8sIn1080p') || '8s videos are not available in 1080p quality'}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </Label>
                </div>
              </RadioGroup>
            )}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <Label htmlFor="model-version">
              {t('generator.params.modelVersion') || 'Model Version'}
            </Label>
          </div>
          <Controller
            name="modelVersion"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={isGenerating}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('generator.params.selectModel') || 'Select model version'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="v3.5">
                    <div className="flex items-center justify-between w-full">
                      <span>V3.5</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{t('generator.tooltips.v3_5') || 'Older model with style presets'}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </SelectItem>
                  <SelectItem value="v4">
                    <div className="flex items-center justify-between w-full">
                      <span>V4</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{t('generator.tooltips.v4') || 'Standard model with good quality and speed'}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </SelectItem>
                  <SelectItem value="v4.5">
                    <div className="flex items-center justify-between w-full">
                      <span>V4.5</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 ml-2" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{t('generator.tooltips.v4_5') || 'Latest model with best quality'}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <Label>
              {t('generator.params.quality') || 'Video Quality'}
            </Label>
            <span className="text-sm text-gray-500">
              {watchQuality}
            </span>
          </div>
          <Controller
            name="quality"
            control={control}
            render={({ field }) => (
              <div className="pt-2 px-1">
                <Slider
                  min={0}
                  max={3}
                  step={1}
                  value={[QUALITY_OPTIONS.findIndex(opt => opt.value === field.value)]}
                  onValueChange={(val) => {
                    const quality = QUALITY_OPTIONS[val[0]].value
                    field.onChange(quality)

                    // Automatically adjust duration if 1080p is selected
                    if (quality === '1080p' && watchDuration === 8) {
                      setValue('duration', 5)
                    }

                    // Disable fast motion if 1080p is selected
                    if (quality === '1080p' && watch('motionMode') === 'fast') {
                      setValue('motionMode', 'normal')
                    }
                  }}
                  disabled={isGenerating}
                />
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  {QUALITY_OPTIONS.map((option) => (
                    <span key={option.value}>{option.label}</span>
                  ))}
                </div>
              </div>
            )}
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <Label htmlFor="prompt">
              {t('generator.params.prompt') || 'Prompt'}
            </Label>
            <span className="text-xs text-gray-500">
              {watch('prompt').length}/2048
            </span>
          </div>
          <Textarea
            id="prompt"
            placeholder={t('generator.placeholders.prompt') || 'Describe what you want to see in the video...'}
            className="resize-none h-24"
            maxLength={2048}
            {...register('prompt', { required: true })}
            disabled={isGenerating}
          />
          {errors.prompt && (
            <p className="mt-1 text-sm text-red-500">
              {t('generator.errors.promptRequired') || 'Please enter a prompt'}
            </p>
          )}
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="advanced-options">
            <AccordionTrigger>
              {t('generator.advancedOptions') || 'Advanced Options'}
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="motion-mode">
                    {t('generator.params.motionMode') || 'Motion Mode'}
                  </Label>
                  <p className="text-xs text-gray-500">
                    {t('generator.tooltips.motionModeDesc') || 'Controls the speed of movement in the video'}
                  </p>
                </div>
                <Controller
                  name="motionMode"
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="motion-mode" className={!isFastMotionAvailable ? "text-gray-400 dark:text-gray-600" : ""}>
                        {field.value === 'normal' ?
                          (t('generator.params.motionModeNormal') || 'Normal') :
                          (t('generator.params.motionModeFast') || 'Fast')}
                      </Label>
                      <Switch
                        id="motion-mode"
                        checked={field.value === 'fast'}
                        onCheckedChange={(checked) => field.onChange(checked ? 'fast' : 'normal')}
                        disabled={isGenerating || !isFastMotionAvailable}
                      />
                      {!isFastMotionAvailable && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 ml-1" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>
                                {watchQuality === '1080p'
                                  ? (t('generator.tooltips.noFastIn1080p') || 'Fast motion is not available in 1080p quality')
                                  : (t('generator.tooltips.noFastIn8s') || 'Fast motion is only available for 5s videos')}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                  )}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="negative-prompt">
                    {t('generator.params.negativePrompt') || 'Negative Prompt'}
                  </Label>
                  <span className="text-xs text-gray-500">
                    {watch('negativePrompt')?.length || 0}/1024
                  </span>
                </div>
                <Textarea
                  id="negative-prompt"
                  placeholder={t('generator.placeholders.negativePrompt') || 'Elements to avoid in the video...'}
                  className="resize-none h-16"
                  maxLength={1024}
                  {...register('negativePrompt')}
                  disabled={isGenerating}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="seed">
                    {t('generator.params.seed') || 'Random Seed'}
                  </Label>
                </div>
                <Input
                  id="seed"
                  type="number"
                  placeholder={t('generator.placeholders.seed') || 'Leave empty for random seed'}
                  {...register('seed', {
                    min: 0,
                    max: 2147483647,
                    valueAsNumber: true,
                  })}
                  disabled={isGenerating}
                />
                {errors.seed && (
                  <p className="mt-1 text-sm text-red-500">
                    {t('generator.errors.seedRange') || 'Seed must be between 0 and 2147483647'}
                  </p>
                )}
              </div>

              {watchModelVersion === 'v3.5' && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label htmlFor="style">
                      {t('generator.params.style') || 'Style Preset'}
                    </Label>
                  </div>
                  <Controller
                    name="style"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value || "anime"}
                        disabled={isGenerating}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={t('generator.params.selectStyle') || 'Select style preset'} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="anime">{t('generator.styles.anime') || 'Anime'}</SelectItem>
                          <SelectItem value="3d_animation">{t('generator.styles.3d_animation') || '3D Animation'}</SelectItem>
                          <SelectItem value="clay">{t('generator.styles.clay') || 'Clay'}</SelectItem>
                          <SelectItem value="comic">{t('generator.styles.comic') || 'Comic'}</SelectItem>
                          <SelectItem value="cyberpunk">{t('generator.styles.cyberpunk') || 'Cyberpunk'}</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              )}

              <div className="flex items-center space-x-2 pt-2">
                <Controller
                  name="watermark"
                  control={control}
                  render={({ field }) => (
                    <Switch
                      id="watermark"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={isGenerating}
                    />
                  )}
                />
                <Label htmlFor="watermark">
                  {t('generator.params.watermark') || 'Add watermark'}
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600"
        disabled={!imagePreview || isGenerating || !isValid}
      >
        {isGenerating
          ? (t('generator.generating') || 'Generating...')
          : (t('generator.generateButton') || 'Generate Video')}
      </Button>
    </form>
  )
}
