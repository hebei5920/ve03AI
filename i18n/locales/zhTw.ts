export default {
  // 导航
  nav: {
    settings: '設定'
  },
  
  // 导航栏
  navbar: {
    home: '首頁',
    generate: '生成',
    pricing: '定價',
    login: '登錄',
    signUp: '註冊'
  },
  
  // 定价页面
  pricing: {
    title: '選擇您的方案',
    description: '簡單，透明的定價與您一起成長。沒有隱藏費用或意外成本。',
    monthly: '月付',
    annual: '年付',
    save: '節省',
    popular: '最熱門',
    perMonth: '/月',
    perYear: '/年',
    
    plans: {
      free: {
        name: '免費',
        description: '適合業餘愛好者和休閒創作者嘗試實驗。',
        features: {
          feature1: '每月20個視頻點數',
          feature2: '720p視頻解析度',
          feature3: '最多5秒視頻',
        },
        limitations: {
          limitation1: '不可用於商業用途',
        },
        buttonText: '開始使用',
      },
      pro: {
        name: '專業',
        description: '適合內容創作者和小型企業。',
        features: {
          feature1: '每月200個視頻點數',
          feature2: '1080p視頻解析度',
          feature3: '最多15秒視頻',
          feature4: '優先渲染時間',
          feature5: '商業使用授權',
        },
        buttonText: '立即訂閱',
      },
      enterprise: {
        name: '企業',
        description: '適合需要高容量的代理商和企業。',
        features: {
          feature1: '無限視頻點數',
          feature2: '4K視頻解析度',
          feature3: '最多30+秒視頻',
          feature4: '優先支持',
          feature5: '自訂模型訓練',
          feature6: 'API訪問',
        },
        buttonText: '聯繫銷售',
      },
    },
    
    hero: {
      title: '簡單，透明的定價',
      description: '為您的創意需求選擇完美的方案，沒有隱藏費用。',
    },
    
    comparison: {
      title: '方案比較',
      description: '查看詳細的功能比較，幫助您選擇適合您需求的正確方案。',
      feature: '功能',
      free: '免費',
      pro: '專業',
      enterprise: '企業',
      features: {
        videoLength: '最大視頻長度',
        monthlyCredits: '每月點數',
        resolution: '最大解析度',
        audioTracks: '音軌數量',
        customModels: '自訂模型訓練',
        priorityRendering: '優先渲染',
        commercialUse: '商業使用權',
        prioritySupport: '優先支持',
        api: 'API訪問',
      },
    },
    
    faq: {
      title: '常見問題',
      description: '查找有關我們定價方案和計費的常見問題的答案。',
      questions: {
        credits: {
          question: '什麼是視頻點數？',
          answer: '視頻點數是在Veo 3上生成視頻的貨幣。一個點數允許您生成符合您方案允許規格的一個視頻。點數在每個計費日每月重置。',
        },
        payment: {
          question: '您接受哪些付款方式？',
          answer: '我們接受所有主要信用卡，包括Visa、Mastercard、American Express和Discover。對於企業方案，我們還接受電匯和發票選項。',
        },
        cancel: {
          question: '我可以隨時取消訂閱嗎？',
          answer: '是的，您可以隨時取消訂閱。您的訪問權限將持續到當前計費期結束。沒有取消費用。',
        },
        refunds: {
          question: '您的退款政策是什麼？',
          answer: '我們為新的專業訂閱提供7天退款保證。如果您對購買不滿意，請在首次購買後7天內聯繫我們的支持團隊，獲得全額退款。',
        },
        enterprise: {
          question: '您提供定制的企業定價嗎？',
          answer: '是的，我們為有特定需求的企業客戶提供定制定價。請聯繫我們的銷售團隊討論您的需求並獲得量身定制的報價。',
        },
      },
    },
    
    cta: {
      title: '準備好創建令人驚嘆的AI視頻了嗎？',
      description: '加入數千名使用Veo 3實現創意的創作者和企業。',
      button: '立即開始使用',
    },
  },
  
  // 页脚
  footer: {
    platform: '平台',
    home: '首頁',
    generate: '生成',
    pricing: '定價',
    legal: '法律',
    termsOfService: '服務條款',
    privacyPolicy: '隱私政策',
    refundPolicy: '退款政策',
    contactUs: '聯繫我們',
    languages: '語言',
    allRightsReserved: '版權所有',
    independent: '是一個獨立平台，與Google或其產品沒有關聯。'
  },
  
  // 首页英雄部分
  hero: {
    title: 'Veo 3：帶有真實聲音的AI視頻生成',
    description: '生成音頻完美同步的視頻，包括音效、對話和環境噪音。使用Veo 3讓您的故事栩栩如生。',
    cta: '立即開始創建'
  },
  
  // 特性部分
  features: {
    mainTitle: 'Veo 3 AI視頻生成器的關鍵特性',
    mainDescription: 'Veo 3結合尖端AI技術，提供視頻和音頻生成於一體的無縫工具。',
    audio: {
      title: '原生音頻生成',
      description: '自動為視頻添加音效、環境音和對話。'
    },
    lipSync: {
      title: '真實的唇同步',
      description: 'AI完美匹配角色講話與嘴部運動，生成逼真效果。'
    },
    physics: {
      title: '基於物理的視頻模擬',
      description: '視頻反映真實世界的物理特性，實現自然的運動和視覺效果。'
    },
    prompts: {
      title: '多輸入提示',
      description: '使用文本描述或圖像參考生成視頻。'
    },
    flow: {
      title: '與Flow應用集成',
      description: '通過將Veo 3與谷歌的Flow視頻編輯器結合，輕鬆創建電影片段。'
    },
    vertex: {
      title: '可在Vertex AI上使用',
      description: '企業用戶可以通過谷歌的Vertex AI平台訪問Veo 3，實現可擴展的視頻生成。'
    }
  },
  
  // 示例部分
  examples: {
    title: '探索使用Veo 3創建的視頻',
    description: '觀看AI生成的視頻示例，展示Veo 3強大的能力。',
    copyLink: '複製鏈接'
  },
  
  // 如何使用部分
  howToUse: {
    title: '如何使用Veo 3創建AI視頻',
    description: '按照這些簡單步驟使用Veo 3生成同步音頻的視頻。',
    steps: {
      register: {
        title: '註冊或登錄',
        description: '創建一個賬戶或登錄以訪問Veo 3。'
      },
      prompt: {
        title: '輸入您的提示',
        description: '鍵入文本描述或上傳圖像，以描述您想要的視頻。'
      },
      audio: {
        title: '自定義音頻',
        description: '添加音效、對話或環境噪音的指令，以增強您視頻的效果。'
      },
      generate: {
        title: '生成並查看',
        description: '讓Veo 3生成您視頻，然後預覽並下載您生成的AI剪輯。'
      }
    },
    cta: '開始您的第一個視頻'
  },
  
  // 常见问题部分
  faq: {
    title: 'Veo 3常見問題',
    description: '找到關於Veo 3 AI視頻生成和音頻功能的常見問題答案。',
    questions: {
      whatIsVeo3: {
        question: '什麼是Veo 3？',
        answer: 'Veo 3是谷歌的AI工具，生成具有同步音頻的視頻，包括音效和對話。'
      },
      longerVideos: {
        question: 'Veo 3可以生成超過8秒的視頻嗎？',
        answer: '目前，Veo 3專注於創建高質量的8秒視頻，較長格式將在未來的更新中計劃。'
      },
      commercialUse: {
        question: '我可以將Veo 3用於商業項目嗎？',
        answer: '是的，Veo 3支持通過適當的訂閱計劃和企業訪問進行商業使用。'
      },
      audioTypes: {
        question: 'Veo 3可以生成什麼類型的音頻？',
        answer: '它可以創建環境聲音、角色對話和與視頻原生的真實音效。'
      },
      socialMedia: {
        question: '我可以在社交媒體上使用Veo 3視頻嗎？',
        answer: '是的，使用Veo 3創建的視頻可以共享到社交媒體平台，使得創建引人入勝的內容變得簡單。'
      },
      beginnerFriendly: {
        question: 'Veo 3對初學者來說容易使用嗎？',
        answer: '是的，Veo 3提供了適合沒有技術技能的用戶的簡單界面。'
      },
      comparison: {
        question: 'Veo 3與其他AI視頻工具相比如何？',
        answer: 'Veo 3通過將視頻與完美同步的音頻結合，使其在眾多競爭對手中脫穎而出，這是很少有競爭對手提供的功能。'
      }
    }
  },
  
  // 行动召唤部分
  cta: {
    title: '開始創建令人驚嘆的AI視頻',
    description: '使用Veo 3生成帶有真實聲音的專業品質視頻。',
    buttonText: '立即開始'
  },
  
  // 展示部分
  showcase: {
    title: '目前熱門',
    close: '關閉',
    videoPlaying: '正在播放視頻 {id}'
  }
};