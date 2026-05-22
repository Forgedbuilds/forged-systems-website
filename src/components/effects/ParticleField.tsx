'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props {
  count?: number;
}

export default function ParticleField({ count }: Props) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const isMobile = window.innerWidth < 768;
    const particleCount = count ?? (isMobile ? 400 : 800);

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, el.clientWidth / el.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);

    // Particles
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    const orangeColor = new THREE.Color('#ff6b1a');
    const goldColor = new THREE.Color('#ffaa33');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const color = Math.random() > 0.5 ? orangeColor : goldColor;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      velocities[i * 3] = (Math.random() - 0.5) * 0.002;
      velocities[i * 3 + 1] = Math.random() * 0.003 + 0.001;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse repulsion
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize
    const onResize = () => {
      if (!el) return;
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // Pause on hidden tab
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(animate);
    };
    document.addEventListener('visibilitychange', onVisibility);

    let raf: number;
    const posArr = geometry.attributes.position.array as Float32Array;

    const animate = () => {
      raf = requestAnimationFrame(animate);

      for (let i = 0; i < particleCount; i++) {
        // Drift upward
        posArr[i * 3 + 1] += velocities[i * 3 + 1];

        // Gentle mouse repulsion
        const dx = posArr[i * 3] - mouse.x * 5;
        const dy = posArr[i * 3 + 1] - mouse.y * 5;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 2) {
          posArr[i * 3] += (dx / dist) * 0.01;
          posArr[i * 3 + 1] += (dy / dist) * 0.01;
        }

        // Wrap around top
        if (posArr[i * 3 + 1] > 10) {
          posArr[i * 3 + 1] = -10;
        }
      }

      geometry.attributes.position.needsUpdate = true;
      particles.rotation.y += 0.0002;
      renderer.render(scene, camera);
    };

    const startOnLoad = () => {
      raf = requestAnimationFrame(animate);
    };

    if (document.readyState === 'complete') {
      startOnLoad();
    } else {
      window.addEventListener('load', startOnLoad, { once: true });
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (el.contains(renderer.domElement)) {
        el.removeChild(renderer.domElement);
      }
    };
  }, [count]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
