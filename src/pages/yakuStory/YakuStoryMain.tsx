import React, { useEffect, useLayoutEffect, useRef } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import { PNoto, TaleSection } from "../../GlobalStyle";
import {
  BackImage,
  BgImage,
  BgVideo,
  FrontImage,
  MidImage,
  ParallaxContainer,
  SFrontImage,
  TaleContainer,
  TextContainer,
} from "./YakuStyle";
import { YakuSceneData } from "../../data/yakuStory";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
import "../locomotive-scroll.css";
import { useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
const YakuStoryMain = () => {
  // const main = useRef<any>(null);
  // const q = gsap.utils.selector(main);
  // useEffect(() => {
  //   gsap.to(q(".b"), {
  //     x: 200,
  //     scrollTrigger: {
  //       trigger: q(".b"),
  //       start: "left 10px",
  //       end: "right center",
  //       scrub: true,
  //       markers: true,
  //       horizontal: true,
  //       id: "scrub",
  //     },
  //   });
  // }, []);
  // const containerRef = useRef<any>(null);

  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end end"],
  //   axis: "y",
  // });

  // const imageValue = useTransform(scrollYProgress, [0, 1], ["0", "100%"]);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <HorizontalScroll
        reverseScroll
        style={{
          overflow: "auto",
          height: "100%",
          width: "100%",
        }}
      >
        {/* scene 1 */}
        <TaleContainer>
          <TextContainer
            t="5%"
            l="35%"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                duration: 15,
              },
            }}
          >
            <PNoto>{YakuSceneData.scene_1.text}</PNoto>
          </TextContainer>

          <FrontImage
            src={YakuSceneData.scene_1.f}
            alt={YakuSceneData.scene_1.alt}
          />

          <BackImage
            src={YakuSceneData.scene_1.b}
            alt={YakuSceneData.scene_1.alt}
            initial={{ translateX: "-100%" }}
            animate={{
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 20,
                duration: 30,
                delay: 1,
              },
            }}
          />

          <BgImage
            src={YakuSceneData.scene_1.bg}
            alt={YakuSceneData.scene_1.bgAlt}
          />
        </TaleContainer>
        {/* end scene 1 */}

        {/* scene 1_2 */}
        <TaleContainer>
          <TextContainer
            t="30%"
            l="-30%"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                duration: 15,
              },
            }}
          >
            <PNoto>{YakuSceneData.scene_1_2.text}</PNoto>
          </TextContainer>
          <TextContainer
            t="55%"
            l="10%"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                duration: 15,
              },
            }}
          >
            <PNoto>{YakuSceneData.scene_1_2.text2}</PNoto>
          </TextContainer>
          <FrontImage
            src={YakuSceneData.scene_1_2.f}
            alt={YakuSceneData.scene_1_2.alt}
            initial={{ translateY: '-100%' }}
            whileInView={{
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 10,
                duration: 10,
                delay: 2,
              },
            }}
          />

          <BackImage
            initial={{ translateY: 100 }}
            whileInView={{
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                duration: 30,
                delay: 1,
              },
            }}
            src={YakuSceneData.scene_1_2.b}
            alt={YakuSceneData.scene_1_2.alt}
          />

          <BgImage
            src={YakuSceneData.scene_1_2.bg}
            alt={YakuSceneData.scene_1_2.bgAlt}
          />

          <FrontImage
            r="0"
            l="12px"
            lm="12px"
            src={YakuSceneData.scene_1_2.cl}
            alt={YakuSceneData.scene_1_2.alt}
          />
        </TaleContainer>
        {/* end scene 1_2 */}

        {/* scene 2 */}
        <TaleContainer>
          <FrontImage
            src={YakuSceneData.scene_2.cr}
            alt={YakuSceneData.scene_2.alt}
          />
          <MidImage
            src={YakuSceneData.scene_2.cl}
            alt={YakuSceneData.scene_2.alt}
          />

          <MidImage
            t="20%"
            src={YakuSceneData.scene_2.m}
            alt={YakuSceneData.scene_2.alt}
            initial={{ scale: 0.5 }}
            whileInView={{
              scale: 1,
              translateY: -100,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                duration: 15,
              },
            }}
          />
          <SFrontImage
            src={YakuSceneData.scene_2.sf}
            alt={YakuSceneData.scene_2.alt}
            initial={{ translateY: '-100%' }}
            whileInView={{
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 10,
                duration: 10,
                delay: 2,
              },
            }}
          />
          <BackImage
            src={YakuSceneData.scene_2.b}
            alt={YakuSceneData.scene_2.alt}
          />
          <TextContainer
            t="10%"
            l="55%"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                duration: 15,
              },
            }}
          >
            <PNoto>{YakuSceneData.scene_1_2.text2}</PNoto>
          </TextContainer>
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_2.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 2 */}

        {/* scene 2.2 */}
        <TaleContainer>
          <MidImage
            //  -speed="-3"
            // l="-300px"
            src={YakuSceneData.scene_2_2.m}
            alt={YakuSceneData.scene_2_2.alt}
          />
          <FrontImage
            //  -direction="vertical"
            //  -speed="-10"
            // t="-110%"
            src={YakuSceneData.scene_2_2.f}
            alt={YakuSceneData.scene_2_2.alt}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                duration: 15,
                delay: 1,
              },
            }}
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_2.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 2.2 */}

        {/* scene 3.1 */}
        <TaleContainer>
          <FrontImage
            src={YakuSceneData.scene_3.cl}
            alt={YakuSceneData.scene_3.alt}
          />

          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_3.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 3.1 */}

        {/* scene 4 */}
        <TaleContainer>
          <FrontImage
            src={YakuSceneData.scene_4.f}
            alt={YakuSceneData.scene_4.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_4.cr}
            alt={YakuSceneData.scene_4.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_4.cl}
            alt={YakuSceneData.scene_4.alt}
          />
          <BackImage
            src={YakuSceneData.scene_4.b}
            alt={YakuSceneData.scene_4.alt}
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_4.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 4 */}

        {/* scene 3_2 */}
        <TaleContainer>
          <FrontImage
            src={YakuSceneData.scene_3_2.f}
            alt={YakuSceneData.scene_3_2.alt}
            l="400px"
            t="-100px"
          />
          <FrontImage
            src={YakuSceneData.scene_3_2.cr}
            alt={YakuSceneData.scene_3_2.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_3_2.cl}
            alt={YakuSceneData.scene_3_2.alt}
          />
          <BackImage
            src={YakuSceneData.scene_3_2.b}
            alt={YakuSceneData.scene_3_2.alt}
          />
          <MidImage
            src={YakuSceneData.scene_3_2.m}
            alt={YakuSceneData.scene_3_2.alt}
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_3_2.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 3_2 */}

        {/* scene 5 */}
        <TaleContainer>
          <FrontImage
            src={YakuSceneData.scene_5.f}
            alt={YakuSceneData.scene_5.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_5.cr}
            alt={YakuSceneData.scene_5.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_5.cl}
            alt={YakuSceneData.scene_5.alt}
          />
          <BackImage
            src={YakuSceneData.scene_5.b}
            alt={YakuSceneData.scene_5.alt}
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_5.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 5 */}

        {/* scene 6 */}
        <TaleContainer>
          <FrontImage
            src={YakuSceneData.scene_6.f}
            alt={YakuSceneData.scene_6.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_6.cr}
            alt={YakuSceneData.scene_6.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_6.cl}
            alt={YakuSceneData.scene_6.alt}
          />
          <MidImage
            src={YakuSceneData.scene_6.m}
            alt={YakuSceneData.scene_6.alt}
          />
          <BackImage
            src={YakuSceneData.scene_6.b}
            alt={YakuSceneData.scene_6.alt}
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_6.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 6 */}

        {/* scene 7 */}
        <TaleContainer>
          <FrontImage
            src={YakuSceneData.scene_7.cl}
            alt={YakuSceneData.scene_7.alt}
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_7.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 7 */}

        {/* scene 8 */}
        <TaleContainer>
          <FrontImage
            src={YakuSceneData.scene_8.f}
            alt={YakuSceneData.scene_8.alt}
            t="100px"
          />
          <BackImage
            src={YakuSceneData.scene_8.cr}
            alt={YakuSceneData.scene_8.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_8.cl}
            alt={YakuSceneData.scene_8.alt}
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_8.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 8 */}

        {/* scene 9 */}
        <TaleContainer>
          <FrontImage
            src={YakuSceneData.scene_9.f}
            alt={YakuSceneData.scene_9.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_9.cr}
            alt={YakuSceneData.scene_9.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_9.cl}
            alt={YakuSceneData.scene_9.alt}
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_9.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 9 */}

        {/* scene 10 */}
        <TaleContainer>
          <FrontImage
            src={YakuSceneData.scene_10.f}
            alt={YakuSceneData.scene_10.alt}
            t="300px"
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_10.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 10 */}

        {/* scene 12 */}
        <TaleContainer>
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_12.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 12 */}

        {/* end tree */}
      </HorizontalScroll>
    </div>
  );
};

export default YakuStoryMain;
