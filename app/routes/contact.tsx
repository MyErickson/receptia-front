import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import { Section, SectionHeader } from "~/components/ui/Section";
import { generateMeta } from "~/utils/seo";
import type { Route } from "./+types/contact";

export function meta(_: Route.MetaArgs) {
  return generateMeta({
    title: "Contact - Receptia | Solutions IA & Digital sur Mesure",
    description:
      "Contactez Receptia pour vos projets IA et digitalisation. Chatbots intelligents, automatisation, solutions sur mesure. Devis gratuit, réponse sous 24h.",
  });
}

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Section className="pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Contactez-nous sur WhatsApp
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Pour toutes vos demandes, questions ou projets, nous privilégions WhatsApp pour un échange direct et rapide.
                </p>
                <a
                  href="https://wa.me/33693443548"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
                  </svg>
                  Ouvrir WhatsApp
                </a>
                <p className="text-sm text-gray-500 mt-4">
                  06 93 44 35 48
                </p>
              </div>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-bold mb-4">Informations de contact</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-700">WhatsApp (Privilégié)</p>
                  <a href="https://wa.me/33693443548" className="text-green-600 hover:text-green-700 font-medium">
                    06 93 44 35 48
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Email</p>
                  <a href="mailto:contact@receptia.fr" className="text-indigo-500 hover:text-indigo-600">
                    contact@receptia.fr
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">SIRET</p>
                  <p className="text-gray-600">99071384400027</p>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-4">{t("contact.alternatives.meeting")}</h3>
              <p className="text-gray-600 mb-4">
                Préférez-vous discuter de vive voix ? Réservez un créneau de 30 minutes avec notre équipe.
              </p>
              <Button href="https://calendly.com/receptia" external fullWidth variant="secondary">
                Réserver un créneau
              </Button>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-4">Pourquoi WhatsApp ?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-gray-600">Réponse rapide sous 2h en semaine</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-gray-600">Échange direct et personnalisé</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-gray-600">Partage facile de documents et visuels</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-gray-600">Disponible 7j/7</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
