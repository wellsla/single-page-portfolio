import type { Metadata } from 'next';
import '../globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Welliton Slaviero | Full Stack Software Engineer (TypeScript, Vue 3, React, Laravel, AI Agents)',
  description:
    'Full Stack Software Engineer with 6+ years building B2B SaaS end to end: Vue 3 and React front ends in TypeScript, Laravel APIs, PostgreSQL, real-time features and design systems, engineering with AI agents (spec-driven development, custom agent skills, MCP).',
};

export default function LangLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
