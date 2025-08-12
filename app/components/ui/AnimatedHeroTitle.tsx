import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface AnimatedHeroTitleProps {
	children: React.ReactNode;
	className?: string;
}

export default function AnimatedHeroTitle({ 
	children, 
	className = '' 
}: AnimatedHeroTitleProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);
	const controls = useAnimation();
	
	// Mouse interaction
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const rotateX = useTransform(mouseY, [-100, 100], [2, -2]);
	const rotateY = useTransform(mouseX, [-100, 100], [-2, 2]);

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
		setIsHovered(false);
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	// Pulsing glow effect
	useEffect(() => {
		controls.start({
			textShadow: [
				'0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(59, 130, 246, 0.2)',
				'0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(139, 92, 246, 0.3)',
				'0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(59, 130, 246, 0.2)'
			],
			transition: {
				duration: 4,
				repeat: Infinity,
				ease: 'easeInOut'
			}
		});
	}, [controls]);

	const text = typeof children === 'string' ? children : '';
	const words = text.split(' ');

	return (
		<div className="relative inline-block">
			{/* Background glow */}
			<motion.div
				className="absolute inset-0 blur-3xl opacity-50"
				animate={{
					background: [
						'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
						'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
						'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.3) 0%, transparent 70%)',
						'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
					],
					scale: [1, 1.1, 1.2, 1]
				}}
				transition={{
					duration: 6,
					repeat: Infinity,
					ease: 'easeInOut'
				}}
			/>

			{/* Floating particles */}
			{[
				{ left: 25, top: 30, x: 5, duration: 4, delay: 0 },
				{ left: 65, top: 25, x: -8, duration: 3.5, delay: 0.5 },
				{ left: 45, top: 70, x: 3, duration: 4.5, delay: 1 },
				{ left: 75, top: 55, x: -5, duration: 3.8, delay: 1.5 },
				{ left: 35, top: 45, x: 7, duration: 4.2, delay: 0.8 },
				{ left: 80, top: 35, x: -3, duration: 3.7, delay: 1.2 }
			].map((particle, i) => (
				<motion.div
					key={i}
					className="absolute w-1 h-1 bg-blue-600 rounded-full"
					style={{
						left: `${particle.left}%`,
						top: `${particle.top}%`,
					}}
					animate={{
						y: [0, -20, 0],
						x: [0, particle.x, 0],
						opacity: [0, 0.8, 0],
						scale: [0, 1, 0]
					}}
					transition={{
						duration: particle.duration,
						repeat: Infinity,
						delay: particle.delay,
						ease: 'easeInOut'
					}}
				/>
			))}

			{/* Main text container */}
			<motion.div
				ref={containerRef}
				className={`relative z-10 ${className}`}
				style={{ rotateX, rotateY, perspective: 1000 }}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				onMouseEnter={handleMouseEnter}
				initial={{ opacity: 0, y: 50, scale: 0.9 }}
				animate={{ 
					opacity: 1, 
					y: 0, 
					scale: 1,
				}}
				transition={{ 
					duration: 1.2, 
					ease: 'backOut',
					delay: 0.2
				}}
				whileHover={{
					scale: 1.05,
					transition: { duration: 0.3 }
				}}
			>
				{/* Animated text with word-by-word reveal */}
				<motion.div animate={controls}>
					{words.map((word, index) => (
						<motion.span
							key={index}
							className="inline-block mr-2"
							initial={{ opacity: 0, y: 50, rotateX: 90 }}
							animate={{ 
								opacity: 1, 
								y: 0, 
								rotateX: 0
							}}
							transition={{
								duration: 0.8,
								delay: 0.5 + index * 0.1,
								ease: 'backOut'
							}}
							whileHover={{
								y: -10,
								textShadow: '0 10px 20px rgba(59, 130, 246, 0.3)',
								transition: { duration: 0.2 }
							}}
						>
							{word}
						</motion.span>
					))}
				</motion.div>

				{/* Dynamic underline */}
				<motion.div
					className="absolute -bottom-4 left-1/2 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-full"
					initial={{ width: 0, x: '-50%' }}
					animate={{ 
						width: isHovered ? '100%' : '60%',
						boxShadow: isHovered 
							? '0 0 20px rgba(59, 130, 246, 0.6)' 
							: '0 0 10px rgba(59, 130, 246, 0.3)'
					}}
					transition={{ 
						duration: 0.6, 
						delay: 1.5,
						ease: 'easeOut'
					}}
				/>
			</motion.div>
		</div>
	);
}