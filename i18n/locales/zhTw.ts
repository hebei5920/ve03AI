export default {
  // 通用
  common: {
    backToHome: '返回首頁',
    and: '和',
    terms: '服務條款',
    privacy: '隱私政策',
    loading: '載入中...',
    error: '錯誤',
    success: '成功',
    failed: '失敗',
    retry: '重試',
    close: '關閉',
    confirm: '確認',
    cancel: '取消',
    save: '儲存',
    edit: '編輯',
    delete: '刪除',
    download: '下載',
    upload: '上傳',
    refresh: '重新整理',
    back: '返回',
    next: '下一頁',
    previous: '上一頁',
    details: '詳情',
    all: '全部',
    create: '建立',
    generate: '生成',
    processing: '處理中',
    completed: '已完成',
    pending: '等待中',
    unknown: '未知',
    login: '登入'
  },

  // 認證
  auth: {
    signIn: {
      title: '登入您的帳戶',
      loggingIn: '登入中...',
      continueWithGoogle: '使用 Google 繼續',
      continueWithGithub: '使用 GitHub 繼續',
      or: '或',
      termsMessage: '登入即表示您同意我們的'
    }
  },

  // 生成器
  generator: {
    title: 'AI 影片產生器',
    subtitle: '使用 AI 將您的圖像和文字轉換為精彩影片',
    tabs: {
      imageToVideo: '圖像轉影片',
      textToVideo: '文字轉影片'
    },
    imageUpload: {
      title: '上傳您的圖像',
      instruction: '點擊或拖拽上傳圖像',
      formats: 'JPG、PNG 或 WEBP（最大 10MB）',
      button: '選擇圖像'
    },
    textInput: {
      title: '輸入您的文字',
      instruction: '文字描述'
    },
    params: {
      duration: '影片時長',
      modelVersion: '模型版本',
      quality: '影片品質',
      prompt: '提示詞',
      aspectRatio: '寬高比',
      motionMode: '運動模式',
      motionModeNormal: '普通',
      motionModeFast: '快速',
      negativePrompt: '負面提示詞',
      seed: '隨機種子',
      style: '風格預設',
      watermark: '新增浮水印',
      selectModel: '選擇模型版本',
      selectStyle: '選擇風格預設'
    },
    styles: {
      anime: '動漫',
      '3d_animation': '3D 動畫',
      clay: '粘土',
      comic: '漫畫',
      cyberpunk: '賽博龐克'
    },
    placeholders: {
      prompt: '描述您想在影片中看到的內容...',
      text: '描述您想建立的場景...',
      negativePrompt: '要在影片中避免的元素...',
      seed: '留空以使用隨機種子'
    },
    tooltips: {
      no8sIn1080p: '1080p 品質不支援 8 秒影片',
      noFastIn1080p: '1080p 品質不支援快速運動',
      noFastIn8s: '快速運動僅適用於 5 秒影片',
      motionModeDesc: '控制影片中的運動速度',
      v3_5: '帶有風格預設的舊版模型',
      v4: '具有良好品質和速度的標準模型',
      v4_5: '品質最佳的最新模型'
    },
    preview: {
      title: '預覽',
      emptyState: '您生成的影片將在此處顯示',
      generating: '正在生成影片',
      complete: '完成',
      error: '生成影片失敗，請重試。',
      tryAgain: '出現錯誤，請嘗試不同的設定。',
      videoId: '影片 ID',
      videoReady: '影片已準備就緒'
    },
    errors: {
      invalidFileType: '請僅上傳 JPG、PNG 或 WEBP 圖像',
      imageRequired: '請上傳圖像',
      textRequired: '請輸入文字描述',
      promptRequired: '請輸入提示詞',
      seedRange: '種子值必須在 0 到 2147483647 之間',
      fileTooLarge: '檔案大小必須小於 20MB'
    },
    advancedOptions: '進階選項',
    generating: '生成中...',
    generateButton: '生成影片',
    loginRequired: '請登入以生成影片'
  },

  // 歷史記錄
  history: {
    title: '生成歷史',
    totalRecords: '共 {count} 條記錄',
    filters: {
      all: '全部歷史',
      textToVideo: '文字轉影片',
      imageToVideo: '圖像轉影片'
    },
    quickActions: {
      generateNew: '生成新影片'
    },
    currentView: '目前顯示:',
    refreshData: '重新整理',
    empty: {
      title: {
        all: '暫無歷史記錄',
        textToVideo: '暫無文字轉影片記錄',
        imageToVideo: '暫無圖像轉影片記錄'
      },
      description: {
        all: '開始生成您的第一個影片吧！',
        textToVideo: '嘗試使用文字生成您的第一個影片！',
        imageToVideo: '上傳圖像生成您的第一個影片！'
      },
      action: '開始生成'
    },
    pagination: {
      page: '第 {current} 頁，共 {total} 頁'
    },
    status: {
      completed: '已完成',
      processing: '生成中',
      failed: '失敗',
      pending: '等待中'
    },
    timeAgo: {
      justNow: '剛剛',
      minutesAgo: '{minutes}分鐘前',
      hoursAgo: '{hours}小時前',
      daysAgo: '{days}天前'
    },
    processingMessage: '生成中，請稍候...',
    failedMessage: '生成失敗，請重試'
  },

  // 歷史詳情
  historyDetail: {
    backToHistory: '返回歷史記錄',
    generatedVideo: '生成的影片',
    downloading: '下載中...',
    downloadVideo: '下載影片',
    videoUnavailable: '影片檔案不可用',
    downloadSuccess: '影片下載成功！檔案名稱: {fileName}',
    downloadFailed: '下載失敗，請稍後重試',
    openInNewTab: '已在新視窗中開啟下載連結',

    videoStatus: {
      pending: '影片正在等待生成',
      processing: '影片正在生成中',
      failed: '影片生成失敗',
      noVideo: '暫無影片'
    },

    info: {
      createdAt: '建立時間',
      videoSize: '影片大小',
      modelVersion: '模型版本',
      duration: '影片時長',
      videoDimensions: '影片尺寸',
      resolution: '解析度',
      quality: '影片品質',
      prompt: '提示詞',
      sourceImage: '來源圖像',
      durationUnit: '秒'
    },

    type: {
      textToVideo: '文字轉影片',
      imageToVideo: '圖像轉影片'
    },

    notFound: '記錄不存在'
  },

  // 導航
  nav: {
    settings: '設定'
  },

  // 導航欄
  navbar: {
    home: '首頁',
    generate: '生成',
    pricing: '定價',
    login: '登入'
  },

  // 使用者選單
  user: {
    plan: '目前方案',
    upgrade: '升級',
    manage: '管理',
    credits: '積分',
    available: '可用',
    history: '生成歷史',
    allHistory: '生成歷史',
    viewAllHistory: '檢視所有生成記錄',
    logout: '登出'
  },

  // 主題
  theme: {
    toggle: '切換主題',
    switchToLight: '切換到淺色模式',
    switchToDark: '切換到深色模式'
  },

  // 定價
  pricing: {
    title: '選擇您的方案',
    description: '簡單透明的定價，隨您成長。無隱藏費用或意外成本。',
    monthly: '月付',
    annual: '年付',
    save: '節省',
    popular: '最受歡迎',
    perMonth: '/月',
    perYear: '/年',

    plans: {
      free: {
        name: '免費版',
        description: '適合愛好者和休閒創作者進行實驗。',
        features: {
          feature1: '每月 20 個影片積分',
          feature2: '720p 影片解析度',
          feature3: '最長 5 秒影片'
        },
        limitations: {
          limitation1: '不可商業使用'
        },
        buttonText: '開始使用'
      },
      pro: {
        name: '專業版',
        description: '適合內容創作者和小型企業。',
        features: {
          feature1: '每月 200 個影片積分',
          feature2: '1080p 影片解析度',
          feature3: '最長 15 秒影片',
          feature4: '優先渲染時間',
          feature5: '商業使用許可'
        },
        buttonText: '立即訂閱'
      },
      enterprise: {
        name: '企業版',
        description: '適合有更高需求的機構和企業。',
        features: {
          feature1: '無限影片積分',
          feature2: '4K 影片解析度',
          feature3: '最長 30+ 秒影片',
          feature4: '優先支援',
          feature5: '自訂模型訓練',
          feature6: 'API 存取'
        },
        buttonText: '聯絡銷售'
      }
    },

    hero: {
      title: '簡單透明的定價',
      description: '為您的創意需求選擇完美方案，無隱藏費用。'
    },

    comparison: {
      title: '方案對比',
      description: '查看詳細功能對比，幫助您選擇適合的方案。',
      feature: '功能',
      free: '免費版',
      pro: '專業版',
      enterprise: '企業版',
      features: {
        videoLength: '最大影片時長',
        monthlyCredits: '月度積分',
        resolution: '最大解析度',
        audioTracks: '音訊軌道',
        customModels: '自訂模型訓練',
        priorityRendering: '優先渲染',
        commercialUse: '商業使用權',
        prioritySupport: '優先支援',
        api: 'API 存取'
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
          enterprise: '無限制'
        },
        resolution: {
          free: '720p',
          pro: '1080p',
          enterprise: '4K'
        },
        audioTracks: {
          free: '1',
          pro: '3',
          enterprise: '無限制'
        }
      }
    },

    faq: {
      title: '常見問題',
      description: '找到關於我們定價方案和計費的常見問題答案。',
      questions: {
        credits: {
          question: '什麼是影片積分？',
          answer: '影片積分是在 Veo 3 上生成影片使用的貨幣。一個積分可以生成一個符合您方案規格的影片。積分每月在您的計費日期重置。'
        },
        payment: {
          question: '您接受哪些付款方式？',
          answer: '我們接受所有主要信用卡，包括 Visa、Mastercard、American Express 和 Discover。對於企業方案，我們還接受電匯和發票選項。'
        },
        cancel: {
          question: '我可以隨時取消訂閱嗎？',
          answer: '是的，您可以隨時取消訂閱。您的存取權限將持續到目前計費週期結束。沒有取消費用。'
        },
        refunds: {
          question: '您的退款政策是什麼？',
          answer: '我們為新的專業版訂閱提供 7 天退款保證。如果您對購買不滿意，請在首次購買後 7 天內聯絡我們的支援團隊獲得全額退款。'
        },
        enterprise: {
          question: '您提供自訂企業定價嗎？',
          answer: '是的，我們為有特定需求的企業客戶提供定製定價。請聯絡我們的銷售團隊討論您的需求並獲得定製報價。'
        }
      }
    },

    cta: {
      title: '準備建立令人驚嘆的 AI 影片了嗎？',
      description: '加入數千名創作者和企業，使用 Veo 3 將想法變為現實。',
      button: '立即開始'
    }
  },

  // 頁尾
  footer: {
    platform: '平台',
    home: '首頁',
    generate: '生成',
    pricing: '定價',
    legal: '法律',
    termsOfService: '服務條款',
    privacyPolicy: '隱私政策',
    refundPolicy: '退款政策',
    contactUs: '聯絡我們',
    languages: '語言',
    allRightsReserved: '保留所有權利',
    independent: '是獨立平台，與 Google 或其產品無關聯。'
  },

  // 英雄區域
  hero: {
    title: 'Veo 3：帶真實語音的 AI 影片生成',
    description: '生成完美同步音訊的影片，包括音效、對話和環境音。用 Veo 3 讓您的故事生動起來。',
    cta: '立即開始創作'
  },

  // 功能介紹
  features: {
    mainTitle: 'Veo 3 AI 影片產生器的主要功能',
    mainDescription: 'Veo 3 結合尖端 AI 技術，在一個工具中提供無縫的影片和音訊生成。',
    audio: {
      title: '原生音訊生成',
      description: '自動為您的影片新增音效、環境音和對話。'
    },
    lipSync: {
      title: '真實唇部同步',
      description: 'AI 完美匹配角色語音與嘴部動作，生成逼真效果。'
    },
    physics: {
      title: '基於物理的影片模擬',
      description: '影片反映真實世界的物理屬性，實現自然運動和視覺效果。'
    },
    prompts: {
      title: '多種輸入提示',
      description: '使用文字描述或圖像參考生成影片。'
    },
    flow: {
      title: '與 Flow 應用程式整合',
      description: '透過結合 Veo 3 和 Google 的 Flow 影片編輯器輕鬆建立電影片段。'
    },
    vertex: {
      title: '在 Vertex AI 上可用',
      description: '企業使用者可以透過 Google 的 Vertex AI 平台存取 Veo 3，進行可擴展的影片生成。'
    }
  },

  // 示例展示
  examples: {
    title: '探索用 Veo 3 建立的影片',
    description: '觀看 AI 生成的影片示例，展示 Veo 3 的強大功能。'
  },

  // 使用教學
  howToUse: {
    title: '如何用 Veo 3 建立 AI 影片',
    description: '按照這些簡單步驟使用 Veo 3 生成帶同步音訊的影片。',
    steps: {
      register: {
        title: '註冊或登入',
        description: '建立帳戶或登入以存取 Veo 3。'
      },
      prompt: {
        title: '輸入您的提示',
        description: '輸入文字描述或上傳圖像來描述您想要的影片。'
      },
      audio: {
        title: '自訂音訊',
        description: '新增音效、對話或環境音的說明來增強您的影片。'
      },
      generate: {
        title: '生成和查看',
        description: '讓 Veo 3 生成您的影片，然後預覽和下載您的 AI 生成片段。'
      }
    },
    cta: '開始您的第一個影片'
  },

  // 常見問題
  faq: {
    title: 'Veo 3 常見問題',
    description: '找到關於 Veo 3 AI 影片生成和音訊功能的常見問題答案。',
    questions: {
      whatIsVeo3: {
        question: '什麼是 Veo 3？',
        answer: 'Veo 3 是 Google 的 AI 工具，可以生成帶同步音訊的影片，包括音效和對話。'
      },
      longerVideos: {
        question: 'Veo 3 能生成超過 8 秒的影片嗎？',
        answer: '目前，Veo 3 專注於建立高品質的 8 秒影片，未來更新中計劃支援更長格式。'
      },
      commercialUse: {
        question: '我可以將 Veo 3 用於商業專案嗎？',
        answer: '是的，Veo 3 透過適當的訂閱方案和企業存取支援商業使用。'
      },
      audioTypes: {
        question: 'Veo 3 可以生成哪些類型的音訊？',
        answer: '它可以建立環境音、角色對話和影片原生的真實音效。'
      },
      socialMedia: {
        question: '我可以在社群媒體上使用 Veo 3 影片嗎？',
        answer: '是的，用 Veo 3 建立的影片可以分享到社群媒體平台，輕鬆建立引人入勝的內容。'
      },
      beginnerFriendly: {
        question: 'Veo 3 對初學者友好嗎？',
        answer: '是的，Veo 3 提供簡單的介面，適合沒有技術技能的使用者。'
      },
      comparison: {
        question: 'Veo 3 與其他 AI 影片工具相比如何？',
        answer: 'Veo 3 透過將影片與完美同步音訊結合而在眾多競爭對手中脫穎而出，這是少數競爭對手提供的功能。'
      }
    }
  },

  // 行動號召
  cta: {
    title: '開始建立令人驚嘆的 AI 影片',
    description: '使用 Veo 3 生成帶真實聲音的專業品質影片。',
    buttonText: '開始使用'
  },

  // 展示區域
  showcase: {
    title: '目前熱門',
    close: '關閉',
    videoPlaying: '正在播放影片 {id}',
    pressEscToClose: '按 ESC 鍵關閉'
  }
};