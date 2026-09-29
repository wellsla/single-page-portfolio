import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Welliton Slaviero | Full Stack Software Engineer (TypeScript, Vue 3, React, Laravel, AI Agents)',
  description:
    'Full Stack Software Engineer with 6+ years building B2B SaaS end to end: Vue 3 and React front ends in TypeScript, Laravel APIs, PostgreSQL, real-time features and design systems, engineering with AI agents (spec-driven development, custom agent skills, MCP).',
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