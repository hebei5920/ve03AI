export default {
  // Común
  common: {
    backToHome: 'Volver al inicio',
    and: 'y',
    terms: 'Términos de servicio',
    privacy: 'Política de privacidad',
    loading: 'Cargando...',
    error: 'Error',
    success: 'Éxito',
    failed: 'Fallido',
    retry: 'Reintentar',
    close: 'Cerrar',
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    save: 'Guardar',
    edit: 'Editar',
    delete: 'Eliminar',
    download: 'Descargar',
    upload: 'Subir',
    refresh: 'Actualizar',
    back: 'Atrás',
    next: 'Siguiente página',
    previous: 'Página anterior',
    details: 'Detalles',
    all: 'Todos',
    create: 'Crear',
    generate: 'Generar',
    processing: 'Procesando',
    completed: 'Completado',
    pending: 'Pendiente',
    unknown: 'Desconocido',
    login: 'Iniciar sesión'
  },

  // Autenticación
  auth: {
    signIn: {
      title: 'Inicia sesión en tu cuenta',
      loggingIn: 'Iniciando sesión...',
      continueWithGoogle: 'Continuar con Google',
      continueWithGithub: 'Continuar con GitHub',
      or: 'o',
      termsMessage: 'Al iniciar sesión, aceptas nuestros'
    }
  },

  // Generador
  generator: {
    title: 'Generador de videos con IA',
    subtitle: 'Usa la IA para convertir tus imágenes y texto en videos cautivadores',
    tabs: {
      imageToVideo: 'Imagen a video',
      textToVideo: 'Texto a video'
    },
    imageUpload: {
      title: 'Sube tu imagen',
      instruction: 'Haz clic o arrastra para subir una imagen',
      formats: 'JPG, PNG o WEBP (máx. 10MB)',
      button: 'Seleccionar imagen'
    },
    textInput: {
      title: 'Ingresa tu texto',
      instruction: 'Descripción del texto'
    },
    params: {
      duration: 'Duración del video',
      modelVersion: 'Versión del modelo',
      quality: 'Calidad del video',
      prompt: 'Prompt',
      aspectRatio: 'Relación de aspecto',
      motionMode: 'Modo de movimiento',
      motionModeNormal: 'Normal',
      motionModeFast: 'Rápido',
      negativePrompt: 'Prompt negativo',
      seed: 'Semilla aleatoria',
      style: 'Preset de estilo',
      watermark: 'Agregar marca de agua',
      selectModel: 'Seleccionar versión del modelo',
      selectStyle: 'Seleccionar preset de estilo'
    },
    styles: {
      anime: 'Anime',
      '3d_animation': 'Animación 3D',
      clay: 'Arcilla',
      comic: 'Cómic',
      cyberpunk: 'Cyberpunk'
    },
    placeholders: {
      prompt: 'Describe lo que quieres ver en el video...',
      text: 'Describe la escena que quieres crear...',
      negativePrompt: 'Elementos que quieres evitar en el video...',
      seed: 'Dejar en blanco para semilla aleatoria'
    },
    tooltips: {
      no8sIn1080p: 'La calidad 1080p no admite videos de 8 segundos',
      noFastIn1080p: 'La calidad 1080p no admite movimiento rápido',
      noFastIn8s: 'El movimiento rápido solo está disponible para videos de 5 segundos',
      motionModeDesc: 'Controla la velocidad del movimiento en el video',
      v3_5: 'Modelo anterior con presets de estilo',
      v4: 'Modelo estándar con buena calidad y movimiento',
      v4_5: 'Modelo más reciente con la mejor calidad'
    },
    preview: {
      title: 'Vista previa',
      emptyState: 'Tus videos generados aparecerán aquí',
      generating: 'Generando video',
      complete: 'Completado',
      error: 'No se pudo generar el video, por favor intenta de nuevo.',
      tryAgain: 'Ocurrió un error, por favor prueba con diferentes ajustes.',
      videoId: 'ID del video',
      videoReady: 'Video listo'
    },
    errors: {
      invalidFileType: 'Por favor sube solo imágenes JPG, PNG o WEBP',
      imageRequired: 'Por favor sube una imagen',
      textRequired: 'Por favor ingresa una descripción de texto',
      promptRequired: 'Por favor ingresa un prompt',
      seedRange: 'El valor de la semilla debe estar entre 0 y 2147483647',
      fileTooLarge: 'El tamaño del archivo debe ser menor a 20MB'
    },
    advancedOptions: 'Opciones avanzadas',
    generating: 'Generando...',
    generateButton: 'Generar video',
    loginRequired: 'Por favor inicia sesión para generar videos'
  },

  // Historial
  history: {
    title: 'Historial de generación',
    totalRecords: 'Total de {count} registros',
    filters: {
      all: 'Todo el historial',
      textToVideo: 'Texto a video',
      imageToVideo: 'Imagen a video'
    },
    quickActions: {
      generateNew: 'Generar nuevo video'
    },
    currentView: 'Vista actual:',
    refreshData: 'Actualizar',
    empty: {
      title: {
        all: 'Sin historial',
        textToVideo: 'Sin registros de texto a video',
        imageToVideo: 'Sin registros de imagen a video'
      },
      description: {
        all: '¡Comienza a generar tu primer video!',
        textToVideo: '¡Intenta generar tu primer video desde texto!',
        imageToVideo: '¡Sube una imagen para generar tu primer video!'
      },
      action: 'Comenzar a generar'
    },
    pagination: {
      page: 'Página {current} de {total}'
    },
    status: {
      completed: 'Completado',
      processing: 'Generando',
      failed: 'Fallido',
      pending: 'Pendiente'
    },
    timeAgo: {
      justNow: 'Ahora mismo',
      minutesAgo: 'Hace {minutes} minutos',
      hoursAgo: 'Hace {hours} horas',
      daysAgo: 'Hace {days} días'
    },
    processingMessage: 'Generando, por favor espera...',
    failedMessage: 'Generación fallida, intenta de nuevo'
  },

  // Detalles del historial
  historyDetail: {
    backToHistory: 'Volver al historial',
    generatedVideo: 'Video generado',
    downloading: 'Descargando...',
    downloadVideo: 'Descargar video',
    videoUnavailable: 'Archivo de video no disponible',
    downloadSuccess: '¡Video descargado exitosamente! Nombre del archivo: {fileName}',
    downloadFailed: 'Descarga fallida, intenta más tarde',
    openInNewTab: 'Enlace de descarga abierto en nueva ventana',

    videoStatus: {
      pending: 'Esperando generación del video',
      processing: 'Generando video',
      failed: 'Generación de video fallida',
      noVideo: 'Sin video'
    },

    info: {
      createdAt: 'Fecha de creación',
      videoSize: 'Tamaño del video',
      modelVersion: 'Versión del modelo',
      duration: 'Duración del video',
      videoDimensions: 'Dimensiones del video',
      resolution: 'Resolución',
      quality: 'Calidad del video',
      prompt: 'Prompt',
      sourceImage: 'Imagen fuente',
      durationUnit: 'segundos'
    },

    type: {
      textToVideo: 'Texto a video',
      imageToVideo: 'Imagen a video'
    },

    notFound: 'Registro no encontrado'
  },

  // Navegación
  nav: {
    settings: 'Configuración'
  },

  // Barra de navegación
  navbar: {
    home: 'Inicio',
    generate: 'Generar',
    pricing: 'Precios',
    login: 'Iniciar sesión'
  },

  // Menú de usuario
  user: {
    plan: 'Plan actual',
    upgrade: 'Actualizar',
    manage: 'Administrar',
    credits: 'Créditos',
    available: 'Disponibles',
    history: 'Historial de generación',
    allHistory: 'Historial de generación',
    viewAllHistory: 'Ver todos los registros de generación',
    logout: 'Cerrar sesión'
  },

  // Tema
  theme: {
    toggle: 'Cambiar tema',
    switchToLight: 'Cambiar a modo claro',
    switchToDark: 'Cambiar a modo oscuro'
  },

  // Precios
  pricing: {
    title: 'Elige tu plan',
    description: 'Precios simples y transparentes que crecen contigo. Sin cargos ocultos ni costos inesperados.',
    monthly: 'Mensual',
    annual: 'Anual',
    save: 'Ahorra',
    popular: 'Más popular',
    perMonth: '/mes',
    perYear: '/año',

    plans: {
      free: {
        name: 'Gratis',
        description: 'Ideal para aficionados y creadores casuales que quieren experimentar.',
        features: {
          feature1: '20 créditos de video por mes',
          feature2: 'Resolución de video 720p',
          feature3: 'Videos de hasta 5 segundos'
        },
        limitations: {
          limitation1: 'No para uso comercial'
        },
        buttonText: 'Comenzar'
      },
      pro: {
        name: 'Pro',
        description: 'Ideal para creadores de contenido y pequeñas empresas.',
        features: {
          feature1: '200 créditos de video por mes',
          feature2: 'Resolución de video 1080p',
          feature3: 'Videos de hasta 15 segundos',
          feature4: 'Tiempo de renderizado prioritario',
          feature5: 'Licencia de uso comercial'
        },
        buttonText: 'Suscribirse ahora'
      },
      enterprise: {
        name: 'Empresarial',
        description: 'Ideal para agencias y empresas con necesidades avanzadas.',
        features: {
          feature1: 'Créditos de video ilimitados',
          feature2: 'Resolución de video 4K',
          feature3: 'Videos de 30+ segundos',
          feature4: 'Soporte prioritario',
          feature5: 'Entrenamiento de modelos personalizados',
          feature6: 'Acceso API'
        },
        buttonText: 'Contactar ventas'
      }
    },

    hero: {
      title: 'Precios simples y transparentes',
      description: 'Elige el plan adecuado para tus necesidades creativas sin cargos ocultos.'
    },

    comparison: {
      title: 'Comparación de planes',
      description: 'Consulta la comparación detallada de características para ayudarte a elegir el plan adecuado.',
      feature: 'Característica',
      free: 'Gratis',
      pro: 'Pro',
      enterprise: 'Empresarial',
      features: {
        videoLength: 'Duración máxima del video',
        monthlyCredits: 'Créditos mensuales',
        resolution: 'Resolución máxima',
        audioTracks: 'Pistas de audio',
        customModels: 'Entrenamiento de modelos personalizados',
        priorityRendering: 'Renderizado prioritario',
        commercialUse: 'Derechos de uso comercial',
        prioritySupport: 'Soporte prioritario',
        api: 'Acceso API'
      },
      values: {
        videoLength: {
          free: '5 segundos',
          pro: '15 segundos',
          enterprise: '30+ segundos'
        },
        monthlyCredits: {
          free: '20',
          pro: '200',
          enterprise: 'Ilimitados'
        },
        resolution: {
          free: '720p',
          pro: '1080p',
          enterprise: '4K'
        },
        audioTracks: {
          free: '1',
          pro: '3',
          enterprise: 'Ilimitadas'
        }
      }
    },

    faq: {
      title: 'Preguntas frecuentes',
      description: 'Encuentra respuestas a preguntas comunes sobre nuestros planes de precios y facturación.',
      questions: {
        credits: {
          question: '¿Qué son los créditos de video?',
          answer: 'Los créditos de video son la moneda utilizada para generar videos en Veo 3. Un crédito permite generar un video según las especificaciones de tu plan. Los créditos se reinician mensualmente en tu fecha de facturación.'
        },
        payment: {
          question: '¿Qué métodos de pago aceptan?',
          answer: 'Aceptamos todas las principales tarjetas de crédito, incluyendo Visa, Mastercard, American Express y Discover. Para planes empresariales, también aceptamos transferencias bancarias y opciones de facturación.'
        },
        cancel: {
          question: '¿Puedo cancelar mi suscripción en cualquier momento?',
          answer: 'Sí, puedes cancelar tu suscripción en cualquier momento. Tu acceso continuará hasta el final del período de facturación actual. No hay cargos por cancelación.'
        },
        refunds: {
          question: '¿Cuál es su política de reembolso?',
          answer: 'Ofrecemos una garantía de reembolso de 7 días para nuevas suscripciones Pro. Si no estás satisfecho con tu compra, contacta a nuestro equipo de soporte dentro de los 7 días de la compra inicial para un reembolso completo.'
        },
        enterprise: {
          question: '¿Ofrecen precios personalizados para empresas?',
          answer: 'Sí, ofrecemos precios personalizados para clientes empresariales con necesidades específicas. Por favor, contacta a nuestro equipo de ventas para discutir tus necesidades y obtener un presupuesto personalizado.'
        }
      }
    },

    cta: {
      title: '¿Listo para crear videos increíbles con IA?',
      description: 'Únete a miles de creadores y empresas que usan Veo 3 para dar vida a sus ideas.',
      button: 'Comenzar ahora'
    }
  },

  // Pie de página
  footer: {
    platform: 'Plataforma',
    home: 'Inicio',
    generate: 'Generar',
    pricing: 'Precios',
    legal: 'Legal',
    termsOfService: 'Términos de servicio',
    privacyPolicy: 'Política de privacidad',
    refundPolicy: 'Política de reembolso',
    contactUs: 'Contáctanos',
    languages: 'Idiomas',
    allRightsReserved: 'Todos los derechos reservados',
    independent: 'es una plataforma independiente no afiliada a Google o sus productos.'
  },

  // Hero
  hero: {
    title: 'Veo 3: Generación de videos con IA con voces reales',
    description: 'Genera videos con audio completamente sincronizado, incluyendo efectos de sonido, diálogos y sonido ambiental. Da vida a tus historias con Veo 3.',
    cta: 'Comenzar a crear ahora'
  },

  // Características
  features: {
    mainTitle: 'Características principales del generador de videos con IA Veo 3',
    mainDescription: 'Veo 3 combina tecnologías de IA de vanguardia para proporcionar generación de video y audio sin problemas en una sola herramienta.',
    audio: {
      title: 'Generación de audio nativa',
      description: 'Agrega automáticamente efectos de sonido, sonido ambiental y diálogos a tus videos.'
    },
    lipSync: {
      title: 'Sincronización labial realista',
      description: 'La IA sincroniza perfectamente el habla de los personajes con los movimientos de la boca, creando efectos realistas.'
    },
    physics: {
      title: 'Modelado de video basado en física',
      description: 'Los videos reflejan las propiedades físicas del mundo real, asegurando movimientos naturales y efectos visuales.'
    },
    prompts: {
      title: 'Múltiples prompts de entrada',
      description: 'Usa descripciones de texto o referencias de imagen para generar videos.'
    },
    flow: {
      title: 'Integración con la app Flow',
      description: 'Crea clips cinematográficos fácilmente conectando Veo 3 con el editor de video Flow de Google.'
    },
    vertex: {
      title: 'Disponible en Vertex AI',
      description: 'Los usuarios empresariales pueden acceder a Veo 3 a través de la plataforma Vertex AI de Google para generación de video escalable.'
    }
  },

  // Ejemplos
  examples: {
    title: 'Explora videos creados con Veo 3',
    description: 'Mira ejemplos de videos generados por IA que demuestran las potentes capacidades de Veo 3.'
  },

  // Cómo usar
  howToUse: {
    title: 'Cómo crear videos con IA usando Veo 3',
    description: 'Sigue estos simples pasos para crear videos con audio sincronizado usando Veo 3.',
    steps: {
      register: {
        title: 'Regístrate o inicia sesión',
        description: 'Crea una cuenta o inicia sesión para acceder a Veo 3.'
      },
      prompt: {
        title: 'Ingresa tu prompt',
        description: 'Ingresa una descripción de texto o sube una imagen para describir el video deseado.'
      },
      audio: {
        title: 'Personaliza el audio',
        description: 'Agrega instrucciones para efectos de sonido, diálogos o sonido ambiental para mejorar tu video.'
      },
      generate: {
        title: 'Genera y visualiza',
        description: 'Deja que Veo 3 genere tu video, luego visualiza y descarga tu clip generado por IA.'
      }
    },
    cta: 'Comenzar tu primer video'
  },

  // FAQ
  faq: {
    title: 'Preguntas frecuentes sobre Veo 3',
    description: 'Encuentra respuestas a preguntas comunes sobre la generación de videos con IA y las características de audio de Veo 3.',
    questions: {
      whatIsVeo3: {
        question: '¿Qué es Veo 3?',
        answer: 'Veo 3 es una herramienta de IA de Google que genera videos con audio sincronizado, incluyendo efectos de sonido y diálogos.'
      },
      longerVideos: {
        question: '¿Puede Veo 3 generar videos de más de 8 segundos?',
        answer: 'Actualmente, Veo 3 se centra en crear videos de alta calidad de 8 segundos, con planes de soporte para formatos más largos en actualizaciones futuras.'
      },
      commercialUse: {
        question: '¿Puedo usar Veo 3 para proyectos comerciales?',
        answer: 'Sí, Veo 3 admite uso comercial a través de planes de suscripción apropiados y acceso empresarial.'
      },
      audioTypes: {
        question: '¿Qué tipo de audio puede generar Veo 3?',
        answer: 'Puede crear sonido ambiental, diálogos de personajes y efectos de sonido realistas nativos para videos.'
      },
      socialMedia: {
        question: '¿Puedo usar videos de Veo 3 en redes sociales?',
        answer: 'Sí, los videos creados con Veo 3 se pueden compartir en plataformas de redes sociales, facilitando la creación de contenido atractivo.'
      },
      beginnerFriendly: {
        question: '¿Es Veo 3 adecuado para principiantes?',
        answer: 'Sí, Veo 3 proporciona una interfaz simple que es adecuada para usuarios sin habilidades técnicas.'
      },
      comparison: {
        question: '¿Cómo se compara Veo 3 con otras herramientas de video con IA?',
        answer: 'Veo 3 se diferencia de muchos competidores al combinar video con audio completamente sincronizado - una característica que pocos competidores ofrecen.'
      }
    }
  },

  // CTA
  cta: {
    title: 'Comienza a crear videos increíbles con IA',
    description: 'Usa Veo 3 para generar videos de calidad profesional con sonidos reales.',
    buttonText: 'Comenzar'
  },

  // Vitrina
  showcase: {
    title: 'Tendencias actuales',
    close: 'Cerrar',
    videoPlaying: 'Reproduciendo video {id}',
    pressEscToClose: 'Presiona ESC para cerrar'
  }
}; 