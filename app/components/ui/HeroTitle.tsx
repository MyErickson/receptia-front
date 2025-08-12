import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface HeroTitleProps {
	children: React.ReactNode;
	className?: string;
	glowColor?: string;
	enableParticles?: boolean;
	enableTypewriter?: boolean;
	typewriterSpeed?: number;
}

export default function HeroTitle({
	children,
	className = '',
	glowColor = '99, 102, 241',
	enableParticles = true,
	enableTypewriter = false,
	typewriterSpeed = 100,
}: HeroTitleProps) {
	const [displayedText, setDisplayedText] = useState('');
	const [isComplete, setIsComplete] = useState(!enableTypewriter);
	const containerRef = useRef<HTMLDivElement>(null);
	const controls = useAnimation();
	
	// Mouse interaction
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const rotateX = useTransform(mouseY, [-100, 100], [2, -2]);
	const rotateY = useTransform(mouseX, [-100, 100], [-2, 2]);

	const text = typeof children === 'string' ? children : '';

	// Typewriter effect
	useEffect(() => {
		if (!enableTypewriter) {
			setDisplayedText(text);
			setIsComplete(true);
			return;
		}

		let currentIndex = 0;
		const timer = setInterval(() => {
			if (currentIndex <= text.length) {
				setDisplayedText(text.slice(0, currentIndex));
				currentIndex++;
			} else {
				setIsComplete(true);
				clearInterval(timer);
			}
		}, typewriterSpeed);

		return () => clearInterval(timer);
	}, [text, enableTypewriter, typewriterSpeed]);

	// Mouse move handler
	const handleMouseMove = (event: React.MouseEvent) => {
		if (!containerRef.current) return;
		const rect = containerRef.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const x = (event.clientX - centerX) / 10;
		const y = (event.clientY - centerY) / 10;
		mouseX.set(x);
		mouseY.set(y);
	};

	const handleMouseLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
	};

	// Floating particles around text
	const particles = enableParticles ? Array.from({ length: 20 }, (_, i) => ({
		id: i,
		initialX: Math.random() * 100,
		initialY: Math.random() * 100,
		delay: Math.random() * 3,
		duration: 4 + Math.random() * 2,
	})) : [];

	return (
		<div className="relative inline-block">
			{/* Particles */}
			{enableParticles && (
				<div className="absolute inset-0 pointer-events-none overflow-visible">
					{particles.map((particle) => (
						<motion.div
							key={particle.id}
							className="absolute w-2 h-2"
							style={{
								left: `${particle.initialX}%`,
								top: `${particle.initialY}%`,
							}}
							animate={{
								x: [0, 30, -20, 0],
								y: [0, -40, 20, 0],
								opacity: [0, 0.8, 0.3, 0],
								scale: [0, 1, 0.5, 0],
								rotate: [0, 180, 360],
							}}
							transition={{
								duration: particle.duration,
								delay: particle.delay,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}}
						>
							<div 
								className="w-full h-full rounded-full"
								style={{
									background: `radial-gradient(circle, rgba(${glowColor}, 0.8) 0%, rgba(${glowColor}, 0.2) 70%, transparent 100%)`,
									boxShadow: `0 0 10px rgba(${glowColor}, 0.6)`,
								}}
							/>
						</motion.div>
					))}
				</div>
			)}

			{/* Main glow effect */}
			<motion.div
				className="absolute inset-0 blur-2xl pointer-events-none"
				animate={{
					opacity: [0.3, 0.6, 0.3],
					scale: [1, 1.05, 1],
				}}
				transition={{
					duration: 4,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
				style={{
					background: `radial-gradient(ellipse at center, rgba(${glowColor}, 0.4) 0%, transparent 70%)`,
				}}
			/>

			{/* Text container */}
			<motion.div
				ref={containerRef}
				className={`relative z-10 ${className}`}
				style={{ rotateX, rotateY, perspective: 1000 }}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: "backOut" }}
			>
				{/* Text with shimmer effect */}
				<motion.div
					className="relative"
					whileHover={{ scale: 1.02 }}
					transition={{ type: "spring", stiffness: 300, damping: 30 }}
				>
					{enableTypewriter ? (
						<span className="inline-block">
							{displayedText.split('').map((char, index) => (
								<motion.span
									key={index}
									className="inline-block"
									style={{
										background: `linear-gradient(135deg, 
											rgb(${glowColor}) 0%, 
											rgb(${glowColor.split(',').map(c => Math.min(255, parseInt(c.trim()) + 50)).join(',')}) 50%, 
											rgb(${glowColor}) 100%)`,
										backgroundSize: '200% 200%',
										backgroundClip: 'text',
										WebkitBackgroundClip: 'text',
										color: 'transparent',
										filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.5))',
									}}
									animate={{
										backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
									}}
									transition={{
										duration: 3,
										delay: index * 0.1,
										repeat: Number.POSITIVE_INFINITY,
										ease: "linear",
									}}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
								>
									{char === ' ' ? '\u00A0' : char}
								</motion.span>
							))}
							{!isComplete && (
								<motion.span
									className="inline-block ml-1 w-0.5 bg-current"
									animate={{ opacity: [0, 1, 0] }}
									transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
									style={{ height: '1em', background: `rgb(${glowColor})` }}
								/>
							)}
						</span>
					) : (
						<motion.div
							style={{
								background: `linear-gradient(135deg, 
									rgb(${glowColor}) 0%, 
									rgb(${glowColor.split(',').map(c => Math.min(255, parseInt(c.trim()) + 50)).join(',')}) 50%, 
									rgb(${glowColor}) 100%)`,
								backgroundSize: '200% 200%',
								backgroundClip: 'text',
								WebkitBackgroundClip: 'text',
								color: 'transparent',
								filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.6))',
							}}
							animate={{
								backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
							}}
							transition={{
								duration: 4,
								repeat: Number.POSITIVE_INFINITY,
								ease: "linear",
							}}
						>
							{children}
						</motion.div>
					)}
				</motion.div>

				{/* Animated underline */}
				<motion.div
					className="absolute -bottom-2 left-0 h-1 rounded-full"
					style={{
						background: `linear-gradient(90deg, 
							rgba(${glowColor}, 0.8) 0%, 
							rgba(${glowColor}, 0.4) 50%, 
							rgba(${glowColor}, 0.8) 100%)`,
						boxShadow: `0 0 10px rgba(${glowColor}, 0.6)`,
					}}
					initial={{ width: 0, opacity: 0 }}
					animate={{ 
						width: '100%', 
						opacity: isComplete ? 1 : 0,
						scaleY: [1, 1.2, 1],
					}}
					transition={{
						width: { duration: 0.8, delay: enableTypewriter ? text.length * typewriterSpeed / 1000 + 0.5 : 0.5 },
						opacity: { duration: 0.3, delay: enableTypewriter ? text.length * typewriterSpeed / 1000 + 0.5 : 0.5 },
						scaleY: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
					}}
				/>
			</motion.div>

			{/* Ripple effects */}
			<motion.div
				className="absolute inset-0 pointer-events-none"
				initial={{ scale: 0, opacity: 0 }}
				animate={{ 
					scale: [0, 1.5, 2],
					opacity: [0.5, 0.2, 0],
				}}
				transition={{
					duration: 3,
					delay: 1,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeOut",
				}}
				style={{
					background: `radial-gradient(circle, rgba(${glowColor}, 0.3) 0%, transparent 70%)`,
					borderRadius: '50%',
				}}
			/>
		</div>
	);
}