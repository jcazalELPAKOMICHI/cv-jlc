import { PortfolioContent } from "@/domain/entities";

export const enContent: PortfolioContent = {
  locale: "en",
  nav: {
    links: [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "highlights", label: "Highlights" },
      { id: "skills", label: "Stack" },
      { id: "contact", label: "Contact" },
    ],
    resumeCta: "Download CV",
    availableBadge: "Available for remote roles",
  },
  profile: {
    name: "José Luis Cazal",
    role: "Frontend & Mobile Architect",
    tagline: "I build scalable mobile products with Flutter and Clean Architecture.",
    summary:
      "Frontend & Mobile Architect with 10+ years of experience leading the design, development, and architecture of mobile and web applications, primarily in banking and fintech. Specialist in Flutter and Clean Architecture, with a track record of leading technical teams, defining development standards, and optimizing CI/CD pipelines. I combine architectural vision with hands-on execution to deliver scalable, maintainable, high-performance products in agile environments.",
    location: "Asunción, Paraguay",
    availability: "Open to remote opportunities",
    avatarSrc: "/images/avatar.jpg",
    resumeHref: "/cv/Jose-Cazal-CV-EN.pdf",
    socialLinks: [
      { platform: "email", label: "josecazal1991@gmail.com", href: "mailto:josecazal1991@gmail.com" },
      { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/josecazal" },
      { platform: "whatsapp", label: "WhatsApp", href: "https://wa.me/595972257064" },
      { platform: "github", label: "GitHub", href: "https://github.com/jcazalELPAKOMICHI" },
    ],
    stats: [
      { value: "10+", label: "Years of experience" },
      { value: "6", label: "Companies / teams" },
      { value: "2", label: "Banking apps shipped" },
    ],
  },
  experiences: [
    {
      id: "etica-arquitecto",
      company: "Ética",
      role: "Frontend Mobile Architect",
      location: "Asunción, Paraguay (Remote)",
      period: "Jun 2025 — Present",
      current: true,
      highlights: [
        "Define the technical guidelines and base architecture for the company's mobile and web projects, ensuring long-term scalability and performance.",
        "Lead technology decision-making and promote Clean Architecture standards across development teams.",
        "Design and maintain the CI/CD infrastructure to optimize delivery times.",
      ],
      groups: [
        {
          label: "Key features & achievements",
          items: [
            "Redesigned the Eko dashboard at both the UX and architecture level, applying Clean Architecture in Flutter.",
            "Upgraded the Banco Familiar project to the latest Gradle versions, ensuring API 35 compatibility and optimizing the build size to 16 KB.",
            "Built the new Banco Familiar Business Banking app from scratch using Flutter.",
            "Created a base Next.js template to accelerate web development for new projects.",
            "Implemented CI/CD pipelines with Codemagic (mobile) and Bitbucket Pipelines (web) for automated deployments.",
            "Implemented Dark Mode and a special \"Albirroja\" mode in the Eko application.",
          ],
        },
        {
          label: "eko web & in-house SDKs — business focus",
          items: [
            "Drove eko web for eko negocios: a Next.js web banking app that lets merchants collect QR payments from the checkout PC or tablet without relying on the owner's phone, and hand their sales Excel to their accountant. It reuses the bank's existing services: no need to build another bank, just open a new door.",
            "Designed eko web to boost the app, not replace it: product sign-ups (loans, cards, aliases) stay in the app, the web drives traffic to it, and the Micro loan offer shows up right when merchants are looking at their sales.",
            "Built the business case for the board: an 8-week pilot proposal with Micro merchants, demo script, objections by department and a measurement plan. Along the way I uncovered measurement gaps in the current app (payments counted twice and key events not tracked).",
            "Built id_document_scanner, an in-house open-source SDK (published on pub.dev) to capture and validate the Paraguayan ID card during onboarding. The backend only receives the validated crop, the SDK rejects non-ID documents and photos of screens or photocopies, and it works without Google or third-party services, Huawei included.",
            "Built marvin_trust, Eko's internal device-integrity SDK, to stop relying on third-party libraries for root, jailbreak, emulator and hooking detection. This gives the company control over the balance between banking-grade security and false positives.",
            "Stabilized marvin_trust in production: removed a splash-screen hang by moving scans to the background and reduced false positives on Xiaomi, OPPO, Samsung, LG and Motorola devices without lowering the security bar.",
          ],
        },
        {
          label: "How I used AI to get there",
          items: [
            "Used Claude Code as a team multiplier: in five days I took eko web from zero to a demo-ready MVP with 147 tests, lint and typecheck passing.",
            "Delegated cross-platform translation work to AI: porting API contracts, cryptography and QR payment flows from the Flutter app to Next.js, keeping the same Clean Architecture, feature flags and analytics events.",
            "Used AI to document and harden: a security guide (Next.js as a BFF, strict CSP, secure sessions, a checklist for Infrastructure, Backend and Compliance), an architecture README and a CLAUDE.md with rules so developers and agents can maintain the code.",
            "Took id_document_scanner from idea to pub.dev in one day with AI: design, custom MRZ OCR, anti-fraud, 68 tests, docs with screenshots generated from the real widgets, and a GitHub Actions release pipeline with no tokens in the repo.",
            "Relied on AI to build and harden marvin_trust in Kotlin/C++ and Swift, and to diagnose and fix the issues that surfaced in production (a startup hang and manufacturer-specific false positives).",
            "Also used AI on the business side: preparing the board presentation with questions per manager, objections and the ask, and reviewing large PRs to catch unnecessary binaries and security risks before they reached production.",
            "Always worked with mock data and public specimens: no real customer data ever went through AI.",
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
        "Designed cross-cutting solutions for all frontend projects (mobile and web), reducing development time for new projects.",
        "Defined and oversaw the team's technical decisions, establishing development best practices.",
        "Led a dedicated team specializing in React Native and Flutter, delivering solutions for specific technical needs.",
      ],
      groups: [
        {
          label: "Solutions developed",
          items: [
            "Built a Flutter template with a Clean Code architecture and default Google and Huawei libraries, using Bloc for state management, so any new project could start fully configured.",
            "Implemented CI/CD for existing mobile projects with Codemagic and GitHub Actions, automating app store publishing.",
            "Managed the creation and setup of developer accounts on the Play Store and App Store, leaving the environment ready at project close.",
            "Trained development teams on technologies, architectures, and libraries, aligning development standards across the team.",
          ],
        },
        {
          label: "Earlier role within ITTI — Mobile Developer",
          items: [
            "Started as a mobile frontend developer with Flutter, contributing to the ueno application and supporting other apps such as Wepa.",
            "Developed the transfers module, contacts module, and the SPI 2 CAS-Transfer flow, including alias creation.",
            "Developed the refunds module.",
            "Implemented Firebase analytics (Google and Huawei) in ueno and Wepa.",
            "Built \"funnel\"-style reports from analytics events.",
            "Implemented push notifications with In-App Messaging and integrated Instagram Stories into the dashboard.",
            "Implemented Huawei technologies independently within the app to ensure compatibility with AppGallery devices.",
          ],
        },
      ],
    },
    {
      id: "etica-dev",
      company: "Ética",
      role: "Frontend Developer",
      location: "Asunción, Paraguay",
      period: "Oct 2020 — Feb 2023",
      current: false,
      highlights: [
        "Led the end-to-end development of the Eko application, from concept to market launch — a platform designed to make banking simple and secure for underserved users.",
        "Defined the product's vision, mission, and goals, prioritizing usability, accessibility, and positive user impact.",
        "Collaborated closely with designers and software architects to translate the product vision into a solid technical architecture and an intuitive interface, prioritizing scalability and security.",
      ],
      groups: [],
    },
    {
      id: "roshka",
      company: "Roshka",
      role: "Frontend Developer (BBVA project)",
      location: "Asunción, Paraguay",
      period: "Jan 2019 — Sep 2020",
      current: false,
      highlights: [
        "Developed and maintained BBVA's retail banking app (now GNB).",
        "Built the EMA (Enterprise Mobile Application) business banking app from scratch in Kotlin.",
        "Built the Cooperativa Loma Plata application from scratch.",
        "Maintained the BNF application.",
      ],
      groups: [],
    },
    {
      id: "exxis",
      company: "Exxis",
      role: "SAP Developer",
      location: "Asunción, Paraguay",
      period: "Oct 2018 — Jan 2019",
      current: false,
      highlights: ["Developed SAP add-ons using .NET and XML."],
      groups: [],
    },
    {
      id: "udp",
      company: "Universidad del Pacífico",
      role: "Full Stack Developer",
      location: "Asunción, Paraguay",
      period: "Apr 2016 — Oct 2018",
      current: false,
      highlights: [
        "Built the Treasury system, Cash Management system, and accounting module in Java Desktop.",
        "Maintained the academic system and built the Petty Cash system in PHP (CodeIgniter).",
      ],
      groups: [],
    },
  ],
  projects: [
    {
      id: "eko",
      title: "Eko",
      context: "Ética — In-house product",
      period: "2020 — Present",
      description:
        "A platform designed to make banking simple and secure. I led its development end to end: defined the vision and architecture, then later redesigned the dashboard at both the UX and architecture level applying Clean Architecture in Flutter, adding Dark Mode and a special \"Albirroja\" mode.",
      tags: ["Flutter", "Clean Architecture", "Bloc", "Firebase", "UX"],
      featured: true,
    },
    {
      id: "eko-web",
      title: "eko web — Web banking for eko negocios",
      context: "Ética — Pilot MVP",
      period: "2026",
      description:
        "Web banking that lets Micro merchants collect QR payments from the checkout, review sales and export to Excel without relying on the owner's phone. Next.js as a BFF over the same services as the app, with banking-grade security and the same architecture, feature flags and analytics as Flutter. Built with Claude Code in five days and presented to the board as a pilot proposal.",
      tags: ["Next.js", "React", "TypeScript", "BFF", "Claude Code"],
      featured: true,
    },
    {
      id: "id-document-scanner",
      title: "id_document_scanner — Paraguayan ID SDK",
      context: "Open source — pub.dev",
      period: "2026",
      description:
        "Flutter SDK to capture and validate the ID card during onboarding: customizable overlay, perspective-corrected crop, custom MRZ OCR and detection of photos of screens or photocopies. No ML Kit or cloud services, Huawei compatible. From idea to pub.dev in one day with AI, with automated release CI/CD.",
      tags: ["Flutter", "Dart", "OCR", "KYC", "Claude Code"],
      featured: true,
    },
    {
      id: "marvin-trust",
      title: "marvin_trust — Device integrity SDK",
      context: "Ética — Eko internal SDK",
      period: "2026",
      description:
        "In-house Flutter plugin that detects root, jailbreak, emulators and hooking without third-party SDKs. It starts from an open-source base and hardens it with native Kotlin/C++ and Swift layers, a multi-signal trustScore and signed results the server can verify. In production I removed a startup hang and reduced false positives across the main Android manufacturers. Built with AI assistance.",
      tags: ["Flutter", "Kotlin", "C++", "Swift", "Security", "Claude Code"],
      featured: true,
    },
    {
      id: "banco-familiar",
      title: "Banco Familiar — Business Banking",
      context: "Ética",
      period: "2025",
      description:
        "Business banking app built from scratch with Flutter. Also upgraded the existing project to the latest Gradle versions for API 35 compatibility, optimizing the build size to 16 KB.",
      tags: ["Flutter", "Gradle", "API 35", "CI/CD"],
      featured: true,
    },
    {
      id: "flutter-template",
      title: "Flutter Template — Clean Architecture Starter",
      context: "ITTI",
      period: "2023 — 2025",
      description:
        "A base template with a Clean Code architecture, default Google and Huawei libraries, and Bloc for state management, so any new project on the team could start fully configured from the first commit.",
      tags: ["Flutter", "Bloc", "GetIt", "Dio", "Clean Architecture"],
      featured: true,
    },
    {
      id: "ueno-wepa",
      title: "ueno / Wepa — Transfers & Analytics",
      context: "ITTI",
      period: "2023",
      description:
        "Transfers, contacts, and alias creation module via SPI 2 CAS-Transfer. Firebase analytics (Google and Huawei), funnel-style reports, push notifications with In-App Messaging, and Instagram Stories integrated into the dashboard.",
      tags: ["Flutter", "Firebase Analytics", "Push Notifications", "Huawei Mobile Services"],
      featured: false,
    },
    {
      id: "bbva-ema",
      title: "BBVA / GNB & EMA Enterprise",
      context: "Roshka",
      period: "2019 — 2020",
      description:
        "Maintained BBVA's retail app (now GNB) and built EMA, the business banking app, from scratch in Kotlin.",
      tags: ["Kotlin", "Android", "Digital banking"],
      featured: false,
    },
  ],
  highlights: [
    {
      id: "albirroja-mode",
      title: "Albirroja Mode: gamifying without breaking a single rule",
      context: "Ética — Eko",
      period: "2026",
      summary:
        "When Paraguay qualified for the World Cup after 16 years, Benjamín Blanco and I set out to make Eko share that excitement without using a single word or color restricted by the tournament's organizers. We built the AppBirroja theme: our own brand red combined with the app's light mode, toggled by a button with haptic feedback, crowd sound, and animated emoji — fully optional and reversible for the user. A colleague's comment about showing the match info sparked a second iteration: the AppBirroja Card, with the fixture and daily promos, built together with Alejandro Ayala.",
      metrics: [
        { value: "250k", label: "customers opted in" },
        { value: "20k", label: "avg. daily clicks on promo days" },
      ],
      tags: ["Flutter", "Theming", "Growth", "UX"],
      linkedinUrl: "https://lnkd.in/p/driUpNYp",
      images: ["/images/highlights/albirroja-1.jpg", "/images/highlights/albirroja-2.jpg"],
    },
    {
      id: "dark-mode-eko",
      title: "Dark Mode for Eko: from a Friday-night idea to production",
      context: "Ética — Eko",
      period: "2025",
      summary:
        "A large banking app with hardcoded colors across most of its screens and no multi-theme support. One Friday night I built the first fully working version of a complete Dark Mode. The real challenge wasn't technical — it was process: working with Benjamín Blanco, we connected that work to Figma variables and a shared design system so design and engineering spoke the same language when turning each color into code.",
      metrics: [
        { value: "1 night", label: "for the first working version" },
        { value: "100%", label: "screens migrated to theming" },
      ],
      tags: ["Flutter", "Design System", "Figma", "Dark Mode"],
      linkedinUrl: "https://lnkd.in/p/ds5iU5dZ",
      images: ["/images/highlights/dark-mode-1.jpg", "/images/highlights/dark-mode-2.jpg"],
    },
  ],
  skillGroups: [
    { category: "Leadership & methodologies", items: ["Technical team leadership", "Frontend architecture", "Clean Architecture", "Scrum"] },
    { category: "Languages & frameworks", items: ["Dart", "Flutter", "Bloc", "GetIt", "Dio", "Kotlin", "Java", "PHP", "CodeIgniter"] },
    { category: "DevOps & tools", items: ["Codemagic", "GitHub Actions", "Bitbucket Pipelines", "Git", "Jira", "Xcode"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "Firebird SQL"] },
    { category: "Observability & analytics", items: ["Firebase Analytics", "Google Analytics", "Instana Agent"] },
    { category: "AI-assisted development", items: ["Claude Code", "AI agents (CLAUDE.md)", "AI code review", "Next.js"] },
  ],
  education: [
    {
      degree: "B.S. in Systems Analysis and Design",
      institution: "Universidad Tecnológica Intercontinental, San Lorenzo, Paraguay",
      status: "In progress",
    },
  ],
  certifications: [
    { name: "Flutter", provider: "Udemy" },
    { name: "Kotlin", provider: "Udemy" },
    { name: "PostgreSQL", provider: "Udemy" },
    { name: "Android Development with Kotlin", provider: "Udemy" },
  ],
  languages: [
    { name: "Spanish", level: "Native", proficiency: 100 },
    { name: "Guaraní", level: "Intermediate", proficiency: 60 },
    { name: "English", level: "Basic", proficiency: 35 },
  ],
};
