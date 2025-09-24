import 'server-only'

const dictionaries = {
  en: () => import('@/dictionaries/en').then((module) => module.dictionary),
  pt: () => import('@/dictionaries/pt').then((module) => module.dictionary),
}

export const getDictionary = async (locale: string) => {
  const lang = locale.toLowerCase();
  if (lang === 'pt' || lang.startsWith('pt-')) {
    return dictionaries.pt();
  }
  return dictionaries.en();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
