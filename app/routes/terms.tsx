import { motion } from "framer-motion";
import { Card } from "~/components/ui/Card";
import { Section } from "~/components/ui/Section";
import { generateMeta } from "~/utils/seo";
import type { Route } from "./+types/terms";

export function meta(_: Route.MetaArgs) {
  return generateMeta({
    title: "Conditions Générales de Vente - Receptia",
    description:
      "Consultez les conditions générales de vente de Receptia, votre agence spécialisée en intelligence artificielle et solutions digitales.",
  });
}

export default function Terms() {
  const sections = [
    {
      title: "1. Objet et champ d'application",
      content: `Les présentes conditions générales de vente (CGV) s'appliquent à toutes les prestations de services proposées par Receptia, société spécialisée dans le développement de solutions d'intelligence artificielle, de sites web et d'applications digitales.

Toute commande implique l'acceptation sans réserve des présentes CGV. Ces conditions prévalent sur toute autre condition figurant dans tout autre document, sauf dérogation préalable, expresse et écrite.`,
    },
    {
      title: "2. Prestations proposées",
      content: `Receptia propose les services suivants :
• Développement d'assistants virtuels et chatbots intelligents
• Automatisation de processus métier avec l'IA
• Applications web et mobiles avec fonctionnalités IA
• Analyse prédictive et traitement de données
• Sites vitrines et solutions e-commerce
• Intégration d'IA dans les systèmes existants
• Formation et accompagnement

Chaque prestation fait l'objet d'un devis détaillé précisant la nature, l'étendue et les modalités d'exécution des services.`,
    },
    {
      title: "3. Commandes et acceptation",
      content: `Toute commande n'est définitive qu'après :
• Signature du devis par le client
• Versement de l'acompte prévu (généralement 30% du montant total)
• Transmission des éléments nécessaires au projet (contenus, accès, etc.)

La commande vaut acceptation des prix, descriptions et modalités de vente indiquées. Receptia se réserve le droit de refuser toute commande pour un motif légitime.`,
    },
    {
      title: "4. Prix et modalités de paiement",
      content: `Les prix sont exprimés en euros, hors taxes. La TVA applicable est celle en vigueur à la date de facturation.

Modalités de paiement :
• Sites vitrines : 50% à la commande, 50% à la livraison
• Sites web/applications web : 50% à la commande, 50% à la livraison
• Applications mobiles : 50% à la commande, 50% à la livraison
• Projets IA complexes : 30% à la commande, 40% à mi-parcours, 30% à la livraison
• Maintenance mensuelle : paiement en début de mois

Moyens de paiement acceptés : virement bancaire, carte bancaire.
Délai de paiement : 30 jours à réception de facture.

Tout retard de paiement entraîne de plein droit l'exigibilité d'intérêts de retard au taux de 12% l'an, ainsi qu'une indemnité forfaitaire de 40€ pour frais de recouvrement.`,
    },
    {
      title: "5. Délais d'exécution",
      content: `Les délais d'exécution sont mentionnés dans le devis et commencent à courir à compter de :
• La signature du devis
• Le versement de l'acompte
• La réception de tous les éléments nécessaires au projet

Délais indicatifs :
• Site vitrine : 5-10 jours ouvrés
• Application mobile : 4-8 semaines
• Chatbot simple : 2-3 semaines
• Automatisation IA : 3-6 semaines
• Application IA complexe : 1-3 mois

Les délais peuvent être prolongés en cas de force majeure ou de retard dans la transmission des éléments par le client.`,
    },
    {
      title: "6. Obligations du client",
      content: `Le client s'engage à :
• Fournir tous les éléments nécessaires dans les délais convenus
• Répondre aux demandes de validation dans un délai de 5 jours ouvrés
• Respecter les droits de propriété intellectuelle des contenus fournis
• Procéder aux règlements aux échéances prévues
• Informer Receptia de toute modification souhaitée sans délai

Le client garantit être propriétaire des contenus fournis ou disposer des droits nécessaires à leur utilisation.`,
    },
    {
      title: "7. Livraison et réception",
      content: `La livraison s'effectue par :
• Mise en ligne sur les serveurs de production
• Transmission des fichiers sources (selon conditions du devis)
• Formation à l'utilisation si prévue au contrat

Le client dispose de 5 jours ouvrés pour formuler ses observations. Passé ce délai sans observation, la livraison est réputée conforme et définitivement acceptée.

Les demandes de modification après acceptation feront l'objet d'un devis complémentaire.`,
    },
    {
      title: "8. Propriété intellectuelle",
      content: `Receptia conserve la propriété intellectuelle sur :
• Les méthodes, savoir-faire et outils développés
• Les algorithmes et modèles d'IA créés
• Le code source (sauf rachat explicite)

Le client obtient un droit d'usage non exclusif des solutions développées pour ses besoins propres. Toute utilisation commerciale ou revente nécessite un accord écrit préalable.

Les contenus fournis par le client restent sa propriété exclusive.`,
    },
    {
      title: "9. Garanties et maintenance",
      content: `Receptia garantit :
• Le bon fonctionnement des solutions livrées pendant 30 jours
• La correction gratuite des bugs et dysfonctionnements
• La compatibilité avec les navigateurs modernes

Services de maintenance (optionnels) :
• Mises à jour de sécurité
• Améliorations des performances IA
• Support technique prioritaire
• Sauvegardes régulières

La maintenance fait l'objet d'un contrat séparé avec tarification mensuelle.`,
    },
    {
      title: "10. Responsabilité",
      content: `La responsabilité de Receptia est limitée au montant des prestations facturées. Receptia ne saurait être tenue responsable :
• Des dommages indirects ou immatériels
• De la perte d'exploitation ou de chiffre d'affaires
• Des conséquences d'une utilisation non conforme
• Des interruptions liées aux hébergeurs tiers

Le client s'engage à souscrire les assurances nécessaires pour couvrir ses activités et l'utilisation des solutions fournies.`,
    },
    {
      title: "11. Protection des données",
      content: `Receptia s'engage à respecter la réglementation RGPD pour toutes les données traitées dans le cadre de ses prestations :
• Traitement licite et transparent des données
• Minimisation de la collecte de données
• Mesures de sécurité appropriées
• Droit de rectification et de suppression

Les données clients ne sont jamais revendues ou transmises à des tiers sans autorisation expresse. Voir notre politique de confidentialité pour plus de détails.`,
    },
    {
      title: "12. Résiliation",
      content: `En cas de manquement grave aux obligations contractuelles, le contrat peut être résilié de plein droit après mise en demeure restée infructueuse pendant 15 jours.

Les sommes déjà versées restent acquises à Receptia à titre d'indemnité, sans préjudice de dommages et intérêts complémentaires.

En cas d'arrêt d'un projet à l'initiative du client, les prestations déjà réalisées sont facturées au prorata.`,
    },
    {
      title: "13. Force majeure",
      content: `Receptia ne saurait être tenue responsable de tout retard ou défaut d'exécution consécutif à la survenance d'un cas de force majeure.

Constituent des cas de force majeure : catastrophes naturelles, incendies, grèves, pannes des réseaux de télécommunications, mesures gouvernementales, et plus généralement tout événement imprévisible et insurmontable.`,
    },
    {
      title: "14. Litiges et droit applicable",
      content: `Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.

À défaut d'accord amiable, tout litige sera porté devant les tribunaux compétents de Paris, même en cas de pluralité de défendeurs ou d'appel en garantie.

Les présentes CGV annulent et remplacent toute version antérieure.`,
    },
  ];

  return (
    <Section className="pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Conditions Générales de Vente
            </h1>
            <p className="text-xl text-gray-600">
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <title>Icône de section</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Information importante</h3>
                  <p className="text-gray-600">
                    Ces conditions générales de vente s'appliquent à tous les services proposés par Receptia.
                    Nous vous recommandons de les lire attentivement avant de passer commande.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b border-gray-100 pb-3">
                    {section.title}
                  </h2>
                  <div className="prose max-w-none">
                    {section.content.split("\n").map((paragraph) => (
                      <p key={paragraph} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Vous avez des questions sur nos CGV ?
                </h3>
                <p className="text-gray-600 mb-6">
                  Notre équipe est à votre disposition pour clarifier tout point des présentes conditions.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <title>Email</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Nous contacter
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
