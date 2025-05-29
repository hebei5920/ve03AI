export default {
  // Allgemein
  common: {
    backToHome: 'Zurück zur Startseite',
    and: 'und',
    terms: 'Nutzungsbedingungen',
    privacy: 'Datenschutzrichtlinie',
    loading: 'Wird geladen...',
    error: 'Fehler',
    success: 'Erfolgreich',
    failed: 'Fehlgeschlagen',
    retry: 'Wiederholen',
    close: 'Schließen',
    confirm: 'Bestätigen',
    cancel: 'Abbrechen',
    save: 'Speichern',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    download: 'Herunterladen',
    upload: 'Hochladen',
    refresh: 'Aktualisieren',
    back: 'Zurück',
    next: 'Nächste Seite',
    previous: 'Vorherige Seite',
    details: 'Details',
    all: 'Alle',
    create: 'Erstellen',
    generate: 'Generieren',
    processing: 'Wird verarbeitet',
    completed: 'Abgeschlossen',
    pending: 'Wartend',
    unknown: 'Unbekannt',
    login: 'Anmelden'
  },

  // Authentifizierung
  auth: {
    signIn: {
      title: 'In Ihr Konto einloggen',
      loggingIn: 'Anmeldung läuft...',
      continueWithGoogle: 'Mit Google fortfahren',
      continueWithGithub: 'Mit GitHub fortfahren',
      or: 'oder',
      termsMessage: 'Durch die Anmeldung stimmen Sie unseren'
    }
  },

  // Generator
  generator: {
    title: 'KI-Video-Generator',
    subtitle: 'Verwandeln Sie Ihre Bilder und Texte mit KI in beeindruckende Videos',
    tabs: {
      imageToVideo: 'Bild zu Video',
      textToVideo: 'Text zu Video'
    },
    imageUpload: {
      title: 'Laden Sie Ihr Bild hoch',
      instruction: 'Klicken oder ziehen Sie ein Bild zum Hochladen',
      formats: 'JPG, PNG oder WEBP (max. 10MB)',
      button: 'Bild auswählen'
    },
    textInput: {
      title: 'Geben Sie Ihren Text ein',
      instruction: 'Textbeschreibung'
    },
    params: {
      duration: 'Videolänge',
      modelVersion: 'Modellversion',
      quality: 'Videoqualität',
      prompt: 'Prompt',
      aspectRatio: 'Seitenverhältnis',
      motionMode: 'Bewegungsmodus',
      motionModeNormal: 'Normal',
      motionModeFast: 'Schnell',
      negativePrompt: 'Negative Prompts',
      seed: 'Zufallsseed',
      style: 'Stil-Preset',
      watermark: 'Wasserzeichen hinzufügen',
      selectModel: 'Modellversion auswählen',
      selectStyle: 'Stil-Preset auswählen'
    },
    styles: {
      anime: 'Anime',
      '3d_animation': '3D-Animation',
      clay: 'Ton',
      comic: 'Comic',
      cyberpunk: 'Cyberpunk'
    },
    placeholders: {
      prompt: 'Beschreiben Sie, was Sie in dem Video sehen möchten...',
      text: 'Beschreiben Sie die Szene, die Sie erstellen möchten...',
      negativePrompt: 'Elemente, die im Video vermieden werden sollen...',
      seed: 'Leer lassen für zufälligen Seed'
    },
    tooltips: {
      no8sIn1080p: '1080p-Qualität unterstützt keine 8-Sekunden-Videos',
      noFastIn1080p: '1080p-Qualität unterstützt keine schnelle Bewegung',
      noFastIn8s: 'Schnelle Bewegung ist nur für 5-Sekunden-Videos verfügbar',
      motionModeDesc: 'Steuert die Bewegungsgeschwindigkeit im Video',
      v3_5: 'Älteres Modell mit Stil-Presets',
      v4: 'Standardmodell mit guter Qualität und Geschwindigkeit',
      v4_5: 'Neuestes Modell mit bester Qualität'
    },
    preview: {
      title: 'Vorschau',
      emptyState: 'Ihr generiertes Video wird hier angezeigt',
      generating: 'Video wird generiert',
      complete: 'Abgeschlossen',
      error: 'Videogenerierung fehlgeschlagen, bitte versuchen Sie es erneut.',
      tryAgain: 'Ein Fehler ist aufgetreten, versuchen Sie andere Einstellungen.',
      videoId: 'Video-ID',
      videoReady: 'Video ist bereit'
    },
    errors: {
      invalidFileType: 'Bitte laden Sie nur JPG-, PNG- oder WEBP-Bilder hoch',
      imageRequired: 'Bitte laden Sie ein Bild hoch',
      textRequired: 'Bitte geben Sie eine Textbeschreibung ein',
      promptRequired: 'Bitte geben Sie einen Prompt ein',
      seedRange: 'Seed-Wert muss zwischen 0 und 2147483647 liegen',
      fileTooLarge: 'Dateigröße muss unter 20MB liegen'
    },
    advancedOptions: 'Erweiterte Optionen',
    generating: 'Wird generiert...',
    generateButton: 'Video generieren',
    loginRequired: 'Bitte melden Sie sich an, um Videos zu generieren'
  },

  // Verlauf
  history: {
    title: 'Generierungsverlauf',
    totalRecords: 'Insgesamt {count} Einträge',
    filters: {
      all: 'Gesamter Verlauf',
      textToVideo: 'Text zu Video',
      imageToVideo: 'Bild zu Video'
    },
    quickActions: {
      generateNew: 'Neues Video generieren'
    },
    currentView: 'Aktuelle Ansicht:',
    refreshData: 'Aktualisieren',
    empty: {
      title: {
        all: 'Noch kein Verlauf vorhanden',
        textToVideo: 'Keine Text-zu-Video-Einträge',
        imageToVideo: 'Keine Bild-zu-Video-Einträge'
      },
      description: {
        all: 'Beginnen Sie mit der Generierung Ihres ersten Videos!',
        textToVideo: 'Versuchen Sie, Ihr erstes Video mit Text zu generieren!',
        imageToVideo: 'Laden Sie ein Bild hoch und generieren Sie Ihr erstes Video!'
      },
      action: 'Generierung starten'
    },
    pagination: {
      page: 'Seite {current} von {total}'
    },
    status: {
      completed: 'Abgeschlossen',
      processing: 'Wird generiert',
      failed: 'Fehlgeschlagen',
      pending: 'Wartend'
    },
    timeAgo: {
      justNow: 'Gerade eben',
      minutesAgo: 'vor {minutes} Minuten',
      hoursAgo: 'vor {hours} Stunden',
      daysAgo: 'vor {days} Tagen'
    },
    processingMessage: 'Wird generiert, bitte warten...',
    failedMessage: 'Generierung fehlgeschlagen, bitte versuchen Sie es erneut'
  },

  // Verlaufsdetails
  historyDetail: {
    backToHistory: 'Zurück zum Verlauf',
    generatedVideo: 'Generiertes Video',
    downloading: 'Download läuft...',
    downloadVideo: 'Video herunterladen',
    videoUnavailable: 'Videodatei nicht verfügbar',
    downloadSuccess: 'Video erfolgreich heruntergeladen! Dateiname: {fileName}',
    downloadFailed: 'Download fehlgeschlagen, versuchen Sie es später erneut',
    openInNewTab: 'Download-Link in neuem Fenster geöffnet',

    videoStatus: {
      pending: 'Video wartet auf Generierung',
      processing: 'Video wird generiert',
      failed: 'Videogenerierung fehlgeschlagen',
      noVideo: 'Kein Video vorhanden'
    },

    info: {
      createdAt: 'Erstellt am',
      videoSize: 'Videogröße',
      modelVersion: 'Modellversion',
      duration: 'Videolänge',
      videoDimensions: 'Videoabmessungen',
      resolution: 'Auflösung',
      quality: 'Videoqualität',
      prompt: 'Prompt',
      sourceImage: 'Quellbild',
      durationUnit: 'Sekunden'
    },

    type: {
      textToVideo: 'Text zu Video',
      imageToVideo: 'Bild zu Video'
    },

    notFound: 'Eintrag nicht gefunden'
  },

  // Navigation
  nav: {
    settings: 'Einstellungen'
  },

  // Navigationsleiste
  navbar: {
    home: 'Startseite',
    generate: 'Generieren',
    pricing: 'Preise',
    login: 'Anmelden'
  },

  // Benutzermenü
  user: {
    plan: 'Aktueller Plan',
    upgrade: 'Upgrade',
    manage: 'Verwalten',
    credits: 'Credits',
    available: 'Verfügbar',
    history: 'Generierungsverlauf',
    allHistory: 'Generierungsverlauf',
    viewAllHistory: 'Alle Generierungseinträge anzeigen',
    logout: 'Abmelden'
  },

  // Design
  theme: {
    toggle: 'Design wechseln',
    switchToLight: 'Zu hellem Modus wechseln',
    switchToDark: 'Zu dunklem Modus wechseln'
  },

  // Preise
  pricing: {
    title: 'Wählen Sie Ihren Plan',
    description: 'Einfache, transparente Preise, die mit Ihnen wachsen. Keine versteckten Gebühren oder unerwarteten Kosten.',
    monthly: 'Monatlich',
    annual: 'Jährlich',
    save: 'Sparen',
    popular: 'Beliebteste',
    perMonth: '/Monat',
    perYear: '/Jahr',

    plans: {
      free: {
        name: 'Kostenlos',
        description: 'Perfekt für Hobbyisten und Gelegenheitsschöpfer zum Experimentieren.',
        features: {
          feature1: '20 Video-Credits pro Monat',
          feature2: '720p Videoauflösung',
          feature3: 'Bis zu 5 Sekunden Video'
        },
        limitations: {
          limitation1: 'Keine kommerzielle Nutzung'
        },
        buttonText: 'Loslegen'
      },
      pro: {
        name: 'Pro',
        description: 'Für Content-Ersteller und kleine Unternehmen.',
        features: {
          feature1: '200 Video-Credits pro Monat',
          feature2: '1080p Videoauflösung',
          feature3: 'Bis zu 15 Sekunden Video',
          feature4: 'Priorisierte Renderzeit',
          feature5: 'Kommerzielle Nutzungslizenz'
        },
        buttonText: 'Jetzt abonnieren'
      },
      enterprise: {
        name: 'Enterprise',
        description: 'Für Organisationen und Unternehmen mit höheren Anforderungen.',
        features: {
          feature1: 'Unbegrenzte Video-Credits',
          feature2: '4K Videoauflösung',
          feature3: 'Bis zu 30+ Sekunden Video',
          feature4: 'Prioritätssupport',
          feature5: 'Benutzerdefiniertes Modelltraining',
          feature6: 'API-Zugang'
        },
        buttonText: 'Vertrieb kontaktieren'
      }
    },

    hero: {
      title: 'Einfache, transparente Preise',
      description: 'Wählen Sie den perfekten Plan für Ihre kreativen Bedürfnisse, ohne versteckte Gebühren.'
    },

    comparison: {
      title: 'Planvergleich',
      description: 'Sehen Sie einen detaillierten Funktionsvergleich, um den richtigen Plan für Sie zu wählen.',
      feature: 'Funktion',
      free: 'Kostenlos',
      pro: 'Pro',
      enterprise: 'Enterprise',
      features: {
        videoLength: 'Maximale Videolänge',
        monthlyCredits: 'Monatliche Credits',
        resolution: 'Maximale Auflösung',
        audioTracks: 'Audio-Spuren',
        customModels: 'Benutzerdefiniertes Modelltraining',
        priorityRendering: 'Priorisiertes Rendering',
        commercialUse: 'Kommerzielle Nutzungsrechte',
        prioritySupport: 'Prioritätssupport',
        api: 'API-Zugang'
      },
      values: {
        videoLength: {
          free: '5 Sek.',
          pro: '15 Sek.',
          enterprise: '30+ Sek.'
        },
        monthlyCredits: {
          free: '20',
          pro: '200',
          enterprise: 'Unbegrenzt'
        },
        resolution: {
          free: '720p',
          pro: '1080p',
          enterprise: '4K'
        },
        audioTracks: {
          free: '1',
          pro: '3',
          enterprise: 'Unbegrenzt'
        }
      }
    },

    faq: {
      title: 'Häufig gestellte Fragen',
      description: 'Finden Sie Antworten auf häufige Fragen zu unseren Preisplänen und der Abrechnung.',
      questions: {
        credits: {
          question: 'Was sind Video-Credits?',
          answer: 'Video-Credits sind die Währung für die Generierung von Videos auf Veo 3. Ein Credit generiert ein Video entsprechend Ihren Planspezifikationen. Credits werden monatlich an Ihrem Abrechnungsdatum zurückgesetzt.'
        },
        payment: {
          question: 'Welche Zahlungsmethoden akzeptieren Sie?',
          answer: 'Wir akzeptieren alle gängigen Kreditkarten, einschließlich Visa, Mastercard, American Express und Discover. Für Enterprise-Pläne akzeptieren wir auch Banküberweisungen und Rechnungsoptionen.'
        },
        cancel: {
          question: 'Kann ich mein Abonnement jederzeit kündigen?',
          answer: 'Ja, Sie können Ihr Abonnement jederzeit kündigen. Ihr Zugang bleibt bis zum Ende des aktuellen Abrechnungszeitraums bestehen. Es fallen keine Kündigungsgebühren an.'
        },
        refunds: {
          question: 'Was ist Ihre Rückerstattungsrichtlinie?',
          answer: 'Wir bieten eine 7-tägige Geld-zurück-Garantie für neue Pro-Abonnements. Wenn Sie mit Ihrem Kauf nicht zufrieden sind, kontaktieren Sie unser Support-Team innerhalb von 7 Tagen nach Ihrem ersten Kauf für eine vollständige Rückerstattung.'
        },
        enterprise: {
          question: 'Bieten Sie maßgeschneiderte Enterprise-Preise an?',
          answer: 'Ja, wir bieten maßgeschneiderte Preise für Unternehmenskunden mit spezifischen Anforderungen. Kontaktieren Sie unser Vertriebsteam, um Ihre Bedürfnisse zu besprechen und ein individuelles Angebot zu erhalten.'
        }
      }
    },

    cta: {
      title: 'Bereit, beeindruckende KI-Videos zu erstellen?',
      description: 'Schließen Sie sich Tausenden von Erstellern und Unternehmen an, die Veo 3 nutzen, um Ideen zum Leben zu erwecken.',
      button: 'Jetzt starten'
    }
  },

  // Fußzeile
  footer: {
    platform: 'Plattform',
    home: 'Startseite',
    generate: 'Generieren',
    pricing: 'Preise',
    legal: 'Rechtliches',
    termsOfService: 'Nutzungsbedingungen',
    privacyPolicy: 'Datenschutzrichtlinie',
    refundPolicy: 'Rückerstattungsrichtlinie',
    contactUs: 'Kontaktieren Sie uns',
    languages: 'Sprachen',
    allRightsReserved: 'Alle Rechte vorbehalten',
    independent: 'ist eine unabhängige Plattform und steht in keiner Verbindung zu Google oder dessen Produkten.'
  },

  // Hero-Bereich
  hero: {
    title: 'Veo 3: KI-Videogenerierung mit echtem Audio',
    description: 'Generieren Sie Videos mit perfekt synchronisiertem Audio, einschließlich Soundeffekten, Dialog und Umgebungsgeräuschen. Erwecken Sie Ihre Geschichten mit Veo 3 zum Leben.',
    cta: 'Jetzt mit der Erstellung beginnen'
  },

  // Funktionen
  features: {
    mainTitle: 'Hauptfunktionen des Veo 3 KI-Video-Generators',
    mainDescription: 'Veo 3 kombiniert modernste KI-Technologie für nahtlose Video- und Audiogenerierung in einem Tool.',
    audio: {
      title: 'Native Audiogenerierung',
      description: 'Fügen Sie automatisch Soundeffekte, Umgebungsgeräusche und Dialog zu Ihren Videos hinzu.'
    },
    lipSync: {
      title: 'Realistische Lippensynchronisation',
      description: 'KI passt Charaktersprache perfekt an Mundbewegungen an für realistische Ergebnisse.'
    },
    physics: {
      title: 'Physikbasierte Videosimulation',
      description: 'Videos spiegeln echte physikalische Eigenschaften wider für natürliche Bewegung und visuelle Effekte.'
    },
    prompts: {
      title: 'Vielfältige Eingabeprompts',
      description: 'Generieren Sie Videos mit Textbeschreibungen oder Bildreferenzen.'
    },
    flow: {
      title: 'Integration mit Flow-App',
      description: 'Erstellen Sie mühelos Filmclips durch Kombination von Veo 3 und Googles Flow-Videoeditor.'
    },
    vertex: {
      title: 'Verfügbar auf Vertex AI',
      description: 'Unternehmensnutzer können über Googles Vertex AI-Plattform auf Veo 3 für skalierbare Videogenerierung zugreifen.'
    }
  },

  // Beispiele
  examples: {
    title: 'Entdecken Sie mit Veo 3 erstellte Videos',
    description: 'Sehen Sie sich Beispiele KI-generierter Videos an, die die Kraft von Veo 3 demonstrieren.'
  },

  // Anleitung
  howToUse: {
    title: 'Wie man KI-Videos mit Veo 3 erstellt',
    description: 'Folgen Sie diesen einfachen Schritten, um Videos mit synchronisiertem Audio mit Veo 3 zu generieren.',
    steps: {
      register: {
        title: 'Registrieren oder Anmelden',
        description: 'Erstellen Sie ein Konto oder melden Sie sich an, um auf Veo 3 zuzugreifen.'
      },
      prompt: {
        title: 'Geben Sie Ihren Prompt ein',
        description: 'Geben Sie eine Textbeschreibung ein oder laden Sie ein Bild hoch, um Ihr gewünschtes Video zu beschreiben.'
      },
      audio: {
        title: 'Audio anpassen',
        description: 'Fügen Sie Anweisungen für Soundeffekte, Dialog oder Umgebungsgeräusche hinzu, um Ihr Video zu verbessern.'
      },
      generate: {
        title: 'Generieren und Anzeigen',
        description: 'Lassen Sie Veo 3 Ihr Video generieren, dann schauen Sie sich Ihren KI-generierten Clip in der Vorschau an und laden Sie ihn herunter.'
      }
    },
    cta: 'Beginnen Sie Ihr erstes Video'
  },

  // FAQ
  faq: {
    title: 'Veo 3 Häufig gestellte Fragen',
    description: 'Finden Sie Antworten auf häufige Fragen zu Veo 3 KI-Videogenerierung und Audiofunktionen.',
    questions: {
      whatIsVeo3: {
        question: 'Was ist Veo 3?',
        answer: 'Veo 3 ist Googles KI-Tool, das Videos mit synchronisiertem Audio generiert, einschließlich Soundeffekten und Dialog.'
      },
      longerVideos: {
        question: 'Kann Veo 3 Videos länger als 8 Sekunden generieren?',
        answer: 'Derzeit konzentriert sich Veo 3 auf die Erstellung hochwertiger 8-Sekunden-Videos, mit Plänen für längere Formate in zukünftigen Updates.'
      },
      commercialUse: {
        question: 'Kann ich Veo 3 für kommerzielle Projekte verwenden?',
        answer: 'Ja, Veo 3 unterstützt kommerzielle Nutzung durch entsprechende Abonnementpläne und Enterprise-Zugang.'
      },
      audioTypes: {
        question: 'Welche Arten von Audio kann Veo 3 generieren?',
        answer: 'Es kann Umgebungsgeräusche, Charakterdialog und realistische Soundeffekte erstellen, die nativ zum Video gehören.'
      },
      socialMedia: {
        question: 'Kann ich Veo 3-Videos in sozialen Medien verwenden?',
        answer: 'Ja, mit Veo 3 erstellte Videos können auf Social-Media-Plattformen geteilt werden, um mühelos ansprechende Inhalte zu erstellen.'
      },
      beginnerFriendly: {
        question: 'Ist Veo 3 anfängerfreundlich?',
        answer: 'Ja, Veo 3 bietet eine einfache Benutzeroberfläche, die für Benutzer ohne technische Fähigkeiten geeignet ist.'
      },
      comparison: {
        question: 'Wie schneidet Veo 3 im Vergleich zu anderen KI-Video-Tools ab?',
        answer: 'Veo 3 hebt sich von der Konkurrenz ab, indem es Video mit perfekt synchronisiertem Audio kombiniert, eine Funktion, die nur wenige Konkurrenten bieten.'
      }
    }
  },

  // Call-to-Action
  cta: {
    title: 'Beginnen Sie mit der Erstellung beeindruckender KI-Videos',
    description: 'Verwenden Sie Veo 3, um professionelle Videos mit realistischem Ton zu generieren.',
    buttonText: 'Loslegen'
  },

  // Showcase
  showcase: {
    title: 'Aktuell im Trend',
    close: 'Schließen',
    videoPlaying: 'Video {id} wird abgespielt',
    pressEscToClose: 'Drücken Sie ESC zum Schließen'
  }
};