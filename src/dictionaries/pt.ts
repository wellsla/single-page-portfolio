export const dictionary = {
  header: {
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato',
  },
  hero: {
    name: 'Welliton Slaviero',
    title: 'Engenheiro de Software Full Stack',
    subtitle:
      'Construo SaaS B2B de ponta a ponta, com front-ends Vue 3 e React em TypeScript, APIs Laravel e PostgreSQL, e desenvolvo com agentes de IA para entregar mais rápido sem abrir mão da qualidade.',
    cta: 'Ver Projetos',
  },
  about: {
    title: 'Sobre Mim',
    description:
      'Sou Engenheiro de Software Full Stack com mais de 6 anos construindo produtos SaaS B2B, de monólitos PHP legados a SPAs modernas em TypeScript. Hoje entrego funcionalidades em um CRM de vendas e atendimento usado por cerca de 1,6 mil empresas: Vue 3 (Composition API) + TypeScript + PrimeVue no front-end, API REST em Laravel e um legado PHP em modernização incremental. Atuo com tempo real (WebSockets, SharedWorkers), design systems (Storybook), rollouts com feature flags e monitoramento em produção (Sentry), e já revisei mais de 800 pull requests. Desenvolvo com agentes de IA em um fluxo spec-driven: spec e ADR antes do código, agentes como Claude Code e Codex na implementação, arquitetura e code review sob controle humano. Também escrevo skills reutilizáveis para agentes e automações com MCP.',
    timeline: [
      {
        date: '2025–Atual',
        title: 'Engenheiro de Software Full Stack — CRM SaaS B2B',
        description:
          'Funcionalidades full stack em Vue 3 + TypeScript + PrimeVue, API REST Laravel e monólito PHP legado: notificações em tempo real, novo kanban de oportunidades entregue em rollout por fases com feature flags e conexões de tempo real multi-aba unificadas em um único SharedWorker. Mais de 800 code reviews, ADR de padrões do novo design system e skills de agentes de IA adotadas pelo time.',
      },
      {
        date: '2025',
        title: 'Projetos Independentes e Especialização em Front-end',
        description:
          'Pipe CRM, um mini-CRM com Vue 3, PrimeVue, Storybook e arquitetura em camadas (services, stores Pinia, composables), Supabase como backend, Sentry e pipeline de CI no GitHub Actions. Testes unitários com Vitest e Jest.',
      },
      {
        date: '2024–2025',
        title: 'Desenvolvedor Full Stack Pleno — Software House para Cooperativas de Crédito',
        description:
          'Migração de um monólito PHP/jQuery renderizado no servidor para APIs REST Laravel (Sanctum, Eloquent) e SPA Vue 3 + TypeScript + Pinia. Design system interno traduzido do Figma com Tailwind CSS e Storybook. Reescrita do app de chamada de senhas para Android TV em React Native com módulos nativos Kotlin e WebSockets.',
      },
      {
        date: '2020–2024',
        title: 'Desenvolvedor Full Stack — Software House para Cooperativas de Crédito',
        description:
          'Módulos de negócio para uma cooperativa de crédito de abrangência nacional (CRMs, dashboards, contratos, inadimplência) em PHP, jQuery e PostgreSQL. Ferramenta de assessoria de investimentos com regras complexas de rentabilidade. Rotinas de ETL noturno sincronizando bancos on-premise SQL Server/MySQL com PostgreSQL.',
      },
      {
        date: '2024–Atual (Freelance)',
        title: 'Entrega Full Stack — Site + CMS',
        description:
          'Site em Next.js 14 (App Router, Server Actions, Tailwind, shadcn/ui) e painel administrativo em Laravel 10 + React/TypeScript com Inertia.js, com deploy em AWS EC2 via Laravel Forge. Manutenção feita por mim.',
      },
      {
        date: '2025',
        title: 'Bacharelado em Ciência da Computação',
        description:
          'Universidade de Passo Fundo (UPF). TCC: modelo de machine learning em Python para prever gastos com participação nos lucros em empresas de pequeno porte, nota 9/10.',
      },
    ],
  },
  projects: {
    title: 'Meus Projetos',
    description:
      'Trabalhos selecionados que mostram arquitetura, sistemas em tempo real, modernização de legado, design systems e engenharia com IA.',
    tooltips: {
      viewProject: 'Ver Projeto',
      privateProject: 'Projeto privado (empregador)',
    },
    items: [
      {
        id: 'agent-skills',
        title: 'Skills para Agentes de IA',
        description:
          'Skills, regras e workflows reutilizáveis para agentes de código (Claude Code, Codex): entrevista de requisitos (grill-me) e geração de spec para um fluxo spec-driven, em que spec e ADR vêm antes do código e os agentes implementam sob revisão humana. Uso diário em trabalho de produção.',
        technologies: ['Claude Code', 'Agent Skills', 'MCP', 'Spec-Driven Development', 'Markdown'],
      },
      {
        id: 'pipe-crm',
        title: 'Pipe CRM',
        description:
          'Mini-CRM construído como arquitetura de referência: Vue 3 + TypeScript em camadas (services, stores Pinia, composables, components), design system baseado em PrimeVue documentado no Storybook, Supabase como BaaS, monitoramento de erros com Sentry e pipeline no GitHub Actions rodando lint e build antes de cada deploy.',
        technologies: ['Vue 3', 'TypeScript', 'PrimeVue', 'Storybook', 'Supabase', 'GitHub Actions'],
      },
      {
        id: 'customer-service-manager',
        title: 'Gestor de Atendimentos',
        description:
          'Painel de fila e chamada de senhas em tempo real para agências físicas. Reescrita do app legado em Java para Android TV em React Native com módulos nativos Kotlin, WebSockets com reconexão resiliente e reprodução de mídia. Em uso em agências de uma cooperativa de crédito de abrangência nacional.',
        technologies: ['React Native', 'Kotlin', 'WebSockets', 'Context API', 'Android TV'],
      },
      {
        id: 'unicred-invest',
        title: 'Unicred Invest',
        description:
          'Ferramenta de assessoria de investimentos para assessores da cooperativa, cobrindo ações, renda fixa, fundos e debêntures. Desenvolvida de ponta a ponta, com regras complexas de rentabilidade, fluxos de dados confiáveis em PostgreSQL e dashboards para grandes carteiras. Tornou-se central na estratégia de captação da cooperativa.',
        technologies: ['PHP', 'PostgreSQL', 'JavaScript', 'jQuery', 'Highcharts'],
      },
      {
        id: 'solusjur',
        title: 'SolusJur — Gestor de Processos Jurídicos',
        description:
          'Plataforma B2B externa para escritórios de advocacia que tratam processos de inadimplência, construída do zero e integrada ao SaaS principal via APIs REST. UI orientada a componentes reutilizáveis para telas consistentes.',
        technologies: ['Vue 3', 'Pinia', 'Vuetify', 'REST APIs'],
      },
      {
        id: 'real-estate-website',
        title: 'Site + CMS de Avaliação Imobiliária',
        description:
          'Entrega full stack como freelancer: site público em Next.js 14 (App Router, Server Actions, SEO) e painel em Laravel 10 + React/TypeScript com Inertia.js, que dá ao cliente controle total do conteúdo. Ambiente de desenvolvimento em Docker e deploy em AWS EC2 via Laravel Forge.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Laravel', 'PostgreSQL', 'AWS EC2'],
      },
      {
        id: 'rpg-sheet-creator',
        title: 'Criador de Fichas de RPG',
        description:
          'Projeto acadêmico de engenharia de software, dos requisitos à entrega: front-end em Next.js e API em Laravel para criar fichas estruturadas de RPG de mesa.',
        technologies: ['Next.js', 'Laravel', 'Engenharia de Software'],
      },
      {
        id: 'ml-expense-prediction',
        title: 'Modelo de ML para Previsão de Despesas',
        description:
          'TCC (nota 9/10). Modelo de machine learning em Python para prever gastos com participação nos lucros em empresas de pequeno porte, com metodologia e apresentação de resultados claras.',
        technologies: ['Python', 'Machine Learning', 'Análise de Dados'],
      },
    ],
  },
  contact: {
    title: 'Entre em Contato',
    description:
      'Vamos conversar sobre engenharia de produto, sistemas em tempo real ou desenvolvimento com IA.',
    connect: 'Conecte-se comigo em:',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Welliton Slaviero. Todos os direitos reservados.`,
  },
};
