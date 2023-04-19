import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import HorizontalScroll from "react-scroll-horizontal";
import { PNoto } from "../../GlobalStyle";
import {
  BackImage,
  BgImage,
  BgVideo,
  FrontImage,
  MidImage,
  SFrontImage,
  TaleContainer,
  TextContainer,
} from "./YakuStyle";
import { YakuSceneData } from "../../data/yakuStory";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../locomotive-scroll.css";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { useDrag } from "react-use-gesture";
import { useSpring } from "react-spring";
import { motion, transform, useScroll, useTransform } from "framer-motion";
import useParallax from "../../hooks/useParallax";

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

  // const containerRef = useRef<any>(null);
  // const home = useParallax({ speed: 10 });

  const { ref: ref1, animation: animation1 } = useParallax({ speed: 0.5 });
  const { ref: ref2, animation: animation2 } = useParallax({ speed: 0.2 });
  const carouselRef = useRef<any>(null);
  const { scrollX } = useScroll({
    container: carouselRef,
  });
  const { scrollXProgress } = useScroll();
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <HorizontalScroll
        reverseScroll
        style={{
          overflowX: "hidden",
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
          {/* <motion.div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: "10px",
              background: "red",
              transformOrigin: "0%",
              scaleX: scrollXProgress,
              zIndex: 200,
            }}
          ></motion.div> */}
          <FrontImage
            src={YakuSceneData.scene_1.f}
            alt={YakuSceneData.scene_1.alt}
          />
          <BackImage
            src={YakuSceneData.scene_1.b}
            alt={YakuSceneData.scene_1.alt}
            // initial={{ translateX: "-100%" }}
            // animate={{
            //   translateX: 0,
            //   transition: {
            //     type: "spring",
            //     stiffness: 10,
            //     damping: 20,
            //     duration: 20,
            //   },
            // }}

            style={{ scaleX: scrollXProgress }}
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
            t="50%"
            l="-10%"
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
          <FrontImage
            src={YakuSceneData.scene_1_2.f}
            alt={YakuSceneData.scene_1_2.alt}
            initial={{ translateY: "-100%" }}
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
            l="12px"
            lm="20px"
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
            src={YakuSceneData.scene_2.m}
            alt={YakuSceneData.scene_2.alt}
            initial={{ translateY: "100vh" }}
            whileInView={{
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 10,
                duration: 5,
                delay: 1,
              },
            }}
          />
          <SFrontImage
            src={YakuSceneData.scene_2.sf}
            alt={YakuSceneData.scene_2.alt}
            initial={{ translateX: -100, opacity: 0 }}
            whileInView={{
              translateX: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                duration: 10,
                delay: 1,
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
            <PNoto>{YakuSceneData.scene_2.text}</PNoto>
          </TextContainer>
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_2.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 2 */}
        {/* scene 2.2 */}
        <TaleContainer>
          <BackImage
            src={YakuSceneData.scene_2_2.cr}
            alt={YakuSceneData.scene_2_2.alt}
          />
          <BackImage
            src={YakuSceneData.scene_2_2.cl}
            alt={YakuSceneData.scene_2_2.alt}
          />
          <MidImage
            src={YakuSceneData.scene_2_2.m}
            alt={YakuSceneData.scene_2_2.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_2_2.f}
            alt={YakuSceneData.scene_2_2.alt}
            initial={{ opacity: 0, translateY: "-100vh" }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 20,
                duration: 15,
                delay: 2,
              },
            }}
          />
          <TextContainer
            t="10%"
            l="10%"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                duration: 15,
                delay: 2,
              },
            }}
          >
            <PNoto>{YakuSceneData.scene_2_2.text}</PNoto>
          </TextContainer>
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
          <FrontImage
            src={YakuSceneData.scene_3.f}
            alt={YakuSceneData.scene_3.alt}
          />
          <MidImage
            src={YakuSceneData.scene_3.m}
            alt={YakuSceneData.scene_3.alt}
          />
          <BackImage
            src={YakuSceneData.scene_3.b}
            alt={YakuSceneData.scene_3.alt}
            initial={{ translateY: "-100vh" }}
            whileInView={{
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 20,
                duration: 10,
                delay: 1,
              },
            }}
          />
          <BackImage
            src={YakuSceneData.scene_3.cr}
            alt={YakuSceneData.scene_3.alt}
          />
          <TextContainer
            t="60%"
            l="60%"
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
            <PNoto>{YakuSceneData.scene_3.text}</PNoto>
          </TextContainer>
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
            initial={{ translateY: "100vh", translateX: -150 }}
            whileInView={{
              translateY: 0,
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 15,
                duration: 20,
                delay: 2,
              },
            }}
          />
          <BackImage
            src={YakuSceneData.scene_4.b}
            alt={YakuSceneData.scene_4.alt}
            initial={{ translateY: "100vh" }}
            whileInView={{
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                duration: 20,
                delay: 2,
              },
            }}
          />
          <TextContainer
            t="10%"
            l="60%"
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
            <PNoto>{YakuSceneData.scene_4.text}</PNoto>
          </TextContainer>
          <FrontImage
            src={YakuSceneData.scene_4.cr}
            alt={YakuSceneData.scene_4.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_4.cl}
            alt={YakuSceneData.scene_4.alt}
          />

          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_4.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 4 */}

        {/* scene 3_2 */}
        <TaleContainer z={10}>
          <TextContainer
            t="50%"
            l="-10%"
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
            <PNoto>{YakuSceneData.scene_3_2.text}</PNoto>
          </TextContainer>
          <TextContainer
            t="55%"
            l="70%"
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
            <PNoto>{YakuSceneData.scene_3_2.text2}</PNoto>
          </TextContainer>
          <FrontImage
            src={YakuSceneData.scene_3_2.f}
            alt={YakuSceneData.scene_3_2.alt}
            l="300px"
            t="-150px"
            initial={{ translateY: -400, translateX: 150 }}
            whileInView={{
              translateY: 0,
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 10,
                duration: 10,
                delay: 2,
              },
            }}
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
            initial={{ translateY: "100vh", translateX: -300 }}
            whileInView={{
              translateY: 0,
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 20,
                duration: 20,
                delay: 2,
              },
            }}
          />
          <MidImage
            src={YakuSceneData.scene_3_2.m}
            alt={YakuSceneData.scene_3_2.alt}
            initial={{ translateY: "100vh", translateX: -300 }}
            whileInView={{
              translateY: 0,
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 20,
                duration: 20,
                delay: 2,
              },
            }}
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_3_2.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 3_2 */}

        {/* scene 5 */}
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
            <PNoto>{YakuSceneData.scene_5.text}</PNoto>
          </TextContainer>
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
            initial={{ translateX: "-100vw" }}
            whileInView={{
              translateX: "0",
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 10,
                duration: 15,
                delay: 2,
              },
            }}
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_5.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 5 */}

        {/* scene 6 */}
        <TaleContainer z={10}>
          <TextContainer
            t="5%"
            l="-5%"
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
            <PNoto>{YakuSceneData.scene_6.text}</PNoto>
          </TextContainer>
          <TextContainer
            t="60%"
            l="0%"
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
            <PNoto>{YakuSceneData.scene_6.text2}</PNoto>
          </TextContainer>
          <FrontImage
            src={YakuSceneData.scene_6.f}
            alt={YakuSceneData.scene_6.alt}
            initial={{ translateY: "-100vh", translateX: 100 }}
            whileInView={{
              translateY: "0",
              translateX: -50,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 15,
                duration: 15,
                delay: 2,
              },
            }}
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
            initial={{ translateY: "-100vh", translateX: -100 }}
            whileInView={{
              translateY: "0",
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 20,
                duration: 20,
                delay: 2,
              },
            }}
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
        <TaleContainer z={9}>
          <TextContainer
            t="5%"
            l="60%"
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
            <PNoto>{YakuSceneData.scene_7.text}</PNoto>
          </TextContainer>
          <FrontImage
            src={YakuSceneData.scene_7.cl}
            alt={YakuSceneData.scene_7.alt}
          />
          <SFrontImage
            src={YakuSceneData.scene_7.cr}
            alt={YakuSceneData.scene_7.alt}
          />
          <MidImage
            src={YakuSceneData.scene_7.f}
            alt={YakuSceneData.scene_7.alt}
            initial={{ translateY: "100px", translateX: "-100vw" }}
            whileInView={{
              translateY: "0",
              translateX: "0",
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 10,
                duration: 15,
                delay: 2,
              },
            }}
          />
          <BackImage
            src={YakuSceneData.scene_7.b}
            alt={YakuSceneData.scene_7.alt}
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_7.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 7 */}

        {/* scene 8 */}
        <TaleContainer z={8}>
          <TextContainer
            t="60%"
            l="60%"
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
            <PNoto>{YakuSceneData.scene_8.text}</PNoto>
          </TextContainer>
          <MidImage
            src={YakuSceneData.scene_8.f}
            alt={YakuSceneData.scene_8.alt}
            initial={{ translateX: -400, translateY: 500 }}
            whileInView={{
              translateX: 0,
              translateY: 30,
              transition: {
                type: "spring",
                stiffness: 30,
                damping: 10,
                duration: 5,
                delay: 2,
              },
            }}
          />
          <FrontImage
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
        <TaleContainer z={8}>
          <TextContainer
            t="10%"
            l="50%"
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
            <PNoto>{YakuSceneData.scene_9.text}</PNoto>
          </TextContainer>
          <FrontImage
            src={YakuSceneData.scene_9.f}
            alt={YakuSceneData.scene_9.alt}
            initial={{ translateY: 600 }}
            whileInView={{
              translateY: 30,
              transition: {
                type: "spring",
                stiffness: 30,
                damping: 10,
                duration: 5,
              },
            }}
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
        <TaleContainer z={7}>
          <TextContainer
            t="10%"
            l="50%"
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
            <PNoto>{YakuSceneData.scene_10.text}</PNoto>
          </TextContainer>
          <FrontImage
            src={YakuSceneData.scene_10.f}
            alt={YakuSceneData.scene_10.alt}
            t="100px"
            l="-500px"
            initial={{ rotate: -90, translateY: 0, translateX: 0 }}
            whileInView={{
              rotate: 0,
              translateY: 300,translateX: 100,
              transition: {
                type: "spring",
                stiffness: 30,
                damping: 10,
                duration: 5,
                delay: 2,
              },
            }}
          />
          <FrontImage
            src={YakuSceneData.scene_10.cl}
            alt={YakuSceneData.scene_10.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_10.cr}
            alt={YakuSceneData.scene_10.alt}
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
