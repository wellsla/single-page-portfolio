export const dictionary = {
  header: {
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato',
  },
  hero: {
    name: 'Welliton Slaviero',
    title: 'Desenvolvedor Fullstack',
    subtitle: 'Crio aplicações web intuitivas, escaláveis e performáticas. Design Systems, código limpo e experiências centradas no usuário que geram crescimento real.',
    cta: 'Ver Projetos',
  },
  about: {
    title: 'Sobre Mim',
    description:
      'Sou Desenvolvedor Fullstack com mais de 5 anos transformando problemas complexos em experiências web intuitivas, eficientes e acessíveis. Meu foco é Vue 3 (Composition API) com TypeScript, além de React e Next.js. Tenho experiência prática na construção de Design Systems com Storybook e em UI corporativa usando Vuetify e PrimeVue. Minha base com Laravel (PHP) e PostgreSQL me permite colaborar com frontend, backend e DevOps para entregar ponta a ponta. Prezo por código limpo, performance, acessibilidade e por produtos que ajudem pessoas e empresas a crescerem.',
    timeline: [
      {
        date: '2024–2025',
        title: 'Frontend/Fullstack em Times de Produto',
        description:
          'Refatoração de SaaS legado para Vue 3. Fundações de Design System com Storybook. UI corporativa com Vuetify e PrimeVue. Recursos em tempo real com WebSockets.',
      },
      {
        date: '2020–2024',
        title: 'Desenvolvedor Fullstack em SaaS em Escala',
        description:
          'Módulos de alto impacto como CRMs, dashboards e cobrança. Ferramenta de investimentos em PHP e PostgreSQL com regras complexas e fluxos de dados confiáveis.',
      },
      {
        date: '2024 (Freelance)',
        title: 'Entrega Full-Stack',
        description:
          'Website e admin com Next.js, React, Laravel e PostgreSQL. Entrega ponta a ponta e manutenção solo.',
      },
      {
        date: '2025',
        title: 'Graduação e TCC',
        description:
          'Bacharelado em Ciência da Computação. Projeto de previsão em Python com nota 9/10.',
      },
    ],
  },
  projects: {
    title: 'Meus Projetos',
    description: 'Projetos selecionados que destacam arquitetura, componentização, UI/UX e entregas ponta a ponta.',
    tooltips: {
      viewProject: 'Ver Projeto',
      privateProject: 'Projeto Privado',
    },
    items: [
      {
        id: 'unicred-invest',
        title: 'Unicred Invest',
        description:
          'Ferramenta de análise de investimentos para assessores de cooperativas, com regras de negócio complexas. Cálculos precisos, fluxos de dados confiáveis e dashboards claros para grandes volumes.',
        technologies: ['PHP', 'JavaScript', 'jQuery', 'PostgreSQL', 'Visualização de Dados'],
      },
      {
        id: 'customer-service-manager',
        title: 'Gerenciador de Atendimento',
        description:
          'Sistema em tempo real para exibição e chamada de senhas em agências físicas. Novo app para TV em React Native com WebSockets, reconexão robusta e UX simples para atendentes e clientes.',
        technologies: ['React Native', 'WebSockets', 'Context API', 'Android'],
      },
      {
        id: 'solusjur',
        title: 'SolusJur — Gestor de Processos',
        description:
          'Aplicação externa para gerenciar processos jurídicos e inadimplência, integrando com o SaaS principal. Componentes reutilizáveis e consistência de UI guiadas por Storybook. UI corporativa com Vuetify e PrimeVue.',
        technologies: ['Vue.js', 'Vuetify', 'PrimeVue', 'APIs REST', 'Tailwind CSS'],
      },
      {
        id: 'real-estate-website',
        title: 'Site de Avaliação Imobiliária',
        description:
          'Entrega full-stack para uma empresa de avaliação imobiliária. Site dinâmico em Next.js e painel administrativo em React, com API Laravel e PostgreSQL. Arquitetura limpa, UI responsiva e páginas otimizadas para SEO.',
        technologies: ['Next.js', 'React', 'Laravel', 'PostgreSQL'],
      },
      {
        id: 'rpg-sheet-creator',
        title: 'Gerador de Fichas de RPG',
        description:
          'Projeto acadêmico e pessoal com planejamento completo e execução. UX envolvente usando Next.js e Laravel para criar fichas estruturadas de RPG de mesa.',
        technologies: ['Next.js', 'Laravel', 'Engenharia de Software'],
      },
      {
        id: 'ml-expense-prediction',
        title: 'Previsão de Despesas (ML)',
        description:
          'Trabalho de conclusão de curso com nota 9/10. Modelo em Python para prever despesas e distribuição de resultados em pequenas empresas. Metodologia clara e apresentação de resultados.',
        technologies: ['Python', 'Machine Learning', 'Análise de Dados'],
      },
    ],
  },
  contact: {
    title: 'Entre em Contato',
    description:
      'Vamos construir algo de impacto juntos. Aberto a colaboração, oportunidades remotas e desafios significativos.',
    connect: 'Conecte-se comigo em:',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Welliton Slaviero. Todos os direitos reservados.`,
  },
};
