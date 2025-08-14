import { memo, useEffect } from "react";

interface HeroAnimationProps {
  className?: string;
}

// Styles CSS minimalistes
const animationStyles = `
  @keyframes float-gentle {
    0%, 100% { transform: translateY(0px) translateX(0px); }
    33% { transform: translateY(-8px) translateX(4px); }
    66% { transform: translateY(4px) translateX(-3px); }
  }
`;

const HeroAnimation3D = memo(function HeroAnimation3D({ className = "" }: HeroAnimationProps) {
  // Injection des styles CSS dans le DOM
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = animationStyles;
    document.head.appendChild(styleElement);

    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`} style={{ pointerEvents: "none", overflow: "hidden" }}>
      {/* Animation minimaliste */}
      <div
        className="absolute inset-0"
        style={{
          animation: "float-gentle 8s ease-in-out infinite",
        }}
      >
        {/* Animation vide pour maintenir la performance */}
      </div>
    </div>
  );
});

export default HeroAnimation3D;
