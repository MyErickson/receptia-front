import { Section } from "~/components/ui/Section";
import type { Route } from "./+types/privacy";

export function meta(_: Route.MetaArgs) {
	return [
		{ title: "Politique de Confidentialité - Receptia" },
		{ name: "robots", content: "noindex, follow" },
	];
}

export default function Privacy() {
	return (
		<Section className="pt-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto prose prose-gray">
					<h1>Politique de Confidentialité</h1>
					<p>
						<em>Dernière mise à jour : 11 août 2025</em>
					</p>

					<h2>Collecte des données</h2>
					<p>Nous collectons les informations suivantes :</p>
					<ul>
						<li>
							<strong>Données de contact :</strong> nom, email, téléphone via
							nos formulaires
						</li>
						<li>
							<strong>Données de navigation :</strong> pages visitées, durée de
							visite (via Google Analytics)
						</li>
						<li>
							<strong>Cookies techniques :</strong> préférences de langue,
							session utilisateur
						</li>
					</ul>

					<h2>Utilisation des données</h2>
					<p>Vos données sont utilisées pour :</p>
					<ul>
						<li>Répondre à vos demandes de contact</li>
						<li>Améliorer notre site et nos services</li>
						<li>Envoyer notre newsletter (avec votre consentement)</li>
						<li>Respecter nos obligations légales</li>
					</ul>

					<h2>Partage des données</h2>
					<p>
						Nous ne vendons ni ne louons vos données. Elles peuvent être
						partagées avec :
					</p>
					<ul>
						<li>Nos prestataires techniques (hébergement, analytics)</li>
						<li>Les autorités si requis par la loi</li>
					</ul>

					<h2>Conservation des données</h2>
					<ul>
						<li>Données de contact : 3 ans après le dernier contact</li>
						<li>Données de navigation : 26 mois (Google Analytics)</li>
						<li>Newsletter : jusqu'à désinscription</li>
					</ul>

					<h2>Vos droits</h2>
					<p>Conformément au RGPD, vous disposez des droits suivants :</p>
					<ul>
						<li>Droit d'accès à vos données</li>
						<li>Droit de rectification</li>
						<li>Droit à l'effacement</li>
						<li>Droit à la portabilité</li>
						<li>Droit d'opposition au traitement</li>
					</ul>

					<p>
						Pour exercer vos droits, contactez-nous à :{" "}
						<a href="mailto:privacy@receptia.fr">privacy@receptia.fr</a>
					</p>

					<h2>Cookies</h2>
					<p>Notre site utilise :</p>
					<ul>
						<li>
							<strong>Cookies essentiels :</strong> fonctionnement du site
						</li>
						<li>
							<strong>Cookies analytiques :</strong> Google Analytics
							(anonymisé)
						</li>
						<li>
							<strong>Cookies de préférence :</strong> langue, consentement
						</li>
					</ul>

					<p>
						Vous pouvez gérer vos préférences cookies via les paramètres de
						votre navigateur.
					</p>

					<h2>Sécurité</h2>
					<p>
						Nous mettons en place des mesures techniques et organisationnelles
						pour protéger vos données : chiffrement HTTPS, accès restreint,
						sauvegardes sécurisées.
					</p>

					<h2>Contact</h2>
					<p>
						Pour toute question sur cette politique :
						<br />
						Email : <a href="mailto:privacy@receptia.fr">privacy@receptia.fr</a>
						<br />
						Adresse : 123 Avenue de la République, 75011 Paris
					</p>
				</div>
			</div>
		</Section>
	);
}
