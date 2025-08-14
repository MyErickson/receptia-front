/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <> */
import { motion } from "framer-motion";
import { Card } from "~/components/ui/Card";
import { Section } from "~/components/ui/Section";
import { generateMeta } from "~/utils/seo";
import type { Route } from "./+types/privacy";

export function meta(_: Route.MetaArgs) {
  return generateMeta({
    title: "Politique de Confidentialité - Receptia",
    description:
      "Politique de confidentialité de Receptia. Protection des données personnelles dans nos solutions d'intelligence artificielle et services digitaux.",
  });
}

export default function Privacy() {
  const sections = [
    {
      title: "1. Responsable du traitement",
      icon: "🏢",
      content: `Receptia, société spécialisée dans les solutions d'intelligence artificielle, est responsable du traitement de vos données personnelles.

Contact du délégué à la protection des données :
Email : privacy@receptia.fr
Adresse : 123 Avenue de la République, 75011 Paris, France

Nous nous engageons à respecter scrupuleusement la réglementation RGPD et à protéger vos données personnelles avec le plus grand soin.`,
    },
    {
      title: "2. Données personnelles collectées",
      icon: "📊",
      content: `Nous collectons les données suivantes selon différents contextes :

Données de contact (formulaires) :
• Nom et prénom
• Adresse email
• Numéro de téléphone (optionnel)
• Nom de l'entreprise
• Message et description du projet

Données techniques (logs serveur uniquement) :
• Adresse IP (pour sécurité et logs techniques)
• Pages demandées (logs serveur standard)
• User-Agent navigateur (compatibilité technique)
• Horodatage des requêtes

Aucun stockage local :
• Pas de Local Storage utilisé
• Pas de Session Storage utilisé
• Aucune donnée stockée dans le navigateur
• Aucune donnée transmise à des tiers`,
    },
    {
      title: "3. Finalités et bases légales du traitement",
      icon: "⚖️",
      content: `Nous traitons vos données pour les finalités suivantes :

Communication et support (base légale : intérêt légitime) :
• Répondre à vos demandes de contact
• Fournir un support technique
• Assurer le suivi de nos relations commerciales

Sécurité et fonctionnement technique (base légale : intérêt légitime) :
• Prévention des attaques et abus
• Maintenance et fonctionnement du site
• Amélioration de la performance technique

Marketing (base légale : consentement) :
• Newsletter uniquement si inscription volontaire
• Communications relatives à vos projets
• Aucun tracking publicitaire ou retargeting

Obligations légales (base légale : obligation légale) :
• Conservation des données comptables
• Réponse aux demandes des autorités
• Respect des réglementations sectorielles`,
    },
    {
      title: "4. Durées de conservation",
      icon: "📅",
      content: `Nous conservons vos données uniquement pendant la durée nécessaire :

Données de contact :
• Prospects : 3 ans après le dernier contact
• Clients : 5 ans après la fin de la relation contractuelle
• Données comptables : 10 ans (obligation légale)

Données techniques :
• Logs serveur : 12 mois (sécurité et maintenance)
• Aucun stockage local ou cookies
• Aucune donnée analytics externe

Newsletter et marketing :
• Jusqu'à désinscription ou 3 ans d'inactivité
• Suppression automatique après demande de désinscription

Projets et développements :
• Code source et spécifications : durée du contrat + 5 ans
• Correspondances : 3 ans après fin de projet`,
    },
    {
      title: "5. Partage et transfert des données",
      icon: "🔄",
      content: `Nous ne vendons jamais vos données personnelles. Elles peuvent être partagées avec :

Prestataires techniques (sous contrat de sous-traitance) :
• Hébergeur web (France/UE)
• Plateforme emailing (si newsletter souscrite)
• Outils de gestion client (CRM interne)
• Aucun service d'analytics tiers

Partenaires commerciaux (avec consentement) :
• Partenaires technologiques pour projets spécifiques
• Sous-traitants spécialisés en IA

Autorités légales (obligation légale) :
• Administrations fiscales
• Forces de l'ordre sur réquisition judiciaire
• Autorités de contrôle (CNIL)

Transferts internationaux :
Nos services sont hébergés en France/UE. Aucun transfert vers des pays tiers sans garanties RGPD appropriées.`,
    },
    {
      title: "6. Vos droits RGPD",
      icon: "🛡️",
      content: `Conformément au RGPD, vous disposez des droits suivants :

Droit d'accès (Article 15) :
• Obtenir une copie de vos données
• Connaître les finalités de traitement
• Durée de conservation prévue

Droit de rectification (Article 16) :
• Corriger des données inexactes
• Compléter des données incomplètes

Droit à l'effacement (Article 17) :
• Suppression de vos données ("droit à l'oubli")
• Sauf obligation légale de conservation

Droit à la limitation (Article 18) :
• Bloquer temporairement le traitement
• En cas de contestation ou d'opposition

Droit à la portabilité (Article 20) :
• Récupérer vos données dans un format structuré
• Transférer vos données vers un autre responsable

Droit d'opposition (Article 21) :
• S'opposer au traitement pour motif légitime
• Désinscription des communications marketing

Pour exercer vos droits : privacy@receptia.fr avec justificatif d'identité.`,
    },
    {
      title: "7. Cookies et stockage local",
      icon: "🍪",
      content: `Notre site web respecte votre vie privée et n'utilise aucun cookie de tracking ou d'analyse :

Aucun cookie déposé :
• Pas de cookies analytics (Google Analytics, etc.)
• Pas de cookies marketing ou publicitaires
• Pas de cookies de réseaux sociaux
• Pas de cookies de mesure d'audience
• Pas de tracking inter-sites

Aucun stockage local :
• Pas de préférences sauvegardées localement
• Pas de données temporaires stockées
• Navigation entièrement stateless

Technologies utilisées :
• Site web statique sans stockage de données
• Aucune technologie de persistance côté client
• Aucune transmission de données vers des tiers

Transparence totale :
Notre site fonctionne sans aucun système de tracking. Nous respectons votre navigation privée et ne collectons aucune donnée comportementale via des technologies de suivi.`,
    },
    {
      title: "8. Sécurité des données",
      icon: "🔒",
      content: `Nous mettons en œuvre des mesures de sécurité robustes :

Mesures techniques :
• Chiffrement HTTPS (SSL/TLS)
• Chiffrement des bases de données
• Pseudonymisation des données sensibles
• Sauvegardes chiffrées et régulières
• Pare-feu et systèmes anti-intrusion
• Authentification à deux facteurs

Mesures organisationnelles :
• Accès restreint aux données (principe du moindre privilège)
• Formation RGPD des équipes
• Procédures de gestion des incidents
• Audits de sécurité réguliers
• Contrats de confidentialité avec les prestataires

Gestion des violations :
En cas de violation de données, nous nous engageons à notifier la CNIL sous 72h et les personnes concernées si nécessaire, conformément au RGPD.`,
    },
    {
      title: "9. Données des solutions IA",
      icon: "🤖",
      content: `Traitement spécifique dans nos solutions d'intelligence artificielle :

Données d'entraînement :
• Utilisation de datasets anonymisés et légaux
• Pas d'utilisation de vos données personnelles pour l'entraînement
• Respect des droits d'auteur et licences

Chatbots et assistants IA :
• Conversations stockées temporairement (30 jours max)
• Anonymisation automatique des données sensibles
• Pas de profilage sans consentement explicite
• Droit d'opposition au traitement automatisé

Analytics IA :
• Données agrégées et anonymisées uniquement
• Pas d'identification individuelle possible
• Respect des secrets d'affaires clients
• Chiffrement end-to-end des données traitées

Transparence algorithmique :
• Explication du fonctionnement de nos IA sur demande
• Droit d'opposition aux décisions automatisées
• Intervention humaine possible dans tous les cas`,
    },
    {
      title: "10. Modifications et contact",
      icon: "📞",
      content: `Cette politique peut être mise à jour pour refléter :
• Évolutions réglementaires (RGPD, ePrivacy...)
• Nouveaux services proposés
• Améliorations de sécurité
• Retours d'expérience clients

Notification des modifications :
• Email aux utilisateurs inscrits
• Bannière sur le site web
• Archives des versions antérieures disponibles

Contact et réclamations :
Email : privacy@receptia.fr
Téléphone : +33 1 23 45 67 89
Adresse postale : 123 Avenue de la République, 75011 Paris

Droit de réclamation :
Vous pouvez introduire une réclamation auprès de la CNIL si vous estimez que vos droits ne sont pas respectés.

CNIL - Service des plaintes
3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07
Téléphone : 01 53 73 22 22`,
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-gray-600">
              Dernière mise à jour :{" "}
              {new Date().toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Protection de vos données</h3>
                  <p className="text-gray-600">
                    Chez Receptia, la protection de vos données personnelles est notre priorité. Cette
                    politique détaille comment nous collectons, utilisons et protégeons vos informations
                    conformément au RGPD.
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
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">{section.icon}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 flex-1 border-b border-gray-100 pb-3">
                      {section.title}
                    </h2>
                  </div>
                  <div className="prose max-w-none ml-14">
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
            <Card className="bg-gradient-to-r from-gray-50 to-green-50 border border-gray-200">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Questions sur la protection de vos données ?
                </h3>
                <p className="text-gray-600 mb-6">
                  Notre délégué à la protection des données est à votre écoute pour répondre à toutes vos
                  questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:privacy@receptia.fr"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Exercer mes droits RGPD
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-white text-gray-800 border-2 border-gray-200 font-semibold rounded-lg hover:border-green-300 hover:bg-green-50 hover:text-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    Nous contacter
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
