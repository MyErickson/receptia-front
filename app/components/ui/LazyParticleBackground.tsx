import { lazy, Suspense } from 'react';

const ParticleBackground = lazy(() => import('./ParticleBackground'));

interface LazyParticleBackgroundProps {
	particleCount?: number;
	color?: string;
	speed?: number;
	className?: string;
}

export default function LazyParticleBackground(props: LazyParticleBackgroundProps) {
	return (
		<Suspense fallback={<div className={props.className} />}>
			<ParticleBackground {...props} />
		</Suspense>
	);
}