export default {
    // 공통
    common: {
      backToHome: '홈으로 돌아가기',
      and: '및',
      terms: '서비스 약관',
      privacy: '개인정보 처리방침',
      loading: '로딩 중...',
      error: '오류',
      success: '성공',
      failed: '실패',
      retry: '다시 시도',
      close: '닫기',
      confirm: '확인',
      cancel: '취소',
      save: '저장',
      edit: '편집',
      delete: '삭제',
      download: '다운로드',
      upload: '업로드',
      refresh: '새로고침',
      back: '뒤로',
      next: '다음 페이지',
      previous: '이전 페이지',
      details: '상세 정보',
      all: '전체',
      create: '생성',
      generate: '생성하기',
      processing: '처리 중',
      completed: '완료됨',
      pending: '대기 중',
      unknown: '알 수 없음',
      login: '로그인'
    },

    // 인증
    auth: {
      signIn: {
        title: '계정에 로그인',
        loggingIn: '로그인 중...',
        continueWithGoogle: 'Google로 계속하기',
        continueWithGithub: 'GitHub로 계속하기',
        or: '또는',
        termsMessage: '로그인하면 다음에 동의하게 됩니다'
      }
    },

    // 생성기
    generator: {
      title: 'AI 비디오 생성기',
      subtitle: 'AI를 사용하여 이미지와 텍스트를 매력적인 비디오로 변환하세요',
      tabs: {
        imageToVideo: '이미지에서 비디오로',
        textToVideo: '텍스트에서 비디오로'
      },
      imageUpload: {
        title: '이미지 업로드',
        instruction: '클릭하거나 드래그하여 이미지 업로드',
        formats: 'JPG, PNG 또는 WEBP (최대 10MB)',
        button: '이미지 선택'
      },
      textInput: {
        title: '텍스트 입력',
        instruction: '텍스트 설명'
      },
      params: {
        duration: '비디오 길이',
        modelVersion: '모델 버전',
        quality: '비디오 품질',
        prompt: '프롬프트',
        aspectRatio: '화면 비율',
        motionMode: '모션 모드',
        motionModeNormal: '일반',
        motionModeFast: '빠름',
        negativePrompt: '네거티브 프롬프트',
        seed: '랜덤 시드',
        style: '스타일 프리셋',
        watermark: '워터마크 추가',
        selectModel: '모델 버전 선택',
        selectStyle: '스타일 프리셋 선택'
      },
      styles: {
        anime: '애니메이션',
        '3d_animation': '3D 애니메이션',
        clay: '클레이',
        comic: '만화',
        cyberpunk: '사이버펑크'
      },
      placeholders: {
        prompt: '비디오에서 보고 싶은 것을 설명하세요...',
        text: '만들고 싶은 장면을 설명하세요...',
        negativePrompt: '비디오에서 피하고 싶은 요소들...',
        seed: '랜덤 시드를 위해 비워두세요'
      },
      tooltips: {
        no8sIn1080p: '1080p 품질은 8초 비디오를 지원하지 않습니다',
        noFastIn1080p: '1080p 품질은 빠른 모션을 지원하지 않습니다',
        noFastIn8s: '빠른 모션은 5초 비디오에서만 사용 가능합니다',
        motionModeDesc: '비디오의 모션 속도를 제어합니다',
        v3_5: '스타일 프리셋이 있는 이전 모델',
        v4: '좋은 품질과 모션을 가진 표준 모델',
        v4_5: '최고 품질의 최신 모델'
      },
      preview: {
        title: '미리보기',
        emptyState: '생성된 비디오가 여기에 표시됩니다',
        generating: '비디오 생성 중',
        complete: '완료됨',
        error: '비디오를 생성할 수 없습니다. 다시 시도해 주세요.',
        tryAgain: '오류가 발생했습니다. 다른 설정으로 시도해 보세요.',
        videoId: '비디오 ID',
        videoReady: '비디오 준비됨'
      },
      errors: {
        invalidFileType: 'JPG, PNG 또는 WEBP 이미지만 업로드해 주세요',
        imageRequired: '이미지를 업로드해 주세요',
        textRequired: '텍스트 설명을 입력해 주세요',
        promptRequired: '프롬프트를 입력해 주세요',
        seedRange: '시드 값은 0에서 2147483647 사이여야 합니다',
        fileTooLarge: '파일 크기는 20MB 미만이어야 합니다'
      },
      advancedOptions: '고급 옵션',
      generating: '생성 중...',
      generateButton: '비디오 생성',
      loginRequired: '비디오를 생성하려면 로그인해 주세요'
    },

    // 기록
    history: {
      title: '생성 기록',
      totalRecords: '총 {count}개 기록',
      filters: {
        all: '전체 기록',
        textToVideo: '텍스트에서 비디오로',
        imageToVideo: '이미지에서 비디오로'
      },
      quickActions: {
        generateNew: '새 비디오 생성'
      },
      currentView: '현재 보기:',
      refreshData: '새로고침',
      empty: {
        title: {
          all: '기록 없음',
          textToVideo: '텍스트에서 비디오로 변환 기록 없음',
          imageToVideo: '이미지에서 비디오로 변환 기록 없음'
        },
        description: {
          all: '첫 번째 비디오를 생성해 보세요!',
          textToVideo: '텍스트에서 첫 번째 비디오를 생성해 보세요!',
          imageToVideo: '이미지를 업로드하여 첫 번째 비디오를 생성해 보세요!'
        },
        action: '생성 시작'
      },
      pagination: {
        page: '페이지 {current}/{total}'
      },
      status: {
        completed: '완료됨',
        processing: '생성 중',
        failed: '실패',
        pending: '대기 중'
      },
      timeAgo: {
        justNow: '방금 전',
        minutesAgo: '{minutes}분 전',
        hoursAgo: '{hours}시간 전',
        daysAgo: '{days}일 전'
      },
      processingMessage: '생성 중입니다. 잠시만 기다려 주세요...',
      failedMessage: '생성 실패, 다시 시도해 주세요'
    },

    // 기록 상세
    historyDetail: {
      backToHistory: '기록으로 돌아가기',
      generatedVideo: '생성된 비디오',
      downloading: '다운로드 중...',
      downloadVideo: '비디오 다운로드',
      videoUnavailable: '비디오 파일을 사용할 수 없음',
      downloadSuccess: '비디오가 성공적으로 다운로드되었습니다! 파일명: {fileName}',
      downloadFailed: '다운로드 실패, 나중에 다시 시도해 주세요',
      openInNewTab: '다운로드 링크가 새 창에서 열립니다',

      videoStatus: {
        pending: '비디오 생성 대기 중',
        processing: '비디오 생성 중',
        failed: '비디오 생성 실패',
        noVideo: '비디오 없음'
      },

      info: {
        createdAt: '생성 시간',
        videoSize: '비디오 크기',
        modelVersion: '모델 버전',
        duration: '비디오 길이',
        videoDimensions: '비디오 크기',
        resolution: '해상도',
        quality: '비디오 품질',
        prompt: '프롬프트',
        sourceImage: '소스 이미지',
        durationUnit: '초'
      },

      type: {
        textToVideo: '텍스트에서 비디오로',
        imageToVideo: '이미지에서 비디오로'
      },

      notFound: '기록을 찾을 수 없음'
    },

    // 내비게이션
    nav: {
      settings: '설정'
    },

    // 내비게이션 바
    navbar: {
      home: '홈',
      generate: '생성',
      pricing: '가격',
      login: '로그인'
    },

    // 사용자 메뉴
    user: {
      plan: '현재 플랜',
      upgrade: '업그레이드',
      manage: '관리',
      credits: '크레딧',
      available: '사용 가능',
      history: '생성 기록',
      allHistory: '전체 생성 기록',
      viewAllHistory: '모든 생성 기록 보기',
      logout: '로그아웃'
    },

    // 테마
    theme: {
      toggle: '테마 전환',
      switchToLight: '라이트 모드로 전환',
      switchToDark: '다크 모드로 전환'
    },

    // 가격
    pricing: {
      title: '플랜 선택',
      description: '단순하고 투명한 가격으로 성장하세요. 숨겨진 요금이나 예상치 못한 비용이 없습니다.',
      monthly: '월간',
      annual: '연간',
      save: '절약',
      popular: '인기',
      perMonth: '/월',
      perYear: '/년',

      plans: {
        free: {
          name: '무료',
          description: '실험하고 싶은 취미 활동가와 일반 제작자에게 적합합니다.',
          features: {
            feature1: '월 20개 비디오 크레딧',
            feature2: '720p 비디오 해상도',
            feature3: '최대 5초 비디오'
          },
          limitations: {
            limitation1: '상업적 사용 불가'
          },
          buttonText: '시작하기'
        },
        pro: {
          name: '프로',
          description: '콘텐츠 제작자와 소규모 기업에 적합합니다.',
          features: {
            feature1: '월 200개 비디오 크레딧',
            feature2: '1080p 비디오 해상도',
            feature3: '최대 15초 비디오',
            feature4: '우선 처리 시간',
            feature5: '상업적 사용 라이선스'
          },
          buttonText: '지금 구독'
        },
        enterprise: {
          name: '기업용',
          description: '고급 요구사항이 있는 에이전시와 기업에 적합합니다.',
          features: {
            feature1: '무제한 비디오 크레딧',
            feature2: '4K 비디오 해상도',
            feature3: '30초 이상 비디오',
            feature4: '우선 지원',
            feature5: '맞춤형 모델 학습',
            feature6: 'API 액세스'
          },
          buttonText: '영업팀 문의'
        }
      },

      hero: {
        title: '단순하고 투명한 가격',
        description: '숨겨진 요금 없이 창의적인 요구사항에 맞는 적절한 플랜을 선택하세요.'
      },

      comparison: {
        title: '플랜 비교',
        description: '적절한 플랜을 선택하는 데 도움이 되는 자세한 기능 비교를 확인하세요.',
        feature: '기능',
        free: '무료',
        pro: '프로',
        enterprise: '기업용',
        features: {
          videoLength: '최대 비디오 길이',
          monthlyCredits: '월간 크레딧',
          resolution: '최대 해상도',
          audioTracks: '오디오 트랙',
          customModels: '맞춤형 모델 학습',
          priorityRendering: '우선 처리',
          commercialUse: '상업적 사용 권리',
          prioritySupport: '우선 지원',
          api: 'API 액세스'
        },
        values: {
          videoLength: {
            free: '5초',
            pro: '15초',
            enterprise: '30초 이상'
          },
          monthlyCredits: {
            free: '20',
            pro: '200',
            enterprise: '무제한'
          },
          resolution: {
            free: '720p',
            pro: '1080p',
            enterprise: '4K'
          },
          audioTracks: {
            free: '1',
            pro: '3',
            enterprise: '무제한'
          }
        }
      },

      faq: {
        title: '자주 묻는 질문',
        description: '가격 플랜과 결제에 관한 일반적인 질문에 대한 답변을 찾아보세요.',
        questions: {
          credits: {
            question: '비디오 크레딧이란 무엇인가요?',
            answer: '비디오 크레딧은 Veo 3에서 비디오를 생성하는 데 사용되는 통화입니다. 하나의 크레딧으로 플랜 사양에 따라 하나의 비디오를 생성할 수 있습니다. 크레딧은 결제일 기준으로 매월 초기화됩니다.'
          },
          payment: {
            question: '어떤 결제 방법을 지원하나요?',
            answer: 'Visa, Mastercard, American Express, Discover 등 모든 주요 신용카드를 지원합니다. 기업용 플랜의 경우 은행 송금과 청구서 옵션도 지원합니다.'
          },
          cancel: {
            question: '언제든지 구독을 취소할 수 있나요?',
            answer: '네, 언제든지 구독을 취소할 수 있습니다. 현재 결제 기간이 끝날 때까지 액세스가 유지됩니다. 취소 수수료는 없습니다.'
          },
          refunds: {
            question: '환불 정책은 어떻게 되나요?',
            answer: '새로운 프로 구독에 대해 7일 환불 보증을 제공합니다. 구매에 만족하지 못하시면 초기 구매일로부터 7일 이내에 지원팀에 문의하여 전액 환불을 받으실 수 있습니다.'
          },
          enterprise: {
            question: '기업용 맞춤 가격을 제공하나요?',
            answer: '네, 특별한 요구사항이 있는 기업 고객을 위한 맞춤 가격을 제공합니다. 요구사항을 논의하고 맞춤 견적을 받으시려면 영업팀에 문의해 주세요.'
          }
        }
      },

      cta: {
        title: 'AI로 놀라운 비디오를 만들 준비가 되셨나요?',
        description: 'Veo 3를 사용하여 아이디어를 실현하는 수천 명의 제작자와 기업에 합류하세요.',
        button: '지금 시작하기'
      }
    },

    // 푸터
    footer: {
      platform: '플랫폼',
      home: '홈',
      generate: '생성',
      pricing: '가격',
      legal: '법적 고지',
      termsOfService: '서비스 약관',
      privacyPolicy: '개인정보 처리방침',
      refundPolicy: '환불 정책',
      contactUs: '문의하기',
      languages: '언어',
      allRightsReserved: '모든 권리 보유',
      independent: '는 Google이나 그 제품과 제휴하지 않은 독립 플랫폼입니다.'
    },

    // 히어로
    hero: {
      title: 'Veo 3: 실제 음성이 있는 AI 비디오 생성',
      description: '음향 효과, 대화, 환경음이 완벽하게 동기화된 비디오를 생성하세요. Veo 3로 이야기에 생명을 불어넣으세요.',
      cta: '지금 만들기 시작하기'
    },

    // 기능
    features: {
      mainTitle: 'Veo 3 AI 비디오 생성기의 주요 기능',
      mainDescription: 'Veo 3는 최첨단 AI 기술을 결합하여 하나의 도구에서 원활한 비디오와 오디오 생성을 제공합니다.',
      audio: {
        title: '네이티브 오디오 생성',
        description: '비디오에 자동으로 음향 효과, 환경음, 대화를 추가하세요.'
      },
      lipSync: {
        title: '현실적인 립싱크',
        description: 'AI가 캐릭터의 말을 입 움직임과 완벽하게 동기화하여 현실적인 효과를 만듭니다.'
      },
      physics: {
        title: '물리 기반 비디오 모델링',
        description: '비디오는 실제 세계의 물리적 특성을 반영하여 자연스러운 움직임과 시각적 효과를 보장합니다.'
      },
      prompts: {
        title: '다중 입력 프롬프트',
        description: '텍스트 설명이나 이미지 참조를 사용하여 비디오를 생성하세요.'
      },
      flow: {
        title: 'Flow 앱 통합',
        description: 'Google의 Flow 비디오 에디터와 Veo 3를 연결하여 쉽게 영화적 클립을 만드세요.'
      },
      vertex: {
        title: 'Vertex AI에서 사용 가능',
        description: '기업 사용자는 Google의 Vertex AI 플랫폼을 통해 확장 가능한 비디오 생성을 위해 Veo 3에 접근할 수 있습니다.'
      }
    },

    // 예시
    examples: {
      title: 'Veo 3로 만든 비디오 탐색하기',
      description: 'Veo 3의 강력한 기능을 보여주는 AI 생성 비디오 예시를 확인하세요.'
    },

    // 사용 방법
    howToUse: {
      title: 'Veo 3로 AI 비디오 만드는 방법',
      description: 'Veo 3를 사용하여 동기화된 오디오가 있는 비디오를 만드는 간단한 단계를 따르세요.',
      steps: {
        register: {
          title: '가입 또는 로그인',
          description: 'Veo 3에 접근하기 위해 계정을 만들거나 로그인하세요.'
        },
        prompt: {
          title: '프롬프트 입력',
          description: '원하는 비디오를 설명하는 텍스트 설명이나 이미지를 입력하세요.'
        },
        audio: {
          title: '오디오 사용자 지정',
          description: '비디오를 향상시키기 위해 음향 효과, 대화, 환경음에 대한 지시사항을 추가하세요.'
        },
        generate: {
          title: '생성 및 보기',
          description: 'Veo 3가 비디오를 생성하게 하고, AI 생성 클립을 보고 다운로드하세요.'
        }
      },
      cta: '첫 번째 비디오 시작하기'
    },

    // FAQ
    faq: {
      title: 'Veo 3에 대한 자주 묻는 질문',
      description: 'AI 비디오 생성과 Veo 3의 오디오 기능에 대한 일반적인 질문에 대한 답변을 찾아보세요.',
      questions: {
        whatIsVeo3: {
          question: 'Veo 3란 무엇인가요?',
          answer: 'Veo 3는 음향 효과와 대화가 포함된 동기화된 오디오가 있는 비디오를 생성하는 Google의 AI 도구입니다.'
        },
        longerVideos: {
          question: 'Veo 3가 8초보다 긴 비디오를 생성할 수 있나요?',
          answer: '현재 Veo 3는 8초 길이의 고품질 비디오 생성에 중점을 두고 있으며, 향후 업데이트에서 더 긴 형식을 지원할 계획입니다.'
        },
        commercialUse: {
          question: 'Veo 3를 상업 프로젝트에 사용할 수 있나요?',
          answer: '네, Veo 3는 적절한 구독 플랜과 기업 액세스를 통해 상업적 사용을 지원합니다.'
        },
        audioTypes: {
          question: 'Veo 3가 생성할 수 있는 오디오 유형은 무엇인가요?',
          answer: '환경음, 캐릭터 대화, 비디오를 위한 현실적인 네이티브 음향 효과를 생성할 수 있습니다.'
        },
        socialMedia: {
          question: 'Veo 3 비디오를 소셜 미디어에서 사용할 수 있나요?',
          answer: '네, Veo 3로 만든 비디오는 소셜 미디어 플랫폼에서 공유할 수 있어 매력적인 콘텐츠 제작이 용이합니다.'
        },
        beginnerFriendly: {
          question: 'Veo 3가 초보자에게 적합한가요?',
          answer: '네, Veo 3는 기술적 기술이 없는 사용자에게 적합한 간단한 인터페이스를 제공합니다.'
        },
        comparison: {
          question: 'Veo 3가 다른 AI 비디오 도구와 어떻게 비교되나요?',
          answer: 'Veo 3는 비디오와 완벽하게 동기화된 오디오를 결합한다는 점에서 많은 경쟁사와 차별화됩니다 - 소수의 경쟁사만이 제공하는 기능입니다.'
        }
      }
    },

    // CTA
    cta: {
      title: 'AI로 놀라운 비디오 만들기 시작하기',
      description: 'Veo 3를 사용하여 실제 음성이 있는 전문적인 품질의 비디오를 생성하세요.',
      buttonText: '시작하기'
    },

    // 쇼케이스
    showcase: {
      title: '현재 트렌드',
      close: '닫기',
      videoPlaying: '비디오 {id} 재생 중',
      pressEscToClose: '닫으려면 ESC를 누르세요'
    }
}; 