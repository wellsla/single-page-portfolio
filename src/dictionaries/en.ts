export const dictionary = {
  header: {
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    name: 'Welliton Slaviero',
    title: 'Fullstack Developer',
    subtitle:
      'I build intuitive, scalable, and high-performance web applications. Design Systems, clean code, and user-centric experiences that drive business growth.',
    cta: 'View Projects',
  },
  about: {
    title: 'About Me',
    description:
      "I'm a Fullstack Developer with 5+ years of experience turning complex problems into intuitive, efficient, and accessible web experiences. My core stack is Vue 3 (Composition API) with TypeScript, along with React and Next.js. I have hands-on experience building Design Systems with Storybook and enterprise UI using Vuetify and PrimeVue. A solid background with Laravel (PHP) and PostgreSQL helps me collaborate across frontend, backend, and DevOps to ship features end-to-end. I care about clean code, performance, accessibility, and products that help people and companies grow.",
    timeline: [
      {
        date: '2024–2025',
        title: 'Frontend/Fullstack in Product Teams',
        description:
          'Legacy SaaS refactor to Vue 3. Design System foundations with Storybook. Enterprise UI with Vuetify and PrimeVue. Real-time features with WebSockets.',
      },
      {
        date: '2020–2024',
        title: 'Fullstack Developer in SaaS at Scale',
        description:
          'High-impact modules such as CRMs, dashboards, and collections. Investment tool in PHP and PostgreSQL with complex rules and reliable data workflows.',
      },
      {
        date: '2024 (Freelance)',
        title: 'Full-Stack Delivery',
        description:
          'Website and admin with Next.js, React, Laravel, and PostgreSQL. End-to-end delivery and solo maintenance.',
      },
      {
        date: '2025',
        title: 'Graduation and Final Project',
        description:
          'Computer Science degree. ML forecasting project in Python scored 9/10.',
      },
    ],
  },
  projects: {
    title: 'My Projects',
    description: 'Selected projects that showcase architecture, componentization, UI/UX, and end-to-end delivery.',
    tooltips: {
      viewProject: 'View Project',
      privateProject: 'Private Project',
    },
    items: [
      {
        id: 'unicred-invest',
        title: 'Unicred Invest',
        description:
          'Investment analysis tool for credit-union advisors to manage high-value portfolios with complex business rules. Implemented precise calculations, reliable data workflows, and clear dashboards for large datasets.',
        technologies: ['PHP', 'JavaScript', 'jQuery', 'PostgreSQL', 'Data Visualization'],
      },
      {
        id: 'customer-service-manager',
        title: 'Customer Service Manager',
        description:
          'Real-time queue display and calling system for physical branches. New React Native TV app powered by WebSockets with resilient reconnection logic and simple UX for attendants and customers.',
        technologies: ['React Native', 'WebSockets', 'Context API', 'Android'],
      },
      {
        id: 'solusjur',
        title: 'SolusJur — Legal Process Manager',
        description:
          'External web app to manage legal processes and delinquent accounts, integrating with the main SaaS. Reusable components and UI consistency guided by Storybook. Enterprise UI with Vuetify and PrimeVue.',
        technologies: ['Vue.js', 'Vuetify', 'PrimeVue', 'REST APIs', 'Tailwind CSS'],
      },
      {
        id: 'real-estate-website',
        title: 'Real Estate Appraisal Website',
        description:
          'Full-stack delivery for a real estate appraisal company. Dynamic Next.js website and React admin panel backed by a Laravel API and PostgreSQL. Clean architecture, responsive UI, and SEO-friendly pages.',
        technologies: ['Next.js', 'React', 'Laravel', 'PostgreSQL'],
      },
      {
        id: 'rpg-sheet-creator',
        title: 'RPG Character Sheet Creator',
        description:
          'Academic and personal project with complete planning and execution. Engaging UX using Next.js and Laravel to create structured tabletop RPG character sheets.',
        technologies: ['Next.js', 'Laravel', 'Software Engineering'],
      },
      {
        id: 'ml-expense-prediction',
        title: 'ML Expense Prediction Model',
        description:
          'University capstone project (grade 9/10). Python model to forecast expenses and profit sharing for small companies. Clear methodology and results presentation.',
        technologies: ['Python', 'Machine Learning', 'Data Analysis'],
      },
    ],
  },
  contact: {
    title: 'Get in Touch',
    description:
      "Let's build something impactful together. Open to collaboration, remote opportunities, and meaningful challenges.",
    connect: 'Connect with me on:',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Welliton Slaviero. All rights reserved.`,
  },
};
