export const dictionary = {
  header: {
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    name: 'Welliton Slaviero',
    title: 'Frontend Developer',
    subtitle:
      'Crafting elegant and efficient web experiences. Passionate about technology and clean code.',
    cta: 'View My Work',
  },
  about: {
    title: 'About Me',
    description:
      "I'm a Computer Science graduate passionate about turning ideas into reality through code. My journey began with robotics in school and has since evolved into a career in software development, with a strong focus on frontend technologies. I thrive on challenges and am dedicated to continuous learning and building high-quality, impactful applications.",
    timeline: [
      {
        date: '2025',
        title: 'Graduation & Final Project',
        description:
          'Graduated in Computer Science with a 9/10 grade on my final project: a machine learning algorithm in Python to predict company expenses.',
      },
      {
        date: '2020 - 2025',
        title: 'Software Developer at Soluct Soluções em Sistemas',
        description:
          'Developed and maintained a large-scale SaaS platform for a national credit union (Unicred). Gained expertise in PHP, JavaScript, PostgreSQL, and later, modern frameworks like Vue.js and React.js.',
      },
      {
        date: '2022 (Freelance)',
        title: 'Freelance Full-Stack Project',
        description:
          'Co-developed a dynamic website (Next.js) and management panel (React.js, Laravel) for a real estate appraisal company, eventually becoming the sole developer for support.',
      },
      {
        date: '2019',
        title: 'Logistics Assistant at Post Office',
        description:
          'Worked for a year at the Brazilian Post Office after passing a public competition. Recognized for organizational skills and business sense.',
      },
      {
        date: 'High School',
        title: 'University Prep & Robotics',
        description:
          'Participated in preparatory courses for Computer Science, learning Arduino, Raspberry Pi, and programming in C/C++/C#. Continued with robotics, competing in regional championships.',
      },
      {
        date: 'Middle School',
        title: 'First Steps in Programming',
        description:
          'Started my programming journey in a school robotics group, learning logic with "Scratch" and building a foundation for my future career.',
      },
    ],
  },
  projects: {
    title: 'My Projects',
    description: "Here are some of the key projects I've worked on, showcasing my skills and experience.",
    tooltips: {
      viewProject: 'View Project',
      privateProject: 'Private Project',
    },
    items: [
      {
        id: 'unicred-invest',
        title: 'Unicred Invest',
        description:
          'Designed and developed a vital investment management tool that helped Unicred employees advise clients, saving millions of reais. This project involved complex business logic, external API integrations, and a strong focus on UI/UX to handle vast amounts of data.',
        technologies: ['PHP', 'JavaScript', 'jQuery', 'PostgreSQL', 'UI/UX Design'],
      },
      {
        id: 'customer-service-manager',
        title: 'Customer Service Manager',
        description:
          'Refactored a legacy system for managing service queues in physical branches. Developed a new React Native app for TVs to display and call service tickets, utilizing WebSockets for real-time communication. The system is indispensable for most Unicred branches in Brazil.',
        technologies: ['React Native', 'WebSockets', 'Context API', 'Android'],
      },
      {
        id: 'solusjur',
        title: 'SolusJur - Legal Process Manager',
        description:
          'Independently developed a web application for managing legal processes for defaulting co-op members. Built with a modern stack, this external system communicates with the main SaaS platform and is used by affiliated law firms.',
        technologies: ['React', 'Tailwind CSS', 'API Integration'],
      },
      {
        id: 'real-estate-website',
        title: 'Real Estate Appraisal Website',
        description:
          'A freelance project to create a dynamic website for a real estate appraisal company. It featured a Next.js frontend and a Laravel backend with a React management panel for content.',
        technologies: ['Next.js', 'React', 'Laravel', 'PostgreSQL'],
      },
      {
        id: 'rpg-sheet-creator',
        title: 'RPG Character Sheet Creator',
        description:
          'A personal project for a Software Engineering course involving the complete planning and execution of a system. This fun app allows users to create character sheets for Tabletop RPGs.',
        technologies: ['Next.js', 'Laravel', 'Software Engineering'],
      },
      {
        id: 'ml-expense-prediction',
        title: 'ML Expense Prediction Model',
        description:
          'My final university project, which received a 9/10 grade. I developed and analyzed a machine learning algorithm using Python to predict expenses and profit-sharing for small companies.',
        technologies: ['Python', 'Machine Learning', 'Data Analysis'],
      },
    ],
  },
  contact: {
    title: 'Get in Touch',
    description:
      "Have a question, a proposal, or just want to say hi? Feel free to reach out through any of the channels below. I'll get back to you as soon as I can.",
    connect: 'Connect with me on:',
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Welliton Slaviero. All rights reserved.`,
  },
};
