import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import './styles.css';

type MeshProps = {
  onClick: (event: any) => void;
};
const Mesh = ({ onClick }: MeshProps) => {
  return (
    <mesh onClick={onClick}>
      <boxBufferGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

type ModelProps = {
  url: string;
};

const Model = ({ url }: ModelProps) => {
  const groupRef = useRef<any>();
  const [message, setMessage] = useState('');
  const { camera } = useThree();

  const handleClick = (event: any) => {
    const clickedObject = event.object;
    if (clickedObject) {
      const { x, y, z } = clickedObject.position;
      const cameraPosition = { x: x + 5, y: y + 5, z: z + 5 };
      gsap.to(groupRef.current.position, {
        duration: 1,
        x: -x,
        y: -y,
        z: -z,
      });
      gsap.to(camera.position, {
        duration: 1,
        ...cameraPosition,
      });
      setMessage(`Clicked object: ${clickedObject.name}`);
    }
  };

  const gltfLoader = new GLTFLoader();
  gltfLoader.load(url, (gltf) => {
    const { scene } = gltf;
    const children = scene.children.filter((child) => child.type === 'Mesh');
    children.forEach((child) => {
      child.name = 'Mesh';
      child.userData = { onClick: handleClick };
    });
    groupRef.current.add(scene);
  });

  return (
    <group ref={groupRef}>
      <Mesh onClick={handleClick} />
      {message && (
        <Html>
        <div className="message-box">
          <span>{message}</span>
        </div></Html>
      )}
    </group>
  );
};

const TestMeshClicked = () => {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model url="/room.glb" />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default TestMeshClicked;
