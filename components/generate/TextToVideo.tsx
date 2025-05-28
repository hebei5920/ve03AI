'use client'

import { useTranslation } from '@/providers/language-provider'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { TextToVideoFormData, ModelVersion, VideoQuality, VideoDuration, VideoStyle, AspectRatio } from './types'
import { useForm, Controller } from 'react-hook-form'
import { Info } from 'lucide-react'
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

interface TextToVideoProps {
  onSubmit: (data: TextToVideoFormData) => void
  isGenerating: boolean
}

const QUALITY_OPTIONS: { value: VideoQuality; label: string }[] = [
  { value: '360p', label: '360p' },
  { value: '540p', label: '540p' },
  { value: '720p', label: '720p' },
  { value: '1080p', label: '1080p' },
]

const ASPECT_RATIOS: { value: AspectRatio; label: string }[] = [
  { value: '16:9', label: '16:9' },
  { value: '4:3', label: '4:3' },
  { value: '1:1', label: '1:1' },
  { value: '3:4', label: '3:4' },
  { value: '9:16', label: '9:16' },
]

export default function TextToVideo({ onSubmit, isGenerating }: TextToVideoProps) {
  const { t } = useTranslation()

  const { register, handleSubmit, watch, control, setValue, formState: { errors, isValid } } = useForm<TextToVideoFormData>({
    defaultValues: {
      text: '',
      aspectRatio: '16:9',
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

  // Check if 8s duration is available
  const is8sAvailable = watchQuality !== '1080p'
  
  // Check if fast motion is available
  const isFastMotionAvailable = watchDuration === 5 && watchQuality !== '1080p'

  // Process form submission
  const processSubmit = (data: TextToVideoFormData) => {
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(processSubmit)} className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          {t('generator.textInput.title') || 'Enter Your Text'}
        </h3>
        
        <div>
          <div className="flex items-center justify-between mb-2">
            <Label htmlFor="text">
              {t('generator.textInput.instruction') || 'Text Description'}
            </Label>
            <span className="text-xs text-gray-500">
              {watch('text').length}/2048
            </span>
          </div>
          <Textarea
            id="text"
            placeholder={t('generator.placeholders.text') || 'Describe the scene you want to create...'}
            className="resize-none h-40"
            maxLength={2048}
            {...register('text', { required: true })}
            disabled={isGenerating}
          />
          {errors.text && (
            <p className="mt-1 text-sm text-red-500">
              {t('generator.errors.textRequired') || 'Please enter a text description'}
            </p>
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <Label htmlFor="aspect-ratio">
            {t('generator.params.aspectRatio') || 'Aspect Ratio'}
          </Label>
        </div>
        <Controller
          name="aspectRatio"
          control={control}
          render={({ field }) => (
            <div className="flex flex-wrap gap-2">
              {ASPECT_RATIOS.map((ratio) => (
                <Button
                  key={ratio.value}
                  type="button"
                  variant={field.value === ratio.value ? "default" : "outline"}
                  className={field.value === ratio.value ? "bg-orange-500 hover:bg-orange-600" : ""}
                  onClick={() => field.onChange(ratio.value)}
                  disabled={isGenerating}
                >
                  {ratio.label}
                </Button>
              ))}
            </div>
          )}
        />
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
                onValueChange={(value) => {
                  field.onChange(value)
                  // Set style if v3.5 is selected
                  if (value === 'v3.5' && !watch('style')) {
                    setValue('style', 'anime')
                  }
                }}
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
            placeholder={t('generator.placeholders.prompt') || 'Additional details for your video...'}
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

        <Accordion type="single" collapsible className="w-full" 
          defaultValue={watchModelVersion === 'v3.5' ? "advanced-options" : undefined}>
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
        disabled={!watch('text') || isGenerating || !isValid}
      >
        {isGenerating 
          ? (t('generator.generating') || 'Generating...') 
          : (t('generator.generateButton') || 'Generate Video')}
      </Button>
    </form>
  )
}
