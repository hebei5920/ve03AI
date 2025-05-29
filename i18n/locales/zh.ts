export default {
  // 通用
  common: {
    backToHome: '返回首页',
    and: '和',
    terms: '服务条款',
    privacy: '隐私政策',
    loading: '加载中...',
    error: '错误',
    success: '成功',
    failed: '失败',
    retry: '重试',
    close: '关闭',
    confirm: '确认',
    cancel: '取消',
    save: '保存',
    edit: '编辑',
    delete: '删除',
    download: '下载',
    upload: '上传',
    refresh: '刷新',
    back: '返回',
    next: '下一页',
    previous: '上一页',
    details: '详情',
    all: '全部',
    create: '创建',
    generate: '生成',
    processing: '处理中',
    completed: '已完成',
    pending: '等待中',
    unknown: '未知',
    login: '登录'
  },

  // 认证
  auth: {
    signIn: {
      title: '登录您的账户',
      loggingIn: '登录中...',
      continueWithGoogle: '使用 Google 继续',
      continueWithGithub: '使用 GitHub 继续',
      or: '或',
      termsMessage: '登录即表示您同意我们的'
    }
  },

  // 生成器
  generator: {
    title: 'AI 视频生成器',
    subtitle: '使用 AI 将您的图像和文本转换为精彩视频',
    tabs: {
      imageToVideo: '图像转视频',
      textToVideo: '文本转视频'
    },
    imageUpload: {
      title: '上传您的图像',
      instruction: '点击或拖拽上传图像',
      formats: 'JPG、PNG 或 WEBP（最大 10MB）',
      button: '选择图像'
    },
    textInput: {
      title: '输入您的文本',
      instruction: '文本描述'
    },
    params: {
      duration: '视频时长',
      modelVersion: '模型版本',
      quality: '视频质量',
      prompt: '提示词',
      aspectRatio: '宽高比',
      motionMode: '运动模式',
      motionModeNormal: '普通',
      motionModeFast: '快速',
      negativePrompt: '负面提示词',
      seed: '随机种子',
      style: '风格预设',
      watermark: '添加水印',
      selectModel: '选择模型版本',
      selectStyle: '选择风格预设'
    },
    styles: {
      anime: '动漫',
      '3d_animation': '3D 动画',
      clay: '粘土',
      comic: '漫画',
      cyberpunk: '赛博朋克'
    },
    placeholders: {
      prompt: '描述您想在视频中看到的内容...',
      text: '描述您想创建的场景...',
      negativePrompt: '要在视频中避免的元素...',
      seed: '留空以使用随机种子'
    },
    tooltips: {
      no8sIn1080p: '1080p 质量不支持 8 秒视频',
      noFastIn1080p: '1080p 质量不支持快速运动',
      noFastIn8s: '快速运动仅适用于 5 秒视频',
      motionModeDesc: '控制视频中的运动速度',
      v3_5: '带有风格预设的旧版模型',
      v4: '具有良好质量和速度的标准模型',
      v4_5: '质量最佳的最新模型'
    },
    preview: {
      title: '预览',
      emptyState: '您生成的视频将在此处显示',
      generating: '正在生成视频',
      complete: '完成',
      error: '生成视频失败，请重试。',
      tryAgain: '出现错误，请尝试不同的设置。',
      videoId: '视频 ID',
      videoReady: '视频已准备就绪'
    },
    errors: {
      invalidFileType: '请仅上传 JPG、PNG 或 WEBP 图像',
      imageRequired: '请上传图像',
      textRequired: '请输入文本描述',
      promptRequired: '请输入提示词',
      seedRange: '种子值必须在 0 到 2147483647 之间',
      fileTooLarge: '文件大小必须小于 20MB'
    },
    advancedOptions: '高级选项',
    generating: '生成中...',
    generateButton: '生成视频',
    loginRequired: '请登录以生成视频'
  },

  // 历史记录
  history: {
    title: '生成历史',
    totalRecords: '共 {count} 条记录',
    filters: {
      all: '全部历史',
      textToVideo: '文本转视频',
      imageToVideo: '图像转视频'
    },
    quickActions: {
      generateNew: '生成新视频'
    },
    currentView: '当前显示:',
    refreshData: '刷新',
    empty: {
      title: {
        all: '暂无历史记录',
        textToVideo: '暂无文本转视频记录',
        imageToVideo: '暂无图像转视频记录'
      },
      description: {
        all: '开始生成您的第一个视频吧！',
        textToVideo: '尝试使用文本生成您的第一个视频！',
        imageToVideo: '上传图像生成您的第一个视频！'
      },
      action: '开始生成'
    },
    pagination: {
      page: '第 {current} 页，共 {total} 页'
    },
    status: {
      completed: '已完成',
      processing: '生成中',
      failed: '失败',
      pending: '等待中'
    },
    timeAgo: {
      justNow: '刚刚',
      minutesAgo: '{minutes}分钟前',
      hoursAgo: '{hours}小时前',
      daysAgo: '{days}天前'
    },
    processingMessage: '生成中，请稍候...',
    failedMessage: '生成失败，请重试'
  },

  // 历史详情
  historyDetail: {
    backToHistory: '返回历史记录',
    generatedVideo: '生成的视频',
    downloading: '下载中...',
    downloadVideo: '下载视频',
    videoUnavailable: '视频文件不可用',
    downloadSuccess: '视频下载成功！文件名: {fileName}',
    downloadFailed: '下载失败，请稍后重试',
    openInNewTab: '已在新窗口中打开下载链接',

    videoStatus: {
      pending: '视频正在等待生成',
      processing: '视频正在生成中',
      failed: '视频生成失败',
      noVideo: '暂无视频'
    },

    info: {
      createdAt: '创建时间',
      videoSize: '视频大小',
      modelVersion: '模型版本',
      duration: '视频时长',
      videoDimensions: '视频尺寸',
      resolution: '分辨率',
      quality: '视频质量',
      prompt: '提示词',
      sourceImage: '源图像',
      durationUnit: '秒'
    },

    type: {
      textToVideo: '文本转视频',
      imageToVideo: '图像转视频'
    },

    notFound: '记录不存在'
  },

  // 导航
  nav: {
    settings: '设置'
  },

  // 导航栏
  navbar: {
    home: '首页',
    generate: '生成',
    pricing: '定价',
    login: '登录'
  },

  // 用户菜单
  user: {
    plan: '当前方案',
    upgrade: '升级',
    manage: '管理',
    credits: '积分',
    available: '可用',
    history: '生成历史',
    allHistory: '生成历史',
    viewAllHistory: '查看所有生成记录',
    logout: '退出登录'
  },

  // 主题
  theme: {
    toggle: '切换主题',
    switchToLight: '切换到浅色模式',
    switchToDark: '切换到深色模式'
  },

  // 定价
  pricing: {
    title: '选择您的方案',
    description: '简单透明的定价，随您成长。无隐藏费用或意外成本。',
    monthly: '月付',
    annual: '年付',
    save: '节省',
    popular: '最受欢迎',
    perMonth: '/月',
    perYear: '/年',

    plans: {
      free: {
        name: '免费版',
        description: '适合爱好者和休闲创作者进行实验。',
        features: {
          feature1: '每月 20 个视频积分',
          feature2: '720p 视频分辨率',
          feature3: '最长 5 秒视频'
        },
        limitations: {
          limitation1: '不可商业使用'
        },
        buttonText: '开始使用'
      },
      pro: {
        name: '专业版',
        description: '适合内容创作者和小型企业。',
        features: {
          feature1: '每月 200 个视频积分',
          feature2: '1080p 视频分辨率',
          feature3: '最长 15 秒视频',
          feature4: '优先渲染时间',
          feature5: '商业使用许可'
        },
        buttonText: '立即订阅'
      },
      enterprise: {
        name: '企业版',
        description: '适合有更高需求的机构和企业。',
        features: {
          feature1: '无限视频积分',
          feature2: '4K 视频分辨率',
          feature3: '最长 30+ 秒视频',
          feature4: '优先支持',
          feature5: '自定义模型训练',
          feature6: 'API 访问'
        },
        buttonText: '联系销售'
      }
    },

    hero: {
      title: '简单透明的定价',
      description: '为您的创意需求选择完美方案，无隐藏费用。'
    },

    comparison: {
      title: '方案对比',
      description: '查看详细功能对比，帮助您选择适合的方案。',
      feature: '功能',
      free: '免费版',
      pro: '专业版',
      enterprise: '企业版',
      features: {
        videoLength: '最大视频时长',
        monthlyCredits: '月度积分',
        resolution: '最大分辨率',
        audioTracks: '音频轨道',
        customModels: '自定义模型训练',
        priorityRendering: '优先渲染',
        commercialUse: '商业使用权',
        prioritySupport: '优先支持',
        api: 'API 访问'
      },
      values: {
        videoLength: {
          free: '5秒',
          pro: '15秒',
          enterprise: '30+秒'
        },
        monthlyCredits: {
          free: '20',
          pro: '200',
          enterprise: '无限制'
        },
        resolution: {
          free: '720p',
          pro: '1080p',
          enterprise: '4K'
        },
        audioTracks: {
          free: '1',
          pro: '3',
          enterprise: '无限制'
        }
      }
    },

    faq: {
      title: '常见问题',
      description: '找到关于我们定价方案和计费的常见问题答案。',
      questions: {
        credits: {
          question: '什么是视频积分？',
          answer: '视频积分是在 Veo 3 上生成视频使用的货币。一个积分可以生成一个符合您方案规格的视频。积分每月在您的计费日期重置。'
        },
        payment: {
          question: '您接受哪些支付方式？',
          answer: '我们接受所有主要信用卡，包括 Visa、Mastercard、American Express 和 Discover。对于企业方案，我们还接受电汇和发票选项。'
        },
        cancel: {
          question: '我可以随时取消订阅吗？',
          answer: '是的，您可以随时取消订阅。您的访问权限将持续到当前计费周期结束。没有取消费用。'
        },
        refunds: {
          question: '您的退款政策是什么？',
          answer: '我们为新的专业版订阅提供 7 天退款保证。如果您对购买不满意，请在首次购买后 7 天内联系我们的支持团队获得全额退款。'
        },
        enterprise: {
          question: '您提供自定义企业定价吗？',
          answer: '是的，我们为有特定需求的企业客户提供定制定价。请联系我们的销售团队讨论您的需求并获得定制报价。'
        }
      }
    },

    cta: {
      title: '准备创建令人惊叹的 AI 视频了吗？',
      description: '加入数千名创作者和企业，使用 Veo 3 将想法变为现实。',
      button: '立即开始'
    }
  },

  // 页脚
  footer: {
    platform: '平台',
    home: '首页',
    generate: '生成',
    pricing: '定价',
    legal: '法律',
    termsOfService: '服务条款',
    privacyPolicy: '隐私政策',
    refundPolicy: '退款政策',
    contactUs: '联系我们',
    languages: '语言',
    allRightsReserved: '保留所有权利',
    independent: '是独立平台，与 Google 或其产品无关联。'
  },

  // 英雄区域
  hero: {
    title: 'Veo 3：带真实语音的 AI 视频生成',
    description: '生成完美同步音频的视频，包括音效、对话和环境音。用 Veo 3 让您的故事生动起来。',
    cta: '立即开始创作'
  },

  // 功能介绍
  features: {
    mainTitle: 'Veo 3 AI 视频生成器的主要功能',
    mainDescription: 'Veo 3 结合尖端 AI 技术，在一个工具中提供无缝的视频和音频生成。',
    audio: {
      title: '原生音频生成',
      description: '自动为您的视频添加音效、环境音和对话。'
    },
    lipSync: {
      title: '真实唇部同步',
      description: 'AI 完美匹配角色语音与嘴部动作，生成逼真效果。'
    },
    physics: {
      title: '基于物理的视频模拟',
      description: '视频反映真实世界的物理属性，实现自然运动和视觉效果。'
    },
    prompts: {
      title: '多种输入提示',
      description: '使用文本描述或图像参考生成视频。'
    },
    flow: {
      title: '与 Flow 应用集成',
      description: '通过结合 Veo 3 和 Google 的 Flow 视频编辑器轻松创建电影片段。'
    },
    vertex: {
      title: '在 Vertex AI 上可用',
      description: '企业用户可以通过 Google 的 Vertex AI 平台访问 Veo 3，进行可扩展的视频生成。'
    }
  },

  // 示例展示
  examples: {
    title: '探索用 Veo 3 创建的视频',
    description: '观看 AI 生成的视频示例，展示 Veo 3 的强大功能。'
  },

  // 使用教程
  howToUse: {
    title: '如何用 Veo 3 创建 AI 视频',
    description: '按照这些简单步骤使用 Veo 3 生成带同步音频的视频。',
    steps: {
      register: {
        title: '注册或登录',
        description: '创建账户或登录以访问 Veo 3。'
      },
      prompt: {
        title: '输入您的提示',
        description: '输入文本描述或上传图像来描述您想要的视频。'
      },
      audio: {
        title: '自定义音频',
        description: '添加音效、对话或环境音的说明来增强您的视频。'
      },
      generate: {
        title: '生成和查看',
        description: '让 Veo 3 生成您的视频，然后预览和下载您的 AI 生成片段。'
      }
    },
    cta: '开始您的第一个视频'
  },

  // 常见问题
  faq: {
    title: 'Veo 3 常见问题',
    description: '找到关于 Veo 3 AI 视频生成和音频功能的常见问题答案。',
    questions: {
      whatIsVeo3: {
        question: '什么是 Veo 3？',
        answer: 'Veo 3 是 Google 的 AI 工具，可以生成带同步音频的视频，包括音效和对话。'
      },
      longerVideos: {
        question: 'Veo 3 能生成超过 8 秒的视频吗？',
        answer: '目前，Veo 3 专注于创建高质量的 8 秒视频，未来更新中计划支持更长格式。'
      },
      commercialUse: {
        question: '我可以将 Veo 3 用于商业项目吗？',
        answer: '是的，Veo 3 通过适当的订阅方案和企业访问支持商业使用。'
      },
      audioTypes: {
        question: 'Veo 3 可以生成哪些类型的音频？',
        answer: '它可以创建环境音、角色对话和视频原生的真实音效。'
      },
      socialMedia: {
        question: '我可以在社交媒体上使用 Veo 3 视频吗？',
        answer: '是的，用 Veo 3 创建的视频可以分享到社交媒体平台，轻松创建引人入胜的内容。'
      },
      beginnerFriendly: {
        question: 'Veo 3 对初学者友好吗？',
        answer: '是的，Veo 3 提供简单的界面，适合没有技术技能的用户。'
      },
      comparison: {
        question: 'Veo 3 与其他 AI 视频工具相比如何？',
        answer: 'Veo 3 通过将视频与完美同步音频结合而在众多竞争对手中脱颖而出，这是少数竞争对手提供的功能。'
      }
    }
  },

  // 行动号召
  cta: {
    title: '开始创建令人惊叹的 AI 视频',
    description: '使用 Veo 3 生成带真实声音的专业质量视频。',
    buttonText: '开始使用'
  },

  // 展示区域
  showcase: {
    title: '当前热门',
    close: '关闭',
    videoPlaying: '正在播放视频 {id}',
    pressEscToClose: '按 ESC 键关闭'
  }
}; 