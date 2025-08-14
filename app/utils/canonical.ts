import { generateCanonicalLinks } from '@forge42/seo-tools/canonical';

export function generateCanonicalForPage(url: string, domain: string = "https://receptia.fr") {
  return generateCanonicalLinks({
    urlTransformer: ({ url, domain, alternative }) => {
      // Pour l'instant, pas de version alternative (pas de multilingual)
      // Retourne simplement l'URL canonique
      return `${domain}${url}`;
    },
    alternatives: [], // Pas d'alternatives pour l'instant
    domain,
    url,
  });
}

export function generateCanonicalWithAlternatives(
  url: string, 
  domain: string = "https://receptia.fr"
) {
  return generateCanonicalLinks({
    urlTransformer: ({ url, domain, alternative }) => {
      if (alternative) {
        return `${domain}/${alternative}${url}`;
      }
      return `${domain}${url}`;
    },
    alternatives: ["en"], // Préparé pour l'anglais si besoin
    domain,
    url,
  });
}