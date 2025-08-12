import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { PricingCard } from "~/components/ui/Card";
import { Section, SectionHeader } from "~/components/ui/Section";
import { generateMeta } from "~/utils/seo";
import type { Route } from "./+types/pricing";

export function meta(_: Route.MetaArgs) {
	return generateMeta({
		title: "Tarifs - Receptia | Site Vitrine 800€ Tout Compris",
		description:
			"Découvrez nos tarifs transparents. Site vitrine professionnel à 800€ tout compris. Applications web et mobile sur devis. Sans surprise, sans frais cachés.",
		keywords: [
			"tarifs web",
			"prix site internet",
			"site vitrine 800€",
			"devis gratuit",
		],
	});
}

export default function Pricing() {
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<Section className="pt-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader
					title={t("pricing.title")}
					subtitle={t("pricing.subtitle")}
				/>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					<PricingCard
						title={t("pricing.showcase.title")}
						price={t("pricing.showcase.price")}
						period={t("pricing.showcase.period")}
						features={[
							"Pages illimitées",
							"Design sur mesure",
							"100% responsive",
							"SEO de base",
							"Formation incluse",
							"Hébergement 1 an offert",
							"Support 30 jours",
						]}
						cta={t("pricing.showcase.cta")}
						ctaAction={() => navigate("/contact")}
						popular={true}
					/>

					<PricingCard
						title={t("pricing.custom.title")}
						price={t("pricing.custom.price")}
						description={t("pricing.custom.subtitle")}
						features={[
							"Analyse des besoins",
							"Architecture sur mesure",
							"Technologies avancées",
							"Tests complets",
							"Formation équipe",
							"Support étendu",
							"Évolutions incluses",
						]}
						cta={t("pricing.custom.cta")}
						ctaAction={() => navigate("/contact")}
					/>
				</div>
			</div>
		</Section>
	);
}
