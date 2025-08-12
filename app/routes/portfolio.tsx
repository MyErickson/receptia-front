import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import { Section, SectionHeader } from "~/components/ui/Section";
import { generateMeta } from "~/utils/seo";
import type { Route } from "./+types/portfolio";

export function meta(_: Route.MetaArgs) {
	return generateMeta({
		title: "Portfolio IA - Receptia | Réalisations Intelligence Artificielle",
		description:
			"Découvrez nos réalisations IA : chatbots intelligents, solutions d'automatisation, applications IA. Projets concrets avec ROI mesurable.",
	});
}

export default function Portfolio() {
	const { t } = useTranslation();
	const [filter, setFilter] = useState("all");

	const projects = [
		{
			id: 1,
			title: "TechBot - Assistant IA Client",
			category: "ai_assistant",
			image: "/api/placeholder/600/400",
			description: "Chatbot intelligent pour service client automatique",
			tags: ["OpenAI", "NLP", "React"],
			results: "80% de demandes résolues automatiquement",
			testimonial: "Notre chatbot IA a révolutionné notre service client !",
		},
		{
			id: 2,
			title: "AutoFlow - Automatisation IA",
			category: "ai_automation",
			image: "/api/placeholder/600/400",
			description: "Automatisation intelligente des processus métier",
			tags: ["Python", "Machine Learning", "API"],
			results: "15h économisées par semaine",
		},
		{
			id: 3,
			title: "DataInsight - Analyse Prédictive",
			category: "ai_analysis",
			image: "/api/placeholder/600/400",
			description: "Plateforme d'analyse de données avec IA",
			tags: ["TensorFlow", "Python", "Dashboard"],
			results: "+40% de précision des prédictions",
		},
		{
			id: 4,
			title: "SmartVision - App IA Mobile",
			category: "ai_apps",
			image: "/api/placeholder/600/400",
			description: "Application mobile avec reconnaissance d'images",
			tags: ["React Native", "Computer Vision", "AI"],
			results: "95% de précision reconnaissance",
		},
		{
			id: 5,
			title: "EcoTech - Site Vitrine IA",
			category: "showcase",
			image: "/api/placeholder/600/400",
			description: "Site vitrine avec recommandations IA intégrées",
			tags: ["Next.js", "AI Recommendations", "SEO"],
			results: "+200% d'engagement visiteurs",
		},
		{
			id: 6,
			title: "CRM-AI - Intégration Intelligente",
			category: "ai_integration",
			image: "/api/placeholder/600/400",
			description: "Intégration IA dans CRM existant",
			tags: ["API Integration", "ML", "CRM"],
			results: "60% d'amélioration du scoring leads",
		},
	];

	const filteredProjects =
		filter === "all" ? projects : projects.filter((p) => p.category === filter);

	return (
		<>
			<Section className="pt-32">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						title={t("portfolio.title")}
						subtitle={t("portfolio.subtitle")}
					/>

					<div className="flex justify-center mb-12">
						<div className="inline-flex rounded-xl bg-gray-100 p-1">
							{[
								"all",
								"ai_assistant",
								"ai_automation",
								"ai_analysis",
								"ai_apps",
								"showcase",
								"ai_integration",
							].map((cat) => (
								<button
									key={cat}
									type="button"
									onClick={() => setFilter(cat)}
									className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
										filter === cat
											? "bg-white text-indigo-500 shadow-md"
											: "text-gray-600 hover:text-gray-900"
									}`}
								>
									{t(`portfolio.filters.${cat}`)}
								</button>
							))}
						</div>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								layout
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
							>
								<Card className="overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-48 object-cover -mt-6 -mx-6 md:-mx-8 mb-6"
									/>
									<h3 className="text-xl font-bold mb-2">{project.title}</h3>
									<p className="text-gray-600 mb-4">{project.description}</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
											>
												{tag}
											</span>
										))}
									</div>
									{project.results && (
										<p className="text-indigo-500 font-semibold mb-4">
											📈 {project.results}
										</p>
									)}
									{project.testimonial && (
										<p className="text-gray-600 italic mb-4">
											"{project.testimonial}"
										</p>
									)}
									<Button to={`/portfolio/${project.id}`} fullWidth>
										{t("portfolio.cta")}
									</Button>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</Section>

			<Section background="gray">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-4">
							Vous avez un projet similaire ?
						</h2>
						<p className="text-xl text-gray-600 mb-8">
							Discutons de vos besoins et créons ensemble votre solution sur
							mesure.
						</p>
						<Button size="lg" to="/contact">
							{t("portfolio.similar")}
						</Button>
					</div>
				</div>
			</Section>
		</>
	);
}
