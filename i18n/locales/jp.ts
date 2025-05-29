export default {
  // 共通
  common: {
    backToHome: 'ホームに戻る',
    and: 'と',
    terms: '利用規約',
    privacy: 'プライバシーポリシー',
    loading: '読み込み中...',
    error: 'エラー',
    success: '成功',
    failed: '失敗',
    retry: '再試行',
    close: '閉じる',
    confirm: '確認',
    cancel: 'キャンセル',
    save: '保存',
    edit: '編集',
    delete: '削除',
    download: 'ダウンロード',
    upload: 'アップロード',
    refresh: '更新',
    back: '戻る',
    next: '次のページ',
    previous: '前のページ',
    details: '詳細',
    all: 'すべて',
    create: '作成',
    generate: '生成',
    processing: '処理中',
    completed: '完了',
    pending: '待機中',
    unknown: '不明',
    login: 'ログイン'
  },

  // 認証
  auth: {
    signIn: {
      title: 'アカウントにログイン',
      loggingIn: 'ログイン中...',
      continueWithGoogle: 'Googleで続行',
      continueWithGithub: 'GitHubで続行',
      or: 'または',
      termsMessage: 'ログインすることで、当社の'
    }
  },

  // ジェネレーター
  generator: {
    title: 'AI動画ジェネレーター',
    subtitle: 'AIを使って画像とテキストを魅力的な動画に変換',
    tabs: {
      imageToVideo: '画像から動画',
      textToVideo: 'テキストから動画'
    },
    imageUpload: {
      title: '画像をアップロード',
      instruction: 'クリックまたはドラッグして画像をアップロード',
      formats: 'JPG、PNG、WEBP（最大10MB）',
      button: '画像を選択'
    },
    textInput: {
      title: 'テキストを入力',
      instruction: 'テキスト説明'
    },
    params: {
      duration: '動画の長さ',
      modelVersion: 'モデルバージョン',
      quality: '動画品質',
      prompt: 'プロンプト',
      aspectRatio: 'アスペクト比',
      motionMode: 'モーションモード',
      motionModeNormal: '通常',
      motionModeFast: '高速',
      negativePrompt: 'ネガティブプロンプト',
      seed: 'ランダムシード',
      style: 'スタイルプリセット',
      watermark: '透かしを追加',
      selectModel: 'モデルバージョンを選択',
      selectStyle: 'スタイルプリセットを選択'
    },
    styles: {
      anime: 'アニメ',
      '3d_animation': '3Dアニメーション',
      clay: 'クレイ',
      comic: 'コミック',
      cyberpunk: 'サイバーパンク'
    },
    placeholders: {
      prompt: '動画で見たいコンテンツを説明してください...',
      text: '作成したいシーンを説明してください...',
      negativePrompt: '動画で避けたい要素...',
      seed: 'ランダムシードを使用する場合は空白のままにしてください'
    },
    tooltips: {
      no8sIn1080p: '1080p品質では8秒動画はサポートされていません',
      noFastIn1080p: '1080p品質では高速モーションはサポートされていません',
      noFastIn8s: '高速モーションは5秒動画でのみ利用可能です',
      motionModeDesc: '動画内のモーション速度を制御',
      v3_5: 'スタイルプリセット付きの旧バージョンモデル',
      v4: '良質でスピードのあるスタンダードモデル',
      v4_5: '最高品質の最新モデル'
    },
    preview: {
      title: 'プレビュー',
      emptyState: '生成された動画がここに表示されます',
      generating: '動画を生成中',
      complete: '完了',
      error: '動画生成に失敗しました。もう一度お試しください。',
      tryAgain: 'エラーが発生しました。異なる設定をお試しください。',
      videoId: '動画ID',
      videoReady: '動画の準備が完了しました'
    },
    errors: {
      invalidFileType: 'JPG、PNG、WEBP画像のみをアップロードしてください',
      imageRequired: '画像をアップロードしてください',
      textRequired: 'テキスト説明を入力してください',
      promptRequired: 'プロンプトを入力してください',
      seedRange: 'シード値は0から2147483647の間である必要があります',
      fileTooLarge: 'ファイルサイズは20MB未満である必要があります'
    },
    advancedOptions: '高度なオプション',
    generating: '生成中...',
    generateButton: '動画を生成',
    loginRequired: '動画を生成するにはログインが必要です'
  },

  // 履歴
  history: {
    title: '生成履歴',
    totalRecords: '合計 {count} 件',
    filters: {
      all: 'すべての履歴',
      textToVideo: 'テキストから動画',
      imageToVideo: '画像から動画'
    },
    quickActions: {
      generateNew: '新しい動画を生成'
    },
    currentView: '現在の表示:',
    refreshData: '更新',
    empty: {
      title: {
        all: '履歴がありません',
        textToVideo: 'テキストから動画の記録がありません',
        imageToVideo: '画像から動画の記録がありません'
      },
      description: {
        all: '最初の動画を生成してみましょう！',
        textToVideo: 'テキストで最初の動画を生成してみましょう！',
        imageToVideo: '画像をアップロードして最初の動画を生成してみましょう！'
      },
      action: '生成を開始'
    },
    pagination: {
      page: '{total} ページ中 {current} ページ'
    },
    status: {
      completed: '完了',
      processing: '生成中',
      failed: '失敗',
      pending: '待機中'
    },
    timeAgo: {
      justNow: 'たった今',
      minutesAgo: '{minutes}分前',
      hoursAgo: '{hours}時間前',
      daysAgo: '{days}日前'
    },
    processingMessage: '生成中、お待ちください...',
    failedMessage: '生成に失敗しました。もう一度お試しください'
  },

  // 履歴詳細
  historyDetail: {
    backToHistory: '履歴に戻る',
    generatedVideo: '生成された動画',
    downloading: 'ダウンロード中...',
    downloadVideo: '動画をダウンロード',
    videoUnavailable: '動画ファイルが利用できません',
    downloadSuccess: '動画のダウンロードが成功しました！ファイル名: {fileName}',
    downloadFailed: 'ダウンロードに失敗しました。後ほど再試行してください',
    openInNewTab: '新しいウィンドウでダウンロードリンクを開きました',

    videoStatus: {
      pending: '動画の生成を待機中',
      processing: '動画を生成中',
      failed: '動画生成に失敗',
      noVideo: '動画がありません'
    },

    info: {
      createdAt: '作成日時',
      videoSize: '動画サイズ',
      modelVersion: 'モデルバージョン',
      duration: '動画の長さ',
      videoDimensions: '動画サイズ',
      resolution: '解像度',
      quality: '動画品質',
      prompt: 'プロンプト',
      sourceImage: 'ソース画像',
      durationUnit: '秒'
    },

    type: {
      textToVideo: 'テキストから動画',
      imageToVideo: '画像から動画'
    },

    notFound: 'レコードが存在しません'
  },

  // ナビゲーション
  nav: {
    settings: '設定'
  },

  // ナビゲーションバー
  navbar: {
    home: 'ホーム',
    generate: '生成',
    pricing: '料金',
    login: 'ログイン'
  },

  // ユーザーメニュー
  user: {
    plan: '現在のプラン',
    upgrade: 'アップグレード',
    manage: '管理',
    credits: 'クレジット',
    available: '利用可能',
    history: '生成履歴',
    allHistory: '生成履歴',
    viewAllHistory: 'すべての生成記録を表示',
    logout: 'ログアウト'
  },

  // テーマ
  theme: {
    toggle: 'テーマ切り替え',
    switchToLight: 'ライトモードに切り替え',
    switchToDark: 'ダークモードに切り替え'
  },

  // 料金
  pricing: {
    title: 'プランを選択',
    description: 'シンプルで透明な料金体系。隠れた費用や予期しないコストはありません。',
    monthly: '月払い',
    annual: '年払い',
    save: '節約',
    popular: '最も人気',
    perMonth: '/月',
    perYear: '/年',

    plans: {
      free: {
        name: '無料プラン',
        description: '趣味や一般的なクリエイターの実験に適しています。',
        features: {
          feature1: '月20動画クレジット',
          feature2: '720p動画解像度',
          feature3: '最大5秒動画'
        },
        limitations: {
          limitation1: '商用利用不可'
        },
        buttonText: '始める'
      },
      pro: {
        name: 'プロプラン',
        description: 'コンテンツクリエイターや小規模ビジネスに適しています。',
        features: {
          feature1: '月200動画クレジット',
          feature2: '1080p動画解像度',
          feature3: '最大15秒動画',
          feature4: '優先レンダリング時間',
          feature5: '商用利用ライセンス'
        },
        buttonText: '今すぐ登録'
      },
      enterprise: {
        name: 'エンタープライズプラン',
        description: 'より高度なニーズを持つ機関や企業向け。',
        features: {
          feature1: '無制限動画クレジット',
          feature2: '4K動画解像度',
          feature3: '最大30+秒動画',
          feature4: '優先サポート',
          feature5: 'カスタムモデル訓練',
          feature6: 'APIアクセス'
        },
        buttonText: '営業に問い合わせ'
      }
    },

    hero: {
      title: 'シンプルで透明な料金',
      description: 'あなたのクリエイティブなニーズに完璧なプランを選択。隠れた費用はありません。'
    },

    comparison: {
      title: 'プラン比較',
      description: '詳細な機能比較を確認して、適切なプランを選択してください。',
      feature: '機能',
      free: '無料プラン',
      pro: 'プロプラン',
      enterprise: 'エンタープライズプラン',
      features: {
        videoLength: '最大動画長',
        monthlyCredits: '月間クレジット',
        resolution: '最大解像度',
        audioTracks: 'オーディオトラック',
        customModels: 'カスタムモデル訓練',
        priorityRendering: '優先レンダリング',
        commercialUse: '商用利用権',
        prioritySupport: '優先サポート',
        api: 'APIアクセス'
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
          enterprise: '無制限'
        },
        resolution: {
          free: '720p',
          pro: '1080p',
          enterprise: '4K'
        },
        audioTracks: {
          free: '1',
          pro: '3',
          enterprise: '無制限'
        }
      }
    },

    faq: {
      title: 'よくある質問',
      description: '料金プランと請求に関するよくある質問の回答を見つけてください。',
      questions: {
        credits: {
          question: '動画クレジットとは何ですか？',
          answer: '動画クレジットはVeo 3で動画を生成するために使用される通貨です。1クレジットでプランの仕様に従って1つの動画を生成できます。クレジットは請求日に毎月リセットされます。'
        },
        payment: {
          question: 'どのような支払い方法を受け付けていますか？',
          answer: 'Visa、Mastercard、American Express、Discoverを含むすべての主要なクレジットカードを受け付けています。エンタープライズプランでは、電信送金と請求書オプションも利用できます。'
        },
        cancel: {
          question: 'いつでも登録をキャンセルできますか？',
          answer: 'はい、いつでも登録をキャンセルできます。現在の請求期間が終了するまでアクセス権は継続されます。キャンセル料金はありません。'
        },
        refunds: {
          question: '返金ポリシーはどうなっていますか？',
          answer: '新しいプロプラン登録に対して7日間の返金保証を提供しています。購入に満足されない場合は、初回購入から7日以内にサポートチームに連絡して全額返金を受けてください。'
        },
        enterprise: {
          question: 'カスタムエンタープライズ料金を提供していますか？',
          answer: 'はい、特定のニーズを持つ企業顧客にカスタム料金を提供しています。営業チームに連絡してニーズを話し合い、カスタム見積もりを取得してください。'
        }
      }
    },

    cta: {
      title: '素晴らしいAI動画を作成する準備はできましたか？',
      description: '数千人のクリエイターや企業と共に、Veo 3でアイデアを現実にしましょう。',
      button: '今すぐ始める'
    }
  },

  // フッター
  footer: {
    platform: 'プラットフォーム',
    home: 'ホーム',
    generate: '生成',
    pricing: '料金',
    legal: '法的事項',
    termsOfService: '利用規約',
    privacyPolicy: 'プライバシーポリシー',
    refundPolicy: '返金ポリシー',
    contactUs: 'お問い合わせ',
    languages: '言語',
    allRightsReserved: 'すべての権利を保有',
    independent: 'はGoogleやその製品とは関係のない独立したプラットフォームです。'
  },

  // ヒーローエリア
  hero: {
    title: 'Veo 3：リアルな音声付きAI動画生成',
    description: '音響効果、対話、環境音を含む完璧に同期された音声付き動画を生成。Veo 3であなたの物語を生き生きとさせましょう。',
    cta: '今すぐ創作を始める'
  },

  // 機能紹介
  features: {
    mainTitle: 'Veo 3 AI動画ジェネレーターの主な機能',
    mainDescription: 'Veo 3は最先端のAI技術を組み合わせ、1つのツールでシームレスな動画と音声生成を提供します。',
    audio: {
      title: 'ネイティブ音声生成',
      description: '動画に音響効果、環境音、対話を自動的に追加。'
    },
    lipSync: {
      title: 'リアルなリップシンク',
      description: 'AIがキャラクターの音声と口の動きを完璧に一致させ、リアルな効果を生成。'
    },
    physics: {
      title: '物理ベースの動画シミュレーション',
      description: '動画は現実世界の物理特性を反映し、自然な動きと視覚効果を実現。'
    },
    prompts: {
      title: '多様な入力プロンプト',
      description: 'テキスト説明や画像参照を使用して動画を生成。'
    },
    flow: {
      title: 'Flowアプリとの統合',
      description: 'Veo 3とGoogleのFlow動画エディターを組み合わせて映画クリップを簡単に作成。'
    },
    vertex: {
      title: 'Vertex AIで利用可能',
      description: '企業ユーザーはGoogleのVertex AIプラットフォームを通じてVeo 3にアクセスし、スケーラブルな動画生成が可能。'
    }
  },

  // サンプル展示
  examples: {
    title: 'Veo 3で作成された動画を探索',
    description: 'Veo 3の強力な機能を示すAI生成動画のサンプルを確認。'
  },

  // 使用チュートリアル
  howToUse: {
    title: 'Veo 3でAI動画を作成する方法',
    description: 'これらの簡単なステップに従って、Veo 3で同期音声付き動画を生成。',
    steps: {
      register: {
        title: '登録またはログイン',
        description: 'アカウントを作成するか、ログインしてVeo 3にアクセス。'
      },
      prompt: {
        title: 'プロンプトを入力',
        description: 'テキスト説明を入力するか、画像をアップロードして希望の動画を説明。'
      },
      audio: {
        title: '音声をカスタマイズ',
        description: '音響効果、対話、環境音の説明を追加して動画を強化。'
      },
      generate: {
        title: '生成と確認',
        description: 'Veo 3に動画を生成させ、AI生成クリップをプレビューしてダウンロード。'
      }
    },
    cta: '最初の動画を始める'
  },

  // よくある質問
  faq: {
    title: 'Veo 3よくある質問',
    description: 'Veo 3 AI動画生成と音声機能に関するよくある質問の回答を見つけてください。',
    questions: {
      whatIsVeo3: {
        question: 'Veo 3とは何ですか？',
        answer: 'Veo 3はGoogleのAIツールで、音響効果や対話を含む同期音声付き動画を生成できます。'
      },
      longerVideos: {
        question: 'Veo 3は8秒以上の動画を生成できますか？',
        answer: '現在、Veo 3は高品質な8秒動画の作成に重点を置いており、将来のアップデートでより長い形式をサポートする予定です。'
      },
      commercialUse: {
        question: 'Veo 3を商用プロジェクトに使用できますか？',
        answer: 'はい、Veo 3は適切な登録プランとエンタープライズアクセスを通じて商用利用をサポートしています。'
      },
      audioTypes: {
        question: 'Veo 3はどのような種類の音声を生成できますか？',
        answer: '環境音、キャラクターの対話、動画にネイティブなリアルな音響効果を作成できます。'
      },
      socialMedia: {
        question: 'Veo 3動画をソーシャルメディアで使用できますか？',
        answer: 'はい、Veo 3で作成された動画はソーシャルメディアプラットフォームで共有でき、魅力的なコンテンツを簡単に作成できます。'
      },
      beginnerFriendly: {
        question: 'Veo 3は初心者に優しいですか？',
        answer: 'はい、Veo 3は技術スキルのないユーザーにも適したシンプルなインターフェースを提供しています。'
      },
      comparison: {
        question: 'Veo 3は他のAI動画ツールと比べてどうですか？',
        answer: 'Veo 3は動画と完璧に同期された音声を組み合わせることで競合他社の中で際立っており、これは少数の競合他社が提供する機能です。'
      }
    }
  },

  // コールトゥアクション
  cta: {
    title: '素晴らしいAI動画の作成を始めましょう',
    description: 'Veo 3を使用してリアルなサウンド付きのプロフェッショナル品質の動画を生成。',
    buttonText: '使い始める'
  },

  // ショーケースエリア
  showcase: {
    title: '現在人気',
    close: '閉じる',
    videoPlaying: '動画 {id} を再生中',
    pressEscToClose: 'ESCキーを押して閉じる'
  }
};