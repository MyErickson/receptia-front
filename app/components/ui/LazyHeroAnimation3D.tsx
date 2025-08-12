import { lazy, Suspense } from 'react';

const HeroAnimation3D = lazy(() => import('./HeroAnimation3D'));

interface LazyHeroAnimation3DProps {
	className?: string;
}

export default function LazyHeroAnimation3D({ className = '' }: LazyHeroAnimation3DProps) {
	return (
		<Suspense fallback={<div className={className} />}>
			<HeroAnimation3D className={className} />
		</Suspense>
	);
}