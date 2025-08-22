import { useTranslation } from "react-i18next";
import { ScrollFloat } from "~/components/animations/Background";
import { Button } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import { Section, SectionHeader } from "~/components/ui/Section";
import { generateMeta } from "~/utils/seo";
import { generateServiceSchema } from "~/utils/structured-data";
import type { Route } from "./+types/services";

export function meta(_: Route.MetaArgs) {
  return generateMeta({
    title: "Services Agent IA & Mobile | Agence Web Spécialisée",
    description:
      "Services Agent IA et applications mobiles intelligentes : création d'apps avec Agent IA intégrés, chatbots nouvelle génération, automatisation intelligente sur mesure.",
    url: "/services",
    keywords: [
      "services agent IA",
      "services agence web mobile",
      "développement applications mobiles",
      "agent IA intégrés",
      "chatbots agent IA",
      "automatisation agent IA",
      "applications mobiles intelligentes",
      "solutions agent IA",
      "agence web spécialisée",
      "intelligence artificielle mobile",
    ],
    canonical: true,
  });
}

export const handle = {
  scripts: () => [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(
        generateServiceSchema({
          name: "Solutions Intelligence Artificielle",
          description:
            "Services IA complets : chatbots, automatisation, analyse prédictive et applications IA sur mesure pour entreprises.",
          url: "https://receptia.fr/services",
          price: "À partir de 2000€",
          currency: "EUR",
        }),
      ),
    },
  ],
};

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: "ai_assistant",
      icon: "🤖",
      title: t("services.items.ai_assistant.title"),
      desc: t("services.items.ai_assistant.desc"),
      price: t("services.items.ai_assistant.price"),
      features: [
        "Chatbots conversationnels",
        "Traitement langage naturel",
        "Intégration multicanale",
        "Réponses 24/7",
        "Apprentissage continu",
        "Analytics intégrées",
      ],
      popular: true,
    },
    {
      id: "ai_automation",
      icon: "⚡",
      title: t("services.items.ai_automation.title"),
      desc: t("services.items.ai_automation.desc"),
      price: t("services.items.ai_automation.price"),
      features: [
        "Workflows intelligents",
        "Traitement automatique",
        "Classification documents",
        "Validation par IA",
        "Alertes prédictives",
        "ROI mesurable",
      ],
    },
    {
      id: "ai_analysis",
      icon: "📈",
      title: t("services.items.ai_analysis.title"),
      desc: t("services.items.ai_analysis.desc"),
      price: t("services.items.ai_analysis.price"),
      features: [
        "Machine Learning",
        "Analyse prédictive",
        "Visualisation données",
        "Recommandations IA",
        "Rapports automatisés",
        "Tableaux de bord",
      ],
    },
    {
      id: "ai_apps",
      icon: "📱",
      title: t("services.items.ai_apps.title"),
      desc: t("services.items.ai_apps.desc"),
      price: t("services.items.ai_apps.price"),
      features: [
        "Apps mobiles IA",
        "Vision par ordinateur",
        "Reconnaissance vocale",
        "Interface adaptative",
        "API IA intégrées",
        "Optimisation continue",
      ],
    },
    {
      id: "showcase",
      icon: "🌐",
      title: t("services.items.showcase.title"),
      desc: t("services.items.showcase.desc"),
      price: t("services.items.showcase.price"),
      features: [
        "Design moderne",
        "Pages illimitées",
        "100% responsive",
        "SEO de base",
        "Formation incluse",
        "Hébergement 1 an",
      ],
    },
    {
      id: "ai_integration",
      icon: "🔗",
      title: t("services.items.ai_integration.title"),
      desc: t("services.items.ai_integration.desc"),
      price: t("services.items.ai_integration.price"),
      features: [
        "Intégration CRM/ERP",
        "APIs IA externes",
        "Migration données",
        "Tests d'intégration",
        "Formation équipes",
        "Support continu",
      ],
    },
  ];

  return (
    <Section className="pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("services.title")} subtitle={t("services.subtitle")} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {services.map((service, index) => (
            <ScrollFloat key={service.id} offset={20}>
              <Card
                className={`h-full flex flex-col ${service.popular ? "border-2 border-indigo-500" : ""}`}
                delay={index * 0.1}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                    <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Le plus populaire
                    </span>
                  </div>
                )}
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <p className="text-3xl font-bold text-indigo-500 mb-6">{service.price}</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={`${service.id}-feature-${idx}`} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <title>Checkmark</title>
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  to="/contact"
                  variant={service.popular ? "primary" : "secondary"}
                  fullWidth
                  className="mt-auto"
                >
                  Demander un devis
                </Button>
              </Card>
            </ScrollFloat>
          ))}
        </div>
      </div>
    </Section>
  );
}
