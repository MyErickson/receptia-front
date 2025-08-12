import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ScrollFloat } from "~/components/animations/Background";
import { CountUp } from "~/components/animations/TextAnimation";
import AnimatedHeroTitle from "~/components/ui/AnimatedHeroTitle";
import { Button } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import LazyHeroAnimation3D from "~/components/ui/LazyHeroAnimation3D";
import { Section, SectionHeader } from "~/components/ui/Section";
import { generateMeta, organizationSchema, websiteSchema } from "~/utils/seo";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
	return generateMeta({
		title:
			"Receptia - Agence IA & Digital | Automatisation & Intelligence Artificielle",
		description:
			"Agence spécialisée en intelligence artificielle et automatisation. Solutions IA sur mesure, chatbots intelligents, automatisation des processus. Transformez votre entreprise.",
		keywords: [
			"intelligence artificielle",
			"automatisation IA",
			"chatbots intelligents",
			"solutions IA",
			"digitalisation entreprise",
			"agence IA",
			"développement IA",
		],
	});
}

export const handle = {
	scripts: () => [
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify(organizationSchema),
		},
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify(websiteSchema),
		},
	],
};

export default function Home() {
	const { t } = useTranslation();

	const services = [
		{
			id: "ai_assistant",
			icon: "🤖",
			title: t("services.items.ai_assistant.title"),
			desc: t("services.items.ai_assistant.desc"),
			price: t("services.items.ai_assistant.price"),
		},
		{
			id: "ai_automation",
			icon: "⚡",
			title: t("services.items.ai_automation.title"),
			desc: t("services.items.ai_automation.desc"),
			price: t("services.items.ai_automation.price"),
		},
		{
			id: "ai_analysis",
			icon: "📊",
			title: t("services.items.ai_analysis.title"),
			desc: t("services.items.ai_analysis.desc"),
			price: t("services.items.ai_analysis.price"),
		},
		{
			id: "ai_apps",
			icon: "📱",
			title: t("services.items.ai_apps.title"),
			desc: t("services.items.ai_apps.desc"),
			price: t("services.items.ai_apps.price"),
		},
		{
			id: "showcase",
			icon: "🌐",
			title: t("services.items.showcase.title"),
			desc: t("services.items.showcase.desc"),
			price: t("services.items.showcase.price"),
		},
		{
			id: "ai_integration",
			icon: "🔗",
			title: t("services.items.ai_integration.title"),
			desc: t("services.items.ai_integration.desc"),
			price: t("services.items.ai_integration.price"),
		},
	];

	const processSteps = [
		{
			id: "discovery",
			icon: "🔍",
			title: t("process.steps.discovery.title"),
			desc: t("process.steps.discovery.desc"),
		},
		{
			id: "framing",
			icon: "📋",
			title: t("process.steps.framing.title"),
			desc: t("process.steps.framing.desc"),
		},
		{
			id: "design",
			icon: "🎨",
			title: t("process.steps.design.title"),
			desc: t("process.steps.design.desc"),
		},
		{
			id: "development",
			icon: "⚡",
			title: t("process.steps.development.title"),
			desc: t("process.steps.development.desc"),
		},
		{
			id: "review",
			icon: "✅",
			title: t("process.steps.review.title"),
			desc: t("process.steps.review.desc"),
		},
		{
			id: "launch",
			icon: "🚀",
			title: t("process.steps.launch.title"),
			desc: t("process.steps.launch.desc"),
		},
	];

	const testimonials = [
		{
			name: "Marie Dubois",
			role: "CEO, TechStart",
			content:
				"Notre chatbot IA a révolutionné notre service client. 80% de demandes traitées automatiquement !",
			rating: 5,
		},
		{
			name: "Pierre Martin",
			role: "Fondateur, EcoShop",
			content:
				"L'automatisation de nos processus nous fait gagner 15h par semaine. ROI incroyable.",
			rating: 5,
		},
		{
			name: "Sophie Laurent",
			role: "Directrice, Wellness Center",
			content:
				"L'analyse IA de nos données nous aide à mieux comprendre nos clients. Résultats impressionnants.",
			rating: 5,
		},
	];

	const faqs = [
		{
			question: t("faq.items.ai_benefits.q"),
			answer: t("faq.items.ai_benefits.a"),
		},
		{
			question: t("faq.items.ai_implementation.q"),
			answer: t("faq.items.ai_implementation.a"),
		},
		{
			question: t("faq.items.ai_cost.q"),
			answer: t("faq.items.ai_cost.a"),
		},
		{
			question: t("faq.items.ai_integration.q"),
			answer: t("faq.items.ai_integration.a"),
		},
	];

	return (
		<>
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
				{/* Light Background */}
				<div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-indigo-100"></div>
				<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-200/20 to-purple-200/30"></div>
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(245,158,11,0.08)_0%,transparent_60%)]"></div>
				{/* Transition gradient to white at bottom */}
				<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

				{/* 3D Animation Layer */}
				<LazyHeroAnimation3D className="absolute inset-0 -z-10" />
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
					<div className="max-w-4xl mx-auto text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<AnimatedHeroTitle className="hero-title mb-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black bg-clip-text text-transparent font-bold drop-shadow-sm">
								{t("hero.headline")}
							</AnimatedHeroTitle>
							<p className="hero-subtitle text-gray-900 mb-6 font-semibold drop-shadow-sm">
								{t("hero.subtitle")}
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="flex flex-col sm:flex-row gap-4 justify-center mb-12 relative z-20"
						>
							<Button size="lg" to="/contact">
								{t("hero.cta.primary")}
							</Button>
							<Button size="lg" variant="secondary" to="/contact">
								{t("hero.cta.secondary")}
							</Button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 text-gray-800"
						>
							<div className="flex items-center rating-text bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md border border-gray-200">
								<span className="text-yellow-500 mr-2 text-2xl drop-shadow-sm">
									⭐
								</span>
								<span className="font-bold text-gray-900">4.9/5</span>
							</div>
							<div className="stats-text bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md border border-gray-200">
								<CountUp
									end={120}
									suffix="+"
									className="font-bold text-blue-700"
								/>{" "}
								<span className="text-gray-800 font-semibold">
									projets livrés
								</span>
							</div>
							<div className="stats-text bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md border border-gray-200">
								<CountUp end={5} className="font-bold text-blue-700" />{" "}
								<span className="text-gray-800 font-semibold">
									jours en moyenne
								</span>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Solutions IA principales */}
			<Section background="gray" id="offer">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						title={t("offer.title")}
						subtitle={t("offer.subtitle")}
					/>

					<div className="max-w-5xl mx-auto">
						{/* Cartes solutions IA */}
						<div className="grid md:grid-cols-2 gap-8 mb-12">
							<Card className="relative overflow-hidden border-2 border-purple-100 shadow-xl shadow-purple-500/10">
								<div className="absolute top-0 right-0 bg-gradient-to-br from-purple-500 to-blue-600 text-white px-4 py-1 rounded-bl-xl text-sm font-semibold">
									IA
								</div>
								<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
									Automatisation Intelligente
								</h3>
								<ul className="space-y-3 mb-6">
									<li className="flex items-start">
										<span className="text-purple-500 mr-2">✓</span>
										<span>Chatbots & assistants virtuels</span>
									</li>
									<li className="flex items-start">
										<span className="text-purple-500 mr-2">✓</span>
										<span>Automatisation des tâches répétitives</span>
									</li>
									<li className="flex items-start">
										<span className="text-purple-500 mr-2">✓</span>
										<span>Traitement intelligent de documents</span>
									</li>
									<li className="flex items-start">
										<span className="text-purple-500 mr-2">✓</span>
										<span>Service client 24/7</span>
									</li>
								</ul>
								<Button to="/contact" className="w-full">
									Découvrir l'automatisation IA
								</Button>
							</Card>

							<Card className="relative overflow-hidden border-2 border-blue-100 shadow-xl shadow-blue-500/10">
								<div className="absolute top-0 right-0 bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-4 py-1 rounded-bl-xl text-sm font-semibold">
									IA
								</div>
								<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
									Applications IA Sur Mesure
								</h3>
								<ul className="space-y-3 mb-6">
									<li className="flex items-start">
										<span className="text-blue-500 mr-2">✓</span>
										<span>Apps mobiles intelligentes</span>
									</li>
									<li className="flex items-start">
										<span className="text-blue-500 mr-2">✓</span>
										<span>Analyse prédictive de données</span>
									</li>
									<li className="flex items-start">
										<span className="text-blue-500 mr-2">✓</span>
										<span>Vision par ordinateur</span>
									</li>
									<li className="flex items-start">
										<span className="text-blue-500 mr-2">✓</span>
										<span>Intégration CRM avec IA</span>
									</li>
								</ul>
								<Button to="/contact" className="w-full">
									Créer votre app IA
								</Button>
							</Card>
						</div>

						{/* Offre site vitrine en secondaire */}
						<Card className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200">
							<div className="text-center">
								<h3 className="text-xl font-semibold mb-2 text-gray-700">
									Solution Web Classique
								</h3>
								<div className="flex items-center justify-center space-x-4 mb-4">
									<span className="text-3xl font-bold text-blue-600">800€</span>
									<span className="text-gray-600">
										• Site vitrine complet • Pages illimitées
									</span>
								</div>
								<Button size="sm" to="/contact" variant="secondary">
									En savoir plus
								</Button>
							</div>
						</Card>
					</div>
				</div>
			</Section>

			{/* Process */}
			<Section id="process">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						title={t("process.title")}
						subtitle={t("process.subtitle")}
					/>

					<div className="relative">
						{/* Timeline connector for desktop */}
						<div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 opacity-30"></div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{processSteps.map((step, index) => (
								<ScrollFloat key={step.id} offset={30 + index * 10}>
									<Card
										hover={true}
										delay={index * 0.1}
										className="relative group"
									>
										{/* Step number badge */}
										<div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-20 shadow-lg">
											{index + 1}
										</div>

										<div className="pt-4">
											<div className="text-4xl mb-4 relative z-10">
												{step.icon}
											</div>
											<h3 className="text-xl font-semibold mb-2 text-gray-800">
												{step.title}
											</h3>
											<p className="text-gray-600 mb-3">{step.desc}</p>

											{/* Duration badge */}
											<div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
												<svg
													className="w-3 h-3 mr-1"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
												{index === 0 && "1-2 jours"}
												{index === 1 && "1 jour"}
												{index === 2 && "2-3 jours"}
												{index === 3 && "2-4 jours"}
												{index === 4 && "1 jour"}
												{index === 5 && "1 jour"}
											</div>
										</div>
									</Card>
								</ScrollFloat>
							))}
						</div>

						{/* Flow arrows for mobile/tablet */}
						<div className="lg:hidden flex justify-center mt-8 mb-4">
							<div className="flex items-center space-x-2 text-blue-500">
								<span className="text-sm font-medium">Suivez le processus</span>
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 7l5 5m0 0l-5 5m5-5H6"
									/>
								</svg>
							</div>
						</div>
					</div>

					<div className="mt-12 text-center">
						<div className="flex justify-center space-x-8 lg:space-x-12 text-lg">
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl blur-lg"></div>
								<div className="relative bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-blue-100">
									<CountUp
										end={120}
										suffix="+"
										className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
									/>
									<p className="text-gray-600 font-medium">sites livrés</p>
								</div>
							</div>
							<div className="relative">
								<div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-xl blur-lg"></div>
								<div className="relative bg-white/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-orange-100">
									<CountUp
										end={5}
										className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
									/>
									<p className="text-gray-600 font-medium">jours en moyenne</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Section>

			{/* Services */}
			<Section background="gray" id="services">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						title={t("services.title")}
						subtitle={t("services.subtitle")}
					/>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{services.map((service, index) => (
							<ScrollFloat key={service.id} offset={20}>
								<Card delay={index * 0.1} className="relative group">
									<div className="text-3xl mb-4 relative z-10 p-2 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 w-fit">
										{service.icon}
									</div>
									<h3 className="text-xl font-semibold mb-2 text-gray-800">
										{service.title}
									</h3>
									<p className="text-gray-600 mb-4">{service.desc}</p>
									<div className="flex items-center justify-between">
										<p className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
											{service.price}
										</p>
										<div className="w-8 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"></div>
									</div>
								</Card>
							</ScrollFloat>
						))}
					</div>
				</div>
			</Section>

			{/* Testimonials */}
			<Section id="testimonials">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader
						title={t("testimonials.title")}
						subtitle={t("testimonials.subtitle")}
					/>

					<div className="grid md:grid-cols-3 gap-6">
						{testimonials.map((testimonial, index) => (
							<ScrollFloat key={index} offset={20 + index * 10}>
								<Card delay={index * 0.1} className="relative group">
									{/* Quote decoration */}
									<div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full flex items-center justify-center">
										<span className="text-blue-400 text-lg">"</span>
									</div>

									<div className="relative z-10">
										<div className="flex mb-4 space-x-1">
											{[...Array(testimonial.rating)].map((_, i) => (
												<span key={i} className="text-yellow-400 text-lg">
													⭐
												</span>
											))}
										</div>
										<p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
											"{testimonial.content}"
										</p>
										<div className="border-t border-gray-100 pt-4">
											<p className="font-semibold text-gray-800">
												{testimonial.name}
											</p>
											<p className="text-sm text-blue-600 font-medium">
												{testimonial.role}
											</p>
										</div>
									</div>
								</Card>
							</ScrollFloat>
						))}
					</div>
				</div>
			</Section>

			{/* FAQ */}
			<Section background="gray" id="faq">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<SectionHeader title={t("faq.title")} />

					<div className="max-w-3xl mx-auto space-y-4">
						{faqs.map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-white rounded-xl p-6 shadow-md"
							>
								<h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
								<p className="text-gray-600">{faq.answer}</p>
							</motion.div>
						))}
					</div>

					<div className="text-center mt-8">
						<Button to="/faq">Voir toutes les questions</Button>
					</div>
				</div>
			</Section>

			{/* CTA Final */}
			<Section id="cta" className="relative overflow-hidden">
				{/* Background with subtle gradient */}
				<div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-blue-50/50 to-white"></div>

				<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-b from-gray-800 to-gray-600 bg-clip-text text-transparent">
							{t("cta.title")}
						</h2>
						<p className="text-xl text-gray-600 mb-8">
							{t("cta.subtitle", { count: 120 })}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								to="/contact"
								className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
							>
								{t("cta.primary")}
							</Button>
							<Button
								size="lg"
								variant="secondary"
								to="/contact"
								className="bg-white text-gray-800 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
							>
								{t("cta.secondary")}
							</Button>
						</div>
					</div>
				</div>
			</Section>
		</>
	);
}
