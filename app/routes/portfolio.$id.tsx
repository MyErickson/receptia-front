import { Button } from "~/components/ui/Button";
import { Card } from "~/components/ui/Card";
import { Section, SectionHeader } from "~/components/ui/Section";
import { generateMeta } from "~/utils/seo";
import type { Route } from "./+types/portfolio.$id";

export function meta(_: Route.MetaArgs) {
	return generateMeta({
		title: "TechBot - Assistant IA | Portfolio Receptia",
		description:
			"Découvrez notre réalisation IA pour TechStart : chatbot intelligent automatisant 80% des demandes client avec NLP avancé.",
	});
}

export default function PortfolioDetail({ params }: Route.ComponentProps) {
	// En production, ces données viendraient d'une API
	const project = {
		id: params.id,
		title: "TechBot - Assistant IA Client",
		client: "TechStart",
		category: "Solution IA",
		image: "/api/placeholder/800/500",
		gallery: [
			"/api/placeholder/600/400",
			"/api/placeholder/600/400",
			"/api/placeholder/600/400",
		],
		description:
			"Développement d'un chatbot intelligent avec traitement du langage naturel pour automatiser le service client de TechStart. Solution IA avancée intégrée à leurs outils existants.",
		challenge:
			"TechStart recevait plus de 500 demandes client par jour, saturant leur équipe support. Ils avaient besoin d'une solution IA capable de comprendre et traiter automatiquement les demandes récurrentes tout en maintenant un haut niveau de satisfaction client.",
		solution:
			"Nous avons développé un chatbot intelligent utilisant des modèles de langage avancés, intégré à leur CRM et base de connaissances. Le bot apprend continuellement des interactions et transfère les cas complexes aux agents humains.",
		results: [
			"80% de demandes résolues automatiquement",
			"Temps de réponse réduit de 90%",
			"Satisfaction client maintenue à 95%",
			"15h de travail économisées par jour",
		],
		technologies: ["OpenAI GPT", "Python", "React", "WebSocket", "MongoDB"],
		testimonial: {
			content:
				"Notre chatbot IA a révolutionné notre service client. 80% de demandes traitées automatiquement avec une satisfaction client qui reste élevée. L'équipe Receptia a délivré une solution parfaitement adaptée à nos besoins.",
			author: "Marie Dubois",
			role: "CEO, TechStart",
		},
		duration: "3 semaines",
		budget: "8500€",
		year: "2024",
	};

	return (
		<Section className="pt-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<nav className="mb-8">
					<ol className="flex items-center space-x-2 text-sm text-gray-500">
						<li>
							<Button to="/" variant="ghost" size="sm">
								Accueil
							</Button>
						</li>
						<li>/</li>
						<li>
							<Button to="/portfolio" variant="ghost" size="sm">
								Portfolio
							</Button>
						</li>
						<li>/</li>
						<li className="text-gray-900 font-medium">{project.client}</li>
					</ol>
				</nav>

				<div className="grid lg:grid-cols-3 gap-12">
					<div className="lg:col-span-2 space-y-8">
						<div>
							<SectionHeader
								title={project.title}
								subtitle={project.description}
								centered={false}
							/>
							<img
								src={project.image}
								alt={project.title}
								className="w-full rounded-2xl shadow-xl"
							/>
						</div>

						<Card>
							<h3 className="text-2xl font-bold mb-4">Le défi</h3>
							<p className="text-gray-600 leading-relaxed">
								{project.challenge}
							</p>
						</Card>

						<Card>
							<h3 className="text-2xl font-bold mb-4">Notre solution</h3>
							<p className="text-gray-600 leading-relaxed">
								{project.solution}
							</p>
						</Card>

						<div className="grid md:grid-cols-3 gap-4">
							{project.gallery.map((image, index) => (
								<img
									key={`gallery-${index}`}
									src={image}
									alt={`${project.title} screenshot ${index + 1}`}
									className="w-full h-48 object-cover rounded-xl shadow-md"
								/>
							))}
						</div>

						<Card>
							<h3 className="text-2xl font-bold mb-6">Résultats obtenus</h3>
							<div className="grid md:grid-cols-2 gap-4">
								{project.results.map((result, index) => (
									<div key={`result-${index}`} className="flex items-start">
										<div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0" />
										<span className="text-gray-700">{result}</span>
									</div>
								))}
							</div>
						</Card>

						{project.testimonial && (
							<Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
								<div className="flex mb-4">
									{[...Array(5)].map((_, i) => (
										<span key={`star-${i}`} className="text-yellow-500">
											⭐
										</span>
									))}
								</div>
								<blockquote className="text-lg text-gray-700 italic mb-4">
									"{project.testimonial.content}"
								</blockquote>
								<div>
									<p className="font-semibold">{project.testimonial.author}</p>
									<p className="text-gray-600">{project.testimonial.role}</p>
								</div>
							</Card>
						)}
					</div>

					<div className="space-y-6">
						<Card>
							<h3 className="font-bold text-lg mb-4">Détails du projet</h3>
							<div className="space-y-3">
								<div>
									<span className="font-medium text-gray-700">Client :</span>
									<span className="ml-2">{project.client}</span>
								</div>
								<div>
									<span className="font-medium text-gray-700">Catégorie :</span>
									<span className="ml-2">{project.category}</span>
								</div>
								<div>
									<span className="font-medium text-gray-700">Durée :</span>
									<span className="ml-2">{project.duration}</span>
								</div>
								<div>
									<span className="font-medium text-gray-700">Budget :</span>
									<span className="ml-2">{project.budget}</span>
								</div>
								<div>
									<span className="font-medium text-gray-700">Année :</span>
									<span className="ml-2">{project.year}</span>
								</div>
							</div>
						</Card>

						<Card>
							<h3 className="font-bold text-lg mb-4">Technologies</h3>
							<div className="flex flex-wrap gap-2">
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
									>
										{tech}
									</span>
								))}
							</div>
						</Card>

						<Card>
							<h3 className="font-bold text-lg mb-4">
								Vous avez un projet similaire ?
							</h3>
							<p className="text-gray-600 mb-4">
								Parlons de vos besoins et créons ensemble votre solution sur
								mesure.
							</p>
							<Button to="/contact" fullWidth>
								Demander un devis
							</Button>
						</Card>

						<Card>
							<h3 className="font-bold text-lg mb-4">
								Solutions IA sur mesure
							</h3>
							<p className="text-gray-600 mb-4">
								Comme TechStart, transformez votre entreprise avec l'IA.
							</p>
							<ul className="text-sm text-gray-600 space-y-1 mb-4">
								<li>✅ Chatbots intelligents</li>
								<li>✅ Automatisation IA</li>
								<li>✅ Analyse prédictive</li>
								<li>✅ Intégration API</li>
							</ul>
							<Button to="/services" variant="secondary" fullWidth>
								Découvrir nos solutions IA
							</Button>
						</Card>
					</div>
				</div>
			</div>
		</Section>
	);
}
