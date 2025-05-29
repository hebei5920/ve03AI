export default {
    // Comune
    common: {
      backToHome: 'Torna alla home',
      and: 'e',
      terms: 'Termini di servizio',
      privacy: 'Informativa sulla privacy',
      loading: 'Caricamento...',
      error: 'Errore',
      success: 'Successo',
      failed: 'Fallito',
      retry: 'Riprova',
      close: 'Chiudi',
      confirm: 'Conferma',
      cancel: 'Annulla',
      save: 'Salva',
      edit: 'Modifica',
      delete: 'Elimina',
      download: 'Scarica',
      upload: 'Carica',
      refresh: 'Aggiorna',
      back: 'Indietro',
      next: 'Pagina successiva',
      previous: 'Pagina precedente',
      details: 'Dettagli',
      all: 'Tutti',
      create: 'Crea',
      generate: 'Genera',
      processing: 'Elaborazione',
      completed: 'Completato',
      pending: 'In attesa',
      unknown: 'Sconosciuto',
      login: 'Accedi'
    },

    // Autenticazione
    auth: {
      signIn: {
        title: 'Accedi al tuo account',
        loggingIn: 'Accesso in corso...',
        continueWithGoogle: 'Continua con Google',
        continueWithGithub: 'Continua con GitHub',
        or: 'oppure',
        termsMessage: 'Accedendo, accetti i nostri'
      }
    },

    // Generatore
    generator: {
      title: 'Generatore di video IA',
      subtitle: 'Usa l\'IA per trasformare le tue immagini e il tuo testo in video straordinari',
      tabs: {
        imageToVideo: 'Immagine in video',
        textToVideo: 'Testo in video'
      },
      imageUpload: {
        title: 'Carica la tua immagine',
        instruction: 'Clicca o trascina per caricare un\'immagine',
        formats: 'JPG, PNG o WEBP (max 10MB)',
        button: 'Seleziona immagine'
      },
      textInput: {
        title: 'Inserisci il tuo testo',
        instruction: 'Descrizione del testo'
      },
      params: {
        duration: 'Durata del video',
        modelVersion: 'Versione del modello',
        quality: 'Qualità del video',
        prompt: 'Prompt',
        aspectRatio: 'Rapporto d\'aspetto',
        motionMode: 'Modalità movimento',
        motionModeNormal: 'Normale',
        motionModeFast: 'Veloce',
        negativePrompt: 'Prompt negativo',
        seed: 'Seed casuale',
        style: 'Preset stile',
        watermark: 'Aggiungi filigrana',
        selectModel: 'Seleziona versione modello',
        selectStyle: 'Seleziona preset stile'
      },
      styles: {
        anime: 'Anime',
        '3d_animation': 'Animazione 3D',
        clay: 'Argilla',
        comic: 'Fumetto',
        cyberpunk: 'Cyberpunk'
      },
      placeholders: {
        prompt: 'Descrivi cosa vuoi vedere nel video...',
        text: 'Descrivi la scena che vuoi creare...',
        negativePrompt: 'Elementi da evitare nel video...',
        seed: 'Lascia vuoto per un seed casuale'
      },
      tooltips: {
        no8sIn1080p: 'La qualità 1080p non supporta video di 8 secondi',
        noFastIn1080p: 'La qualità 1080p non supporta il movimento veloce',
        noFastIn8s: 'Il movimento veloce è disponibile solo per video di 5 secondi',
        motionModeDesc: 'Controlla la velocità del movimento nel video',
        v3_5: 'Modello precedente con preset di stile',
        v4: 'Modello standard con buona qualità e velocità',
        v4_5: 'Modello più recente con la migliore qualità'
      },
      preview: {
        title: 'Anteprima',
        emptyState: 'I tuoi video generati appariranno qui',
        generating: 'Generazione del video',
        complete: 'Completato',
        error: 'Impossibile generare il video, riprova.',
        tryAgain: 'Si è verificato un errore, prova impostazioni diverse.',
        videoId: 'ID video',
        videoReady: 'Video pronto'
      },
      errors: {
        invalidFileType: 'Carica solo immagini JPG, PNG o WEBP',
        imageRequired: 'Carica un\'immagine',
        textRequired: 'Inserisci una descrizione del testo',
        promptRequired: 'Inserisci un prompt',
        seedRange: 'Il valore del seed deve essere compreso tra 0 e 2147483647',
        fileTooLarge: 'La dimensione del file deve essere inferiore a 20MB'
      },
      advancedOptions: 'Opzioni avanzate',
      generating: 'Generazione in corso...',
      generateButton: 'Genera video',
      loginRequired: 'Accedi per generare video'
    },

    // Cronologia
    history: {
      title: 'Cronologia generazione',
      totalRecords: 'Totale {count} record',
      filters: {
        all: 'Tutta la cronologia',
        textToVideo: 'Testo in video',
        imageToVideo: 'Immagine in video'
      },
      quickActions: {
        generateNew: 'Genera nuovo video'
      },
      currentView: 'Visualizzazione corrente:',
      refreshData: 'Aggiorna',
      empty: {
        title: {
          all: 'Nessuna cronologia',
          textToVideo: 'Nessun record testo in video',
          imageToVideo: 'Nessun record immagine in video'
        },
        description: {
          all: 'Inizia a generare il tuo primo video!',
          textToVideo: 'Prova a generare il tuo primo video dal testo!',
          imageToVideo: 'Carica un\'immagine per generare il tuo primo video!'
        },
        action: 'Inizia a generare'
      },
      pagination: {
        page: 'Pagina {current} di {total}'
      },
      status: {
        completed: 'Completato',
        processing: 'Generazione',
        failed: 'Fallito',
        pending: 'In attesa'
      },
      timeAgo: {
        justNow: 'Proprio ora',
        minutesAgo: '{minutes} minuti fa',
        hoursAgo: '{hours} ore fa',
        daysAgo: '{days} giorni fa'
      },
      processingMessage: 'Generazione in corso, attendere...',
      failedMessage: 'Generazione fallita, riprova'
    },

    // Dettagli cronologia
    historyDetail: {
      backToHistory: 'Torna alla cronologia',
      generatedVideo: 'Video generato',
      downloading: 'Download in corso...',
      downloadVideo: 'Scarica video',
      videoUnavailable: 'File video non disponibile',
      downloadSuccess: 'Video scaricato con successo! Nome file: {fileName}',
      downloadFailed: 'Download fallito, riprova più tardi',
      openInNewTab: 'Link di download aperto in una nuova finestra',

      videoStatus: {
        pending: 'Video in attesa di generazione',
        processing: 'Video in fase di generazione',
        failed: 'Generazione video fallita',
        noVideo: 'Nessun video disponibile'
      },

      info: {
        createdAt: 'Data di creazione',
        videoSize: 'Dimensione video',
        modelVersion: 'Versione modello',
        duration: 'Durata video',
        videoDimensions: 'Dimensioni video',
        resolution: 'Risoluzione',
        quality: 'Qualità video',
        prompt: 'Prompt',
        sourceImage: 'Immagine sorgente',
        durationUnit: 'sec'
      },

      type: {
        textToVideo: 'Testo in video',
        imageToVideo: 'Immagine in video'
      },

      notFound: 'Record non trovato'
    },

    // Navigazione
    nav: {
      settings: 'Impostazioni'
    },

    // Barra di navigazione
    navbar: {
      home: 'Home',
      generate: 'Genera',
      pricing: 'Prezzi',
      login: 'Accedi'
    },

    // Menu utente
    user: {
      plan: 'Piano attuale',
      upgrade: 'Aggiorna',
      manage: 'Gestisci',
      credits: 'Crediti',
      available: 'Disponibili',
      history: 'Cronologia generazione',
      allHistory: 'Cronologia generazione',
      viewAllHistory: 'Visualizza tutti i record di generazione',
      logout: 'Esci'
    },

    // Tema
    theme: {
      toggle: 'Cambia tema',
      switchToLight: 'Passa alla modalità chiara',
      switchToDark: 'Passa alla modalità scura'
    },

    // Prezzi
    pricing: {
      title: 'Scegli il tuo piano',
      description: 'Prezzi semplici e trasparenti che crescono con te. Nessun costo nascosto o spesa imprevista.',
      monthly: 'Mensile',
      annual: 'Annuale',
      save: 'Risparmia',
      popular: 'Più popolare',
      perMonth: '/mese',
      perYear: '/anno',

      plans: {
        free: {
          name: 'Gratuito',
          description: 'Perfetto per appassionati e creatori occasionali per sperimentare.',
          features: {
            feature1: '20 crediti video al mese',
            feature2: 'Risoluzione video 720p',
            feature3: 'Massimo 5 secondi di video'
          },
          limitations: {
            limitation1: 'Non può essere utilizzato per scopi commerciali'
          },
          buttonText: 'Inizia'
        },
        pro: {
          name: 'Pro',
          description: 'Perfetto per creatori di contenuti e piccole imprese.',
          features: {
            feature1: '200 crediti video al mese',
            feature2: 'Risoluzione video 1080p',
            feature3: 'Massimo 15 secondi di video',
            feature4: 'Tempo di rendering prioritario',
            feature5: 'Licenza per uso commerciale'
          },
          buttonText: 'Abbonati ora'
        },
        enterprise: {
          name: 'Enterprise',
          description: 'Per agenzie e aziende con esigenze elevate.',
          features: {
            feature1: 'Crediti video illimitati',
            feature2: 'Risoluzione video 4K',
            feature3: 'Massimo 30+ secondi di video',
            feature4: 'Supporto prioritario',
            feature5: 'Addestramento modelli personalizzati',
            feature6: 'Accesso API'
          },
          buttonText: 'Contatta vendite'
        }
      },

      hero: {
        title: 'Prezzi semplici e trasparenti',
        description: 'Scegli il piano perfetto per le tue esigenze creative senza costi nascosti.'
      },

      comparison: {
        title: 'Confronto piani',
        description: 'Visualizza un confronto dettagliato delle funzionalità per scegliere il piano giusto.',
        feature: 'Funzionalità',
        free: 'Gratuito',
        pro: 'Pro',
        enterprise: 'Enterprise',
        features: {
          videoLength: 'Durata massima video',
          monthlyCredits: 'Crediti mensili',
          resolution: 'Risoluzione massima',
          audioTracks: 'Tracce audio',
          customModels: 'Addestramento modelli personalizzati',
          priorityRendering: 'Rendering prioritario',
          commercialUse: 'Diritti uso commerciale',
          prioritySupport: 'Supporto prioritario',
          api: 'Accesso API'
        },
        values: {
          videoLength: {
            free: '5 sec',
            pro: '15 sec',
            enterprise: '30+ sec'
          },
          monthlyCredits: {
            free: '20',
            pro: '200',
            enterprise: 'Illimitati'
          },
          resolution: {
            free: '720p',
            pro: '1080p',
            enterprise: '4K'
          },
          audioTracks: {
            free: '1',
            pro: '3',
            enterprise: 'Illimitati'
          }
        }
      },

      faq: {
        title: 'Domande frequenti',
        description: 'Trova risposte alle domande comuni sui nostri piani di prezzo e fatturazione.',
        questions: {
          credits: {
            question: 'Cosa sono i crediti video?',
            answer: 'I crediti video sono la valuta utilizzata per generare video su Veo 3. Un credito permette di generare un video secondo le specifiche del tuo piano. I crediti si resettano mensilmente alla data di fatturazione.'
          },
          payment: {
            question: 'Quali metodi di pagamento accettate?',
            answer: 'Accettiamo tutte le principali carte di credito, inclusi Visa, Mastercard, American Express e Discover. Per i piani enterprise, accettiamo anche bonifici bancari e opzioni di fatturazione.'
          },
          cancel: {
            question: 'Posso annullare l\'abbonamento in qualsiasi momento?',
            answer: 'Sì, puoi annullare l\'abbonamento in qualsiasi momento. Il tuo accesso continuerà fino alla fine del periodo di fatturazione corrente. Non ci sono spese di cancellazione.'
          },
          refunds: {
            question: 'Qual è la vostra politica di rimborso?',
            answer: 'Offriamo una garanzia di rimborso di 7 giorni per i nuovi abbonamenti Pro. Se non sei soddisfatto dell\'acquisto, contatta il nostro team di supporto entro 7 giorni dall\'acquisto iniziale per un rimborso completo.'
          },
          enterprise: {
            question: 'Offrite prezzi enterprise personalizzati?',
            answer: 'Sì, offriamo prezzi personalizzati per i clienti enterprise con esigenze specifiche. Contatta il nostro team vendite per discutere i tuoi requisiti e ottenere un preventivo personalizzato.'
          }
        }
      },

      cta: {
        title: 'Pronto a creare video IA straordinari?',
        description: 'Unisciti a migliaia di creatori e aziende che usano Veo 3 per dare vita alle loro idee.',
        button: 'Inizia ora'
      }
    },

    // Footer
    footer: {
      platform: 'Piattaforma',
      home: 'Home',
      generate: 'Genera',
      pricing: 'Prezzi',
      legal: 'Legale',
      termsOfService: 'Termini di servizio',
      privacyPolicy: 'Informativa sulla privacy',
      refundPolicy: 'Politica di rimborso',
      contactUs: 'Contattaci',
      languages: 'Lingue',
      allRightsReserved: 'Tutti i diritti riservati',
      independent: 'è una piattaforma indipendente non affiliata a Google o ai suoi prodotti.'
    },

    // Hero
    hero: {
      title: 'Veo 3: Generazione video IA con voci reali',
      description: 'Genera video con audio perfettamente sincronizzato, inclusi effetti sonori, dialoghi e suoni ambientali. Dai vita alle tue storie con Veo 3.',
      cta: 'Inizia a creare ora'
    },

    // Funzionalità
    features: {
      mainTitle: 'Funzionalità principali del generatore video IA Veo 3',
      mainDescription: 'Veo 3 combina tecnologie IA all\'avanguardia per offrire una generazione video e audio senza soluzione di continuità in un unico strumento.',
      audio: {
        title: 'Generazione audio nativa',
        description: 'Aggiungi automaticamente effetti sonori, suoni ambientali e dialoghi ai tuoi video.'
      },
      lipSync: {
        title: 'Sincronizzazione labiale realistica',
        description: 'L\'IA combina perfettamente il parlato dei personaggi con i movimenti della bocca, creando effetti realistici.'
      },
      physics: {
        title: 'Modellazione video basata sulla fisica',
        description: 'I video riflettono le proprietà fisiche del mondo reale, garantendo movimenti ed effetti visivi naturali.'
      },
      prompts: {
        title: 'Prompt di input multipli',
        description: 'Usa descrizioni testuali o riferimenti a immagini per generare video.'
      },
      flow: {
        title: 'Integrazione con l\'app Flow',
        description: 'Crea facilmente clip cinematografiche combinando Veo 3 con l\'editor video Flow di Google.'
      },
      vertex: {
        title: 'Disponibile su Vertex AI',
        description: 'Gli utenti enterprise possono accedere a Veo 3 tramite la piattaforma Vertex AI di Google per una generazione video scalabile.'
      }
    },

    // Esempi
    examples: {
      title: 'Esplora i video creati con Veo 3',
      description: 'Visualizza esempi di video generati dall\'IA che mostrano le potenti capacità di Veo 3.'
    },

    // Come usare
    howToUse: {
      title: 'Come creare video IA con Veo 3',
      description: 'Segui questi semplici passaggi per creare video con audio sincronizzato usando Veo 3.',
      steps: {
        register: {
          title: 'Registrati o accedi',
          description: 'Crea un account o accedi per accedere a Veo 3.'
        },
        prompt: {
          title: 'Inserisci il tuo prompt',
          description: 'Inserisci una descrizione testuale o carica un\'immagine per descrivere il video desiderato.'
        },
        audio: {
          title: 'Personalizza l\'audio',
          description: 'Aggiungi istruzioni per effetti sonori, dialoghi o suoni ambientali per migliorare il tuo video.'
        },
        generate: {
          title: 'Genera e visualizza',
          description: 'Lascia che Veo 3 generi il tuo video, poi visualizza e scarica il tuo clip generato dall\'IA.'
        }
      },
      cta: 'Inizia il tuo primo video'
    },

    // FAQ
    faq: {
      title: 'Domande frequenti su Veo 3',
      description: 'Trova risposte alle domande comuni sulla generazione video IA di Veo 3 e le funzionalità audio.',
      questions: {
        whatIsVeo3: {
          question: 'Cos\'è Veo 3?',
          answer: 'Veo 3 è uno strumento IA di Google che genera video con audio sincronizzato, inclusi effetti sonori e dialoghi.'
        },
        longerVideos: {
          question: 'Veo 3 può generare video più lunghi di 8 secondi?',
          answer: 'Attualmente, Veo 3 si concentra sulla creazione di video di alta qualità di 8 secondi, con piani per supportare formati più lunghi negli aggiornamenti futuri.'
        },
        commercialUse: {
          question: 'Posso usare Veo 3 per progetti commerciali?',
          answer: 'Sì, Veo 3 supporta l\'uso commerciale attraverso i piani di abbonamento appropriati e l\'accesso enterprise.'
        },
        audioTypes: {
          question: 'Che tipi di audio può generare Veo 3?',
          answer: 'Può creare suoni ambientali, dialoghi dei personaggi ed effetti sonori realistici nativi per i video.'
        },
        socialMedia: {
          question: 'Posso usare i video di Veo 3 sui social media?',
          answer: 'Sì, i video creati con Veo 3 possono essere condivisi sulle piattaforme social media, rendendo facile la creazione di contenuti coinvolgenti.'
        },
        beginnerFriendly: {
          question: 'Veo 3 è adatto ai principianti?',
          answer: 'Sì, Veo 3 fornisce un\'interfaccia semplice adatta agli utenti senza competenze tecniche.'
        },
        comparison: {
          question: 'Come si confronta Veo 3 con altri strumenti video IA?',
          answer: 'Veo 3 si distingue tra molti concorrenti combinando video con audio perfettamente sincronizzato - una funzionalità offerta da pochi concorrenti.'
        }
      }
    },

    // CTA
    cta: {
      title: 'Inizia a creare video IA straordinari',
      description: 'Usa Veo 3 per generare video di qualità professionale con suoni reali.',
      buttonText: 'Inizia'
    },

    // Vetrina
    showcase: {
      title: 'Tendenze attuali',
      close: 'Chiudi',
      videoPlaying: 'Riproduzione video {id}',
      pressEscToClose: 'Premi ESC per chiudere'
    }
  }; 