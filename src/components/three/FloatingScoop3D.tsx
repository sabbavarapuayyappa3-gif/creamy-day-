"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface FloatingScoop3DProps {
  flavorColor?: string;
}

export function FloatingScoop3D({ flavorColor = "#FCE2C2" }: FloatingScoop3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Warm Food Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff8f0, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffecd1, 2.5);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xe69a3e, 1.5, 10);
    fillLight.position.set(-3, -2, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xff6b81, 1.2);
    rimLight.position.set(0, -3, -2);
    scene.add(rimLight);

    // Procedural Ice Cream Scoop with Organic Surface Noise
    const geometry = new THREE.IcosahedronGeometry(1.6, 24);
    const pos = geometry.attributes.position;
    const v = new THREE.Vector3();

    // Sculpt natural organic ice cream ridges
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      const noise =
        Math.sin(v.x * 4.0) * Math.cos(v.y * 3.5) * Math.sin(v.z * 4.2) * 0.12 +
        Math.sin(v.x * 9.0 + v.y * 7.0) * 0.04;
      v.multiplyScalar(1 + noise);
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(flavorColor),
      roughness: 0.45,
      metalness: 0.05,
    });

    const scoopMesh = new THREE.Mesh(geometry, material);
    scene.add(scoopMesh);

    // Floating micro sprinkles / vanilla flecks
    const flecksCount = 120;
    const flecksGeo = new THREE.BufferGeometry();
    const flecksPositions = new Float32Array(flecksCount * 3);

    for (let i = 0; i < flecksCount * 3; i += 3) {
      flecksPositions[i] = (Math.random() - 0.5) * 5;
      flecksPositions[i + 1] = (Math.random() - 0.5) * 5;
      flecksPositions[i + 2] = (Math.random() - 0.5) * 3;
    }
    flecksGeo.setAttribute("position", new THREE.BufferAttribute(flecksPositions, 3));

    const flecksMat = new THREE.PointsMaterial({
      color: 0x4a2e18, // Cocoa chocolate flake color
      size: 0.04,
      transparent: true,
      opacity: 0.7,
    });

    const flecks = new THREE.Points(flecksGeo, flecksMat);
    scene.add(flecks);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      scoopMesh.rotation.y = elapsed * 0.25 + targetX;
      scoopMesh.rotation.x = Math.sin(elapsed * 0.3) * 0.15 - targetY;
      scoopMesh.position.y = Math.sin(elapsed * 1.2) * 0.1;

      flecks.rotation.y = elapsed * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [flavorColor]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
