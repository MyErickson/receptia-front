import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props: any) {
  const ref = useRef<any>();
  const [sphere] = useMemo(() => {
    const positions = random.inSphere(new Float32Array(2000 * 3), { radius: 1.5 });
    return [positions];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#1e40af"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingOrbs() {
  const meshRef = useRef<any>();
  const mesh2Ref = useRef<any>();
  const mesh3Ref = useRef<any>();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(time) * 0.3;
      meshRef.current.position.x = Math.cos(time * 0.5) * 0.2;
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.2;
    }
    
    if (mesh2Ref.current) {
      mesh2Ref.current.position.y = Math.cos(time * 1.2) * 0.4;
      mesh2Ref.current.position.x = Math.sin(time * 0.8) * 0.3;
      mesh2Ref.current.rotation.x = time * 0.4;
      mesh2Ref.current.rotation.z = time * 0.3;
    }
    
    if (mesh3Ref.current) {
      mesh3Ref.current.position.y = Math.sin(time * 0.7) * 0.2;
      mesh3Ref.current.position.z = Math.cos(time * 0.9) * 0.1;
      mesh3Ref.current.rotation.y = time * 0.5;
    }
  });

  return (
    <>
      {/* Orb 1 - Blue */}
      <mesh ref={meshRef} position={[-1.5, 0, -1]}>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshBasicMaterial
          color="#1e40af"
          transparent
          opacity={0.8}
          wireframe
        />
      </mesh>
      
      {/* Orb 2 - Purple */}
      <mesh ref={mesh2Ref} position={[1.2, -0.5, -0.8]}>
        <octahedronGeometry args={[0.25, 2]} />
        <meshBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.9}
          wireframe
        />
      </mesh>
      
      {/* Orb 3 - Orange */}
      <mesh ref={mesh3Ref} position={[0.5, 1, -1.2]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshBasicMaterial
          color="#ea580c"
          transparent
          opacity={0.7}
          wireframe
        />
      </mesh>
    </>
  );
}

interface HeroAnimation3DProps {
  className?: string;
}

export default function HeroAnimation3D({ className = '' }: HeroAnimation3DProps) {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ pointerEvents: 'none', zIndex: -1 }}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent', pointerEvents: 'none' }}
      >
        <Suspense fallback={null}>
          <Stars />
          <FloatingOrbs />
        </Suspense>
      </Canvas>
    </div>
  );
}