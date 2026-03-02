import React, { useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { EffectComposer, ToneMapping, Noise, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';
import 'remixicon/fonts/remixicon.css';

// Add a title for each image
const images = [
  { url: '/projectImages/p1.png', link: 'https://example.com/1', title: 'click to view' },
  { url: '/projectImages/p2.png', link: 'https://example.com/2', title: 'click to view' },
  { url: '/projectImages/p4.png', link: 'https://example.com/4', title: 'click to view' },
  { url: '/projectImages/p7.png', link: 'https://example.com/7', title: 'click to view' },
  { url: '/projectImages/p8.png', link: 'https://example.com/8', title: 'click to view' },
];

function ImagePlane({ url, link, title, position, angle }) {
  const meshRef = useRef();
  const texture = useLoader(THREE.TextureLoader, url);
  const image = texture.image;

  if (!image) return null; // Wait for texture to load

  const aspectRatio = image.width / image.height;
  const height = 2.0;               // Fixed height for all images
  const width = height * aspectRatio;

  const handleClick = () => window.open(link, '_blank');

  return (
    <group position={position}>
      {/* Image plane – faces the center of the circle */}
      <mesh
        ref={meshRef}
        rotation-y={Math.PI / 2 - angle + Math.PI}
        onClick={handleClick}
        onPointerEnter={() => (document.body.style.cursor = "grab")}
        onPointerLeave={() => (document.body.style.cursor = 'auto')}
      >
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent />
      </mesh>

      {/* Website name label – placed below the image */}
      <Text
        position={[0, -1.2, 0]}
        rotation-y={Math.PI / 2 - angle + Math.PI}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="top"
        fontWeight="bold"
        outlineWidth={0.02}
       
      >
        {title}
      </Text>
    </group>
  );
}

function Scene() {
  const radius = 5;                  // Larger radius reduces side distortion
  const count = images.length;

  return (
    <group rotation={[0, 0.2, 0]}>
      {/* Optional: faint cylinder to show the circle */}
      

      {images.map((img, i) => {
        const angle = (i / count) * Math.PI * 2;
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        return (
          <ImagePlane
            key={i}
            url={img.url}
            link={img.link}
            title={img.title}
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
    <div className="h-screen w-screen bg-black relative">
      <div className="inline-flex items-center gap-1 text-[#e0e7ef] bg-[#1D79D3] px-4 py-2 rounded-full shadow-lg shadow-[#1D79D3]/20 absolute left-1/2 -translate-x-1/2 top-[10%] z-10">
        <i className="ri-cursor-line text-xl"></i>
        <span className="text-sm font-medium">Website</span>
      </div>
      <div className="title text-white text-5xl absolute top-[20%] left-1/2 -translate-x-1/2 z-10">
        Our Best Work
      </div>

      <Canvas
        flat
        camera={{
          fov: 50,                    // Narrower FOV = less distortion
          near: 0.1,
          far: 1000,
          position: [0, 1, 5]         // Outside the circle, looking at center
        }}
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={0.5}
          target={[0, 0, 0]}          // Look at center
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