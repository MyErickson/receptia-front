/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <> */
import { I18nextProvider } from "react-i18next";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import i18n from "./i18n/config";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Montserrat:wght@600;700&display=swap",
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
                "Agence spécialisée en intelligence artificielle et solutions digitales. Chatbots intelligents, automatisation IA, analyse prédictive et applications sur mesure.",
              url: "https://receptia.fr",
              logo: "https://receptia.fr/logo.png",
              image: "https://receptia.fr/og-image.jpg",
              foundingDate: "2024",
              slogan: "Votre partenaire IA & Digital de confiance",
              knowsAbout: [
                "Intelligence Artificielle",
                "Chatbots",
                "Automatisation",
                "Machine Learning",
                "Solutions IA",
                "NLP",
                "Analyse prédictive",
                "Applications IA",
              ],
              serviceArea: {
                "@type": "Country",
                name: "France",
              },
              areaServed: "FR",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+33-1-23-45-67-89",
                email: "contact@receptia.fr",
                contactType: "customer service",
                availableLanguage: ["French", "English"],
                areaServed: "FR",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Avenue de la République",
                addressLocality: "Paris",
                postalCode: "75011",
                addressCountry: "FR",
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
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
