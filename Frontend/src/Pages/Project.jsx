import React, { useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, ToneMapping, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

// Image data (11 images)
const images = [
  { url: '/projectImages/p1.png', link: 'https://example.com/1' },
  { url: '/projectImages/p2.png', link: 'https://example.com/2' },
  { url: '/projectImages/p3.png', link: 'https://example.com/3' },
  { url: '/projectImages/p4.png', link: 'https://example.com/4' },
  { url: '/projectImages/p5.png', link: 'https://example.com/5' },
  { url: '/projectImages/p6.png', link: 'https://example.com/6' },
  { url: '/projectImages/p7.png', link: 'https://example.com/7' },
  { url: '/projectImages/p8.png', link: 'https://example.com/8' },
  { url: '/projectImages/p9.png', link: 'https://example.com/9' },
  { url: '/projectImages/p10.png', link: 'https://example.com/10' },
  { url: '/projectImages/p11.png', link: 'https://example.com/11' },
];

// Component that adjusts plane size to match image aspect ratio
function ImagePlane({ url, link, position, angle }) {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, url);
  const image = texture.image;
  const aspectRatio = image ? image.width / image.height : 1;

  const height = 2.0;
  const width = height * aspectRatio;

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      // Rotate to face inward: add 180° (PI) to the outward-facing rotation
      rotation-y={Math.PI / 2 - angle + Math.PI}
      onClick={handleClick}
      onPointerEnter={() => (document.body.style.cursor = 'pointer')}
      onPointerLeave={() => (document.body.style.cursor = 'auto')}

    >
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent />
    </mesh>
  );
}

function Scene() {
  const radius = 7.5;
  const count = images.length;

  return (
    <group rotation={[0, 0.2, 0]}>
      {/* Very subtle cylinder guide (optional) */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[radius, radius, 3, 64, 1, true, 0, Math.PI * 2]} />
        <meshBasicMaterial transparent opacity={0.05} side={THREE.DoubleSide} color="#888888" />
      </mesh>

      {images.map((img, i) => {
        const angle = (i / count) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        return (
          <ImagePlane
            key={i}
            url={img.url}
            link={img.link}
            position={[x, 0, z]}
            angle={angle}
          />
        );
      })}
    </group>
  );
}

export default function Project() {
  return (
    <div className="h-screen w-screen bg-black ">
      <Canvas
        flat
        camera={{
          fov: 45,
          position: [0, 0, 2] // inside the cylinder
        }}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          autoRotate={true}          // enable auto-rotation
          autoRotateSpeed={0.5}       // very slow rotation to the right
        />
        <Scene />
        <EffectComposer>
          <ToneMapping adaptive />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}