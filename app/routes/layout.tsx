import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router";

export default function Layout() {
	const { t, i18n } = useTranslation();
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navigation = [
		{ name: t("nav.home"), to: "/" },
		{ name: t("nav.services"), to: "/services" },
		// { name: t("nav.portfolio"), to: "/portfolio" }, // Temporairement caché
		{ name: t("nav.about"), to: "/about" },
		{ name: t("nav.contact"), to: "/contact" },
	];

	const toggleLanguage = () => {
		const newLang = i18n.language === "fr" ? "en" : "fr";
		i18n.changeLanguage(newLang);
	};

	return (
		<div className="min-h-screen bg-white">
			<header
				className={clsx(
					"fixed top-0 left-0 right-0 z-50 transition-all duration-300",
					isScrolled
						? "bg-white/10 backdrop-blur-md border-b border-white/20"
						: "bg-white/5 backdrop-blur-sm border-b border-white/10",
				)}
			>
				<nav className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-18 md:h-24">
						<Link to="/" className="flex items-center">
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="text-2xl md:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent"
							>
								Receptia
							</motion.div>
						</Link>

						<div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
							{navigation.map((item) => (
								<motion.div
									key={item.to}
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.95 }}
								>
									<Link
										to={item.to}
										className={clsx(
											"relative px-3 xl:px-4 py-2.5 text-sm xl:text-base font-semibold transition-all duration-300 rounded-xl whitespace-nowrap",
											location.pathname === item.to
												? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25 scale-105"
												: "text-gray-700 hover:text-blue-600 hover:bg-white/50 hover:shadow-md hover:scale-105",
										)}
									>
										{item.name}
									</Link>
								</motion.div>
							))}
						</div>

						<div className="hidden lg:flex items-center space-x-3 xl:space-x-6">
							<motion.button
								onClick={toggleLanguage}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="px-3 py-2 text-sm font-semibold text-gray-600 hover:text-blue-600 bg-gray-100 hover:bg-blue-50 rounded-lg transition-all duration-300 border border-gray-200 hover:border-blue-200 w-16 flex items-center justify-center"
								aria-label="Change language"
							>
								<motion.span
									key={i18n.language}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 10 }}
									transition={{ duration: 0.2 }}
									className="flex items-center gap-1"
								>
									🌐 {i18n.language === "fr" ? "EN" : "FR"}
								</motion.span>
							</motion.button>
							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="hidden sm:block"
							>
								<Link
									to="/contact"
									className="btn-primary shadow-lg hover:shadow-xl transition-all duration-200 text-sm lg:text-base px-3 lg:px-4 py-2 lg:py-2.5"
								>
									{t("hero.cta.primary")}
								</Link>
							</motion.div>
						</div>

						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
							aria-label="Toggle menu"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								{isMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>
				</nav>

				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="lg:hidden bg-white border-t border-gray-200"
						>
							<div className="container mx-auto px-4 py-6 space-y-3">
								{navigation.map((item) => (
									<Link
										key={item.to}
										to={item.to}
										onClick={() => setIsMenuOpen(false)}
										className={clsx(
											"block px-4 py-3 text-base font-semibold transition-all duration-300 rounded-xl",
											location.pathname === item.to
												? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25"
												: "text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md",
										)}
									>
										{item.name}
									</Link>
								))}
								<div className="pt-4 mt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
									<button
										onClick={toggleLanguage}
										className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 bg-gray-50 hover:bg-blue-50 rounded-lg transition-all duration-300 w-32 flex items-center justify-center"
									>
										<motion.span
											key={i18n.language}
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.8 }}
											transition={{ duration: 0.2 }}
											className="flex items-center gap-2"
										>
											🌐 {i18n.language === "fr" ? "English" : "Français"}
										</motion.span>
									</button>
									<Link
										to="/contact"
										onClick={() => setIsMenuOpen(false)}
										className="btn-primary w-full sm:w-auto text-center"
									>
										{t("hero.cta.primary")}
									</Link>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</header>

			<main>
				<Outlet />
			</main>

			<footer className="bg-gray-900 text-white">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div>
							<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
								{t("footer.company")}
							</h3>
							<p className="text-gray-400 mb-4">
								Votre partenaire IA & Digital de confiance
							</p>
							<div className="flex space-x-4">
								<a
									href="https://twitter.com/receptia"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white transition-colors"
									aria-label="Twitter"
								>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
									</svg>
								</a>
								<a
									href="https://linkedin.com/company/receptia"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white transition-colors"
									aria-label="LinkedIn"
								>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
								</a>
								<a
									href="https://facebook.com/receptia"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white transition-colors"
									aria-label="Facebook"
								>
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
									</svg>
								</a>
							</div>
						</div>

						<div>
							<h4 className="font-semibold mb-4 text-white">{t("nav.services")}</h4>
							<ul className="space-y-2">
								<li>
									<Link
										to="/services#ai_assistant"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Assistants IA & Chatbots
									</Link>
								</li>
								<li>
									<Link
										to="/services#ai_automation"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Automatisation IA
									</Link>
								</li>
								<li>
									<Link
										to="/services#ai_apps"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Applications IA
									</Link>
								</li>
								<li>
									<Link
										to="/services#showcase"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Sites vitrines classiques
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold mb-4 text-white">Ressources</h4>
							<ul className="space-y-2">
								<li>
									<Link
										to="/faq"
										className="text-gray-400 hover:text-white transition-colors"
									>
										{t("nav.faq")}
									</Link>
								</li>
								<li>
									<Link
										to="/about"
										className="text-gray-400 hover:text-white transition-colors"
									>
										{t("nav.about")}
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold mb-4 text-white">
								{t("footer.contact.title")}
							</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a
										href="mailto:contact@receptia.fr"
										className="hover:text-white transition-colors"
									>
										{t("footer.contact.email")}
									</a>
								</li>
								<li>{t("footer.contact.hours")}</li>
							</ul>
						</div>
					</div>

					<div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 text-sm mb-4 md:mb-0">
							{t("footer.copyright", { year: new Date().getFullYear() })}
						</p>
						<div className="flex space-x-6 text-sm">
							<Link
								to="/legal"
								className="text-gray-400 hover:text-white transition-colors"
							>
								{t("footer.links.legal")}
							</Link>
							<Link
								to="/privacy"
								className="text-gray-400 hover:text-white transition-colors"
							>
								{t("footer.links.privacy")}
							</Link>
							<Link
								to="/terms"
								className="text-gray-400 hover:text-white transition-colors"
							>
								{t("footer.links.terms")}
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
