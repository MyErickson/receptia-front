import clsx from "clsx";
import { motion } from "framer-motion";

interface SectionProps {
	children: React.ReactNode;
	className?: string;
	id?: string;
	background?: "white" | "gray" | "gradient";
	padding?: "sm" | "md" | "lg";
}

export function Section({
	children,
	className = "",
	id,
	background = "white",
	padding = "md",
}: SectionProps) {
	const bgClasses = {
		white: "bg-white",
		gray: "bg-gray-50",
		gradient: "bg-gradient-to-b from-gray-50 to-white",
	};

	const paddingClasses = {
		sm: "py-12 md:py-16 lg:py-20",
		md: "py-16 md:py-24 lg:py-32",
		lg: "py-20 md:py-32 lg:py-40",
	};

	return (
		<section
			id={id}
			className={clsx(
				bgClasses[background],
				paddingClasses[padding],
				className,
			)}
		>
			{children}
		</section>
	);
}

interface SectionHeaderProps {
	title: string;
	subtitle?: string;
	centered?: boolean;
	className?: string;
}

export function SectionHeader({
	title,
	subtitle,
	centered = true,
	className = "",
}: SectionHeaderProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className={clsx("mb-12 md:mb-16", centered && "text-center", className)}
		>
			<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
				{title}
			</h2>
			{subtitle && (
				<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
					{subtitle}
				</p>
			)}
		</motion.div>
	);
}
