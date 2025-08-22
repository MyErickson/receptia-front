import { useTranslation } from "react-i18next";
import { ScrollFloat } from "~/components/animations/Background";
import { Button } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import { Section, SectionHeader } from "~/components/ui/Section";
import { generateMeta } from "~/utils/seo";
import { generateServiceSchema } from "~/utils/structured-data";
import type { Route } from "./+types/app-mobile-reunion";

export function meta(_: Route.MetaArgs) {
  return generateMeta({
    title: "Agent IA & Mobile - Développement Applications",
    description:
      "Agence web spécialisée en Agent IA et applications mobiles. Création d'applications avec Agent IA intégrés, chatbots nouvelle génération, automatisation intelligente.",
    url: "/app-mobile-reunion",
    keywords: [
      "agent IA mobile",
      "agence web agent IA",
      "développement applications mobiles",
      "agent IA intégrés",
      "applications mobiles intelligentes",
      "chatbots agent IA",
      "automatisation agent IA",
      "développement flutter react native",
      "apps mobiles sur mesure",
      "solutions agent IA",
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
          name: "Développement d'Applications Mobiles Réunion",
          description:
            "Création d'applications mobiles natives et hybrides à l'île de la Réunion. Développement iOS, Android avec solutions IA intégrées.",
          url: "https://receptia.fr/app-mobile-reunion",
          price: "À partir de 3000€",
          currency: "EUR",
        }),
      ),
    },
  ],
};

export default function AppMobileReunion() {
  const { t } = useTranslation();

  const services = [
    {
      id: "native_ios",
      icon: "📱",
      title: t("appMobileReunion.services.items.native_ios.title"),
      desc: t("appMobileReunion.services.items.native_ios.desc"),
      features: t("appMobileReunion.services.items.native_ios.features", { returnObjects: true }) as string[],
      price: t("appMobileReunion.services.items.native_ios.price"),
    },
    {
      id: "native_android",
      icon: "🤖",
      title: t("appMobileReunion.services.items.native_android.title"),
      desc: t("appMobileReunion.services.items.native_android.desc"),
      features: t("appMobileReunion.services.items.native_android.features", {
        returnObjects: true,
      }) as string[],
      price: t("appMobileReunion.services.items.native_android.price"),
    },
    {
      id: "hybrid_apps",
      icon: "🔄",
      title: t("appMobileReunion.services.items.hybrid_apps.title"),
      desc: t("appMobileReunion.services.items.hybrid_apps.desc"),
      features: t("appMobileReunion.services.items.hybrid_apps.features", {
        returnObjects: true,
      }) as string[],
      price: t("appMobileReunion.services.items.hybrid_apps.price"),
      popular: true,
    },
    {
      id: "pwa_apps",
      icon: "🌐",
      title: t("appMobileReunion.services.items.pwa_apps.title"),
      desc: t("appMobileReunion.services.items.pwa_apps.desc"),
      features: t("appMobileReunion.services.items.pwa_apps.features", { returnObjects: true }) as string[],
      price: t("appMobileReunion.services.items.pwa_apps.price"),
    },
    {
      id: "ecommerce_mobile",
      icon: "🛒",
      title: t("appMobileReunion.services.items.ecommerce_mobile.title"),
      desc: t("appMobileReunion.services.items.ecommerce_mobile.desc"),
      features: t("appMobileReunion.services.items.ecommerce_mobile.features", {
        returnObjects: true,
      }) as string[],
      price: t("appMobileReunion.services.items.ecommerce_mobile.price"),
    },
    {
      id: "ai_mobile_apps",
      icon: "🧠",
      title: t("appMobileReunion.services.items.ai_mobile_apps.title"),
      desc: t("appMobileReunion.services.items.ai_mobile_apps.desc"),
      features: t("appMobileReunion.services.items.ai_mobile_apps.features", {
        returnObjects: true,
      }) as string[],
      price: t("appMobileReunion.services.items.ai_mobile_apps.price"),
    },
  ];

  const processSteps = t("appMobileReunion.process.steps", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
    duration: string;
  }>;

  const stepIcons = ["🎯", "🎨", "💻", "🔍", "🚀", "📚"];

  const benefits = t("appMobileReunion.benefits.items", { returnObjects: true }) as Array<{
    title: string;
    desc: string;
  }>;

  const benefitIcons = ["🏝️", "⚡", "🛠️", "💰"];

  return (
    <Section className="pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t("appMobileReunion.hero.title")}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t("appMobileReunion.hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" to="/contact">
              {t("appMobileReunion.hero.cta.primary")}
            </Button>
            <Button size="lg" variant="secondary" to="/contact">
              {t("appMobileReunion.hero.cta.secondary")}
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <SectionHeader
          title={t("appMobileReunion.services.title")}
          subtitle={t("appMobileReunion.services.subtitle")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollFloat key={service.id} offset={20}>
              <Card
                className={`h-full flex flex-col ${service.popular ? "border-2 border-blue-500 relative" : ""}`}
                delay={index * 0.1}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {t("appMobileReunion.services.items.hybrid_apps.popular")}
                    </span>
                  </div>
                )}
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button to="/contact" fullWidth className="mt-auto">
                  {t("appMobileReunion.common.requestQuote")}
                </Button>
              </Card>
            </ScrollFloat>
          ))}
        </div>

        {/* Process Section */}
        <SectionHeader
          title={t("appMobileReunion.process.title")}
          subtitle={t("appMobileReunion.process.subtitle")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {processSteps.map((step, index) => (
            <ScrollFloat key={`step-${step.title}`} offset={20}>
              <Card className="h-full text-center" delay={index * 0.1}>
                <div className="text-4xl mb-4">{stepIcons[index]}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.desc}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
                  {step.duration}
                </div>
              </Card>
            </ScrollFloat>
          ))}
        </div>

        {/* Benefits Section */}
        <SectionHeader
          title={t("appMobileReunion.benefits.title")}
          subtitle={t("appMobileReunion.benefits.subtitle")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <ScrollFloat key={`benefit-${benefit.title}`} offset={20}>
              <Card className="text-center h-full" delay={index * 0.1}>
                <div className="text-3xl mb-4">{benefitIcons[index]}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </Card>
            </ScrollFloat>
          ))}
        </div>

        {/* Local SEO Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">{t("appMobileReunion.localSeo.title")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t("appMobileReunion.localSeo.coverage.title")}</h3>
              <ul className="space-y-2">
                {(t("appMobileReunion.localSeo.coverage.cities", { returnObjects: true }) as string[]).map(
                  (city) => (
                    <li key={city}>• {city}</li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t("appMobileReunion.localSeo.sectors.title")}</h3>
              <ul className="space-y-2">
                {(t("appMobileReunion.localSeo.sectors.items", { returnObjects: true }) as string[]).map(
                  (sector) => (
                    <li key={sector}>• {sector}</li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">{t("appMobileReunion.finalCta.title")}</h2>
          <p className="text-xl text-gray-600 mb-8">{t("appMobileReunion.finalCta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" to="/contact">
              {t("appMobileReunion.finalCta.cta.primary")}
            </Button>
            <Button size="lg" variant="secondary" to="/contact">
              {t("appMobileReunion.finalCta.cta.secondary")}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
