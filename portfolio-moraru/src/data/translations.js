export const LANGUAGE_OPTIONS = [
  { code: "it", short: "IT", label: "Italiano", flag: "🇮🇹" },
  { code: "en", short: "EN", label: "English", flag: "🇬🇧" },
  { code: "es", short: "ES", label: "Espanol", flag: "🇪🇸" },
  { code: "ro", short: "RO", label: "Romana", flag: "🇷🇴" },
];

export const SITE_TEXT = {
  it: {
    header: {
      brandRole: "Full Stack Web Developer",
      toggleNavigationLabel: "Apri o chiudi menu",
      nav: {
        home: "Home",
        about: "Chi sono",
        projects: "Progetti",
        contact: "Contatti",
      },
      languageLabel: "Lingua",
      languageSwitcherAriaLabel: "Seleziona lingua sito",
    },
    footer: {
      portfolio: "Portfolio",
      backToTop: "Torna su",
    },
    backToTop: {
      label: "Torna su",
    },
    homepage: {
      heroGreeting: "Ciao, sono Moraru Stefan",
      greetingPrefix: "Ciao, sono ",
      role: "Full Stack Web Developer",
      heroLead:
        "Creo interfacce web moderne, responsive e intuitive, con grande attenzione all'esperienza utente.",
      ctaProjects: "Guarda i progetti",
      ctaDownloadCv: "Scarica CV",
      portraitAlt: "Ritratto del developer",
      about: {
        kicker: "Profilo",
        title: "Chi sono",
        description:
          "Full Stack Web Developer con un solido orientamento al front-end. Progetto e sviluppo interfacce web moderne e responsive con JavaScript, TypeScript e React, seguendo ogni progetto dal design fino alla messa online. Ho maturato esperienza in agenzia e come freelance su progetti per clienti reali, lavorando in team con Git. Attento alla qualità del codice e all'esperienza utente, sono costantemente aggiornato sulle nuove tecnologie.",
        tech: ["HTML", "CSS", "Javascript", "TypeScript", "React", "Tailwind CSS", "Node.js", "Express", "MySQL", "Supabase", "WordPress", "PHP"],
      },
      path: {
        title: "Il mio percorso",
        subtitle:
          "Un percorso costruito tra formazione tecnica, esperienza professionale e la svolta verso lo sviluppo web.",
        school: {
          period: "2015 • 2020",
          meta: "Lecco, Lombardia",
          title: "Istituto Superiore Statale 'P.A. Fiocchi'",
          description:
            "Diploma di Istituto Tecnico e Professionale, con una formazione orientata alla pratica e alla risoluzione di problemi reali.",
        },
        work: {
          period: "Ott 2021 • Nov 2023",
          meta: "Minuterie 3M · Lecco",
          title: "Tecnico di produzione",
          description:
            "Esperienza nel settore metalmeccanico con attività operative.",
          bullets: ["Lavoro in team", "Gestione del tempo", "Attenzione alla qualità"],
        },
        snappie: {
          period: "Dic 2023 • Gen 2026",
          meta: "Da remoto · Snappie",
          title: "Full Stack Web Developer",
          description:
            "Collaborazione freelance da remoto: sviluppo di interfacce responsive e manutenzione di codice back-end esistente.",
          bullets: [
            "Interfacce responsive con JavaScript, React, HTML, CSS e Tailwind CSS",
            "Manutenzione di codice back-end in Node.js ed Express",
          ],
        },
        booleanCourse: {
          period: "Mag 2025 • Gen 2026",
          meta: "Da remoto · Boolean",
          title: "Web Developer Trainee",
          description:
            "Percorso intensivo full-time con sviluppo di progetti web individuali e di gruppo.",
          bullets: [
            "Sviluppo di progetti con HTML, CSS, JavaScript e React",
            "Versionamento del codice con Git e GitHub",
          ],
        },
        beaverLab: {
          period: "Mar 2026 • Presente",
          meta: "Seregno, Lombardia · Beaver Lab",
          title: "Web Developer",
          description:
            "Sviluppo e personalizzazione di siti WordPress a partire dai design forniti, con contenuti dinamici gestiti tramite ACF e funzionalità custom in PHP.",
          bullets: [
            "Creazione di layout e contenuti dinamici tramite ACF",
            "Utilizzo di PHP per personalizzazioni e funzionalità custom",
            "Template email professionali con MJML",
            "Uso di agenti AI (Claude Code, Codex) per sviluppo, debugging e refactoring, con revisione del codice prodotto",
            "Collaborazione con il team di sviluppo su progetti per clienti reali",
          ],
        },
      },
      showcase: {
        title: "I miei lavori",
        subtitle: "Progetti, certificati e tech stack.",
        liveProjects: "Progetti Live",
        technologies: "Tecnologie",
        tabs: {
          projects: "Progetti",
          certificates: "Certificati",
          stack: "Tecnologie",
        },
        featured: "In evidenza",
        liveDemo: "Live Demo",
        code: "Codice",
        demo: "Demo",
        placeholderTitle: "In fase di lavorazione",
        placeholderDesc: "Questo progetto sarà disponibile a breve.",
        projects: [
          {
            title: "BaniWise",
            description:
              "App per la gestione delle finanze personali: traccia entrate e spese, imposta obiettivi di risparmio e consulta un calendario con le spese di ogni giorno. Include anche un convertitore di valuta in tempo reale.",
            tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
            image: "home-baniwise.jpg",
            demoUrl: "https://bani-wise.vercel.app/",
            codeUrl: "https://github.com/moraru-stefan/BaniWise",
          },
          {
            title: "Garavaglia Auto",
            description:
              "Sito web per una concessionaria di automobili. Ho replicato il design da Figma in WordPress, utilizzando ACF per i componenti dinamici e PHP per la logica personalizzata. Realizzato in coppia con un collega.",
            tech: ["WordPress", "ACF", "PHP", "Figma"],
            image: "garavagliaauto.webp",
            demoUrl: "https://www.garavagliaauto.it/",
          },
          {
            title: "MySafeDOC",
            description:
              "Landing page per un servizio di conformità normativa. Ho trasformato l'homepage da HTML/CSS statico a un sito WordPress dinamico, strutturando i contenuti con ACF flexible content per garantire al cliente piena autonomia nella gestione dei testi.",
            tech: ["WordPress", "ACF", "PHP"],
            image: "mysafedoc.webp",
            demoUrl: "https://mysafedoc.cloud/",
          },
        ],
      },
      certificates: {
        openLabel: "Apri",
        imageAlt: "Certificato",
        openPdf: "Apri PDF",
      },
      contact: {
        title: "Contatti",
        lead:
          "Vuoi collaborare o hai domande? Compila il form oppure scrivimi via email.",
        send: "Invia",
        hint:
          "*Dopo l'invio si aprirà la tua email per confermare e spedire il messaggio.",
        form: {
          name: "Nome",
          namePlaceholder: "Il tuo nome",
          email: "Email",
          emailPlaceholder: "nome@email.com",
          subject: "Oggetto",
          subjectPlaceholder: "Es. Collaborazione / Info",
          message: "Messaggio",
          messagePlaceholder: "Scrivimi qui...",
          defaultSubject: "Nuovo messaggio",
          mailName: "Nome",
          mailEmail: "Email",
          mailMessage: "Messaggio",
        },
      },
    },
  },
  en: {
    header: {
      brandRole: "Full Stack Web Developer",
      toggleNavigationLabel: "Open or close navigation",
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
      },
      languageLabel: "Language",
      languageSwitcherAriaLabel: "Choose website language",
    },
    footer: {
      portfolio: "Portfolio",
      backToTop: "Back to top",
    },
    backToTop: {
      label: "Back to top",
    },
    homepage: {
      heroGreeting: "Hi, I'm Moraru Stefan",
      greetingPrefix: "Hi, I'm ",
      role: "Full Stack Web Developer",
      heroLead:
        "I build modern, responsive, and intuitive web interfaces, with strong attention to user experience.",
      ctaProjects: "View projects",
      ctaDownloadCv: "Download CV",
      portraitAlt: "Developer portrait",
      about: {
        kicker: "Profile",
        title: "About me",
        description:
          "Full Stack Web Developer with a solid front-end focus. I design and build modern, responsive web interfaces with JavaScript, TypeScript, and React, following each project from design through to launch. I've gained experience both in-agency and freelance on real client projects, working in a team with Git. Attentive to code quality and user experience, I stay constantly up to date with new technologies.",
        tech: ["HTML", "CSS", "Javascript", "TypeScript", "React", "Tailwind CSS", "Node.js", "Express", "MySQL", "Supabase", "WordPress", "PHP"],
      },
      path: {
        title: "My Journey",
        subtitle:
          "A path built on technical training, professional experience, and the shift toward web development.",
        school: {
          period: "2015 • 2020",
          meta: "Lecco, Lombardy",
          title: "State High School 'P.A. Fiocchi'",
          description:
            "Technical and Vocational High School Diploma, with hands-on training focused on solving real-world problems.",
        },
        work: {
          period: "Oct 2021 • Nov 2023",
          meta: "Minuterie 3M · Lecco",
          title: "Production Technician",
          description:
            "Experience in the metalworking industry with hands-on operations.",
          bullets: ["Teamwork", "Time management", "Attention to quality"],
        },
        snappie: {
          period: "Dec 2023 • Jan 2026",
          meta: "Remote · Snappie",
          title: "Full Stack Web Developer",
          description:
            "Remote freelance collaboration: building responsive interfaces and maintaining existing back-end code.",
          bullets: [
            "Responsive interfaces with JavaScript, React, HTML, CSS, and Tailwind CSS",
            "Maintaining back-end code in Node.js and Express",
          ],
        },
        booleanCourse: {
          period: "May 2025 • Jan 2026",
          meta: "Remote · Boolean",
          title: "Web Developer Trainee",
          description:
            "Full-time intensive program building individual and team web projects.",
          bullets: [
            "Building projects with HTML, CSS, JavaScript and React",
            "Code versioning with Git and GitHub",
          ],
        },
        beaverLab: {
          period: "Mar 2026 • Present",
          meta: "Seregno, Lombardy · Beaver Lab",
          title: "Web Developer",
          description:
            "Building and customizing WordPress websites from provided designs, with dynamic content managed through ACF and custom PHP functionality.",
          bullets: [
            "Dynamic layouts and content via ACF",
            "PHP for custom functionality",
            "Professional email templates with MJML",
            "Using AI agents (Claude Code, Codex) for development, debugging, and refactoring, with review of the generated code",
            "Collaborating with the dev team on real client projects",
          ],
        },
      },
      showcase: {
        title: "My Work",
        subtitle: "Projects, certificates, and tech stack.",
        liveProjects: "Live Projects",
        technologies: "Technologies",
        tabs: {
          projects: "Projects",
          certificates: "Certificates",
          stack: "Technologies",
        },
        featured: "Featured",
        liveDemo: "Live Demo",
        code: "Code",
        demo: "Demo",
        placeholderTitle: "Work in progress",
        placeholderDesc: "This project will be available soon.",
        projects: [
          {
            title: "BaniWise",
            description:
              "A personal finance app to track income and expenses, set savings goals, and check a calendar with your daily spending. It also includes a live currency converter.",
            tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
            image: "home-baniwise.jpg",
            demoUrl: "https://bani-wise.vercel.app/",
            codeUrl: "https://github.com/moraru-stefan/BaniWise",
          },
          {
            title: "Garavaglia Auto",
            description:
              "Website for a car dealership. I implemented the Figma design in WordPress, using ACF for dynamic components and PHP for custom logic. Built together with a colleague.",
            tech: ["WordPress", "ACF", "PHP", "Figma"],
            image: "garavagliaauto.webp",
            demoUrl: "https://www.garavagliaauto.it/",
          },
          {
            title: "MySafeDOC",
            description:
              "Landing page for a regulatory compliance service. I converted the homepage from static HTML/CSS into a dynamic WordPress site, structuring the content with ACF flexible content to give the client full autonomy in managing and updating the copy.",
            tech: ["WordPress", "ACF", "PHP"],
            image: "mysafedoc.webp",
            demoUrl: "https://mysafedoc.cloud/",
          },
        ],
      },
      certificates: {
        openLabel: "Open",
        imageAlt: "Certificate",
        openPdf: "Open PDF",
      },
      contact: {
        title: "Contact",
        lead:
          "Want to collaborate or have questions? Fill out the form or write me an email.",
        send: "Send",
        hint:
          "*After clicking send, your email client will open so you can confirm and send the message.",
        form: {
          name: "Name",
          namePlaceholder: "Your name",
          email: "Email",
          emailPlaceholder: "name@email.com",
          subject: "Subject",
          subjectPlaceholder: "e.g. Collaboration / Info",
          message: "Message",
          messagePlaceholder: "Write your message here...",
          defaultSubject: "New message",
          mailName: "Name",
          mailEmail: "Email",
          mailMessage: "Message",
        },
      },
    },
  },
  es: {
    header: {
      brandRole: "Full Stack Web Developer",
      toggleNavigationLabel: "Abrir o cerrar navegacion",
      nav: {
        home: "Inicio",
        about: "Sobre mi",
        projects: "Proyectos",
        contact: "Contacto",
      },
      languageLabel: "Idioma",
      languageSwitcherAriaLabel: "Seleccionar idioma del sitio",
    },
    footer: {
      portfolio: "Portafolio",
      backToTop: "Volver arriba",
    },
    backToTop: {
      label: "Volver arriba",
    },
    homepage: {
      heroGreeting: "Hola, soy Moraru Stefan",
      greetingPrefix: "Hola, soy ",
      role: "Full Stack Web Developer",
      heroLead:
        "Creo interfaces web modernas, responsive e intuitivas, con gran atencion a la experiencia de usuario.",
      ctaProjects: "Ver proyectos",
      ctaDownloadCv: "Descargar CV",
      portraitAlt: "Retrato del desarrollador",
      about: {
        kicker: "Perfil",
        title: "Sobre mi",
        description:
          "Full Stack Web Developer con una solida orientacion al front-end. Diseno y desarrollo interfaces web modernas y responsive con JavaScript, TypeScript y React, siguiendo cada proyecto desde el diseno hasta la publicacion. He adquirido experiencia tanto en agencia como en freelance en proyectos para clientes reales, trabajando en equipo con Git. Atento a la calidad del codigo y a la experiencia de usuario, me mantengo constantemente actualizado sobre las nuevas tecnologias.",
        tech: ["HTML", "CSS", "Javascript", "TypeScript", "React", "Tailwind CSS", "Node.js", "Express", "MySQL", "Supabase", "WordPress", "PHP"],
      },
      path: {
        title: "Mi recorrido",
        subtitle:
          "Un recorrido construido entre formacion tecnica, experiencia profesional y el giro hacia el desarrollo web.",
        school: {
          period: "2015 • 2020",
          meta: "Lecco, Lombardia",
          title: "Instituto Estatal 'P.A. Fiocchi'",
          description:
            "Diploma tecnico y profesional, con una formacion orientada a la practica y a la resolucion de problemas reales.",
        },
        work: {
          period: "Oct 2021 • Nov 2023",
          meta: "Minuterie 3M · Lecco",
          title: "Tecnico de produccion",
          description:
            "Experiencia en el sector metalmecanico con actividades operativas.",
          bullets: ["Trabajo en equipo", "Gestion del tiempo", "Atencion a la calidad"],
        },
        snappie: {
          period: "Dic 2023 • Ene 2026",
          meta: "Remoto · Snappie",
          title: "Full Stack Web Developer",
          description:
            "Colaboracion freelance remota: desarrollo de interfaces responsive y mantenimiento de codigo back-end existente.",
          bullets: [
            "Interfaces responsive con JavaScript, React, HTML, CSS y Tailwind CSS",
            "Mantenimiento de codigo back-end en Node.js y Express",
          ],
        },
        booleanCourse: {
          period: "May 2025 • Ene 2026",
          meta: "Remoto · Boolean",
          title: "Web Developer Trainee",
          description:
            "Programa full-time intensivo con desarrollo de proyectos web individuales y en equipo.",
          bullets: [
            "Desarrollo de proyectos con HTML, CSS, JavaScript y React",
            "Control de versiones con Git y GitHub",
          ],
        },
        beaverLab: {
          period: "Mar 2026 • Presente",
          meta: "Seregno, Lombardia · Beaver Lab",
          title: "Web Developer",
          description:
            "Desarrollo y personalizacion de sitios WordPress a partir de disenos proporcionados, con contenido dinamico gestionado mediante ACF y funcionalidades personalizadas en PHP.",
          bullets: [
            "Layouts y contenidos dinamicos mediante ACF",
            "PHP para funcionalidades personalizadas",
            "Plantillas de email profesionales con MJML",
            "Uso de agentes de IA (Claude Code, Codex) para desarrollo, depuracion y refactorizacion, con revision del codigo generado",
            "Colaboracion con el equipo de desarrollo en proyectos reales",
          ],
        },
      },
      showcase: {
        title: "Mis trabajos",
        subtitle: "Proyectos, certificados y stack tecnologico.",
        liveProjects: "Proyectos en vivo",
        technologies: "Tecnologias",
        tabs: {
          projects: "Proyectos",
          certificates: "Certificados",
          stack: "Tecnologias",
        },
        featured: "Destacado",
        liveDemo: "Demo en vivo",
        code: "Codigo",
        demo: "Demo",
        placeholderTitle: "En construccion",
        placeholderDesc: "Este proyecto estará disponible pronto.",
        projects: [
          {
            title: "BaniWise",
            description:
              "Aplicacion de finanzas personales para registrar ingresos y gastos, fijar objetivos de ahorro y consultar un calendario con los gastos diarios. Incluye tambien un conversor de divisas en tiempo real.",
            tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
            image: "home-baniwise.jpg",
            demoUrl: "https://bani-wise.vercel.app/",
            codeUrl: "https://github.com/moraru-stefan/BaniWise",
          },
          {
            title: "Garavaglia Auto",
            description:
              "Sitio web para un concesionario de automoviles. Replique el diseno de Figma en WordPress, usando ACF para los componentes dinamicos y PHP para la logica personalizada. Realizado junto a un companero.",
            tech: ["WordPress", "ACF", "PHP", "Figma"],
            image: "garavagliaauto.webp",
            demoUrl: "https://www.garavagliaauto.it/",
          },
          {
            title: "MySafeDOC",
            description:
              "Landing page para un servicio de cumplimiento normativo. Transforme la homepage de HTML/CSS estatico a un sitio WordPress dinamico, estructurando el contenido con ACF flexible content para brindar al cliente plena autonomia en la gestion de los textos.",
            tech: ["WordPress", "ACF", "PHP"],
            image: "mysafedoc.webp",
            demoUrl: "https://mysafedoc.cloud/",
          },
        ],
      },
      certificates: {
        openLabel: "Abrir",
        imageAlt: "Certificado",
        openPdf: "Abrir PDF",
      },
      contact: {
        title: "Contacto",
        lead:
          "Quieres colaborar o tienes preguntas? Completa el formulario o escribeme por email.",
        send: "Enviar",
        hint:
          "*Despues del envio se abrira tu correo para confirmar y enviar el mensaje.",
        form: {
          name: "Nombre",
          namePlaceholder: "Tu nombre",
          email: "Email",
          emailPlaceholder: "nombre@email.com",
          subject: "Asunto",
          subjectPlaceholder: "Ej. Colaboracion / Info",
          message: "Mensaje",
          messagePlaceholder: "Escribe aqui...",
          defaultSubject: "Nuevo mensaje",
          mailName: "Nombre",
          mailEmail: "Email",
          mailMessage: "Mensaje",
        },
      },
    },
  },
  ro: {
    header: {
      brandRole: "Full Stack Web Developer",
      toggleNavigationLabel: "Deschide sau inchide meniul",
      nav: {
        home: "Acasa",
        about: "Despre mine",
        projects: "Proiecte",
        contact: "Contact",
      },
      languageLabel: "Limba",
      languageSwitcherAriaLabel: "Selecteaza limba site-ului",
    },
    footer: {
      portfolio: "Portofoliu",
      backToTop: "Sus",
    },
    backToTop: {
      label: "Sus",
    },
    homepage: {
      heroGreeting: "Salut, sunt Moraru Stefan",
      greetingPrefix: "Salut, sunt ",
      role: "Full Stack Web Developer",
      heroLead:
        "Construiesc interfete web moderne, responsive si intuitive, cu atentie puternica la experienta utilizatorului.",
      ctaProjects: "Vezi proiectele",
      ctaDownloadCv: "Descarca CV",
      portraitAlt: "Portret dezvoltator",
      about: {
        kicker: "Profil",
        title: "Despre mine",
        description:
          "Full Stack Web Developer cu o orientare solida spre front-end. Proiectez si dezvolt interfete web moderne si responsive cu JavaScript, TypeScript si React, urmarind fiecare proiect de la design pana la lansare. Am acumulat experienta atat in agentie cat si ca freelancer pe proiecte pentru clienti reali, lucrand in echipa cu Git. Atent la calitatea codului si la experienta utilizatorului, ma tin constant la curent cu noile tehnologii.",
        tech: ["HTML", "CSS", "Javascript", "TypeScript", "React", "Tailwind CSS", "Node.js", "Express", "MySQL", "Supabase", "WordPress", "PHP"],
      },
      path: {
        title: "Parcursul meu",
        subtitle:
          "Un parcurs construit din formare tehnica, experienta profesionala si trecerea catre dezvoltarea web.",
        school: {
          period: "2015 • 2020",
          meta: "Lecco, Lombardia",
          title: "Liceul de Stat 'P.A. Fiocchi'",
          description:
            "Diploma tehnica si profesionala, cu o pregatire orientata spre practica si rezolvarea problemelor reale.",
        },
        work: {
          period: "Oct 2021 • Nov 2023",
          meta: "Minuterie 3M · Lecco",
          title: "Tehnician de productie",
          description:
            "Experienta in sectorul metalmecanic cu activitati operationale.",
          bullets: ["Lucru in echipa", "Gestionarea timpului", "Atentie la calitate"],
        },
        snappie: {
          period: "Dec 2023 • Ian 2026",
          meta: "Remote · Snappie",
          title: "Full Stack Web Developer",
          description:
            "Colaborare freelance de la distanta: dezvoltare de interfete responsive si mentenanta codului back-end existent.",
          bullets: [
            "Interfete responsive cu JavaScript, React, HTML, CSS si Tailwind CSS",
            "Mentenanta codului back-end in Node.js si Express",
          ],
        },
        booleanCourse: {
          period: "Mai 2025 • Ian 2026",
          meta: "Remote · Boolean",
          title: "Web Developer Trainee",
          description:
            "Program full-time intensiv cu dezvoltare de proiecte web individuale si in echipa.",
          bullets: [
            "Dezvoltare de proiecte cu HTML, CSS, JavaScript si React",
            "Versionare a codului cu Git si GitHub",
          ],
        },
        beaverLab: {
          period: "Mar 2026 • Prezent",
          meta: "Seregno, Lombardia · Beaver Lab",
          title: "Web Developer",
          description:
            "Dezvoltare si personalizare de site-uri WordPress pornind de la design-uri furnizate, cu continut dinamic gestionat prin ACF si functionalitati personalizate in PHP.",
          bullets: [
            "Layouturi si continut dinamic prin ACF",
            "PHP pentru functionalitati personalizate",
            "Template-uri de email profesionale cu MJML",
            "Utilizarea agentilor AI (Claude Code, Codex) pentru dezvoltare, debugging si refactorizare, cu verificarea codului generat",
            "Colaborare cu echipa de dezvoltare pe proiecte reale",
          ],
        },
      },
      showcase: {
        title: "Lucrarile mele",
        subtitle: "Proiecte, certificate si tehnologii.",
        liveProjects: "Proiecte live",
        technologies: "Tehnologii",
        tabs: {
          projects: "Proiecte",
          certificates: "Certificate",
          stack: "Tehnologii",
        },
        featured: "In evidenta",
        liveDemo: "Demo live",
        code: "Cod",
        demo: "Demo",
        placeholderTitle: "În lucru",
        placeholderDesc: "Acest proiect va fi disponibil în curând.",
        projects: [
          {
            title: "BaniWise",
            description:
              "Aplicatie de finante personale pentru a inregistra venituri si cheltuieli, a stabili obiective de economisire si a consulta un calendar cu cheltuielile zilnice. Include si un convertor valutar in timp real.",
            tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
            image: "home-baniwise.jpg",
            demoUrl: "https://bani-wise.vercel.app/",
            codeUrl: "https://github.com/moraru-stefan/BaniWise",
          },
          {
            title: "Garavaglia Auto",
            description:
              "Site web pentru un dealer auto. Am replicat design-ul din Figma in WordPress, folosind ACF pentru componentele dinamice si PHP pentru logica personalizata. Realizat impreuna cu un coleg.",
            tech: ["WordPress", "ACF", "PHP", "Figma"],
            image: "garavagliaauto.webp",
            demoUrl: "https://www.garavagliaauto.it/",
          },
          {
            title: "MySafeDOC",
            description:
              "Landing page pentru un serviciu de conformitate legislativa. Am transformat homepage-ul din HTML/CSS static intr-un site WordPress dinamic, structurand continutul cu ACF flexible content pentru a oferi clientului autonomie completa in gestionarea textelor.",
            tech: ["WordPress", "ACF", "PHP"],
            image: "mysafedoc.webp",
            demoUrl: "https://mysafedoc.cloud/",
          },
        ],
      },
      certificates: {
        openLabel: "Deschide",
        imageAlt: "Certificat",
        openPdf: "Deschide PDF",
      },
      contact: {
        title: "Contact",
        lead:
          "Vrei sa colaboram sau ai intrebari? Completeaza formularul sau scrie-mi pe email.",
        send: "Trimite",
        hint:
          "*Dupa trimitere se va deschide clientul tau de email pentru confirmare si expediere.",
        form: {
          name: "Nume",
          namePlaceholder: "Numele tau",
          email: "Email",
          emailPlaceholder: "nume@email.com",
          subject: "Subiect",
          subjectPlaceholder: "Ex. Colaborare / Info",
          message: "Mesaj",
          messagePlaceholder: "Scrie-mi aici...",
          defaultSubject: "Mesaj nou",
          mailName: "Nume",
          mailEmail: "Email",
          mailMessage: "Mesaj",
        },
      },
    },
  },
};
