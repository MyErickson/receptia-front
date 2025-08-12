import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface AdvancedRotatingTextProps {
	texts: string[];
	className?: string;
	rotationInterval?: number;
	glowColor?: string;
	particleCount?: number;
}

export default function AdvancedRotatingText({
	texts,
	className = "",
	rotationInterval = 3000,
	glowColor = "99, 102, 241",
	particleCount = 8,
}: AdvancedRotatingTextProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	// Transform mouse position to rotation and scale
	const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
	const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);
	const scale = useTransform(mouseX, [-100, 100], [0.98, 1.02]);

	// Handle mouse move for interactive effects
	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const x = event.clientX - centerX;
		const y = event.clientY - centerY;
		mouseX.set(x * 0.5);
		mouseY.set(y * 0.5);
	};

	const handleMouseLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
	};

	// Auto rotation
	useEffect(() => {
		const interval = setInterval(() => {
			setIsAnimating(true);
			setTimeout(() => {
				setCurrentIndex((prev) => (prev + 1) % texts.length);
				setIsAnimating(false);
			}, 200);
		}, rotationInterval);

		return () => clearInterval(interval);
	}, [texts.length, rotationInterval]);

	// Split text into words and characters
	const currentText = texts[currentIndex];
	const words = currentText.split(" ");

	// Particle positions
	const particles = Array.from({ length: particleCount }, (_, i) => ({
		id: i,
		x: Math.random() * 100,
		y: Math.random() * 100,
		delay: Math.random() * 2,
		duration: 3 + Math.random() * 2,
	}));

	return (
		<div className="relative inline-block">
			{/* Particles Background */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				{particles.map((particle) => (
					<motion.div
						key={particle.id}
						className="absolute w-1 h-1 rounded-full"
						style={{
							left: `${particle.x}%`,
							top: `${particle.y}%`,
							background: `rgba(${glowColor}, 0.6)`,
							boxShadow: `0 0 10px rgba(${glowColor}, 0.8)`,
						}}
						animate={{
							opacity: [0, 1, 0],
							scale: [0, 1.5, 0],
							y: [0, -20, 0],
						}}
						transition={{
							duration: particle.duration,
							delay: particle.delay,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
					/>
				))}
			</div>

			{/* Glow Effect */}
			<motion.div
				className="absolute inset-0 blur-xl opacity-30 pointer-events-none"
				style={{
					background: `radial-gradient(ellipse at center, rgba(${glowColor}, 0.4) 0%, transparent 70%)`,
				}}
				animate={{
					scale: [1, 1.1, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 4,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			/>

			{/* Main Text Container */}
			<motion.div
				ref={containerRef}
				className={`relative z-10 cursor-pointer ${className}`}
				style={{
					rotateX,
					rotateY,
					scale,
					perspective: 1000,
				}}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				whileHover={{
					scale: 1.05,
					transition: { duration: 0.2 },
				}}
				whileTap={{
					scale: 0.95,
					transition: { duration: 0.1 },
				}}
			>
				<AnimatePresence mode="wait">
					<motion.div
						key={currentIndex}
						className="flex flex-wrap gap-1 justify-center"
						initial={{ opacity: 0, y: 50, rotateX: 45 }}
						animate={{ opacity: 1, y: 0, rotateX: 0 }}
						exit={{ opacity: 0, y: -50, rotateX: -45 }}
						transition={{ duration: 0.6, ease: "backOut" }}
					>
						{words.map((word, wordIndex) => (
							<motion.span
								key={`${currentIndex}-${wordIndex}`}
								className="inline-flex"
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									delay: wordIndex * 0.1,
									duration: 0.4,
									ease: "easeOut",
								}}
							>
								{word.split("").map((char, charIndex) => (
									<motion.span
										key={charIndex}
										className="inline-block font-semibold relative"
										style={{
											background: `linear-gradient(135deg, 
												rgb(${glowColor}) 0%, 
												rgb(${glowColor.split(',').map(c => Math.min(255, parseInt(c.trim()) + 40)).join(',')}) 50%, 
												rgb(${glowColor}) 100%)`,
											backgroundClip: 'text',
											WebkitBackgroundClip: 'text',
											color: 'transparent',
											backgroundSize: '200% 200%',
										}}
										animate={{
											backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
										}}
										transition={{
											duration: 3,
											delay: charIndex * 0.1,
											repeat: Number.POSITIVE_INFINITY,
											ease: "linear",
										}}
										whileHover={{
											scale: 1.2,
											rotateZ: [0, 5, -5, 0],
											transition: { duration: 0.3 },
										}}
									>
										{char}
									</motion.span>
								))}
								{wordIndex < words.length - 1 && <span className="mr-2">&nbsp;</span>}
							</motion.span>
						))}
					</motion.div>
				</AnimatePresence>

				{/* Underline Effect */}
				<motion.div
					className="absolute bottom-0 left-0 h-0.5 bg-current opacity-50"
					initial={{ width: 0 }}
					animate={{ width: "100%" }}
					transition={{
						duration: 0.8,
						delay: 0.3,
						ease: "easeInOut",
					}}
					style={{
						background: `linear-gradient(90deg, rgba(${glowColor}, 0.8), rgba(${glowColor}, 0.2))`,
					}}
				/>
			</motion.div>

			{/* Ripple Effect on Change */}
			{isAnimating && (
				<motion.div
					className="absolute inset-0 pointer-events-none"
					initial={{ scale: 0, opacity: 0.8 }}
					animate={{ scale: 2, opacity: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					style={{
						background: `radial-gradient(circle, rgba(${glowColor}, 0.3) 0%, transparent 70%)`,
						borderRadius: '50%',
					}}
				/>
			)}
		</div>
	);
}