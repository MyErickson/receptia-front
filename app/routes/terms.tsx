import { Section } from "~/components/ui/Section";
import type { Route } from "./+types/terms";

export function meta(_: Route.MetaArgs) {
	return [
		{ title: "CGV - Conditions Générales de Vente - Receptia" },
		{ name: "robots", content: "noindex, follow" },
	];
}

export default function Terms() {
	return (
		<Section className="pt-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto prose prose-gray">
					<h1>Conditions Générales de Vente</h1>
					<p>
						<em>Version en vigueur au 11 août 2025</em>
					</p>

					<h2>1. Objet</h2>
					<p>
						Les présentes conditions générales de vente s'appliquent à tous les
						services proposés par Receptia : création de sites web, applications
						mobiles, maintenance et conseil.
					</p>

					<h2>2. Services proposés</h2>
					<h3>2.1 Site vitrine (800€)</h3>
					<ul>
						<li>Design responsive sur mesure</li>
						<li>Nombre de pages illimité</li>
						<li>Optimisation SEO de base</li>
						<li>Formation à la gestion</li>
						<li>Hébergement première année inclus</li>
						<li>Support 30 jours</li>
					</ul>

					<h3>2.2 Développement sur mesure</h3>
					<p>
						Applications web, mobiles et solutions métier : devis personnalisé
						après étude des besoins.
					</p>

					<h2>3. Processus de commande</h2>
					<ol>
						<li>Prise de contact et analyse des besoins</li>
						<li>Devis détaillé et validation</li>
						<li>Acompte de 50% pour démarrer le projet</li>
						<li>Développement selon planning convenu</li>
						<li>Recette et ajustements</li>
						<li>Livraison et formation</li>
						<li>Solde de 50% à la livraison</li>
					</ol>

					<h2>4. Délais</h2>
					<ul>
						<li>Site vitrine : 5 à 10 jours ouvrés</li>
						<li>Projets sur mesure : selon complexité et devis</li>
						<li>
							Les délais courent à partir de la réception de l'acompte et de
							tous les éléments nécessaires
						</li>
					</ul>

					<h2>5. Tarifs et paiement</h2>
					<ul>
						<li>Tarifs TTC, TVA 20% incluse</li>
						<li>50% à la commande, 50% à la livraison</li>
						<li>Paiement par virement, carte bancaire ou PayPal</li>
						<li>Retard de paiement : pénalités de 3 fois le taux légal</li>
					</ul>

					<h2>6. Propriété intellectuelle</h2>
					<ul>
						<li>
							Le code source vous appartient intégralement après paiement
							complet
						</li>
						<li>
							Vous devez disposer des droits sur tous les contenus fournis
						</li>
						<li>
							Receptia conserve le droit d'utiliser le projet en référence
						</li>
					</ul>

					<h2>7. Garanties et responsabilité</h2>
					<ul>
						<li>Garantie de bon fonctionnement : 30 jours après livraison</li>
						<li>Correction gratuite des défauts de conformité</li>
						<li>
							Responsabilité limitée au montant du contrat, hors dommage
							intentionnel
						</li>
					</ul>

					<h2>8. Résiliation</h2>
					<p>
						En cas de résiliation par le client, les sommes versées restent
						acquises proportionnellement aux travaux réalisés.
					</p>

					<h2>9. Force majeure</h2>
					<p>
						Receptia ne peut être tenu responsable de l'inexécution de ses
						obligations en cas de force majeure (pandémie, catastrophe
						naturelle, etc.).
					</p>

					<h2>10. Litiges</h2>
					<p>
						En cas de litige, une solution amiable sera recherchée. À défaut,
						les tribunaux de Paris sont compétents.
					</p>

					<h2>Contact</h2>
					<p>
						Pour toute question :
						<br />
						Email : <a href="mailto:contact@receptia.fr">contact@receptia.fr</a>
						<br />
						Téléphone : +33 1 23 45 67 89
					</p>
				</div>
			</div>
		</Section>
	);
}
