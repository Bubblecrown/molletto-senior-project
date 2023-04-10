import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { LayerImage, TaleSection } from "./GlobalStyle";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";
import "./locomotive-scroll.css";
import { Canvas } from "react-three-fiber";
import { FirstPersonControls, Html } from "@react-three/drei";

const FairyTale = () => {
  const scrollRef = useHorizontalScroll();
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: "horizontal",
        tablet: {
          smooth: true,
          direction: "horizontal",
        },
        smartphone: {
          smooth: true,
          direction: "horizontal",
        },
      }}
      watch={[]}
    >
      <TaleSection ref={containerRef} data-scroll-container>
        {/* test */}
        {/* 
        <Canvas data-scroll-section style={{ position: "relative" }}>
          <FirstPersonControls />
          <Html fullscreen>
            <div style={{ position: "relative" }}>
              <img
                data-scroll
                src="https://raw.githubusercontent.com/shansana/Simple-mouse-move-parallax/master/img/layer_1.png"
                alt=""
              />
              <img
                data-scroll
                src="https://raw.githubusercontent.com/shansana/Simple-mouse-move-parallax/master/img/layer_2.png"
                alt=""
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                }}
              />
            </div>
          </Html>
        </Canvas> */}
        {/* test */}
        <span data-scroll-section style={{ position: "relative" }}>
          <div style={{ position: "relative" }}>
            <img
              data-scroll
              src="https://raw.githubusercontent.com/shansana/Simple-mouse-move-parallax/master/img/layer_1.png"
              alt=""
            />
            <img
              data-scroll
              src="https://raw.githubusercontent.com/shansana/Simple-mouse-move-parallax/master/img/layer_2.png"
              alt=""
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
              }}
            />
          </div>
          <div>
            <img
              data-scroll
              src="https://raw.githubusercontent.com/shansana/Simple-mouse-move-parallax/master/img/layer_1.png"
              alt=""
            />
            <img
              data-scroll
              src="https://raw.githubusercontent.com/shansana/Simple-mouse-move-parallax/master/img/layer_2.png"
              alt=""
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: "1080px",
              }}
            />
          </div>
        </span>
        {/* tree */}

        {/* end tree */}
        {/* <span>
          <img
            src="https://preview.redd.it/2wnfdtan9dw41.png?auto=webp&s=0f5a488e3ba84fcf1b8de29d61cd4e18409a49d6"
            alt=""
          />
        </span> */}
      </TaleSection>
    </LocomotiveScrollProvider>
  );
};

export default FairyTale;
