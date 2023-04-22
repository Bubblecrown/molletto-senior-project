import React, { useCallback, useEffect, useRef, useState } from "react";
import HorizontalScroll from "./HorizontalScroll";
import {
  BackImage,
  BgImage,
  BgVideo,
  FrontImage,
  MidImage,
  SFrontImage,
  TaleContainer,
  TextContainer,
} from "../pages/yakuStory/YakuStyle";
import { YakuSceneData } from "../data/yakuStory";
import { PNoto } from "../GlobalStyle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import { sceneEffectFunctions } from "./sceneEffectFunctions";
gsap.registerPlugin(ScrollTrigger);

interface ParallaxEffectParams {
  scrollPosition: number;
  sceneStart: number;
  sceneEnd: number;
  effectFactor: number;
  maxTranslation: number;
}

const calculateParallaxEffect = ({
  scrollPosition,
  sceneStart,
  sceneEnd,
  effectFactor,
  maxTranslation,
}: ParallaxEffectParams): number => {
  const scrollRange = sceneEnd - sceneStart;
  const relativeScroll = Math.max(
    0,
    Math.min(scrollPosition - sceneStart, scrollRange)
  );
  const effect = Math.min(relativeScroll * effectFactor, maxTranslation);
  return effect;
};

function Main() {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = useCallback((e: any) => {
  //   setScrollPosition(e.target.scrollLeft);
  // }, []);
  // const maxTranslation = 700;
  // const frontImageScrollX = Math.min(scrollPosition * 0.3, maxTranslation);
  // const midImageScrollX = Math.min(scrollPosition * 0.2, maxTranslation);
  // const backImageScrollX = Math.min(scrollPosition * 0.1, maxTranslation);

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollLeft);
  }, []);

  // Calculate the effects for each scene
  const sceneEffects = sceneEffectFunctions.map((calculateEffect) =>
    calculateEffect(scrollPosition)
  );

  return (
    <>
      <HorizontalScroll onScroll={handleScroll}>
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
            style={{ transform: `translateX(${sceneEffects[0].y}px)` }}
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
            t="-700px"
            l="none"
            r="300px"
            style={{ transform: `translateY(${sceneEffects[1].y}px)` }}
          />

          <BackImage
            t="700px"
            l="none"
            src={YakuSceneData.scene_1_2.b}
            alt={YakuSceneData.scene_1_2.alt}
            style={{ transform: `translateY(-${sceneEffects[1].y}px)` }}
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
            l="400px"
            t="700px"
            src={YakuSceneData.scene_2.m}
            alt={YakuSceneData.scene_2.alt}
            style={{ transform: `translateY(-${sceneEffects[2].y}px)` }}
          />
          <SFrontImage
            r="none"
            l="200px"
            src={YakuSceneData.scene_2.sf}
            alt={YakuSceneData.scene_2.alt}
            style={{ transform: `translateX(-${sceneEffects[2].x}px)` }}
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
            l="none"
            t="-300px"
            src={YakuSceneData.scene_2_2.f}
            alt={YakuSceneData.scene_2_2.alt}
            style={{ transform: `translateY(${sceneEffects[3]}px)` }}
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
        <TaleContainer z={10}>
          <FrontImage
            src={YakuSceneData.scene_3.cl}
            alt={YakuSceneData.scene_3.alt}
          />
          <FrontImage
            r="none"
            l="50px"
            src={YakuSceneData.scene_3.f}
            alt={YakuSceneData.scene_3.alt}
            initial={{ translateY: -700 }}
            whileInView={{
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                duration: 10,
                delay: 1,
              },
            }}
          />
          <MidImage
            r="none"
            l="480px"
            src={YakuSceneData.scene_3.m}
            alt={YakuSceneData.scene_3.alt}
          />
          <BackImage
            r="50px"
            l="150px"
            src={YakuSceneData.scene_3.b}
            alt={YakuSceneData.scene_3.alt}
            initial={{ translateY: -700 }}
            whileInView={{
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 20,
                duration: 10,
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
        <TaleContainer z={9}>
          <FrontImage
            l="620px"
            r="none"
            src={YakuSceneData.scene_4.f}
            alt={YakuSceneData.scene_4.alt}
            initial={{ translateY: 500, translateX: -150 }}
            whileInView={{
              translateY: 0,
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 10,
              },
            }}
          />
          <BackImage
            r="none"
            src={YakuSceneData.scene_4.b}
            alt={YakuSceneData.scene_4.alt}
            initial={{ translateX: -150 }}
            whileInView={{
              translateX: -0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 20,
                duration: 20,
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
        <TaleContainer z={8}>
          <TextContainer
            t="55%"
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
            <PNoto>{YakuSceneData.scene_3_2.text2}</PNoto>
          </TextContainer>
          <FrontImage
            src={YakuSceneData.scene_3_2.f}
            alt={YakuSceneData.scene_3_2.alt}
            l="none"
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
              },
            }}
          />
          <FrontImage
            src={YakuSceneData.scene_3_2.cr}
            alt={YakuSceneData.scene_3_2.alt}
            l="-2px"
          />
          <FrontImage
            src={YakuSceneData.scene_3_2.cl}
            alt={YakuSceneData.scene_3_2.alt}
          />
          <BackImage
            r="none"
            src={YakuSceneData.scene_3_2.b}
            alt={YakuSceneData.scene_3_2.alt}
            initial={{ translateY: 400, translateX: -300 }}
            whileInView={{
              translateY: 0,
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 20,
                duration: 20,
              },
            }}
          />
          <MidImage
            l="100px"
            r="none"
            src={YakuSceneData.scene_3_2.m}
            alt={YakuSceneData.scene_3_2.alt}
            initial={{ translateY: 700, translateX: -300 }}
            whileInView={{
              translateY: 0,
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 20,
                duration: 20,
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
            l="none"
            src={YakuSceneData.scene_5.f}
            alt={YakuSceneData.scene_5.alt}
            initial={{ translateX: 500 }}
            whileInView={{
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 10,
                duration: 15,
              },
            }}
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
                damping: 20,
                delay: 1,
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
            t="55%"
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
            <PNoto>{YakuSceneData.scene_6.text2}</PNoto>
          </TextContainer>
          <FrontImage
            l="none"
            src={YakuSceneData.scene_6.f}
            alt={YakuSceneData.scene_6.alt}
            initial={{ translateY: -700, translateX: 100 }}
            whileInView={{
              translateY: 0,
              translateX: -50,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 10,
                duration: 10,
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
            l="none"
            src={YakuSceneData.scene_6.m}
            alt={YakuSceneData.scene_6.alt}
            initial={{ translateY: -500, translateX: -100 }}
            whileInView={{
              translateY: 0,
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 30,
                duration: 20,
              },
            }}
          />
          <BackImage
            r="none"
            l="500px"
            src={YakuSceneData.scene_6.b}
            alt={YakuSceneData.scene_6.alt}
            initial={{ translateY: 700 }}
            whileInView={{
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 20,
                duration: 10,
              },
            }}
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
            l="-1px"
          />
          <MidImage
            r="none"
            l="50px"
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
              },
            }}
          />
          <BackImage
            l="none"
            r="300px"
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
            t="50%"
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
            <PNoto>{YakuSceneData.scene_8.text}</PNoto>
          </TextContainer>
          <MidImage
            l="200px"
            src={YakuSceneData.scene_8.f}
            alt={YakuSceneData.scene_8.alt}
            initial={{ translateX: -400, translateY: 700 }}
            whileInView={{
              translateX: 0,
              translateY: 30,
              transition: {
                type: "spring",
                stiffness: 30,
                damping: 10,
                duration: 5,
                delay: 2.5,
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
            l="300px"
            r="none"
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
            initial={{ rotate: -90, translateY: 0, translateX: 100 }}
            whileInView={{
              rotate: 0,
              translateY: 300,
              translateX: 300,
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

        {/* scene 11 */}
        <TaleContainer z={6}>
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
            <PNoto>{YakuSceneData.scene_11.text}</PNoto>
          </TextContainer>
          <FrontImage
            r="none"
            src={YakuSceneData.scene_11.f}
            alt={YakuSceneData.scene_11.alt}
            initial={{ translateX: -500 }}
            whileInView={{
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 5,
              },
            }}
          />

          <MidImage
            src={YakuSceneData.scene_11.m}
            alt={YakuSceneData.scene_11.alt}
            initial={{ translateX: 1000 }}
            whileInView={{
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 30,
                duration: 5,
              },
            }}
          />
          <BackImage
            r="none"
            l="320px"
            src={YakuSceneData.scene_11.b}
            alt={YakuSceneData.scene_11.alt}
            initial={{ translateX: 100 }}
            whileInView={{
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 5,
              },
            }}
          />
          <FrontImage
            src={YakuSceneData.scene_11.cl}
            alt={YakuSceneData.scene_11.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_11.cr}
            alt={YakuSceneData.scene_11.alt}
            l="-1px"
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_11.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 11 */}
        {/* scene 12 */}
        <TaleContainer z={10}>
          <TextContainer
            t="55%"
            l="40%"
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
            <PNoto>{YakuSceneData.scene_12.text}</PNoto>
          </TextContainer>

          <FrontImage
            r="none"
            l="200px"
            src={YakuSceneData.scene_12.f}
            alt={YakuSceneData.scene_12.alt}
            initial={{ translateX: -200, translateY: 500 }}
            whileInView={{
              translateX: 0,
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 15,
                duration: 5,
              },
            }}
          />

          <MidImage
            r="none"
            src={YakuSceneData.scene_12.m}
            alt={YakuSceneData.scene_12.alt}
            initial={{ translateX: -100 }}
            whileInView={{
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 20,
                duration: 5,
              },
            }}
          />
          <BackImage
            r="none"
            src={YakuSceneData.scene_12.b}
            alt={YakuSceneData.scene_12.alt}
            initial={{ translateY: 500 }}
            whileInView={{
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 5,
              },
            }}
          />
          <FrontImage
            src={YakuSceneData.scene_12.cl}
            alt={YakuSceneData.scene_12.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_12.cr}
            alt={YakuSceneData.scene_12.alt}
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_12.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 12 */}

        {/* scene 13 */}
        <TaleContainer z={10}>
          <TextContainer
            t="55%"
            l="5%"
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
            <PNoto>{YakuSceneData.scene_13.text}</PNoto>
          </TextContainer>

          <FrontImage
            src={YakuSceneData.scene_13.f}
            alt={YakuSceneData.scene_13.alt}
            initial={{ translateX: 1000 }}
            whileInView={{
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 5,
                delay: 1,
              },
            }}
          />

          <BackImage
            src={YakuSceneData.scene_13.b}
            alt={YakuSceneData.scene_13.alt}
            initial={{ translateX: -100 }}
            whileInView={{
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 20,
                duration: 5,
                delay: 1,
              },
            }}
          />
          <FrontImage
            src={YakuSceneData.scene_13.cl}
            alt={YakuSceneData.scene_13.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_13.cr}
            alt={YakuSceneData.scene_13.alt}
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_13.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 13 */}

        {/* scene 14 */}
        <TaleContainer z={10}>
          <TextContainer
            t="15%"
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
            <PNoto>{YakuSceneData.scene_14.text}</PNoto>
          </TextContainer>

          <FrontImage
            src={YakuSceneData.scene_14.f}
            alt={YakuSceneData.scene_14.alt}
            initial={{ translateY: 700 }}
            whileInView={{
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 5,
                delay: 1,
              },
            }}
          />

          <MidImage
            src={YakuSceneData.scene_14.m}
            alt={YakuSceneData.scene_14.alt}
            initial={{ translateX: -50, translateY: 100 }}
            whileInView={{
              translateX: 0,
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 40,
                duration: 5,
                delay: 1,
              },
            }}
          />

          <FrontImage
            src={YakuSceneData.scene_14.cl}
            alt={YakuSceneData.scene_14.alt}
          />
          <FrontImage
            src={YakuSceneData.scene_14.cr}
            alt={YakuSceneData.scene_14.alt}
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_14.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 14 */}

        {/* scene 15 */}
        <TaleContainer z={11}>
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
            <PNoto>{YakuSceneData.scene_15.text}</PNoto>
          </TextContainer>

          <FrontImage
            l="none"
            src={YakuSceneData.scene_15.f}
            alt={YakuSceneData.scene_15.alt}
            initial={{ translateY: 100 }}
            whileInView={{
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 5,
              },
            }}
          />

          <MidImage
            src={YakuSceneData.scene_15.m}
            alt={YakuSceneData.scene_15.alt}
          />

          <BackImage
            l="none"
            src={YakuSceneData.scene_15.b}
            alt={YakuSceneData.scene_15.alt}
            initial={{ translateY: 700, translateX: -200 }}
            whileInView={{
              translateY: 0,
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 50,
                duration: 5,
              },
            }}
          />
          <SFrontImage
            src={YakuSceneData.scene_15.sf}
            alt={YakuSceneData.scene_15.alt}
            initial={{ translateX: -200, opacity: 0 }}
            whileInView={{
              translateX: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 5,
              },
            }}
          />
          <FrontImage
            src={YakuSceneData.scene_15.cr}
            alt={YakuSceneData.scene_15.alt}
            l="-1px"
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_15.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 15 */}
      </HorizontalScroll>
    </>
  );
}

export default Main;
