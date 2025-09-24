import { getDictionary } from '@/lib/get-dictionary';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex min-h-screen flex-col">
      <Header dictionary={dictionary.header} lang={lang} />
      <main className="flex-1">
        <HeroSection dictionary={dictionary.hero} />
        <AboutSection dictionary={dictionary.about} />
        <ProjectsSection dictionary={dictionary.projects} />
        <ContactSection dictionary={dictionary.contact} />
      </main>
      <Footer dictionary={dictionary.footer} />
    </div>
  );
}
