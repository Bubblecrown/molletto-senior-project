import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { LayerImage, TaleSection } from "./GlobalStyle";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";
import "./locomotive-scroll.css";
import { Canvas } from "react-three-fiber";
import { FirstPersonControls, Html } from "@react-three/drei";
import long from "./assets/longscene.png";
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
        <span className="data-scroll-long" data-scroll-section style={{ position: "relative" }}>
          {/* <img
          data-scroll
          src={long}
          alt=""
        /> */}
          <img
            data-scroll
            src={long}
            alt=""
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
            
          />
        </span>
        {/* tree */}

        <span data-scroll-section>
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
        </span>
        <span data-scroll-section>
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
        </span>
        <span data-scroll-section>
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
        </span>
        <span data-scroll-section>
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
        </span>
        <span data-scroll-section>
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
        </span>
        <span data-scroll-section>
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
        </span>
        <span data-scroll-section>
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
        </span>
        <span data-scroll-section>
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
        </span>
        <span data-scroll-section>
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
        </span>
        <span data-scroll-section>
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
        </span>
        <span data-scroll-section>
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
        </span>
        <span data-scroll-section>
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
        </span>
        <span data-scroll-section>
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
        </span>
        <span data-scroll-section>
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
        </span>
        <span data-scroll-section>
          <img
            data-scroll
            src="https://raw.githubusercontent.com/shansana/Simple-mouse-move-parallax/master/img/layer_1.png"
            alt=""
          />
          <img
            src="https://www.seekpng.com/png/full/289-2898029_medium-image-clip-art-cartoon-tree.png"
            data-scroll
            alt=""
            style={{
              zIndex: 2,
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          />
        </span>
        <span data-scroll-section>
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
        </span>
        <span data-scroll-section>
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
        </span>
        {/* end tree */}
      </TaleSection>
    </LocomotiveScrollProvider>
  );
};

export default FairyTale;
