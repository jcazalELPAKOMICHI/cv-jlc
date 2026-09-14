import { PortfolioContent } from "@/domain/entities";

export const esContent: PortfolioContent = {
  locale: "es",
  nav: {
    links: [
      { id: "about", label: "Sobre mí" },
      { id: "experience", label: "Experiencia" },
      { id: "projects", label: "Proyectos" },
      { id: "highlights", label: "Destacados" },
      { id: "skills", label: "Stack" },
      { id: "contact", label: "Contacto" },
    ],
    resumeCta: "Descargar CV",
    availableBadge: "Disponible para roles remotos",
  },
  profile: {
    name: "José Luis Cazal",
    role: "Arquitecto Frontend & Mobile",
    tagline: "Construyo productos móviles escalables con Flutter y Clean Architecture.",
    summary:
      "Arquitecto Frontend y Mobile con más de 10 años de experiencia liderando el diseño, desarrollo y arquitectura de aplicaciones móviles y web, principalmente en banca y fintech. Especialista en Flutter y Clean Architecture, con trayectoria dirigiendo equipos técnicos, definiendo estándares de desarrollo y optimizando pipelines de CI/CD. Combino visión de arquitectura con ejecución práctica para entregar productos escalables, mantenibles y de alto rendimiento en entornos ágiles.",
    location: "Asunción, Paraguay",
    availability: "Abierto a oportunidades remotas",
    avatarSrc: "/images/avatar.jpg",
    resumeHref: "/cv/Jose-Cazal-CV-ES.pdf",
    socialLinks: [
      { platform: "email", label: "josecazal1991@gmail.com", href: "mailto:josecazal1991@gmail.com" },
      { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/josecazal" },
      { platform: "whatsapp", label: "WhatsApp", href: "https://wa.me/595972257064" },
      { platform: "github", label: "GitHub", href: "https://github.com/jcazalELPAKOMICHI" },
    ],
    stats: [
      { value: "10+", label: "Años de experiencia" },
      { value: "6", label: "Empresas / equipos" },
      { value: "2", label: "Apps bancarias lanzadas" },
      { value: "1", label: "App creada desde cero hasta producción" },
    ],
  },
  experiences: [
    {
      id: "etica-arquitecto",
      company: "Ética",
      role: "Arquitecto Frontend Mobile",
      location: "Asunción, Paraguay (Remoto)",
      period: "Jun 2025 — Actualidad",
      current: true,
      highlights: [
        "Defino los lineamientos técnicos y la arquitectura base de los proyectos móviles y web de la empresa, garantizando escalabilidad y rendimiento a largo plazo.",
        "Lidero la toma de decisiones tecnológicas y promuevo estándares de Clean Architecture en los equipos de desarrollo.",
        "Diseño y mantengo la infraestructura de integración y despliegue continuo (CI/CD) para optimizar los tiempos de entrega.",
      ],
      groups: [
        {
          label: "Features y logros destacados",
          items: [
            "Rediseñé el dashboard de Eko a nivel de UX y arquitectura, aplicando Clean Architecture en Flutter.",
            "Actualicé el proyecto de Banco Familiar a las últimas versiones de Gradle, asegurando compatibilidad con API 35 y optimizando el tamaño de compilación a 16 KB.",
            "Desarrollé desde cero la nueva aplicación de Banca Empresas de Banco Familiar utilizando Flutter.",
            "Creé una plantilla base en Next.js para agilizar el desarrollo web de nuevos proyectos.",
            "Implementé flujos de CI/CD con Codemagic (mobile) y Bitbucket Pipelines (web) para despliegues automatizados.",
            "Implementé Dark Mode y el modo especial \"Albirroja\" en la aplicación Eko.",
          ],
        },
      ],
    },
    {
      id: "itti-lead",
      company: "ITTI",
      role: "Front End Architecture Lead",
      location: "Asunción, Paraguay",
      period: "Mar 2023 — May 2025",
      current: false,
      highlights: [
        "Diseñé soluciones transversales para todos los proyectos frontend (mobile y web), reduciendo el tiempo de desarrollo de nuevos proyectos.",
        "Definí y supervisé las decisiones técnicas del equipo, estableciendo mejores prácticas de desarrollo.",
        "Lideré un equipo propio especializado en React Native y Flutter, brindando soluciones a necesidades técnicas específicas.",
      ],
      groups: [
        {
          label: "Soluciones desarrolladas",
          items: [
            "Desarrollé una plantilla de Flutter con arquitectura Clean Code y librerías predeterminadas de Google y Huawei, con Bloc como manejador de estados, para que cualquier proyecto nuevo iniciara con la configuración lista.",
            "Implementé CI/CD para los proyectos mobile existentes con Codemagic y GitHub Actions, automatizando la publicación de apps en tiendas.",
            "Gestioné la creación y configuración de cuentas de desarrollador en Play Store y App Store, dejando el entorno listo para el cierre de cada proyecto.",
            "Capacité a los equipos de desarrollo en tecnologías, arquitecturas y librerías, unificando criterios de desarrollo en todo el equipo.",
          ],
        },
        {
          label: "Rol inicial dentro de ITTI — Desarrollador Mobile",
          items: [
            "Comencé como desarrollador frontend mobile con Flutter, contribuyendo al desarrollo de la aplicación ueno y brindando soporte a otras apps como Wepa.",
            "Desarrollé el módulo de transferencias, el módulo de contactos y el flujo SPI 2 CAS-Transferencia, incluyendo la creación de alias.",
            "Desarrollé el módulo de reintegros.",
            "Implementé analítica de Firebase (Google y Huawei) en ueno y Wepa.",
            "Creé reportes de tipo \"funnel\" a partir de eventos de analítica.",
            "Implementé notificaciones push con In-App Messaging e integré Historias de Instagram en el dashboard.",
            "Implementé tecnologías Huawei de forma independiente dentro de la aplicación para garantizar compatibilidad con dispositivos AppGallery.",
          ],
        },
      ],
    },
    {
      id: "etica-dev",
      company: "Ética",
      role: "Desarrollador Frontend",
      location: "Asunción, Paraguay",
      period: "Oct 2020 — Feb 2023",
      current: false,
      highlights: [
        "Lideré el desarrollo completo de la aplicación Eko, desde su concepción hasta su lanzamiento al mercado: una plataforma diseñada para facilitar la bancarización de forma simple y segura.",
        "Definí la visión, misión y objetivos del producto, priorizando usabilidad, accesibilidad e impacto positivo para el usuario.",
        "Colaboré estrechamente con diseñadores y arquitectos de software para traducir la visión del proyecto en una arquitectura técnica sólida y una interfaz intuitiva, priorizando escalabilidad y seguridad.",
      ],
      groups: [],
    },
    {
      id: "roshka",
      company: "Roshka",
      role: "Desarrollador Frontend (proyecto BBVA)",
      location: "Asunción, Paraguay",
      period: "Ene 2019 — Sep 2020",
      current: false,
      highlights: [
        "Desarrollé y mantuve la aplicación de personas de BBVA (actualmente GNB).",
        "Desarrollé desde cero la aplicación de empresas EMA (Enterprise Mobile Application) en Kotlin.",
        "Desarrollé desde cero la aplicación de la Cooperativa Loma Plata.",
        "Di mantenimiento a la aplicación de BNF.",
      ],
      groups: [],
    },
    {
      id: "exxis",
      company: "Exxis",
      role: "Desarrollador SAP",
      location: "Asunción, Paraguay",
      period: "Oct 2018 — Ene 2019",
      current: false,
      highlights: ["Desarrollé add-ons para SAP utilizando .NET y XML."],
      groups: [],
    },
    {
      id: "udp",
      company: "Universidad del Pacífico",
      role: "Desarrollador Full Stack",
      location: "Asunción, Paraguay",
      period: "Abr 2016 — Oct 2018",
      current: false,
      highlights: [
        "Desarrollé el sistema de Tesorería, el sistema de Caja y el módulo contable en Java Desktop.",
        "Di mantenimiento al sistema académico y desarrollé el sistema de Fondo Fijo en PHP (CodeIgniter).",
      ],
      groups: [],
    },
  ],
  projects: [
    {
      id: "eko",
      title: "Eko",
      context: "Ética — Producto propio",
      period: "2020 — Actualidad",
      description:
        "Plataforma de bancarización simple y segura. Lideré su desarrollo de punta a punta: definí visión y arquitectura, y más adelante rediseñé el dashboard a nivel de UX y arquitectura aplicando Clean Architecture en Flutter, sumando Dark Mode y un modo especial \"Albirroja\".",
      tags: ["Flutter", "Clean Architecture", "Bloc", "Firebase", "UX"],
      featured: true,
    },
    {
      id: "banco-familiar",
      title: "Banco Familiar — Banca Empresas",
      context: "Ética",
      period: "2025",
      description:
        "Aplicación de banca para empresas construida desde cero con Flutter. También actualicé el proyecto existente a las últimas versiones de Gradle para compatibilidad con API 35, optimizando el tamaño de compilación a 16 KB.",
      tags: ["Flutter", "Gradle", "API 35", "CI/CD"],
      featured: true,
    },
    {
      id: "flutter-template",
      title: "Template Flutter — Clean Architecture Starter",
      context: "ITTI",
      period: "2023 — 2025",
      description:
        "Plantilla base con arquitectura Clean Code, librerías predeterminadas de Google y Huawei, y Bloc como manejador de estados, para que cualquier proyecto nuevo del equipo arrancara con la configuración lista desde el primer commit.",
      tags: ["Flutter", "Bloc", "GetIt", "Dio", "Clean Architecture"],
      featured: true,
    },
    {
      id: "ueno-wepa",
      title: "ueno / Wepa — Transferencias y Analítica",
      context: "ITTI",
      period: "2023",
      description:
        "Módulo de transferencias, contactos y alias vía SPI 2 CAS-Transferencia. Analítica con Firebase (Google y Huawei), reportes tipo funnel, notificaciones push con In-App Messaging e Historias de Instagram integradas al dashboard.",
      tags: ["Flutter", "Firebase Analytics", "Push Notifications", "Huawei Mobile Services"],
      featured: false,
    },
    {
      id: "bbva-ema",
      title: "BBVA / GNB & EMA Enterprise",
      context: "Roshka",
      period: "2019 — 2020",
      description:
        "Mantenimiento de la app de personas de BBVA (hoy GNB) y desarrollo desde cero de EMA, la aplicación de banca empresas, en Kotlin.",
      tags: ["Kotlin", "Android", "Banca digital"],
      featured: false,
    },
  ],
  highlights: [
    {
      id: "albirroja-mode",
      title: "Modo Albirroja: gamificar sin romper ninguna regla",
      context: "Ética — Eko",
      period: "2026",
      summary:
        "Cuando Paraguay clasificó al Mundial después de 16 años, con Benjamín Blanco pensamos cómo lograr que Eko vibrara con esa alegría sin usar ni una palabra ni un color restringido por la organización del torneo. Nació el theme AppBirroja: el rojo de nuestra propia marca combinado con el modo claro de la app, activable con un botón con vibración háptica, sonido de tribuna y emoticones animados — cien por ciento opcional y reversible para el usuario. Un comentario de un colega sobre mostrar la info del partido nos llevó a una segunda iteración: la Card AppBirroja, con el fixture y las promos del día, construida junto a Alejandro Ayala.",
      metrics: [
        { value: "250k", label: "clientes activaron el modo" },
        { value: "20k", label: "clics promedio por día de promo en la card" },
      ],
      tags: ["Flutter", "Theming", "Growth", "UX"],
      linkedinUrl: "https://lnkd.in/p/driUpNYp",
      images: ["/images/highlights/albirroja-1.jpg", "/images/highlights/albirroja-2.jpg"],
    },
    {
      id: "dark-mode-eko",
      title: "Dark Mode para Eko: de una idea de viernes a producción",
      context: "Ética — Eko",
      period: "2025",
      summary:
        "Una app bancaria grande, con colores fijos en la mayoría de sus pantallas y sin soporte para múltiples temas. Un viernes por la noche armé la primera versión funcional de un Dark Mode completo. El desafío real no fue técnico sino de proceso: junto a Benjamín Blanco conectamos ese trabajo a variables de Figma y a un design system compartido, para que diseño y desarrollo hablaran el mismo idioma a la hora de llevar cada color a código.",
      metrics: [
        { value: "1 noche", label: "para la primera versión funcional" },
        { value: "100%", label: "pantallas migradas a theming" },
      ],
      tags: ["Flutter", "Design System", "Figma", "Dark Mode"],
      linkedinUrl: "https://lnkd.in/p/ds5iU5dZ",
      images: ["/images/highlights/dark-mode-1.jpg", "/images/highlights/dark-mode-2.jpg"],
    },
  ],
  skillGroups: [
    { category: "Liderazgo y metodologías", items: ["Liderazgo técnico de equipos", "Arquitectura frontend", "Clean Architecture", "Scrum"] },
    { category: "Lenguajes y frameworks", items: ["Dart", "Flutter", "Bloc", "GetIt", "Dio", "Kotlin", "Java", "PHP", "CodeIgniter"] },
    { category: "DevOps y herramientas", items: ["Codemagic", "GitHub Actions", "Bitbucket Pipelines", "Git", "Jira", "Xcode"] },
    { category: "Bases de datos", items: ["MySQL", "PostgreSQL", "Firebird SQL"] },
    { category: "Observabilidad y analítica", items: ["Firebase Analytics", "Google Analytics", "Instana Agent"] },
  ],
  education: [
    {
      degree: "Lic. en Análisis y Diseño de Sistemas",
      institution: "Universidad Tecnológica Intercontinental, San Lorenzo, Paraguay",
      status: "En curso",
    },
  ],
  certifications: [
    { name: "Flutter", provider: "Udemy" },
    { name: "Kotlin", provider: "Udemy" },
    { name: "PostgreSQL", provider: "Udemy" },
    { name: "Desarrollo Android con Kotlin", provider: "Udemy" },
  ],
  languages: [
    { name: "Español", level: "Nativo", proficiency: 100 },
    { name: "Guaraní", level: "Intermedio", proficiency: 60 },
    { name: "Inglés", level: "Básico", proficiency: 35 },
  ],
};
