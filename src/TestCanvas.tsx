import React, { useEffect, useRef, useState } from "react";
import { ContainerTest, Layer1, Layer2 } from "./GlobalStyle";
import { TrackballControls } from "@react-three/drei";

const TestCanvas = () => {
  const [windowX, setWindowX] = useState<number>(window.innerWidth);
  const [windowY, setWindowY] = useState<number>(window.innerHeight);

  useEffect(() => {
    const doParallax = (cursorX: number, cursorY: number) => {
      const pointX = windowX / 2 - cursorX;
      const pointY = windowY / 2 - cursorY;

      const layer1 = document.getElementById("layer-1");
      const layer2 = document.getElementById("layer-2");

      if (layer1 && layer2) {
        layer1.style.transform = `translate3d(${pointX / 40}px, ${
          pointY / 40
        }px, 0px)`;
        layer2.style.transform = `translate3d(${pointX / 20}px, ${
          pointY / 30
        }px, 0px)`;
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      doParallax(event.pageX, event.pageY);
    };

    setWindowX(window.innerWidth);
    setWindowY(window.innerHeight);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [windowX, windowY]);

  return (
    <ContainerTest>
      <Layer1 id="layer-1" className="layer" />
      <Layer2 id="layer-2" className="layer" />
      <canvas id="magic-dust" width="1000" height="1000">
        Your browser does not support HTML5 canvas
      </canvas>
    </ContainerTest>
  );
};

export default TestCanvas;
