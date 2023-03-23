import React, { Suspense, useEffect, useRef, useState } from "react";
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
import { DragControls } from "three/examples/jsm/controls/DragControls";
extend({ OrbitControls });
extend({ DragControls });

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

const Background = () => {
  const bgSky = useLoader(THREE.TextureLoader, "/sphere.png");
  const { gl } = useThree();
  const formatted = new THREE.WebGLCubeRenderTarget(
    bgSky.image.height
  ).fromEquirectangularTexture(gl, bgSky);

  return <primitive attach="background" object={formatted.texture} />;
};

const Box = (props: any) => {
  const ref = useRef<Mesh>(null);
  const textureBox = useLoader(THREE.TextureLoader, "/wood.png");
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  const handlePointerDown = (e: any) => {
    e.object.active = true;
    if (window.activeMesh) scaleDown(window.activeMesh);
    window.activeMesh = e.object;
  };

  const handlePointerEnter = (e: any) => {
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  };
  const handlePointerLeave = (e: any) => {
    if (!e.object.active) {
      scaleDown(e.object);
    }
  };
  const scaleDown = (object: any) => {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  };
  return (
    <mesh
      ref={ref}
      {...props}
      castShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <boxGeometry />
      <meshPhysicalMaterial color={props.bgColor} map={textureBox} />
    </mesh>
  );
};

const Floor = (props: any) => {
  return (
    <mesh {...props} receiveShadow>
      <boxGeometry args={[15, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
};

const Bulb = (props: any) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereGeometry />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

const TestThree = () => {
  const [bgColor, setBgColor] = useState("#fff2f4");
  const handleClick = (color: any) => {
    setBgColor(color);
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div style={{ position: "absolute", zIndex: 1 }}>
        <div
          onClick={() => handleClick("blue")}
          style={{ backgroundColor: "blue", width: 50, height: 50 }}
        ></div>
        <div
          onClick={() => handleClick("yellow")}
          style={{ backgroundColor: "yellow", width: 50, height: 50 }}
        ></div>
        <div
          onClick={() => handleClick("white")}
          style={{ backgroundColor: "white", width: 50, height: 50 }}
        ></div>
      </div>
      <Canvas
        style={{ background: bgColor }}
        camera={{ position: [3, 3, 3] }}
        shadows
      >
        <Orbit />
        <ambientLight intensity={0.2} />

        <Suspense fallback={null}>
          <Box position={[2, 0, 0]} bgColor={bgColor} />
        </Suspense>
        <Suspense fallback={null}>
          <Box position={[-2, 0, 0]} bgColor={bgColor} />
        </Suspense>

        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Bulb position={[0, 5, 0]} />
        <axesHelper args={[5]} />
        <Floor position={[0, -1.5, 0]} />
      </Canvas>
    </div>
  );
};
export default TestThree;
