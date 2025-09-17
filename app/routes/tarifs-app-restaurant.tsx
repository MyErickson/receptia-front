import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Tarifs - Application Mobile Restaurant | Receptia" },
    { name: "description", content: "Découvrez nos tarifs pour le développement d'une application mobile complète de prise de commandes avec notifications plats du jour pour votre restaurant." },
  ];
};

export default function TarifsAppRestaurant() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto my-5 bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-10 text-center">
          <h1 className="text-3xl font-bold mb-2.5 tracking-tight text-white">
            TARIFS - Application Mobile Restaurant
          </h1>
          <div className="text-base opacity-90 font-normal">
            Solution complète de prise de commandes avec notifications plats du jour
          </div>
        </header>

        {/* Pricing Table */}
        <div className="p-0 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-5 text-left font-semibold text-slate-800 border-b-2 border-slate-300 w-[35%]">
                  Service / Fonctionnalité
                </th>
                <th className="px-4 py-5 text-left font-semibold text-slate-800 border-b-2 border-slate-300 w-[45%]">
                  Description
                </th>
                <th className="px-4 py-5 text-right font-semibold text-slate-800 border-b-2 border-slate-300 w-[20%]">
                  Prix (€)
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Development Section */}
              <tr className="bg-slate-300">
                <td colSpan={3} className="px-4 py-4 font-semibold text-slate-800 text-sm uppercase tracking-wide">
                  📱 DÉVELOPPEMENT APPLICATION MOBILE
                </td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 align-top">Application iOS</td>
                <td className="px-4 py-4 align-top">App native iOS avec interface moderne + Backend</td>
                <td className="px-4 py-4 align-top text-right font-medium">1 500</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 align-top">Application Android</td>
                <td className="px-4 py-4 align-top">App native Android avec interface moderne + API</td>
                <td className="px-4 py-4 align-top text-right font-medium">1 500</td>
              </tr>

              {/* Restaurant Presentation */}
              <tr className="bg-slate-300">
                <td colSpan={3} className="px-4 py-4 font-semibold text-slate-800 text-sm uppercase tracking-wide">
                  🏪 PRÉSENTATION RESTAURANT
                </td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 align-top">Écran d'accueil restaurant</td>
                <td className="px-4 py-4 align-top">Présentation entreprise + informations</td>
                <td className="px-4 py-4 align-top text-right font-medium">200</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 align-top">Affichage plat du jour</td>
                <td className="px-4 py-4 align-top">Section mise en avant plat du jour</td>
                <td className="px-4 py-4 align-top text-right font-medium">150</td>
              </tr>

              {/* Order System - Highlighted */}
              <tr className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900">
                <td colSpan={3} className="px-4 py-4 font-semibold text-sm uppercase tracking-wide">
                  🛒 SYSTÈME DE COMMANDE
                </td>
              </tr>
              <tr className="bg-blue-50 hover:bg-blue-100">
                <td className="px-4 py-4 align-top">Prise de commande client</td>
                <td className="px-4 py-4 align-top">Interface commande pour clients</td>
                <td className="px-4 py-4 align-top text-right font-medium">400</td>
              </tr>
              <tr className="bg-blue-50 hover:bg-blue-100">
                <td className="px-4 py-4 align-top">Prise de commande staff</td>
                <td className="px-4 py-4 align-top">Interface commande pour personnel</td>
                <td className="px-4 py-4 align-top text-right font-medium">300</td>
              </tr>
              <tr className="bg-blue-50 hover:bg-blue-100">
                <td className="px-4 py-4 align-top">Suivi état commande</td>
                <td className="px-4 py-4 align-top">Statuts : passée, préparation, terminée</td>
                <td className="px-4 py-4 align-top text-right font-medium">250</td>
              </tr>

              {/* Order Management */}
              <tr className="bg-slate-300">
                <td colSpan={3} className="px-4 py-4 font-semibold text-slate-800 text-sm uppercase tracking-wide">
                  📋 GESTION DES COMMANDES
                </td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 align-top">Historique commandes client</td>
                <td className="px-4 py-4 align-top">Consultation commandes passées</td>
                <td className="px-4 py-4 align-top text-right font-medium">150</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 align-top">Écran restaurant commandes</td>
                <td className="px-4 py-4 align-top">Vue globale commandes reçues</td>
                <td className="px-4 py-4 align-top text-right font-medium">300</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 align-top">Notifications commandes</td>
                <td className="px-4 py-4 align-top">Alertes nouvelles commandes restaurant</td>
                <td className="px-4 py-4 align-top text-right font-medium">200</td>
              </tr>

              {/* Notifications System */}
              <tr className="bg-slate-300">
                <td colSpan={3} className="px-4 py-4 font-semibold text-slate-800 text-sm uppercase tracking-wide">
                  🔔 SYSTÈME DE NOTIFICATIONS
                </td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 align-top">Notifications plats du jour</td>
                <td className="px-4 py-4 align-top">Push notifications clients nouveaux plats</td>
                <td className="px-4 py-4 align-top text-right font-medium">400</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 align-top">Notifications état commande</td>
                <td className="px-4 py-4 align-top">Alertes changement statut commande</td>
                <td className="px-4 py-4 align-top text-right font-medium">300</td>
              </tr>

              {/* Authentication & Profiles */}
              <tr className="bg-slate-300">
                <td colSpan={3} className="px-4 py-4 font-semibold text-slate-800 text-sm uppercase tracking-wide">
                  👥 AUTHENTIFICATION & PROFILS
                </td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 align-top">Système d'authentification</td>
                <td className="px-4 py-4 align-top">Connexion/inscription clients</td>
                <td className="px-4 py-4 align-top text-right font-medium">200</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 align-top">Profils clients</td>
                <td className="px-4 py-4 align-top">Gestion comptes utilisateurs</td>
                <td className="px-4 py-4 align-top text-right font-medium">150</td>
              </tr>

              {/* Administration Panel */}
              <tr className="bg-slate-300">
                <td colSpan={3} className="px-4 py-4 font-semibold text-slate-800 text-sm uppercase tracking-wide">
                  ⚙️ PANNEAU ADMINISTRATION
                </td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 align-top">Gestion menu & plats</td>
                <td className="px-4 py-4 align-top">Ajout/modification/suppression plats</td>
                <td className="px-4 py-4 align-top text-right font-medium">350</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 align-top">Gestion plats du jour</td>
                <td className="px-4 py-4 align-top">Configuration plats du jour quotidiens</td>
                <td className="px-4 py-4 align-top text-right font-medium">200</td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 align-top">Statistiques restaurant</td>
                <td className="px-4 py-4 align-top">Rapports commandes et analyses</td>
                <td className="px-4 py-4 align-top text-right font-medium">250</td>
              </tr>

              {/* Deployment */}
              <tr className="bg-slate-300">
                <td colSpan={3} className="px-4 py-4 font-semibold text-slate-800 text-sm uppercase tracking-wide">
                  🚀 DÉPLOIEMENT & SUPPORT
                </td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-4 align-top">Publication stores</td>
                <td className="px-4 py-4 align-top">App Store + Google Play</td>
                <td className="px-4 py-4 align-top text-right font-medium">200</td>
              </tr>

              {/* Totals */}
              <tr className="bg-slate-100 font-semibold">
                <td colSpan={2} className="px-4 py-4">
                  <strong>SOUS-TOTAL</strong>
                </td>
                <td className="px-4 py-4 text-right">
                  <strong>6 050</strong>
                </td>
              </tr>
              <tr className="bg-green-100 text-green-800 font-semibold">
                <td colSpan={2} className="px-4 py-4">
                  <strong>REMISE PACKAGE COMPLET (-50%)</strong>
                </td>
                <td className="px-4 py-4 text-right">
                  <strong>-3 050</strong>
                </td>
              </tr>
              <tr className="bg-blue-600 text-white font-bold text-lg">
                <td colSpan={2} className="px-4 py-5">
                  <strong>TOTAL HT</strong>
                </td>
                <td className="px-4 py-5 text-right">
                  <strong>3 000</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Financing Section */}
        <div className="px-8 py-10 bg-slate-50">
          <div className="bg-white rounded-xl p-8 border-2 border-green-500 shadow-lg shadow-green-500/10">
            <h3 className="text-green-800 mb-6 text-xl text-center font-semibold">
              💡 FINANCEMENT AVEC AIDE KAP NUMÉRIK
            </h3>

            <div className="mb-6">
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span>Prix total de la solution</span>
                <span className="font-semibold text-lg">3 000 €</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-100 text-green-600 font-medium">
                <span>Aide Kap Numérik (Île de La Réunion)</span>
                <span className="font-semibold text-lg">- 2 000 €</span>
              </div>
              <div className="flex justify-between items-center py-4 bg-green-50 -mx-4 px-4 mt-5 rounded-lg border-2 border-green-500">
                <span className="font-bold">RESTE À VOTRE CHARGE</span>
                <span className="font-bold text-green-600 text-xl">1 000 €</span>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800">
              <p>
                <strong>Kap Numérik</strong> est une aide départementale de l'Île de La Réunion qui finance
                jusqu'à 80% des projets de digitalisation des entreprises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}