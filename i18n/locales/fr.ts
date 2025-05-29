export default {
  // Commun
  common: {
    backToHome: 'Retour à l\'accueil',
    and: 'et',
    terms: 'Conditions d\'utilisation',
    privacy: 'Politique de confidentialité',
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
    failed: 'Échec',
    retry: 'Réessayer',
    close: 'Fermer',
    confirm: 'Confirmer',
    cancel: 'Annuler',
    save: 'Enregistrer',
    edit: 'Modifier',
    delete: 'Supprimer',
    download: 'Télécharger',
    upload: 'Télécharger',
    refresh: 'Actualiser',
    back: 'Retour',
    next: 'Page suivante',
    previous: 'Page précédente',
    details: 'Détails',
    all: 'Tout',
    create: 'Créer',
    generate: 'Générer',
    processing: 'En cours de traitement',
    completed: 'Terminé',
    pending: 'En attente',
    unknown: 'Inconnu',
    login: 'Se connecter'
  },

  // Authentification
  auth: {
    signIn: {
      title: 'Connectez-vous à votre compte',
      loggingIn: 'Connexion en cours...',
      continueWithGoogle: 'Continuer avec Google',
      continueWithGithub: 'Continuer avec GitHub',
      or: 'ou',
      termsMessage: 'En vous connectant, vous acceptez nos'
    }
  },

  // Générateur
  generator: {
    title: 'Générateur de vidéo IA',
    subtitle: 'Transformez vos images et textes en vidéos captivantes avec l\'IA',
    tabs: {
      imageToVideo: 'Image vers vidéo',
      textToVideo: 'Texte vers vidéo'
    },
    imageUpload: {
      title: 'Téléchargez votre image',
      instruction: 'Cliquez ou glissez-déposez pour télécharger une image',
      formats: 'JPG, PNG ou WEBP (max 10MB)',
      button: 'Choisir une image'
    },
    textInput: {
      title: 'Saisissez votre texte',
      instruction: 'Description textuelle'
    },
    params: {
      duration: 'Durée de la vidéo',
      modelVersion: 'Version du modèle',
      quality: 'Qualité vidéo',
      prompt: 'Prompt',
      aspectRatio: 'Rapport d\'aspect',
      motionMode: 'Mode de mouvement',
      motionModeNormal: 'Normal',
      motionModeFast: 'Rapide',
      negativePrompt: 'Prompt négatif',
      seed: 'Graine aléatoire',
      style: 'Préreglage de style',
      watermark: 'Ajouter un filigrane',
      selectModel: 'Sélectionner la version du modèle',
      selectStyle: 'Sélectionner le préreglage de style'
    },
    styles: {
      anime: 'Anime',
      '3d_animation': 'Animation 3D',
      clay: 'Argile',
      comic: 'Bande dessinée',
      cyberpunk: 'Cyberpunk'
    },
    placeholders: {
      prompt: 'Décrivez ce que vous souhaitez voir dans la vidéo...',
      text: 'Décrivez la scène que vous souhaitez créer...',
      negativePrompt: 'Éléments à éviter dans la vidéo...',
      seed: 'Laissez vide pour utiliser une graine aléatoire'
    },
    tooltips: {
      no8sIn1080p: 'La qualité 1080p ne supporte pas les vidéos de 8 secondes',
      noFastIn1080p: 'La qualité 1080p ne supporte pas le mouvement rapide',
      noFastIn8s: 'Le mouvement rapide n\'est disponible que pour les vidéos de 5 secondes',
      motionModeDesc: 'Contrôle la vitesse du mouvement dans la vidéo',
      v3_5: 'Ancien modèle avec préréglages de style',
      v4: 'Modèle standard avec bonne qualité et vitesse',
      v4_5: 'Modèle le plus récent avec la meilleure qualité'
    },
    preview: {
      title: 'Aperçu',
      emptyState: 'Votre vidéo générée s\'affichera ici',
      generating: 'Génération de la vidéo en cours',
      complete: 'Terminé',
      error: 'Échec de la génération de la vidéo, veuillez réessayer.',
      tryAgain: 'Une erreur s\'est produite, veuillez essayer avec des paramètres différents.',
      videoId: 'ID de la vidéo',
      videoReady: 'Vidéo prête'
    },
    errors: {
      invalidFileType: 'Veuillez télécharger uniquement des images JPG, PNG ou WEBP',
      imageRequired: 'Veuillez télécharger une image',
      textRequired: 'Veuillez saisir une description textuelle',
      promptRequired: 'Veuillez saisir un prompt',
      seedRange: 'La valeur de la graine doit être comprise entre 0 et 2147483647',
      fileTooLarge: 'La taille du fichier doit être inférieure à 20MB'
    },
    advancedOptions: 'Options avancées',
    generating: 'Génération en cours...',
    generateButton: 'Générer la vidéo',
    loginRequired: 'Veuillez vous connecter pour générer des vidéos'
  },

  // Historique
  history: {
    title: 'Historique de génération',
    totalRecords: 'Total {count} enregistrements',
    filters: {
      all: 'Tout l\'historique',
      textToVideo: 'Texte vers vidéo',
      imageToVideo: 'Image vers vidéo'
    },
    quickActions: {
      generateNew: 'Générer une nouvelle vidéo'
    },
    currentView: 'Affichage actuel :',
    refreshData: 'Actualiser',
    empty: {
      title: {
        all: 'Aucun historique',
        textToVideo: 'Aucun enregistrement de texte vers vidéo',
        imageToVideo: 'Aucun enregistrement d\'image vers vidéo'
      },
      description: {
        all: 'Commencez à générer votre première vidéo !',
        textToVideo: 'Essayez de générer votre première vidéo avec du texte !',
        imageToVideo: 'Téléchargez une image pour générer votre première vidéo !'
      },
      action: 'Commencer à générer'
    },
    pagination: {
      page: 'Page {current} sur {total}'
    },
    status: {
      completed: 'Terminé',
      processing: 'Génération en cours',
      failed: 'Échec',
      pending: 'En attente'
    },
    timeAgo: {
      justNow: 'À l\'instant',
      minutesAgo: 'Il y a {minutes} minutes',
      hoursAgo: 'Il y a {hours} heures',
      daysAgo: 'Il y a {days} jours'
    },
    processingMessage: 'Génération en cours, veuillez patienter...',
    failedMessage: 'La génération a échoué, veuillez réessayer'
  },

  // Détails de l'historique
  historyDetail: {
    backToHistory: 'Retour à l\'historique',
    generatedVideo: 'Vidéo générée',
    downloading: 'Téléchargement en cours...',
    downloadVideo: 'Télécharger la vidéo',
    videoUnavailable: 'Fichier vidéo non disponible',
    downloadSuccess: 'Téléchargement de la vidéo réussi ! Nom du fichier : {fileName}',
    downloadFailed: 'Échec du téléchargement, veuillez réessayer plus tard',
    openInNewTab: 'Lien de téléchargement ouvert dans une nouvelle fenêtre',

    videoStatus: {
      pending: 'Vidéo en attente de génération',
      processing: 'Vidéo en cours de génération',
      failed: 'Échec de la génération de la vidéo',
      noVideo: 'Aucune vidéo'
    },

    info: {
      createdAt: 'Date de création',
      videoSize: 'Taille de la vidéo',
      modelVersion: 'Version du modèle',
      duration: 'Durée de la vidéo',
      videoDimensions: 'Dimensions de la vidéo',
      resolution: 'Résolution',
      quality: 'Qualité vidéo',
      prompt: 'Prompt',
      sourceImage: 'Image source',
      durationUnit: 'secondes'
    },

    type: {
      textToVideo: 'Texte vers vidéo',
      imageToVideo: 'Image vers vidéo'
    },

    notFound: 'Enregistrement inexistant'
  },

  // Navigation
  nav: {
    settings: 'Paramètres'
  },

  // Barre de navigation
  navbar: {
    home: 'Accueil',
    generate: 'Générer',
    pricing: 'Tarifs',
    login: 'Se connecter'
  },

  // Menu utilisateur
  user: {
    plan: 'Plan actuel',
    upgrade: 'Mettre à niveau',
    manage: 'Gérer',
    credits: 'Crédits',
    available: 'Disponible',
    history: 'Historique de génération',
    allHistory: 'Historique de génération',
    viewAllHistory: 'Voir tout l\'historique de génération',
    logout: 'Se déconnecter'
  },

  // Thème
  theme: {
    toggle: 'Basculer le thème',
    switchToLight: 'Passer au mode clair',
    switchToDark: 'Passer au mode sombre'
  },

  // Tarifs
  pricing: {
    title: 'Choisissez votre plan',
    description: 'Tarification simple et transparente qui évolue avec vous. Aucun frais caché ou coût inattendu.',
    monthly: 'Mensuel',
    annual: 'Annuel',
    save: 'Économiser',
    popular: 'Le plus populaire',
    perMonth: '/mois',
    perYear: '/an',

    plans: {
      free: {
        name: 'Plan Gratuit',
        description: 'Parfait pour les amateurs et créateurs occasionnels qui expérimentent.',
        features: {
          feature1: '20 crédits vidéo par mois',
          feature2: 'Résolution vidéo 720p',
          feature3: 'Vidéos jusqu\'à 5 secondes'
        },
        limitations: {
          limitation1: 'Pas d\'utilisation commerciale'
        },
        buttonText: 'Commencer'
      },
      pro: {
        name: 'Plan Pro',
        description: 'Idéal pour les créateurs de contenu et les petites entreprises.',
        features: {
          feature1: '200 crédits vidéo par mois',
          feature2: 'Résolution vidéo 1080p',
          feature3: 'Vidéos jusqu\'à 15 secondes',
          feature4: 'Temps de rendu prioritaire',
          feature5: 'Licence d\'utilisation commerciale'
        },
        buttonText: 'S\'abonner maintenant'
      },
      enterprise: {
        name: 'Plan Entreprise',
        description: 'Pour les institutions et entreprises ayant des besoins plus importants.',
        features: {
          feature1: 'Crédits vidéo illimités',
          feature2: 'Résolution vidéo 4K',
          feature3: 'Vidéos de 30+ secondes',
          feature4: 'Support prioritaire',
          feature5: 'Entraînement de modèle personnalisé',
          feature6: 'Accès API'
        },
        buttonText: 'Contacter les ventes'
      }
    },

    hero: {
      title: 'Tarification simple et transparente',
      description: 'Choisissez le plan parfait pour vos besoins créatifs, sans frais cachés.'
    },

    comparison: {
      title: 'Comparaison des plans',
      description: 'Consultez la comparaison détaillée des fonctionnalités pour vous aider à choisir le bon plan.',
      feature: 'Fonctionnalité',
      free: 'Plan Gratuit',
      pro: 'Plan Pro',
      enterprise: 'Plan Entreprise',
      features: {
        videoLength: 'Durée maximale de la vidéo',
        monthlyCredits: 'Crédits mensuels',
        resolution: 'Résolution maximale',
        audioTracks: 'Pistes audio',
        customModels: 'Entraînement de modèle personnalisé',
        priorityRendering: 'Rendu prioritaire',
        commercialUse: 'Droit d\'utilisation commerciale',
        prioritySupport: 'Support prioritaire',
        api: 'Accès API'
      },
      values: {
        videoLength: {
          free: '5 secondes',
          pro: '15 secondes',
          enterprise: '30+ secondes'
        },
        monthlyCredits: {
          free: '20',
          pro: '200',
          enterprise: 'Illimité'
        },
        resolution: {
          free: '720p',
          pro: '1080p',
          enterprise: '4K'
        },
        audioTracks: {
          free: '1',
          pro: '3',
          enterprise: 'Illimité'
        }
      }
    },

    faq: {
      title: 'Questions fréquemment posées',
      description: 'Trouvez des réponses aux questions courantes sur nos plans tarifaires et notre facturation.',
      questions: {
        credits: {
          question: 'Que sont les crédits vidéo ?',
          answer: 'Les crédits vidéo sont la monnaie utilisée pour générer des vidéos sur Veo 3. Un crédit génère une vidéo conforme aux spécifications de votre plan. Les crédits se réinitialisent chaque mois à votre date de facturation.'
        },
        payment: {
          question: 'Quelles méthodes de paiement acceptez-vous ?',
          answer: 'Nous acceptons toutes les principales cartes de crédit, y compris Visa, Mastercard, American Express et Discover. Pour les plans Entreprise, nous acceptons également les virements bancaires et les options de facturation.'
        },
        cancel: {
          question: 'Puis-je annuler mon abonnement à tout moment ?',
          answer: 'Oui, vous pouvez annuler votre abonnement à tout moment. Votre accès continuera jusqu\'à la fin de votre période de facturation actuelle. Il n\'y a pas de frais d\'annulation.'
        },
        refunds: {
          question: 'Quelle est votre politique de remboursement ?',
          answer: 'Nous offrons une garantie de remboursement de 7 jours pour les nouveaux abonnements Pro. Si vous n\'êtes pas satisfait de votre achat, contactez notre équipe de support dans les 7 jours suivant votre premier achat pour un remboursement complet.'
        },
        enterprise: {
          question: 'Proposez-vous des tarifs Entreprise personnalisés ?',
          answer: 'Oui, nous proposons des tarifs personnalisés pour les clients d\'entreprise ayant des besoins spécifiques. Contactez notre équipe commerciale pour discuter de vos besoins et obtenir un devis personnalisé.'
        }
      }
    },

    cta: {
      title: 'Prêt à créer des vidéos IA époustouflantes ?',
      description: 'Rejoignez des milliers de créateurs et d\'entreprises qui donnent vie à leurs idées avec Veo 3.',
      button: 'Commencer maintenant'
    }
  },

  // Pied de page
  footer: {
    platform: 'Plateforme',
    home: 'Accueil',
    generate: 'Générer',
    pricing: 'Tarifs',
    legal: 'Juridique',
    termsOfService: 'Conditions d\'utilisation',
    privacyPolicy: 'Politique de confidentialité',
    refundPolicy: 'Politique de remboursement',
    contactUs: 'Nous contacter',
    languages: 'Langues',
    allRightsReserved: 'Tous droits réservés',
    independent: 'est une plateforme indépendante non affiliée à Google ou ses produits.'
  },

  // Zone héro
  hero: {
    title: 'Veo 3 : Génération de vidéo IA avec audio réaliste',
    description: 'Générez des vidéos avec un audio parfaitement synchronisé, incluant effets sonores, dialogues et sons d\'ambiance. Donnez vie à vos histoires avec Veo 3.',
    cta: 'Commencer à créer maintenant'
  },

  // Présentation des fonctionnalités
  features: {
    mainTitle: 'Fonctionnalités principales du générateur de vidéo IA Veo 3',
    mainDescription: 'Veo 3 combine une technologie IA de pointe pour offrir une génération vidéo et audio transparente dans un seul outil.',
    audio: {
      title: 'Génération audio native',
      description: 'Ajoutez automatiquement des effets sonores, des sons d\'ambiance et des dialogues à vos vidéos.'
    },
    lipSync: {
      title: 'Synchronisation labiale réaliste',
      description: 'L\'IA fait correspondre parfaitement la voix des personnages avec les mouvements de leurs lèvres pour un effet réaliste.'
    },
    physics: {
      title: 'Simulation vidéo basée sur la physique',
      description: 'Les vidéos reflètent les propriétés physiques du monde réel pour des mouvements et effets visuels naturels.'
    },
    prompts: {
      title: 'Prompts d\'entrée multiples',
      description: 'Utilisez des descriptions textuelles ou des références d\'images pour générer des vidéos.'
    },
    flow: {
      title: 'Intégration avec l\'application Flow',
      description: 'Créez facilement des clips cinématographiques en combinant Veo 3 avec l\'éditeur vidéo Flow de Google.'
    },
    vertex: {
      title: 'Disponible sur Vertex AI',
      description: 'Les utilisateurs d\'entreprise peuvent accéder à Veo 3 via la plateforme Vertex AI de Google pour une génération vidéo évolutive.'
    }
  },

  // Présentation d'exemples
  examples: {
    title: 'Explorez les vidéos créées avec Veo 3',
    description: 'Découvrez des exemples de vidéos générées par IA montrant les capacités puissantes de Veo 3.'
  },

  // Tutoriel d\'utilisation
  howToUse: {
    title: 'Comment créer des vidéos IA avec Veo 3',
    description: 'Suivez ces étapes simples pour générer des vidéos avec audio synchronisé en utilisant Veo 3.',
    steps: {
      register: {
        title: 'S\'inscrire ou se connecter',
        description: 'Créez un compte ou connectez-vous pour accéder à Veo 3.'
      },
      prompt: {
        title: 'Saisissez votre prompt',
        description: 'Saisissez une description textuelle ou téléchargez une image pour décrire la vidéo souhaitée.'
      },
      audio: {
        title: 'Personnalisez l\'audio',
        description: 'Ajoutez des descriptions d\'effets sonores, de dialogues ou de sons d\'ambiance pour enrichir votre vidéo.'
      },
      generate: {
        title: 'Générer et visualiser',
        description: 'Laissez Veo 3 générer votre vidéo, puis prévisualisez et téléchargez votre clip généré par IA.'
      }
    },
    cta: 'Commencer votre première vidéo'
  },

  // Questions fréquemment posées
  faq: {
    title: 'FAQ Veo 3',
    description: 'Trouvez des réponses aux questions courantes sur la génération vidéo IA Veo 3 et les fonctionnalités audio.',
    questions: {
      whatIsVeo3: {
        question: 'Qu\'est-ce que Veo 3 ?',
        answer: 'Veo 3 est l\'outil IA de Google qui peut générer des vidéos avec audio synchronisé, incluant effets sonores et dialogues.'
      },
      longerVideos: {
        question: 'Veo 3 peut-il générer des vidéos de plus de 8 secondes ?',
        answer: 'Actuellement, Veo 3 se concentre sur la création de vidéos de 8 secondes de haute qualité, avec le support de formats plus longs prévu dans les futures mises à jour.'
      },
      commercialUse: {
        question: 'Puis-je utiliser Veo 3 pour des projets commerciaux ?',
        answer: 'Oui, Veo 3 supporte l\'utilisation commerciale via les plans d\'abonnement appropriés et l\'accès entreprise.'
      },
      audioTypes: {
        question: 'Quels types d\'audio Veo 3 peut-il générer ?',
        answer: 'Il peut créer des sons d\'ambiance, des dialogues de personnages et des effets sonores réalistes natifs à la vidéo.'
      },
      socialMedia: {
        question: 'Puis-je utiliser les vidéos Veo 3 sur les réseaux sociaux ?',
        answer: 'Oui, les vidéos créées avec Veo 3 peuvent être partagées sur les plateformes de réseaux sociaux, facilitant la création de contenu engageant.'
      },
      beginnerFriendly: {
        question: 'Veo 3 est-il convivial pour les débutants ?',
        answer: 'Oui, Veo 3 offre une interface simple adaptée aux utilisateurs sans compétences techniques.'
      },
      comparison: {
        question: 'Comment Veo 3 se compare-t-il aux autres outils vidéo IA ?',
        answer: 'Veo 3 se distingue de ses concurrents en combinant vidéo avec audio parfaitement synchronisé, une fonctionnalité que peu de concurrents offrent.'
      }
    }
  },

  // Appel à l'action
  cta: {
    title: 'Commencez à créer des vidéos IA époustouflantes',
    description: 'Utilisez Veo 3 pour générer des vidéos de qualité professionnelle avec son réaliste.',
    buttonText: 'Commencer'
  },

  // Zone de présentation
  showcase: {
    title: 'Actuellement populaire',
    close: 'Fermer',
    videoPlaying: 'Lecture de la vidéo {id}',
    pressEscToClose: 'Appuyez sur Échap pour fermer'
  }
};