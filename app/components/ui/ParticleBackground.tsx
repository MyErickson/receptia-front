import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ParticleBackgroundProps {
	particleCount?: number;
	color?: string;
	speed?: number;
	className?: string;
}

export default function ParticleBackground({
	particleCount = 50,
	color = '99, 102, 241',
	speed = 1,
	className = ''
}: ParticleBackgroundProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationRef = useRef<number | null>(null);
	const particlesRef = useRef<Array<{
		x: number;
		y: number;
		vx: number;
		vy: number;
		size: number;
		opacity: number;
		hue: number;
	}>>([]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
		};

		// Initialize particles
		const initParticles = () => {
			particlesRef.current = [];
			for (let i = 0; i < particleCount; i++) {
				particlesRef.current.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					vx: (Math.random() - 0.5) * speed,
					vy: (Math.random() - 0.5) * speed,
					size: Math.random() * 3 + 1,
					opacity: Math.random() * 0.5 + 0.2,
					hue: Math.random() * 60 + 200, // Blue to purple range
				});
			}
		};

		// Animation loop
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			particlesRef.current.forEach((particle, index) => {
				// Update position
				particle.x += particle.vx;
				particle.y += particle.vy;

				// Bounce off walls
				if (particle.x <= 0 || particle.x >= canvas.width) {
					particle.vx *= -1;
				}
				if (particle.y <= 0 || particle.y >= canvas.height) {
					particle.vy *= -1;
				}

				// Keep within bounds
				particle.x = Math.max(0, Math.min(canvas.width, particle.x));
				particle.y = Math.max(0, Math.min(canvas.height, particle.y));

				// Pulse opacity
				particle.opacity = 0.3 + Math.sin(Date.now() * 0.002 + index) * 0.2;

				// Draw particle
				ctx.save();
				ctx.globalAlpha = particle.opacity;
				
				// Create gradient
				const gradient = ctx.createRadialGradient(
					particle.x, particle.y, 0,
					particle.x, particle.y, particle.size * 2
				);
				gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, 1)`);
				gradient.addColorStop(1, `hsla(${particle.hue}, 70%, 60%, 0)`);
				
				ctx.fillStyle = gradient;
				ctx.beginPath();
				ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
				ctx.fill();
				ctx.restore();

				// Draw connections to nearby particles
				particlesRef.current.forEach((otherParticle, otherIndex) => {
					if (index !== otherIndex) {
						const dx = particle.x - otherParticle.x;
						const dy = particle.y - otherParticle.y;
						const distance = Math.sqrt(dx * dx + dy * dy);

						if (distance < 100) {
							ctx.save();
							ctx.globalAlpha = (100 - distance) / 100 * 0.2;
							ctx.strokeStyle = `hsl(${particle.hue}, 70%, 60%)`;
							ctx.lineWidth = 1;
							ctx.beginPath();
							ctx.moveTo(particle.x, particle.y);
							ctx.lineTo(otherParticle.x, otherParticle.y);
							ctx.stroke();
							ctx.restore();
						}
					}
				});
			});

			animationRef.current = requestAnimationFrame(animate);
		};

		// Setup
		resizeCanvas();
		initParticles();
		animate();

		// Handle resize
		const handleResize = () => {
			resizeCanvas();
			initParticles();
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [particleCount, speed]);

	return (
		<motion.div 
			className={`absolute inset-0 ${className}`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
		>
			<canvas
				ref={canvasRef}
				className="w-full h-full"
				style={{ filter: 'blur(0.5px)' }}
			/>
		</motion.div>
	);
}