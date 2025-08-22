/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <> */
import { I18nextProvider } from "react-i18next";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import { useGoogleFonts } from "./hooks/useGoogleFonts";
import i18n from "./i18n/config";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Montserrat:wght@600;700&display=swap",
    as: "style",
  },
  // Fonts avec media="print" pour éviter le render-blocking, sera changé en "all" par JS
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Montserrat:wght@600;700&display=swap",
    media: "print",
    id: "google-fonts",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Receptia",
              description:
                "Agence web spécialisée en Agent IA, IA générative et applications mobiles. Création d'applications avec Agent IA intégrés, solutions intelligentes nouvelle génération.",
              url: "https://receptia.fr",
              logo: "https://receptia.fr/logo.png",
              image: "https://receptia.fr/og-image.jpg",
              foundingDate: "2024",
              slogan: "Votre partenaire IA & Digital de confiance",
              knowsAbout: [
                "Agent IA",
                "IA Générative",
                "Applications Mobiles Intelligentes",
                "Chatbots Agent IA",
                "Automatisation Agent IA",
                "Machine Learning",
                "Solutions Agent IA",
                "NLP",
                "Analyse prédictive",
                "Développement Mobile IA",
                "Agence Web Spécialisée",
              ],
              serviceArea: {
                "@type": "Place",
                name: "Île de la Réunion",
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "-21.1151",
                  longitude: "55.5364",
                },
              },
              areaServed: "RE",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+262-692-12-34-56",
                email: "contact@receptia.fr",
                contactType: "customer service",
                availableLanguage: ["French", "English"],
                areaServed: "RE",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "12 Rue de la République",
                addressLocality: "Saint-Denis",
                postalCode: "97400",
                addressRegion: "Réunion",
                addressCountry: "RE",
              },
              sameAs: [
                "https://twitter.com/receptia",
                "https://www.linkedin.com/company/receptia",
                "https://www.facebook.com/receptia",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services IA et Digitalisation",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Chatbots Intelligents",
                      description: "Développement de chatbots avec traitement du langage naturel",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Automatisation IA",
                      description: "Automatisation de processus métier avec intelligence artificielle",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Analyse Prédictive",
                      description: "Solutions d'analyse de données et machine learning",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  // Activer les Google Fonts de manière asynchrone
  useGoogleFonts();

  return (
    <I18nextProvider i18n={i18n}>
      <Outlet />
    </I18nextProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">{message}</h1>
      <p className="text-lg text-gray-600 mb-4">{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
