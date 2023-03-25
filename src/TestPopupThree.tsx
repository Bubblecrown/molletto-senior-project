import React, { useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion } from "framer-motion";
import * as THREE from "three";
import Room from "../Room";
function Scene() {
  const gltf = useLoader(GLTFLoader, "/room.gltf");
  return <primitive object={gltf.scene} />;
}

const CameraController = ({ target, duration }: any) => {
  const { camera } = useThree();
  const [position, setPosition] = useState(new THREE.Vector3(-20, 0, 20));
  const [isAnimating, setIsAnimating] = useState(true);

  useFrame((state, delta) => {
    if (target && isAnimating) {
      // Smoothly move camera to target
      const newPosition = position.clone().lerp(target, delta * duration);
      setPosition(newPosition);
      camera.position.set(newPosition.x, newPosition.y, newPosition.z);
      // camera.lookAt(0, 0, 0);

      // Update camera position state variable
      if (newPosition.distanceTo(target) < 0.1) {
        setPosition(target);
        setIsAnimating(false);
      }
    }
  });

  return <OrbitControls />;
};

const TestPopupThree = () => {
  const [target, setTarget] = useState<THREE.Vector3 | null>(null);

  const handleClick = () => {
    setTarget(new THREE.Vector3(10, 8, 5));
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [-20, 0, 20] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Room position={[0, -1, 0]} />
        <axesHelper args={[10]} />
        {/* <perspectiveCamera position={[10, 10, 10]}/> */}
        <CameraController target={target} duration={2} />
      </Canvas>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", bottom: "10%", left: "50%" }}>
          <button onClick={handleClick}>Move Camera</button>
        </div>
      </div>
    </div>
  );
};

export default TestPopupThree;

