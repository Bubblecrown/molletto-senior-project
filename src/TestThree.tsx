import React, { useRef } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { Mesh } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./interfaces/OrbitControls";
extend({ OrbitControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  // x - red
  // y - green
  // z - blue
  return <orbitControls args={[camera, gl.domElement]} />;
};

const Box = () => {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={ref}>
      <boxBufferGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const TestThree = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas style={{ background: "#fff2f4" }}>
        <pointLight position={[10, 10, 10]} />
        <Orbit />
        <Box />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
};

export default TestThree;
