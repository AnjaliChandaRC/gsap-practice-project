import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Hand = () => {
  const canvasRef = useRef();

  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // Create hand geometry
    const handGeometry = new THREE.BoxGeometry(1, 2, 0.5);
    const handMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const hand = new THREE.Mesh(handGeometry, handMaterial);
    scene.add(hand);

    // Create fingers
    const fingerGeometry = new THREE.BoxGeometry(0.2, 1, 0.2);
    const fingerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

    for (let i = 0; i < 5; i++) {
      const finger = new THREE.Mesh(fingerGeometry, fingerMaterial);
      finger.position.x = (i - 2) * 0.4; // Adjust position for each finger
      hand.add(finger);
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the hand
      hand.rotation.x += 0.01;
      hand.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default Hand;
