// Note: @forge42/seo-tools structured data modules may not exist
// Using custom implementations based on schema.org standards

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Receptia",
    description:
      "Agence spécialisée en intelligence artificielle et solutions digitales. Chatbots, automatisation IA, analyse prédictive.",
    url: "https://receptia.fr",
    logo: "https://receptia.fr/logo.png",
    image: "https://receptia.fr/og-image.jpg",
    telephone: "+33-1-23-45-67-89",
    email: "contact@receptia.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Avenue de la République",
      addressLocality: "Paris",
      postalCode: "75011",
      addressCountry: "FR",
    },
    areaServed: "FR",
    sameAs: [
      "https://twitter.com/receptia",
      "https://www.linkedin.com/company/receptia",
      "https://www.facebook.com/receptia",
    ],
    knowsAbout: [
      "Intelligence Artificielle",
      "Chatbots",
      "Automatisation",
      "Machine Learning",
      "Solutions IA",
    ],
  };
};

export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Receptia",
    url: "https://receptia.fr",
    description: "Agence IA spécialisée en solutions d'intelligence artificielle pour entreprises",
    inLanguage: "fr-FR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://receptia.fr/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
};

export const generateServiceSchema = (serviceData: {
  name: string;
  description: string;
  url: string;
  price?: string;
  currency?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceData.name,
    description: serviceData.description,
    provider: {
      "@type": "Organization",
      name: "Receptia",
      url: "https://receptia.fr",
    },
    url: serviceData.url,
    serviceType: "Intelligence Artificielle",
    areaServed: "FR",
    ...(serviceData.price && {
      offers: {
        "@type": "Offer",
        price: serviceData.price,
        priceCurrency: serviceData.currency || "EUR",
        availability: "https://schema.org/InStock",
      },
    }),
  };
};

export const generateFAQSchema = (faqData: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
};
