import React, { Suspense, useRef } from "react";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { Mesh, Vector3 } from "three";
import * as THREE from "three";
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
  const textureBox = useLoader(THREE.TextureLoader, "./assets/wood.png");
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={ref} castShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial
        color="white"
        opacity={0.7}
        transparent
        // metalness={1}
        roughness={1}
        clearcoat={1}
        fog={false}
        transmission={1}
        reflectivity={1}
        side={THREE.DoubleSide}
        map={textureBox}
      />
    </mesh>
  );
};

const Floor = (props: any) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[10, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
};

const Bulb = (props: any) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

const TestThree = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        style={{ background: "#fff2f4" }}
        camera={{ position: [3, 3, 3] }}
        shadows
      >
        {/* <pointLight position={[10, 10, 10]} /> */}
        <Orbit />
        <ambientLight intensity={0.2} />
        <fog attach="fog" args={["white", 1, 8]} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>

        <Bulb position={[0, 2, 0]} />
        <axesHelper args={[5]} />
        <Floor position={[0, -1.5, 0]} />
      </Canvas>
    </div>
  );
};

export default TestThree;
