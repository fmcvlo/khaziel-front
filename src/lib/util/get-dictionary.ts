import "server-only"

const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  es: () => import("../dictionaries/es.json").then((module) => module.default),
}

const countryToLanguage: Record<string, string> = {
  es: "es",
  cl: "es",
  mx: "es",
  ar: "es",
  co: "es",
  // Add more mappings as needed
}

export const getDictionary = async (locale: string) => {
  const language = countryToLanguage[locale.toLowerCase()] || locale.toLowerCase()
  
  // Check if we have a direct match (e.g., 'es')
  if (dictionaries[language as keyof typeof dictionaries]) {
    return dictionaries[language as keyof typeof dictionaries]()
  }
  
  // Default to English
  return dictionaries.en()
}

