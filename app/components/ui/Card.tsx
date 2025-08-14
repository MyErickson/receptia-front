import clsx from "clsx";
import { motion } from "framer-motion";

interface CardProps {
	children: React.ReactNode;
	className?: string;
	hover?: boolean;
	delay?: number;
}

export function Card({
	children,
	className = "",
	hover = true,
	delay = 0,
}: CardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay }}
			whileHover={
				hover
					? {
							scale: 1.02,
							y: -8,
							boxShadow:
								"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)",
							transition: { duration: 0.2, ease: "easeOut" },
						}
					: undefined
			}
			className={clsx(
				"bg-white rounded-2xl p-6 md:p-8",
				"border-2 border-gray-200 shadow-lg",
				"relative",
				className,
			)}
		>
			{children}
		</motion.div>
	);
}

interface PricingCardProps {
	title: string;
	price: string;
	period?: string;
	description?: string;
	features: string[];
	cta: string;
	ctaAction: () => void;
	popular?: boolean;
	className?: string;
}

export function PricingCard({
	title,
	price,
	period,
	description,
	features,
	cta,
	ctaAction,
	popular = false,
	className = "",
}: PricingCardProps) {
	return (
		<Card
			className={clsx(
				"relative",
				popular && "border-2 border-indigo-500",
				className,
			)}
		>
			{popular && (
				<div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
					<span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
						Le plus populaire
					</span>
				</div>
			)}
			<div className="text-center mb-6">
				<h3 className="text-2xl font-bold mb-2">{title}</h3>
				{description && <p className="text-gray-600 mb-4">{description}</p>}
				<div className="flex items-baseline justify-center">
					<span className="text-5xl font-bold">{price}</span>
					{period && <span className="text-gray-600 ml-2">/{period}</span>}
				</div>
			</div>
			<ul className="space-y-3 mb-8">
				{features.map((feature, index) => (
					<li key={index} className="flex items-start">
						<svg
							className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<title>Checkmark</title>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<span className="text-gray-700">{feature}</span>
					</li>
				))}
			</ul>
			<button
				type="button"
				onClick={ctaAction}
				className={clsx(
					"w-full py-3 rounded-xl font-semibold transition-all duration-200",
					popular
						? "bg-indigo-500 text-white hover:bg-indigo-600"
						: "bg-gray-100 text-gray-900 hover:bg-gray-200",
				)}
			>
				{cta}
			</button>
		</Card>
	);
}
