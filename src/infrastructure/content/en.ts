import { PortfolioContent } from "@/domain/entities";

export const enContent: PortfolioContent = {
  locale: "en",
  nav: {
    links: [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
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
  skillGroups: [
    { category: "Leadership & methodologies", items: ["Technical team leadership", "Frontend architecture", "Clean Architecture", "Scrum"] },
    { category: "Languages & frameworks", items: ["Dart", "Flutter", "Bloc", "GetIt", "Dio", "Kotlin", "Java", "PHP", "CodeIgniter"] },
    { category: "DevOps & tools", items: ["Codemagic", "GitHub Actions", "Bitbucket Pipelines", "Git", "Jira", "Xcode"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "Firebird SQL"] },
    { category: "Observability & analytics", items: ["Firebase Analytics", "Google Analytics", "Instana Agent"] },
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
