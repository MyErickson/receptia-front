import { useTranslation } from "react-i18next";
import { ScrollFloat } from "~/components/animations/Background";
import { Card } from "~/components/ui/Card";
import { Section, SectionHeader } from "~/components/ui/Section";
import { generateMeta } from "~/utils/seo";
import type { Route } from "./+types/about";

export function meta(_: Route.MetaArgs) {
	return generateMeta({
		title: "À Propos - Receptia | Agence IA & Digital Experte",
		description:
			"Découvrez Receptia, votre agence spécialisée en intelligence artificielle. Notre mission : transformer votre entreprise avec des solutions IA innovantes et accessibles.",
		keywords: [
			"agence IA",
			"intelligence artificielle",
			"équipe experts IA",
			"chatbots",
			"automatisation",
			"solutions digitales",
		],
	});
}

export default function About() {
	const { t } = useTranslation();

	const values = [
		{
			icon: "🔍",
			title: t("about.values.transparency.title"),
			desc: t("about.values.transparency.desc"),
		},
		{
			icon: "⭐",
			title: t("about.values.quality.title"),
			desc: t("about.values.quality.desc"),
		},
		{
			icon: "⚡",
			title: t("about.values.speed.title"),
			desc: t("about.values.speed.desc"),
		},
		{
			icon: "🤝",
			title: t("about.values.support.title"),
			desc: t("about.values.support.desc"),
		},
	];


	return (
		<>
			<Section className="pt-32">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader title={t("about.title")} />

					<div className="max-w-4xl mx-auto">
						<Card className="text-center">
							<h3 className="text-2xl font-bold mb-4">
								{t("about.mission.title")}
							</h3>
							<p className="text-xl text-gray-600 leading-relaxed">
								{t("about.mission.content")}
							</p>
						</Card>
					</div>
				</div>
			</Section>

			<Section background="gray">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader title={t("about.values.title")} />

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{values.map((value, index) => (
							<ScrollFloat key={index} offset={30}>
								<Card delay={index * 0.1} className="text-center">
									<div className="text-4xl mb-4">{value.icon}</div>
									<h3 className="text-xl font-semibold mb-3">{value.title}</h3>
									<p className="text-gray-600">{value.desc}</p>
								</Card>
							</ScrollFloat>
						))}
					</div>
				</div>
			</Section>

			<Section>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold mb-6">
								{t("about.team.title")}
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								{t("about.team.subtitle")}
							</p>
							<div className="grid grid-cols-2 gap-8">
								<div className="text-center">
									<div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
										JD
									</div>
									<h4 className="font-semibold">Jean Dupont</h4>
									<p className="text-gray-600 text-sm">CEO & Développeur</p>
								</div>
								<div className="text-center">
									<div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
										ML
									</div>
									<h4 className="font-semibold">Marie Lemoine</h4>
									<p className="text-gray-600 text-sm">Designer UX/UI</p>
								</div>
							</div>
						</div>
						<div>
							<img
								src="/api/placeholder/600/400"
								alt="Équipe Receptia"
								className="rounded-2xl shadow-xl"
							/>
						</div>
					</div>
				</div>
			</Section>
		</>
	);
}
