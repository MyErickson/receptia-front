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

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
						{filteredProjects.map((project, index) => (
							<motion.div
								key={project.id}
								layout
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="group cursor-pointer flex flex-col h-full"
							>
								<div className="relative mb-6">
									<div className="relative overflow-hidden shadow-xl">
										<img
											src={project.image}
											alt={project.title}
											className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										{project.results && (
											<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
												<p className="text-white font-bold text-lg">
													📈 {project.results}
												</p>
											</div>
										)}
									</div>
									{/* Effet 3D du bas */}
									<div 
										className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-b from-gray-400/80 to-gray-500/60" 
										style={{
											transform: "perspective(100px) rotateX(45deg)",
											transformOrigin: "top",
											zIndex: -1
										}}
									></div>
									<div 
										className="absolute -bottom-2 left-1 right-1 h-2 bg-gray-300/40 blur-sm"
										style={{ zIndex: -2 }}
									></div>
								</div>
								
								<div className="space-y-4 flex-grow flex flex-col">
									<div>
										<h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
											{project.title}
										</h3>
										<p className="text-gray-600 leading-relaxed">
											{project.description}
										</p>
									</div>

									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm border border-gray-200"
											>
												{tag}
											</span>
										))}
									</div>

									{project.testimonial && (
										<div className="relative flex-grow">
											<div className="absolute -left-2 -top-2 text-4xl text-blue-200">"</div>
											<p className="text-gray-600 italic pl-4">
												{project.testimonial}
											</p>
										</div>
									)}

									<div className="pt-4 mt-auto">
										<a 
											href={`/portfolio/${project.id}`}
											className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
										>
											<span>{t("portfolio.cta")}</span>
											<svg 
												className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
												fill="none" 
												stroke="currentColor" 
												viewBox="0 0 24 24"
											>
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
											</svg>
										</a>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</Section>

			<Section background="gray">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
							Vous avez un projet similaire ?
						</h2>
						<p className="text-xl text-gray-600 mb-8">
							Discutons de vos besoins et créons ensemble votre solution IA sur mesure.
						</p>
						<Button size="lg" to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 border-0">
							{t("portfolio.similar")}
						</Button>
					</div>
				</div>
			</Section>
		</>
	);
}
