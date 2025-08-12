import { lazy, Suspense } from 'react';

const AdvancedRotatingText = lazy(() => import('./AdvancedRotatingText'));

interface LazyAdvancedRotatingTextProps {
	texts: string[];
	rotationInterval?: number;
	glowColor?: string;
	particleCount?: number;
	className?: string;
}

export default function LazyAdvancedRotatingText(props: LazyAdvancedRotatingTextProps) {
	return (
		<Suspense fallback={<span className={props.className}>{props.texts[0]}</span>}>
			<AdvancedRotatingText {...props} />
		</Suspense>
	);
}