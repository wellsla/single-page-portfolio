export const dictionary = {
  header: {
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    name: 'Welliton Slaviero',
    title: 'Full Stack Software Engineer',
    subtitle:
      'I build B2B SaaS end to end — Vue 3 and React front ends in TypeScript, Laravel APIs and PostgreSQL — and I engineer with AI agents to ship faster without cutting quality.',
    cta: 'View Projects',
  },
  about: {
    title: 'About Me',
    description:
      "I'm a Full Stack Software Engineer with 6+ years building B2B SaaS products, from legacy PHP monoliths to modern TypeScript SPAs. Today I ship features for a sales and customer-service CRM used by ~1,600 companies: Vue 3 (Composition API) + TypeScript + PrimeVue on the front end, a Laravel REST API and a legacy PHP codebase under incremental modernization. I work across real-time features (WebSockets, SharedWorkers), design systems (Storybook), feature-flagged rollouts and production monitoring (Sentry), and I've reviewed 800+ pull requests. I engineer with AI agents in a spec-driven workflow — specs and ADRs first, agents such as Claude Code and Codex for implementation, architecture and code review kept human — and I write reusable agent skills and MCP-based automations.",
    timeline: [
      {
        date: '2025–Present',
        title: 'Full Stack Software Engineer — B2B CRM SaaS',
        description:
          'Full-stack features across Vue 3 + TypeScript + PrimeVue, a Laravel REST API and a legacy PHP monolith: real-time in-app notifications, a redesigned sales-pipeline kanban shipped through a phased, feature-flagged rollout, and multi-tab real-time connections consolidated into a single SharedWorker. 800+ code reviews, an ADR for the new design system, and custom AI agent skills adopted by the team.',
      },
      {
        date: '2025',
        title: 'Independent Projects & Frontend Specialization',
        description:
          'Pipe CRM, a mini-CRM with Vue 3, PrimeVue, Storybook and a layered architecture (services, Pinia stores, composables), Supabase as backend, Sentry and a GitHub Actions CI pipeline. Unit testing with Vitest and Jest.',
      },
      {
        date: '2024–2025',
        title: 'Mid-level Full Stack Developer — Software House for Credit Unions',
        description:
          'Migration of a server-rendered PHP/jQuery monolith to Laravel REST APIs (Sanctum, Eloquent) and a Vue 3 + TypeScript + Pinia SPA. In-house design system translated from Figma with Tailwind CSS and Storybook. Rewrite of an Android TV queue-calling app in React Native with native Kotlin modules and WebSockets.',
      },
      {
        date: '2020–2024',
        title: 'Full Stack Developer — Software House for Credit Unions',
        description:
          'Business modules for a nationwide credit-union network (CRMs, dashboards, contracts, delinquency) on PHP, jQuery and PostgreSQL. Investment advisory tool with complex profitability rules. Nightly ETL jobs syncing on-premise SQL Server/MySQL databases into PostgreSQL.',
      },
      {
        date: '2024–Present (Freelance)',
        title: 'Full Stack Delivery — Website + CMS',
        description:
          'Next.js 14 site (App Router, Server Actions, Tailwind, shadcn/ui) and a Laravel 10 + React/TypeScript admin panel with Inertia.js, deployed on AWS EC2 via Laravel Forge. Sole maintainer.',
      },
      {
        date: '2025',
        title: 'B.Sc. in Computer Science',
        description:
          'University of Passo Fundo (UPF). Thesis: machine-learning model in Python to forecast profit-sharing expenses for small businesses, graded 9/10.',
      },
    ],
  },
  projects: {
    title: 'My Projects',
    description:
      'Selected work showing architecture, real-time systems, legacy modernization, design systems and AI-augmented engineering.',
    tooltips: {
      viewProject: 'View Project',
      privateProject: 'Private project (employer)',
    },
    items: [
      {
        id: 'agent-skills',
        title: 'AI Agent Skills',
        description:
          'Reusable skills, rules and workflows for coding agents (Claude Code, Codex): a requirements interview (grill-me) and spec generation for a spec-driven workflow, where specs and ADRs come before code and agents handle implementation under human review. Used daily in production work.',
        technologies: ['Claude Code', 'Agent Skills', 'MCP', 'Spec-Driven Development', 'Markdown'],
      },
      {
        id: 'pipe-crm',
        title: 'Pipe CRM',
        description:
          'Mini-CRM built as a reference architecture: Vue 3 + TypeScript with a layered structure (services, Pinia stores, composables, components), a PrimeVue-based design system documented in Storybook, Supabase as BaaS, error tracking with Sentry and a GitHub Actions pipeline running lint and build before every deploy.',
        technologies: ['Vue 3', 'TypeScript', 'PrimeVue', 'Storybook', 'Supabase', 'GitHub Actions'],
      },
      {
        id: 'customer-service-manager',
        title: 'Customer Service Manager',
        description:
          'Real-time queue display and ticket calling for physical branches. Rewrote a legacy Java Android TV app in React Native with native Kotlin modules, WebSockets with resilient reconnection and media playback. Runs in branches of a nationwide credit-union network.',
        technologies: ['React Native', 'Kotlin', 'WebSockets', 'Context API', 'Android TV'],
      },
      {
        id: 'unicred-invest',
        title: 'Unicred Invest',
        description:
          "Investment advisory tool for credit-union advisors covering stocks, fixed income, funds and debentures. Built end to end, with complex profitability rules, reliable data workflows on PostgreSQL and dashboards for large portfolios. Became central to the cooperative's capital-raising strategy.",
        technologies: ['PHP', 'PostgreSQL', 'JavaScript', 'jQuery', 'Highcharts'],
      },
      {
        id: 'solusjur',
        title: 'SolusJur — Legal Case Manager',
        description:
          'External B2B platform for law firms handling delinquent-account cases, built from scratch and integrated with the core SaaS through REST APIs. Component-driven UI with reusable building blocks for consistent screens.',
        technologies: ['Vue 3', 'Pinia', 'Vuetify', 'REST APIs'],
      },
      {
        id: 'real-estate-website',
        title: 'Real Estate Appraisal Website + CMS',
        description:
          'Freelance full-stack delivery: a public Next.js 14 site (App Router, Server Actions, SEO) and a Laravel 10 + React/TypeScript admin panel with Inertia.js that gives the client full control over content. Dockerized development, deployed on AWS EC2 via Laravel Forge.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Laravel', 'PostgreSQL', 'AWS EC2'],
      },
      {
        id: 'rpg-sheet-creator',
        title: 'RPG Character Sheet Creator',
        description:
          'Academic software-engineering project, from requirements to delivery: a Next.js front end and a Laravel API to create structured tabletop RPG character sheets.',
        technologies: ['Next.js', 'Laravel', 'Software Engineering'],
      },
      {
        id: 'ml-expense-prediction',
        title: 'ML Expense Prediction Model',
        description:
          'B.Sc. thesis (grade 9/10). Python machine-learning model to forecast profit-sharing expenses for small businesses, with a clear methodology and results presentation.',
        technologies: ['Python', 'Machine Learning', 'Data Analysis'],
      },
    ],
  },
  contact: {
    title: 'Get in Touch',
    description:
      "Let's talk about product engineering, real-time systems or AI-augmented development.",
    connect: 'Connect with me on:',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Welliton Slaviero. All rights reserved.`,
  },
};
