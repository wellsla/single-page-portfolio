import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Welliton Slaviero | Fullstack Developer (Vue.js, React.js, Next.js, TypeScript, Laravel, PostgreSQL)',
  description: 'Fullstack Developer specialized in Vue.js, React, Next.js, and TypeScript. Experienced with Design Systems (Storybook), Vuetify/PrimeVue, Laravel/PHP, PostgreSQL, and real-time apps with WebSockets. Focused on performance, clean code, and business impact.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}