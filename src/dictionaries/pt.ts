export const dictionary = {
  header: {
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato',
  },
  hero: {
    name: 'Welliton Slaviero',
    title: 'Desenvolvedor Frontend',
    subtitle: 'Criando experiências web elegantes e eficientes. Apaixonado por tecnologia e código limpo.',
    cta: 'Veja Meu Trabalho',
  },
  about: {
    title: 'Sobre Mim',
    description:
      'Sou um graduado em Ciência da Computação apaixonado por transformar ideias em realidade através do código. Minha jornada começou com robótica na escola e desde então evoluiu para uma carreira em desenvolvimento de software, com forte foco em tecnologias frontend. Eu prospero em desafios e sou dedicado ao aprendizado contínuo e à construção de aplicações de alta qualidade e impacto.',
    timeline: [
      {
        date: '2025',
        title: 'Formatura e Projeto Final',
        description:
          'Formado em Ciência da Computação com nota 9/10 no meu projeto final: um algoritmo de machine learning em Python para prever despesas de empresas.',
      },
      {
        date: '2020 - 2025',
        title: 'Desenvolvedor de Software na Soluct Soluções em Sistemas',
        description:
          'Desenvolvi e mantive uma plataforma SaaS de grande escala para uma cooperativa de crédito nacional (Unicred). Adquiri expertise em PHP, JavaScript, PostgreSQL e, posteriormente, em frameworks modernos como Vue.js e React.js.',
      },
      {
        date: '2024 (Freelance)',
        title: 'Projeto Full-Stack Freelance',
        description:
          'Co-desenvolvi um site dinâmico (Next.js) e painel de gerenciamento (React.js, Laravel) para uma empresa de avaliação de imóveis, tornando-me eventualmente o único desenvolvedor para suporte.',
      },
      {
        date: '2019',
        title: 'Assistente de Logística nos Correios',
        description:
          'Trabalhei por um ano nos Correios após passar em um concurso público. Fui reconhecido por minhas habilidades de organização e senso de negócio.',
      },
      {
        date: 'Ensino Médio',
        title: 'Pré-universitário e Robótica',
        description:
          'Participei de cursos preparatórios para Ciência da Computação, aprendendo Arduino, Raspberry Pi e programação em C/C++/C#. Continuei com a robótica, competindo em campeonatos regionais.',
      },
      {
        date: 'Ensino Fundamental',
        title: 'Primeiros Passos na Programação',
        description:
          'Iniciei minha jornada na programação em um grupo de robótica escolar, aprendendo lógica com "Scratch" e construindo a base para minha futura carreira.',
      },
    ],
  },
  projects: {
    title: 'Meus Projetos',
    description: 'Aqui estão alguns dos principais projetos em que trabalhei, mostrando minhas habilidades e experiência.',
    tooltips: {
      viewProject: 'Ver Projeto',
      privateProject: 'Projeto Privado',
    },
    items: [
      {
        id: 'unicred-invest',
        title: 'Unicred Invest',
        description:
          'Projetei e desenvolvi uma ferramenta vital de gestão de investimentos que ajudou os funcionários da Unicred a assessorar clientes, economizando milhões de reais. O projeto envolveu lógica de negócios complexa, integrações de API externas e um forte foco em UI/UX para lidar com grandes volumes de dados.',
        technologies: ['PHP', 'JavaScript', 'jQuery', 'PostgreSQL', 'UI/UX Design'],
      },
      {
        id: 'customer-service-manager',
        title: 'Gerenciador de Atendimento ao Cliente',
        description:
          'Refatorei um sistema legado para gerenciar filas de atendimento em agências físicas. Desenvolvi um novo aplicativo em React Native para TVs para exibir e chamar senhas, utilizando WebSockets para comunicação em tempo real. O sistema é indispensável para a maioria das agências Unicred no Brasil.',
        technologies: ['React Native', 'WebSockets', 'Context API', 'Android'],
      },
      {
        id: 'solusjur',
        title: 'SolusJur - Gerenciador de Processos Jurídicos',
        description:
          'Desenvolvi de forma independente uma aplicação web para gerenciar processos jurídicos de cooperados inadimplentes. Construído com uma stack moderna, este sistema externo se comunica com a plataforma SaaS principal e é usado por escritórios de advocacia afiliados.',
        technologies: ['React', 'Tailwind CSS', 'Integração de API'],
      },
      {
        id: 'real-estate-website',
        title: 'Site de Avaliação de Imóveis',
        description:
          'Um projeto freelance para criar um site dinâmico para uma empresa de avaliação de imóveis. Contava com um frontend em Next.js e um backend em Laravel com um painel de gerenciamento em React para o conteúdo.',
        technologies: ['Next.js', 'React', 'Laravel', 'PostgreSQL'],
      },
      {
        id: 'rpg-sheet-creator',
        title: 'Criador de Fichas de RPG',
        description:
          'Um projeto pessoal para uma disciplina de Engenharia de Software envolvendo o planejamento e execução completos de um sistema. Este aplicativo divertido permite que os usuários criem fichas de personagem para RPGs de mesa.',
        technologies: ['Next.js', 'Laravel', 'Engenharia de Software'],
      },
      {
        id: 'ml-expense-prediction',
        title: 'Modelo de Previsão de Despesas com ML',
        description:
          'Meu projeto final de graduação, que recebeu nota 9/10. Desenvolvi e analisei um algoritmo de machine learning usando Python para prever despesas e participação nos lucros para pequenas empresas.',
        technologies: ['Python', 'Machine Learning', 'Análise de Dados'],
      },
    ],
  },
  contact: {
    title: 'Entre em Contato',
    description:
      'Tem alguma pergunta, uma proposta, ou apenas quer dizer oi? Sinta-se à vontade para entrar em contato através de qualquer um dos canais abaixo. Responderei assim que possível.',
    connect: 'Conecte-se comigo em:',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Welliton Slaviero. Todos os direitos reservados.`,
  },
};
