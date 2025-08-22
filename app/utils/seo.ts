import type { MetaDescriptor } from "react-router";

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  locale?: "fr" | "en";
  alternateLocale?: "fr" | "en";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
  noindex?: boolean;
  canonical?: boolean;
}

export const generateMeta = ({
  title = "Receptia - Agence IA & Digital | Applications Mobiles Île de la Réunion",
  description = "Spécialiste développement app mobile et intelligence artificielle à l'île de la Réunion. Solutions IA sur mesure : chatbots, automatisation, applications mobiles. Expertise locale 974.",
  image = "https://receptia.fr/og-image.jpg",
  url = "https://receptia.fr",
  type = "website",
  locale = "fr",
  alternateLocale,
  publishedTime,
  modifiedTime,
  author,
  keywords = [
    "app mobile île de la réunion",
    "développement application mobile 974",
    "intelligence artificielle réunion",
    "agence digitale saint denis",
    "création app mobile réunion",
    "IA",
    "chatbots réunion",
    "automatisation 974",
    "solutions IA réunion",
    "digitalisation entreprise réunion",
    "agence web réunion",
    "développeur mobile réunion",
  ],
  noindex = false,
  canonical = true,
}: SEOProps = {}): MetaDescriptor[] => {
  const meta: MetaDescriptor[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
    { property: "og:locale", content: locale === "fr" ? "fr_FR" : "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

  if (alternateLocale) {
    meta.push({
      property: "og:locale:alternate",
      content: alternateLocale === "fr" ? "fr_FR" : "en_US",
    });
  }

  if (publishedTime) {
    meta.push({ property: "article:published_time", content: publishedTime });
  }

  if (modifiedTime) {
    meta.push({ property: "article:modified_time", content: modifiedTime });
  }

  if (author) {
    meta.push({ property: "article:author", content: author });
  }

  if (keywords.length > 0) {
    meta.push({ name: "keywords", content: keywords.join(", ") });
  }

  if (noindex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  } else {
    meta.push({ name: "robots", content: "index, follow" });
  }

  // Add canonical link if requested
  if (canonical && url) {
    const canonicalUrl = url.startsWith("http") ? url : `https://receptia.fr${url}`;

    meta.push({
      tagName: "link",
      rel: "canonical",
      href: canonicalUrl,
    } as MetaDescriptor);
  }

  return meta;
};

interface StructuredDataBase {
  "@context": string;
  "@type": string;
  [key: string]: unknown;
}

export const generateStructuredData = <T extends Record<string, unknown>>(
  type: string,
  data: T,
): StructuredDataBase & T => {
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Receptia",
  description:
    "Agence spécialisée en développement d'applications mobiles et intelligence artificielle à l'île de la Réunion (974). Création d'app mobile, chatbots IA, automatisation digitale.",
  url: "https://receptia.fr",
  logo: "https://receptia.fr/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+262-692-12-34-56",
    contactType: "customer service",
    availableLanguage: ["French", "English"],
    areaServed: "RE",
  },
  serviceArea: {
    "@type": "Place",
    name: "Île de la Réunion",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-21.1151",
      longitude: "55.5364",
    },
  },
  knowsAbout: [
    "App Mobile Réunion",
    "Applications Mobiles 974",
    "Intelligence Artificielle Réunion",
    "Chatbots",
    "Automatisation",
    "Machine Learning",
    "Solutions IA",
    "Développement Mobile",
  ],
  sameAs: [
    "https://twitter.com/receptia",
    "https://www.linkedin.com/company/receptia",
    "https://www.facebook.com/receptia",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Rue de la République",
    addressLocality: "Saint-Denis",
    postalCode: "97400",
    addressRegion: "Réunion",
    addressCountry: "RE",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Receptia",
  url: "https://receptia.fr",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://receptia.fr/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const serviceSchema = (service: {
  name: string;
  description: string;
  price?: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "Receptia",
    },
    url: service.url,
    ...(service.price && {
      offers: {
        "@type": "Offer",
        price: service.price,
        priceCurrency: "EUR",
      },
    }),
  };
};

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

export const articleSchema = (article: {
  title: string;
  description: string;
  author: string;
  publishedTime: string;
  modifiedTime?: string;
  image?: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    datePublished: article.publishedTime,
    ...(article.modifiedTime && { dateModified: article.modifiedTime }),
    ...(article.image && { image: article.image }),
    url: article.url,
    publisher: {
      "@type": "Organization",
      name: "Receptia",
      logo: {
        "@type": "ImageObject",
        url: "https://receptia.fr/logo.png",
      },
    },
  };
};
