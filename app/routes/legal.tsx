import { Section } from "~/components/ui/Section";
import type { Route } from "./+types/legal";

export function meta(_: Route.MetaArgs) {
	return [
		{ title: "Mentions Légales - Receptia | Agence IA & Digital" },
		{
			name: "description",
			content:
				"Mentions légales de Receptia, agence spécialisée en solutions d'intelligence artificielle et digitalisation d'entreprise.",
		},
		{ name: "robots", content: "noindex, follow" },
	];
}

export default function Legal() {
	return (
		<Section className="pt-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto prose prose-gray">
					<h1>Mentions Légales</h1>

					<h2>Éditeur du site</h2>
					<p>
						<strong>Receptia</strong>
						<br />
						SARL au capital de 10 000 €
						<br />
						RCS Paris 123 456 789
						<br />
						SIRET : 123 456 789 00123
						<br />
						Code APE : 6201Z
					</p>

					<p>
						<strong>Siège social :</strong>
						<br />
						123 Avenue de la République
						<br />
						75011 Paris, France
					</p>

					<p>
						<strong>Contact :</strong>
						<br />
						Téléphone : +33 1 23 45 67 89
						<br />
						Email : contact@receptia.fr
					</p>

					<h2>Directeur de publication</h2>
					<p>Jean Dupont, Gérant</p>

					<h2>Hébergement</h2>
					<p>
						Ce site est hébergé par :
						<br />
						<strong>Vercel Inc.</strong>
						<br />
						340 S Lemon Ave #4133
						<br />
						Walnut, CA 91789, USA
					</p>

					<h2>Propriété intellectuelle</h2>
					<p>
						L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est
						protégé par le droit d'auteur et appartient à Receptia ou à ses
						partenaires. Toute reproduction, même partielle, est interdite sans
						autorisation préalable.
					</p>

					<h2>Responsabilité</h2>
					<p>
						Receptia s'efforce de fournir des informations exactes et à jour.
						Toutefois, nous ne pouvons garantir l'exactitude, la complétude ou
						l'actualité des informations présentes sur ce site.
					</p>

					<h2>Cookies</h2>
					<p>
						Ce site utilise des cookies pour améliorer l'expérience utilisateur
						et analyser le trafic. En continuant à naviguer, vous acceptez leur
						utilisation.
					</p>

					<h2>Liens externes</h2>
					<p>
						Notre site peut contenir des liens vers des sites externes. Nous ne
						sommes pas responsables du contenu de ces sites tiers.
					</p>
				</div>
			</div>
		</Section>
	);
}
