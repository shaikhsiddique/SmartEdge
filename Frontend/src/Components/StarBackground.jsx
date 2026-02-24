import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const width = mountNode.clientWidth;
    const height = mountNode.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 2000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountNode.appendChild(renderer.domElement);

    // Create a white dot texture programmatically
    const createWhiteDotTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const context = canvas.getContext('2d');
      
      // Create gradient for a soft white dot
      const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, 32, 32);
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const starTexture = createWhiteDotTexture();

    const starCount = 10000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3); // For random star colors

    for (let i = 0; i < starCount * 3; i += 3) {
      // Random positions
      positions[i] = (Math.random() - 0.5) * 2000;
      positions[i + 1] = (Math.random() - 0.5) * 2000;
      positions[i + 2] = (Math.random() - 0.5) * 2000;
      
      // Random colors (mostly white with some blue/purple tint)
      const colorVariation = Math.random() * 0.4 + 0.6;
      colors[i] = colorVariation; // R
      colors[i + 1] = colorVariation; // G
      colors[i + 2] = Math.random() * 0.2 + 0.8; // B (slightly blue tint)
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 3,
      sizeAttenuation: true,
      map: starTexture,
      transparent: true,
      alphaTest: 0.01,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true, // Use vertex colors for color variation
      opacity: 0.9,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // Add some larger "bright" stars
    const brightStarsCount = 100;
    const brightStarsPositions = new Float32Array(brightStarsCount * 3);
    const brightStarsGeometry = new THREE.BufferGeometry();
    
    for (let i = 0; i < brightStarsCount * 3; i += 3) {
      brightStarsPositions[i] = (Math.random() - 0.5) * 1800;
      brightStarsPositions[i + 1] = (Math.random() - 0.5) * 1800;
      brightStarsPositions[i + 2] = (Math.random() - 0.5) * 1800;
    }
    
    brightStarsGeometry.setAttribute("position", new THREE.BufferAttribute(brightStarsPositions, 3));
    
    const brightStarsMaterial = new THREE.PointsMaterial({
      size: 5,
      sizeAttenuation: true,
      map: starTexture,
      transparent: true,
      alphaTest: 0.01,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0xffffff,
      opacity: 1.0,
    });
    
    const brightStars = new THREE.Points(brightStarsGeometry, brightStarsMaterial);
    scene.add(brightStars);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      stars.rotation.y -= 0.001;
      stars.rotation.x -= 0.0002;
      brightStars.rotation.y -= 0.0003;
      brightStars.rotation.x -= 0.0001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const w = mountNode.clientWidth;
      const h = mountNode.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      
      // Safely cleanup Three.js resources
      if (mountNode && renderer.domElement) {
        mountNode.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      brightStarsGeometry.dispose();
      brightStarsMaterial.dispose();
      starTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position:"absolute",
        inset: 0,
        zIndex: -1,
        background: "linear-gradient(to bottom, #000000 0%, #0a0a2a 50%, #000033 100%)",
      }}
    />
  );
}