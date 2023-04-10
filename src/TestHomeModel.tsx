import React from "react";
import { Canvas, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const  TestHomeModel = () => {
  const gltf = useLoader(GLTFLoader, "/Home.gltf");
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <primitive object={gltf.scene} position={[0, 0, 0]}></primitive>
      </Canvas>
      <div id="instructions">Doubleclick to slide to the circle</div>
    </div>
  );
};

export default TestHomeModel;
