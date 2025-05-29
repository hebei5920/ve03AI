export default {
    // عام
    common: {
      backToHome: 'العودة إلى الرئيسية',
      and: 'و',
      terms: 'شروط الخدمة',
      privacy: 'سياسة الخصوصية',
      loading: 'جاري التحميل...',
      error: 'خطأ',
      success: 'نجاح',
      failed: 'فشل',
      retry: 'إعادة المحاولة',
      close: 'إغلاق',
      confirm: 'تأكيد',
      cancel: 'إلغاء',
      save: 'حفظ',
      edit: 'تعديل',
      delete: 'حذف',
      download: 'تحميل',
      upload: 'رفع',
      refresh: 'تحديث',
      back: 'رجوع',
      next: 'الصفحة التالية',
      previous: 'الصفحة السابقة',
      details: 'التفاصيل',
      all: 'الكل',
      create: 'إنشاء',
      generate: 'توليد',
      processing: 'جاري المعالجة',
      completed: 'مكتمل',
      pending: 'قيد الانتظار',
      unknown: 'غير معروف',
      login: 'تسجيل الدخول'
    },

    // المصادقة
    auth: {
      signIn: {
        title: 'تسجيل الدخول إلى حسابك',
        loggingIn: 'جاري تسجيل الدخول...',
        continueWithGoogle: 'المتابعة باستخدام Google',
        continueWithGithub: 'المتابعة باستخدام GitHub',
        or: 'أو',
        termsMessage: 'بتسجيل الدخول، فإنك توافق على'
      }
    },

    // المولد
    generator: {
      title: 'مولد الفيديو بالذكاء الاصطناعي',
      subtitle: 'استخدم الذكاء الاصطناعي لتحويل صورك ونصوصك إلى فيديوهات جذابة',
      tabs: {
        imageToVideo: 'من صورة إلى فيديو',
        textToVideo: 'من نص إلى فيديو'
      },
      imageUpload: {
        title: 'قم برفع صورتك',
        instruction: 'انقر أو اسحب لرفع صورة',
        formats: 'JPG أو PNG أو WEBP (الحد الأقصى 10 ميجابايت)',
        button: 'اختر صورة'
      },
      textInput: {
        title: 'أدخل نصك',
        instruction: 'وصف النص'
      },
      params: {
        duration: 'مدة الفيديو',
        modelVersion: 'إصدار النموذج',
        quality: 'جودة الفيديو',
        prompt: 'الوصف',
        aspectRatio: 'نسبة العرض إلى الارتفاع',
        motionMode: 'وضع الحركة',
        motionModeNormal: 'عادي',
        motionModeFast: 'سريع',
        negativePrompt: 'وصف سلبي',
        seed: 'بذرة عشوائية',
        style: 'نمط مسبق',
        watermark: 'إضافة علامة مائية',
        selectModel: 'اختر إصدار النموذج',
        selectStyle: 'اختر النمط المسبق'
      },
      styles: {
        anime: 'أنيمي',
        '3d_animation': 'رسوم متحركة ثلاثية الأبعاد',
        clay: 'صلصال',
        comic: 'كوميكس',
        cyberpunk: 'سايبربانك'
      },
      placeholders: {
        prompt: 'صف ما تريد رؤيته في الفيديو...',
        text: 'صف المشهد الذي تريد إنشاءه...',
        negativePrompt: 'العناصر التي تريد تجنبها في الفيديو...',
        seed: 'اتركه فارغاً للحصول على بذرة عشوائية'
      },
      tooltips: {
        no8sIn1080p: 'جودة 1080p لا تدعم فيديوهات 8 ثوانٍ',
        noFastIn1080p: 'جودة 1080p لا تدعم الحركة السريعة',
        noFastIn8s: 'الحركة السريعة متاحة فقط لفيديوهات 5 ثوانٍ',
        motionModeDesc: 'تحكم في سرعة الحركة في الفيديو',
        v3_5: 'نموذج سابق مع أنماط مسبقة',
        v4: 'نموذج قياسي بجودة وحركة جيدة',
        v4_5: 'أحدث نموذج بأفضل جودة'
      },
      preview: {
        title: 'معاينة',
        emptyState: 'ستظهر فيديوهاتك المُولدة هنا',
        generating: 'جاري توليد الفيديو',
        complete: 'مكتمل',
        error: 'تعذر توليد الفيديو، يرجى المحاولة مرة أخرى.',
        tryAgain: 'حدث خطأ، يرجى تجربة إعدادات مختلفة.',
        videoId: 'معرف الفيديو',
        videoReady: 'الفيديو جاهز'
      },
      errors: {
        invalidFileType: 'يرجى رفع صور JPG أو PNG أو WEBP فقط',
        imageRequired: 'يرجى رفع صورة',
        textRequired: 'يرجى إدخال وصف نصي',
        promptRequired: 'يرجى إدخال وصف',
        seedRange: 'يجب أن تكون قيمة البذرة بين 0 و 2147483647',
        fileTooLarge: 'يجب أن يكون حجم الملف أقل من 20 ميجابايت'
      },
      advancedOptions: 'خيارات متقدمة',
      generating: 'جاري التوليد...',
      generateButton: 'توليد فيديو',
      loginRequired: 'يرجى تسجيل الدخول لتوليد الفيديوهات'
    },

    // السجل
    history: {
      title: 'سجل التوليد',
      totalRecords: 'إجمالي {count} سجل',
      filters: {
        all: 'كل السجلات',
        textToVideo: 'من نص إلى فيديو',
        imageToVideo: 'من صورة إلى فيديو'
      },
      quickActions: {
        generateNew: 'توليد فيديو جديد'
      },
      currentView: 'العرض الحالي:',
      refreshData: 'تحديث',
      empty: {
        title: {
          all: 'لا يوجد سجل',
          textToVideo: 'لا توجد سجلات من نص إلى فيديو',
          imageToVideo: 'لا توجد سجلات من صورة إلى فيديو'
        },
        description: {
          all: 'ابدأ في توليد أول فيديو لك!',
          textToVideo: 'حاول توليد أول فيديو من النص!',
          imageToVideo: 'قم برفع صورة لتوليد أول فيديو!'
        },
        action: 'ابدأ التوليد'
      },
      pagination: {
        page: 'الصفحة {current} من {total}'
      },
      status: {
        completed: 'مكتمل',
        processing: 'جاري التوليد',
        failed: 'فشل',
        pending: 'قيد الانتظار'
      },
      timeAgo: {
        justNow: 'الآن',
        minutesAgo: 'منذ {minutes} دقيقة',
        hoursAgo: 'منذ {hours} ساعة',
        daysAgo: 'منذ {days} يوم'
      },
      processingMessage: 'جاري التوليد، يرجى الانتظار...',
      failedMessage: 'فشل التوليد، يرجى المحاولة مرة أخرى'
    },

    // تفاصيل السجل
    historyDetail: {
      backToHistory: 'العودة إلى السجل',
      generatedVideo: 'الفيديو المُولد',
      downloading: 'جاري التحميل...',
      downloadVideo: 'تحميل الفيديو',
      videoUnavailable: 'ملف الفيديو غير متوفر',
      downloadSuccess: 'تم تحميل الفيديو بنجاح! اسم الملف: {fileName}',
      downloadFailed: 'فشل التحميل، يرجى المحاولة لاحقاً',
      openInNewTab: 'فتح رابط التحميل في نافذة جديدة',

      videoStatus: {
        pending: 'في انتظار توليد الفيديو',
        processing: 'جاري توليد الفيديو',
        failed: 'فشل توليد الفيديو',
        noVideo: 'لا يوجد فيديو'
      },

      info: {
        createdAt: 'وقت الإنشاء',
        videoSize: 'حجم الفيديو',
        modelVersion: 'إصدار النموذج',
        duration: 'مدة الفيديو',
        videoDimensions: 'أبعاد الفيديو',
        resolution: 'الدقة',
        quality: 'جودة الفيديو',
        prompt: 'الوصف',
        sourceImage: 'الصورة المصدر',
        durationUnit: 'ثوانٍ'
      },

      type: {
        textToVideo: 'من نص إلى فيديو',
        imageToVideo: 'من صورة إلى فيديو'
      },

      notFound: 'السجل غير موجود'
    },

    // التنقل
    nav: {
      settings: 'الإعدادات'
    },

    // شريط التنقل
    navbar: {
      home: 'الرئيسية',
      generate: 'توليد',
      pricing: 'الأسعار',
      login: 'تسجيل الدخول'
    },

    // قائمة المستخدم
    user: {
      plan: 'الخطة الحالية',
      upgrade: 'ترقية',
      manage: 'إدارة',
      credits: 'الرصيد',
      available: 'المتوفر',
      history: 'سجل التوليد',
      allHistory: 'سجل التوليد',
      viewAllHistory: 'عرض جميع سجلات التوليد',
      logout: 'تسجيل الخروج'
    },

    // المظهر
    theme: {
      toggle: 'تبديل المظهر',
      switchToLight: 'التبديل إلى الوضع الفاتح',
      switchToDark: 'التبديل إلى الوضع الداكن'
    },

    // الأسعار
    pricing: {
      title: 'اختر خطتك',
      description: 'أسعار بسيطة وشفافة تنمو معك. بدون رسوم خفية أو تكاليف غير متوقعة.',
      monthly: 'شهري',
      annual: 'سنوي',
      save: 'وفر',
      popular: 'الأكثر شعبية',
      perMonth: '/شهر',
      perYear: '/سنة',

      plans: {
        free: {
          name: 'مجاني',
          description: 'مناسب للهواة والمبدعين العاديين الذين يريدون التجربة.',
          features: {
            feature1: '20 رصيد فيديو شهرياً',
            feature2: 'دقة فيديو 720p',
            feature3: 'فيديوهات حتى 5 ثوانٍ'
          },
          limitations: {
            limitation1: 'غير مخصص للاستخدام التجاري'
          },
          buttonText: 'ابدأ'
        },
        pro: {
          name: 'احترافي',
          description: 'مناسب لصانعي المحتوى والشركات الصغيرة.',
          features: {
            feature1: '200 رصيد فيديو شهرياً',
            feature2: 'دقة فيديو 1080p',
            feature3: 'فيديوهات حتى 15 ثانية',
            feature4: 'وقت معالجة ذو أولوية',
            feature5: 'ترخيص للاستخدام التجاري'
          },
          buttonText: 'اشترك الآن'
        },
        enterprise: {
          name: 'الشركات',
          description: 'مناسب للوكالات والشركات ذات المتطلبات المتقدمة.',
          features: {
            feature1: 'رصيد فيديو غير محدود',
            feature2: 'دقة فيديو 4K',
            feature3: 'فيديوهات 30+ ثانية',
            feature4: 'دعم ذو أولوية',
            feature5: 'تدريب نماذج مخصصة',
            feature6: 'وصول API'
          },
          buttonText: 'اتصل بالمبيعات'
        }
      },

      hero: {
        title: 'أسعار بسيطة وشفافة',
        description: 'اختر الخطة المناسبة لاحتياجاتك الإبداعية بدون رسوم خفية.'
      },

      comparison: {
        title: 'مقارنة الخطط',
        description: 'اطلع على مقارنة تفصيلية للميزات لمساعدتك في اختيار الخطة المناسبة.',
        feature: 'الميزة',
        free: 'مجاني',
        pro: 'احترافي',
        enterprise: 'الشركات',
        features: {
          videoLength: 'الحد الأقصى لمدة الفيديو',
          monthlyCredits: 'الرصيد الشهري',
          resolution: 'الحد الأقصى للدقة',
          audioTracks: 'المسارات الصوتية',
          customModels: 'تدريب نماذج مخصصة',
          priorityRendering: 'معالجة ذو أولوية',
          commercialUse: 'حقوق الاستخدام التجاري',
          prioritySupport: 'دعم ذو أولوية',
          api: 'وصول API'
        },
        values: {
          videoLength: {
            free: '5 ثوانٍ',
            pro: '15 ثانية',
            enterprise: '30+ ثانية'
          },
          monthlyCredits: {
            free: '20',
            pro: '200',
            enterprise: 'غير محدود'
          },
          resolution: {
            free: '720p',
            pro: '1080p',
            enterprise: '4K'
          },
          audioTracks: {
            free: '1',
            pro: '3',
            enterprise: 'غير محدود'
          }
        }
      },

      faq: {
        title: 'الأسئلة الشائعة',
        description: 'ابحث عن إجابات للأسئلة الشائعة حول خطط الأسعار والفوترة.',
        questions: {
          credits: {
            question: 'ما هي أرصدة الفيديو؟',
            answer: 'أرصدة الفيديو هي العملة المستخدمة لتوليد الفيديوهات في Veo 3. الرصيد الواحد يسمح بتوليد فيديو واحد وفقاً لمواصفات خطتك. يتم إعادة تعيين الأرصدة شهرياً في تاريخ الفوترة الخاص بك.'
          },
          payment: {
            question: 'ما هي طرق الدفع المقبولة؟',
            answer: 'نقبل جميع بطاقات الائتمان الرئيسية، بما في ذلك Visa و Mastercard و American Express و Discover. بالنسبة لخطط الشركات، نقبل أيضاً التحويلات المصرفية وخيارات الفوترة.'
          },
          cancel: {
            question: 'هل يمكنني إلغاء اشتراكي في أي وقت؟',
            answer: 'نعم، يمكنك إلغاء اشتراكك في أي وقت. سيستمر وصولك حتى نهاية فترة الفوترة الحالية. لا توجد رسوم إلغاء.'
          },
          refunds: {
            question: 'ما هي سياسة الاسترداد؟',
            answer: 'نقدم ضمان استرداد لمدة 7 أيام للاشتراكات الاحترافية الجديدة. إذا لم تكن راضياً عن شرائك، اتصل بفريق الدعم خلال 7 أيام من الشراء الأولي للحصول على استرداد كامل.'
          },
          enterprise: {
            question: 'هل تقدمون أسعاراً مخصصة للشركات؟',
            answer: 'نعم، نقدم أسعاراً مخصصة للعملاء من الشركات ذوي المتطلبات الخاصة. يرجى الاتصال بفريق المبيعات لمناقشة احتياجاتك والحصول على عرض سعر مخصص.'
          }
        }
      },

      cta: {
        title: 'هل أنت مستعد لإنشاء فيديوهات مذهلة بالذكاء الاصطناعي؟',
        description: 'انضم إلى آلاف المبدعين والشركات الذين يستخدمون Veo 3 لإحياء أفكارهم.',
        button: 'ابدأ الآن'
      }
    },

    // التذييل
    footer: {
      platform: 'المنصة',
      home: 'الرئيسية',
      generate: 'توليد',
      pricing: 'الأسعار',
      legal: 'قانوني',
      termsOfService: 'شروط الخدمة',
      privacyPolicy: 'سياسة الخصوصية',
      refundPolicy: 'سياسة الاسترداد',
      contactUs: 'اتصل بنا',
      languages: 'اللغات',
      allRightsReserved: 'جميع الحقوق محفوظة',
      independent: 'هي منصة مستقلة غير مرتبطة بـ Google أو منتجاته.'
    },

    // القسم الرئيسي
    hero: {
      title: 'Veo 3: توليد فيديو بالذكاء الاصطناعي مع أصوات حقيقية',
      description: 'قم بتوليد فيديوهات مع صوت متزامن بالكامل، بما في ذلك المؤثرات الصوتية والحوارات والصوت المحيط. أحيِ قصصك مع Veo 3.',
      cta: 'ابدأ الإنشاء الآن'
    },

    // الميزات
    features: {
      mainTitle: 'الميزات الرئيسية لمولد الفيديو بالذكاء الاصطناعي Veo 3',
      mainDescription: 'يجمع Veo 3 بين تقنيات الذكاء الاصطناعي المتطورة لتوفير توليد فيديو وصوت سلس في أداة واحدة.',
      audio: {
        title: 'توليد صوت أصلي',
        description: 'أضف تلقائياً المؤثرات الصوتية والصوت المحيط والحوارات إلى فيديوهاتك.'
      },
      lipSync: {
        title: 'مزامنة شفاه واقعية',
        description: 'يقوم الذكاء الاصطناعي بمزامنة كلام الشخصيات مع حركات الفم بشكل مثالي، مما يخلق تأثيرات واقعية.'
      },
      physics: {
        title: 'نمذجة فيديو قائمة على الفيزياء',
        description: 'تعكس الفيديوهات الخصائص الفيزيائية للعالم الحقيقي، مما يضمن حركات وتأثيرات بصرية طبيعية.'
      },
      prompts: {
        title: 'مدخلات متعددة',
        description: 'استخدم أوصاف نصية أو مراجع صور لتوليد الفيديوهات.'
      },
      flow: {
        title: 'تكامل مع تطبيق Flow',
        description: 'أنشئ مقاطع سينمائية بسهولة من خلال ربط Veo 3 مع محرر الفيديو Flow من Google.'
      },
      vertex: {
        title: 'متوفر على Vertex AI',
        description: 'يمكن للمستخدمين من الشركات الوصول إلى Veo 3 من خلال منصة Vertex AI من Google لتوليد فيديو قابل للتطوير.'
      }
    },

    // الأمثلة
    examples: {
      title: 'استكشف الفيديوهات المنشأة باستخدام Veo 3',
      description: 'شاهد أمثلة على الفيديوهات المُولدة بالذكاء الاصطناعي التي تُظهر قدرات Veo 3 القوية.'
    },

    // كيفية الاستخدام
    howToUse: {
      title: 'كيفية إنشاء فيديوهات بالذكاء الاصطناعي باستخدام Veo 3',
      description: 'اتبع هذه الخطوات البسيطة لإنشاء فيديوهات مع صوت متزامن باستخدام Veo 3.',
      steps: {
        register: {
          title: 'سجل أو سجل الدخول',
          description: 'أنشئ حساباً أو سجل الدخول للوصول إلى Veo 3.'
        },
        prompt: {
          title: 'أدخل وصفك',
          description: 'أدخل وصفاً نصياً أو ارفع صورة لوصف الفيديو المطلوب.'
        },
        audio: {
          title: 'خصص الصوت',
          description: 'أضف تعليمات للمؤثرات الصوتية أو الحوارات أو الصوت المحيط لتحسين فيديوك.'
        },
        generate: {
          title: 'توليد وعرض',
          description: 'دع Veo 3 يقوم بتوليد فيديوك، ثم اعرض وقم بتحميل المقطع المُولد بالذكاء الاصطناعي.'
        }
      },
      cta: 'ابدأ فيديوك الأول'
    },

    // الأسئلة الشائعة
    faq: {
      title: 'الأسئلة الشائعة حول Veo 3',
      description: 'ابحث عن إجابات للأسئلة الشائعة حول توليد الفيديو بالذكاء الاصطناعي وميزات الصوت في Veo 3.',
      questions: {
        whatIsVeo3: {
          question: 'ما هو Veo 3؟',
          answer: 'Veo 3 هو أداة ذكاء اصطناعي من Google تقوم بتوليد فيديوهات مع صوت متزامن، بما في ذلك المؤثرات الصوتية والحوارات.'
        },
        longerVideos: {
          question: 'هل يمكن لـ Veo 3 توليد فيديوهات أطول من 8 ثوانٍ؟',
          answer: 'حالياً، يركز Veo 3 على إنشاء فيديوهات عالية الجودة مدتها 8 ثوانٍ، مع خطط لدعم التنسيقات الأطول في التحديثات المستقبلية.'
        },
        commercialUse: {
          question: 'هل يمكنني استخدام Veo 3 للمشاريع التجارية؟',
          answer: 'نعم، يدعم Veo 3 الاستخدام التجاري من خلال خطط الاشتراك المناسبة والوصول للشركات.'
        },
        audioTypes: {
          question: 'ما نوع الصوت الذي يمكن لـ Veo 3 توليده؟',
          answer: 'يمكنه إنشاء صوت محيط وحوارات شخصيات ومؤثرات صوتية واقعية أصلية للفيديوهات.'
        },
        socialMedia: {
          question: 'هل يمكنني استخدام فيديوهات Veo 3 على وسائل التواصل الاجتماعي؟',
          answer: 'نعم، يمكن مشاركة الفيديوهات المنشأة باستخدام Veo 3 على منصات وسائل التواصل الاجتماعي، مما يسهل إنشاء محتوى جذاب.'
        },
        beginnerFriendly: {
          question: 'هل Veo 3 مناسب للمبتدئين؟',
          answer: 'نعم، يوفر Veo 3 واجهة بسيطة مناسبة للمستخدمين بدون مهارات تقنية.'
        },
        comparison: {
          question: 'كيف يقارن Veo 3 مع أدوات الفيديو الأخرى بالذكاء الاصطناعي؟',
          answer: 'يتميز Veo 3 عن العديد من المنافسين بدمج الفيديو مع صوت متزامن بالكامل - وهي ميزة يقدمها عدد قليل من المنافسين.'
        }
      }
    },

    // دعوة للعمل
    cta: {
      title: 'ابدأ في إنشاء فيديوهات مذهلة بالذكاء الاصطناعي',
      description: 'استخدم Veo 3 لتوليد فيديوهات احترافية الجودة مع أصوات حقيقية.',
      buttonText: 'ابدأ'
    },

    // المعرض
    showcase: {
      title: 'الرائج حالياً',
      close: 'إغلاق',
      videoPlaying: 'جاري تشغيل الفيديو {id}',
      pressEscToClose: 'اضغط ESC للإغلاق'
    }
}; 