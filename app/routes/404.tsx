import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/Button";
import { Section } from "~/components/ui/Section";
import type { Route } from "./+types/404";

export function meta(_: Route.MetaArgs) {
	return [
		{ title: "404 - Page introuvable | Receptia" },
		{ name: "robots", content: "noindex, nofollow" },
	];
}

export default function NotFound() {
	const { t } = useTranslation();

	return (
		<Section className="pt-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<div className="max-w-2xl mx-auto">
					<h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						{t("404.title")}
					</h2>
					<p className="text-xl text-gray-600 mb-8">{t("404.subtitle")}</p>
					<div className="mb-8">
						<Button size="lg" to="/">
							{t("404.cta")}
						</Button>
					</div>
					<div>
						<p className="text-gray-600 mb-4">{t("404.alternatives")}</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Button variant="ghost" to="/services">
								Nos services
							</Button>
							<Button variant="ghost" to="/portfolio">
								Nos réalisations
							</Button>
							<Button variant="ghost" to="/contact">
								Nous contacter
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
