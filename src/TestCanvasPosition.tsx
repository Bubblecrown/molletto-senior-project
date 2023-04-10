import {
  Html,
  Image,
  Scroll,
  ScrollControls,
  useAspect,
  useScroll,
} from "@react-three/drei";
import React from "react";
import { Canvas, useLoader, useThree } from "react-three-fiber";
import { Texture, TextureLoader } from "three";
import bg1 from "./assets/1.webp";
import bg2 from "./assets/2.avif";

const TestCanvasPosition = () => {
  const images = [bg1, bg2]; // Add more images here as needed
  const scrollData = useScroll();
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ScrollControls horizontal pages={3}>
          <Scroll>
            {/* <group position={[0, 0, 0]}> */}

            <Html fullscreen transform portal={{ current: scrollData.fixed }}>
              <img src={bg1}></img>
              {/* <img src={bg1}></img>
              <img src={bg1}></img> */}
            </Html>
            {/* <Image url={bg1} scale={[20, 20]} />
              <Image
                url="https://cdn.pixabay.com/photo/2020/11/15/18/51/cat-5746875_1280.png"
                scale={[10, 10]}
              /> */}
            {/* </group> */}
            {/* <group position={[16, 0, 0]}> */}
            {/* <Html fullscreen>
                <img src={bg2}></img>
              </Html> */}
            {/* <Image url={bg2} scale={[20, 20]} />
            </group>
            <group position={[32, 0, 0]}> */}
            {/* <Html fullscreen>
                <img src={bg2}></img>
              </Html> */}
            {/* <Image url={bg2} scale={[20, 20]} /> */}
            {/* </group> */}
          </Scroll>
          {/* <Scroll>
            <group position={[19, 0, 0]}>
              {/* <Html fullscreen>
                <img src={bg2}></img>
              </Html> */}
          {/* <Image url={bg2} scale={[20, 20]} /> */}
          {/* </group> */}
          {/* </Scroll> */}
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default TestCanvasPosition;
