interface LightHeroTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function LightHeroTitle({ children, className = "" }: LightHeroTitleProps) {
  return (
    <h1
      className={`hero-title text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black bg-clip-text text-transparent font-bold drop-shadow-sm ${className}`}
    >
      {children}
    </h1>
  );
}
