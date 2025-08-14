/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <> */
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Section, SectionHeader } from "~/components/ui/Section";
import { faqSchema, generateMeta } from "~/utils/seo";
import type { Route } from "./+types/faq";

export function meta(_: Route.MetaArgs) {
  return generateMeta({
    title: "FAQ - Receptia | Questions sur l'IA et l'Automatisation",
    description:
      "Toutes les réponses à vos questions sur nos solutions IA : bénéfices, coûts, délais d'implémentation, intégration, maintenance des solutions d'intelligence artificielle.",
  });
}

export const handle = {
  scripts: () => [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(
        faqSchema([
          {
            question: "Quels sont les bénéfices concrets de l'IA pour mon entreprise ?",
            answer:
              "L'IA automatise vos tâches répétitives, améliore votre service client 24/7, analyse vos données pour des insights précieux et réduit vos coûts opérationnels jusqu'à 60%.",
          },
          {
            question: "Combien de temps faut-il pour implémenter une solution IA ?",
            answer:
              "Pour un chatbot ou assistant IA : 2-3 semaines. Pour l'automatisation de processus : 3-6 semaines. Pour des solutions complexes d'analyse : 1-3 mois selon le périmètre.",
          },
          {
            question: "L'IA peut-elle s'intégrer à mes outils existants ?",
            answer:
              "Absolument ! Nos solutions IA s'intègrent à vos CRM, ERP, outils de gestion existants via API. Pas besoin de tout changer.",
          },
        ]),
      ),
    },
  ],
};

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t("faq.items.ai_benefits.q"), a: t("faq.items.ai_benefits.a") },
    {
      q: t("faq.items.ai_implementation.q"),
      a: t("faq.items.ai_implementation.a"),
    },
    { q: t("faq.items.ai_cost.q"), a: t("faq.items.ai_cost.a") },
    { q: t("faq.items.ai_maintenance.q"), a: t("faq.items.ai_maintenance.a") },
    { q: t("faq.items.ai_integration.q"), a: t("faq.items.ai_integration.a") },
    { q: t("faq.items.showcase_still.q"), a: t("faq.items.showcase_still.a") },
  ];

  return (
    <Section className="pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("faq.title")} />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-lg">{faq.q}</h3>
                <svg
                  className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} className="px-6 pb-4">
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
