export default {
  // Common
  common: {
    backToHome: 'Back to Home',
    and: 'and',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    failed: 'Failed',
    retry: 'Retry',
    close: 'Close',
    confirm: 'Confirm',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    download: 'Download',
    upload: 'Upload',
    refresh: 'Refresh',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    details: 'Details',
    all: 'All',
    create: 'Create',
    generate: 'Generate',
    processing: 'Processing',
    completed: 'Completed',
    pending: 'Pending',
    unknown: 'Unknown'
  },

  // Authentication
  auth: {
    signIn: {
      title: 'Sign in to your account',
      loggingIn: 'Logging in...',
      continueWithGoogle: 'Continue with Google',
      continueWithGithub: 'Continue with GitHub',
      or: 'or',
      termsMessage: 'By signing in, you agree to our'
    }
  },

  // History
  history: {
    title: 'Generation History',
    totalRecords: '{count} total records',
    filters: {
      all: 'All History',
      textToVideo: 'Text to Video',
      imageToVideo: 'Image to Video'
    },
    quickActions: {
      generateNew: 'Generate New Video'
    },
    currentView: 'Current view:',
    refreshData: 'Refresh',
    empty: {
      title: {
        all: 'No history records',
        textToVideo: 'No text-to-video records',
        imageToVideo: 'No image-to-video records'
      },
      description: {
        all: 'Start generating your first video!',
        textToVideo: 'Try generating your first video from text!',
        imageToVideo: 'Upload an image to generate your first video!'
      },
      action: 'Start Generating'
    },
    pagination: {
      page: 'Page {current} of {total}'
    },
    status: {
      completed: 'Completed',
      processing: 'Processing',
      failed: 'Failed',
      pending: 'Pending'
    },
    timeAgo: {
      justNow: 'Just now',
      minutesAgo: '{minutes} minutes ago',
      hoursAgo: '{hours} hours ago',
      daysAgo: '{days} days ago'
    },
    processingMessage: 'Generating, please wait...',
    failedMessage: 'Generation failed, please retry'
  },

  // History Detail
  historyDetail: {
    backToHistory: 'Back to History',
    generatedVideo: 'Generated Video',
    downloading: 'Downloading...',
    downloadVideo: 'Download Video',
    videoUnavailable: 'Video file unavailable',
    downloadSuccess: 'Video downloaded successfully! File name: {fileName}',
    downloadFailed: 'Download failed, please try again later',
    openInNewTab: 'Download link opened in new tab',
    
    videoStatus: {
      pending: 'Video is waiting to be generated',
      processing: 'Video is being generated',
      failed: 'Video generation failed',
      noVideo: 'No video available'
    },

    info: {
      createdAt: 'Created At',
      videoSize: 'Video Size',
      modelVersion: 'Model Version',
      duration: 'Duration',
      videoDimensions: 'Video Dimensions',
      resolution: 'Resolution',
      quality: 'Quality',
      prompt: 'Prompt',
      sourceImage: 'Source Image',
      durationUnit: 'seconds'
    },

    type: {
      textToVideo: 'Text to Video',
      imageToVideo: 'Image to Video'
    },

    notFound: 'Record not found'
  },

  // Navigation
  nav: {
    settings: 'Settings'
  },
  
  // Navbar
  navbar: {
    home: 'Home',
    generate: 'Generate',
    pricing: 'Pricing',
    login: 'Login'
  },
  
  // Theme
  theme: {
    toggle: 'Toggle theme',
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode'
  },
  
  // Video Generator
  generator: {
    title: 'AI Video Generator',
    subtitle: 'Transform your images and text into stunning videos with AI',
    tabs: {
      imageToVideo: 'Image to Video',
      textToVideo: 'Text to Video'
    },
    imageUpload: {
      title: 'Upload Your Image',
      instruction: 'Click or drag and drop to upload an image',
      formats: 'JPG, PNG or WEBP (max 10MB)',
      button: 'Select Image'
    },
    textInput: {
      title: 'Enter Your Text',
      instruction: 'Text Description'
    },
    params: {
      duration: 'Video Duration',
      modelVersion: 'Model Version',
      quality: 'Video Quality',
      prompt: 'Prompt',
      aspectRatio: 'Aspect Ratio',
      motionMode: 'Motion Mode',
      motionModeNormal: 'Normal',
      motionModeFast: 'Fast',
      negativePrompt: 'Negative Prompt',
      seed: 'Random Seed',
      style: 'Style Preset',
      watermark: 'Add watermark',
      selectModel: 'Select model version',
      selectStyle: 'Select style preset'
    },
    styles: {
      anime: 'Anime',
      '3d_animation': '3D Animation',
      clay: 'Clay',
      comic: 'Comic',
      cyberpunk: 'Cyberpunk'
    },
    placeholders: {
      prompt: 'Describe what you want to see in the video...',
      text: 'Describe the scene you want to create...',
      negativePrompt: 'Elements to avoid in the video...',
      seed: 'Leave empty for random seed'
    },
    tooltips: {
      no8sIn1080p: '8s videos are not available in 1080p quality',
      noFastIn1080p: 'Fast motion is not available in 1080p quality',
      noFastIn8s: 'Fast motion is only available for 5s videos',
      motionModeDesc: 'Controls the speed of movement in the video',
      v3_5: 'Older model with style presets',
      v4: 'Standard model with good quality and speed',
      v4_5: 'Latest model with best quality'
    },
    preview: {
      title: 'Preview',
      emptyState: 'Your generated video will appear here',
      generating: 'Generating Video',
      complete: 'complete',
      error: 'Failed to generate video. Please try again.',
      tryAgain: 'Something went wrong. Please try again with different settings.',
      videoId: 'Video ID'
    },
    errors: {
      invalidFileType: 'Please upload JPG, PNG, or WEBP images only',
      imageRequired: 'Please upload an image',
      textRequired: 'Please enter a text description',
      promptRequired: 'Please enter a prompt',
      seedRange: 'Seed must be between 0 and 2147483647'
    },
    advancedOptions: 'Advanced Options',
    generating: 'Generating...',
    generateButton: 'Generate Video'
  },
  
  // Pricing page
  pricing: {
    title: 'Choose Your Plan',
    description: 'Simple, transparent pricing that grows with you. No hidden fees or surprise costs.',
    monthly: 'Monthly',
    annual: 'Annual',
    save: 'Save',
    popular: 'Most Popular',
    perMonth: '/month',
    perYear: '/year',
    
    plans: {
      free: {
        name: 'Free',
        description: 'For hobbyists and casual creators looking to experiment.',
        features: {
          feature1: '20 video credits per month',
          feature2: '720p video resolution',
          feature3: 'Up to 5 second videos',
        },
        limitations: {
          limitation1: 'No commercial use',
        },
        buttonText: 'Get Started',
      },
      pro: {
        name: 'Pro',
        description: 'For content creators and small businesses.',
        features: {
          feature1: '200 video credits per month',
          feature2: '1080p video resolution',
          feature3: 'Up to 15 second videos',
          feature4: 'Priority rendering time',
          feature5: 'Commercial use license',
        },
        buttonText: 'Subscribe Now',
      },
      enterprise: {
        name: 'Enterprise',
        description: 'For agencies and businesses with higher volume needs.',
        features: {
          feature1: 'Unlimited video credits',
          feature2: '4K video resolution',
          feature3: 'Up to 30+ second videos',
          feature4: 'Priority support',
          feature5: 'Custom model training',
          feature6: 'API access',
        },
        buttonText: 'Contact Sales',
      },
    },
    
    hero: {
      title: 'Simple, Transparent Pricing',
      description: 'Choose the perfect plan for your creative needs with no hidden fees.',
    },
    
    comparison: {
      title: 'Compare Plans',
      description: 'See a detailed feature comparison to help choose the right plan for your needs.',
      feature: 'Feature',
      free: 'Free',
      pro: 'Pro',
      enterprise: 'Enterprise',
      features: {
        videoLength: 'Maximum video length',
        monthlyCredits: 'Monthly credits',
        resolution: 'Max resolution',
        audioTracks: 'Audio tracks',
        customModels: 'Custom model training',
        priorityRendering: 'Priority rendering',
        commercialUse: 'Commercial usage rights',
        prioritySupport: 'Priority support',
        api: 'API access',
      },
    },
    
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Find answers to common questions about our pricing plans and billing.',
      questions: {
        credits: {
          question: 'What are video credits?',
          answer: 'Video credits are the currency used to generate videos on Veo 3. One credit allows you to generate one video with the specifications allowed by your plan. Credits reset monthly on your billing date.',
        },
        payment: {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards including Visa, Mastercard, American Express, and Discover. For Enterprise plans, we also accept wire transfers and invoicing options.',
        },
        cancel: {
          question: 'Can I cancel my subscription anytime?',
          answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period. There are no cancellation fees.',
        },
        refunds: {
          question: 'What is your refund policy?',
          answer: 'We offer a 7-day money-back guarantee for new Pro subscriptions. If you are not satisfied with your purchase, contact our support team within 7 days of your initial purchase for a full refund.',
        },
        enterprise: {
          question: 'Do you offer custom enterprise pricing?',
          answer: 'Yes, we offer customized pricing for enterprise customers with specific needs. Please contact our sales team to discuss your requirements and get a tailored quote.',
        },
      },
    },
    
    cta: {
      title: 'Ready to Create Amazing AI Videos?',
      description: 'Join thousands of creators and businesses using Veo 3 to bring their ideas to life.',
      button: 'Get Started Today',
    },
  },
  
  // Footer
  footer: {
    platform: 'Platform',
    home: 'Home',
    generate: 'Generate',
    pricing: 'Pricing',
    legal: 'Legal',
    termsOfService: 'Terms of Service',
    privacyPolicy: 'Privacy Policy',
    refundPolicy: 'Refund Policy',
    contactUs: 'Contact Us',
    languages: 'Languages',
    allRightsReserved: 'All Rights Reserved',
    independent: 'is an independent platform and is not affiliated with Google or its products.'
  },
  
  // Hero section
  hero: {
    title: 'Veo 3: AI Video Generation with Real Voice',
    description: 'Generate videos with perfectly synced audio, including sound effects, dialogue, and ambient noise. Make your stories come alive with Veo 3.',
    cta: 'Start Creating Now'
  },
  
  // Features section
  features: {
    mainTitle: 'Key Features of Veo 3 AI Video Generator',
    mainDescription: 'Veo 3 combines cutting-edge AI technology to deliver seamless video and audio generation in one tool.',
    audio: {
      title: 'Native Audio Generation',
      description: 'Automatically add sound effects, ambient sounds, and dialogue to your videos.'
    },
    lipSync: {
      title: 'Real Lip Synchronization',
      description: 'AI perfectly matches character speech with mouth movements, generating realistic effects.'
    },
    physics: {
      title: 'Physics-Based Video Simulation',
      description: 'Videos reflect real-world physics properties, achieving natural motion and visual effects.'
    },
    prompts: {
      title: 'Multiple Input Prompts',
      description: 'Use text descriptions or image references to generate videos.'
    },
    flow: {
      title: 'Integration with Flow Apps',
      description: 'Easily create film clips by combining Veo 3 with Google\'s Flow video editor.'
    },
    vertex: {
      title: 'Available on Vertex AI',
      description: 'Enterprise users can access Veo 3 through Google\'s Vertex AI platform for scalable video generation.'
    }
  },
  
  // Examples section
  examples: {
    title: 'Explore Videos Created with Veo 3',
    description: 'Watch AI-generated video examples showcasing Veo 3\'s powerful capabilities.',
    copyLink: 'Copy Link'
  },
  
  // How to use section
  howToUse: {
    title: 'How to Create AI Videos with Veo 3',
    description: 'Follow these simple steps to generate videos with synchronized audio using Veo 3.',
    steps: {
      register: {
        title: 'Register or Login',
        description: 'Create an account or login to access Veo 3.'
      },
      prompt: {
        title: 'Input Your Prompt',
        description: 'Type a text description or upload an image to describe the video you want.'
      },
      audio: {
        title: 'Customize Audio',
        description: 'Add instructions for sound effects, dialogues, or ambient noise to enhance your video.'
      },
      generate: {
        title: 'Generate and View',
        description: 'Let Veo 3 generate your video, then preview and download your AI-generated clip.'
      }
    },
    cta: 'Start Your First Video'
  },
  
  // FAQ section
  faq: {
    title: 'Veo 3 Frequently Asked Questions',
    description: 'Find answers to common questions about Veo 3 AI video generation and audio functionality.',
    questions: {
      whatIsVeo3: {
        question: 'What is Veo 3?',
        answer: 'Veo 3 is Google\'s AI tool that generates videos with synchronized audio, including sound effects and dialogue.'
      },
      longerVideos: {
        question: 'Can Veo 3 generate videos longer than 8 seconds?',
        answer: 'Currently, Veo 3 focuses on creating high-quality 8-second videos, with longer formats planned in future updates.'
      },
      commercialUse: {
        question: 'Can I use Veo 3 for commercial projects?',
        answer: 'Yes, Veo 3 supports commercial use through appropriate subscription plans and enterprise access.'
      },
      audioTypes: {
        question: 'What types of audio can Veo 3 generate?',
        answer: 'It can create ambient sounds, character dialogues, and authentic sound effects native to the video.'
      },
      socialMedia: {
        question: 'Can I use Veo 3 videos on social media?',
        answer: 'Yes, videos created with Veo 3 can be shared to social media platforms, making it simple to create engaging content.'
      },
      beginnerFriendly: {
        question: 'Is Veo 3 easy to use for beginners?',
        answer: 'Yes, Veo 3 provides a simple interface suitable for users without technical skills.'
      },
      comparison: {
        question: 'How does Veo 3 compare to other AI video tools?',
        answer: 'Veo 3 stands out among many competitors by combining video with perfectly synchronized audio, a feature few competitors offer.'
      }
    }
  },
  
  // Call-to-action section
  cta: {
    title: 'Start Creating Amazing AI Videos',
    description: 'Generate professional quality videos with real sound using Veo 3.',
    buttonText: 'Get Started'
  },
  
  // Showcase section
  showcase: {
    title: 'Currently Trending',
    close: 'Close',
    videoPlaying: 'Now playing video {id}'
  }
};