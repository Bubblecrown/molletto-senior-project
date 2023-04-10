import { Html, Image, Scroll, ScrollControls } from "@react-three/drei";
import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import bg1 from "./assets/1.webp";
import bg2 from "./assets/2.avif";

import { useWheel } from "react-use-gesture";

const TestLongSceneScroll = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ScrollControls horizontal pages={3}>
          <Scroll html>
            <div
              style={{ width: "300%", height: "100vh", position: "relative" }}
            >
              <img
                src={bg2}
                style={{
                  height: "100vh",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              ></img>
              <img
                src={bg1}
                style={{
                  height: "100vh",
                  position: "absolute",
                  top: 0,
                  left: 1080,
                }}
              ></img>
              <img
                src={bg2}
                style={{
                  height: "100vh",
                  position: "absolute",
                  top: 0,
                  left: 2160,
                }}
              ></img>
            </div>
          </Scroll>
          <Scroll></Scroll>
          <Scroll></Scroll>
          <Scroll></Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
};
export default TestLongSceneScroll;
