import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import audioFile from "../../assets/sounds/yakuSound.mp3";
import HorizontalScroll from "react-scroll-horizontal";
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
import { PNoto } from "../../GlobalStyle";
import { YakuSceneData } from "../../data/yakuStory";
import TestCanvas from "../../TestCanvas";

const YakuTaleMain = () => {
  const [windowX, setWindowX] = useState<number>(window.innerWidth);
  const [windowY, setWindowY] = useState<number>(window.innerHeight);

  useEffect(() => {
    const doParallax = (cursorX: number, cursorY: number) => {
      const pointX = windowX / 10 - cursorX;
      const pointY = windowY / 10 - cursorY;

      const layer1 = document.getElementById("layer-1");
      const layer2 = document.getElementById("layer-2");
      const layer3 = document.getElementById("layer-3");

      if (layer1 && layer2) {
        layer1.style.transform = `translate3d(${pointX / 10}px, ${
          pointY / 10
        }px, 0px)`;
        layer2.style.transform = `translate3d(${pointX / 20}px, ${
          pointY / 20
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
    <div style={{ width: "100vw", height: "100vh" }}>
      <HorizontalScroll
        reverseScroll
        config={{
          stiffness: 20,
          damping: 20,
        }}
        style={{
          height: "100%",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        {/* scene 1 */}
        <TaleContainer>
          <TextContainer
            // drag="y"
            // dragControls={controls}
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
            initial={{ translateY: -700 }}
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
            id="layer-1"
            className="layer"
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
            id="layer-2"
            className="layer"
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
            initial={{ translateY: 600 }}
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
            initial={{ opacity: 0, translateY: -200 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 20,
                duration: 10,
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
        <TaleContainer z={10}>
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
            initial={{ translateY: -700 }}
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
            initial={{ translateY: 500, translateX: -150 }}
            whileInView={{
              translateY: 0,
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 10,
                duration: 20,
                delay: 2,
              },
            }}
          />
          <BackImage
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
            l="-2px"
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
            initial={{ translateY: 700, translateX: -300 }}
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
            initial={{ translateY: -700, translateX: 100 }}
            whileInView={{
              translateY: 0,
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
            initial={{ translateY: -500, translateX: -100 }}
            whileInView={{
              translateY: 0,
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 10,
                damping: 30,
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
            l="-1px"
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
              translateY: 300,
              translateX: 100,
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
                delay: 1,
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
                delay: 2,
              },
            }}
          />
          <BackImage
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
                delay: 1,
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
            src={YakuSceneData.scene_12.f}
            alt={YakuSceneData.scene_12.alt}
            initial={{ translateX: -200, translateY: 500 }}
            whileInView={{
              translateX: 0,
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
            src={YakuSceneData.scene_12.m}
            alt={YakuSceneData.scene_12.alt}
            initial={{ translateX: -50 }}
            whileInView={{
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 20,
                duration: 5,
                delay: 2,
              },
            }}
          />
          <BackImage
            src={YakuSceneData.scene_12.b}
            alt={YakuSceneData.scene_12.alt}
            initial={{ translateY: 500 }}
            whileInView={{
              translateY: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 5,
                duration: 5,
                delay: 1,
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
            initial={{ translateY: 100 }}
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
                delay: 1,
              },
            }}
          />

          <MidImage
            src={YakuSceneData.scene_15.m}
            alt={YakuSceneData.scene_15.alt}
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

          <BackImage
            src={YakuSceneData.scene_15.b}
            alt={YakuSceneData.scene_15.alt}
            initial={{ translateY: 100, translateX: -200 }}
            whileInView={{
              translateY: 0,
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 50,
                duration: 5,
                delay: 1,
              },
            }}
          />
          <SFrontImage
            src={YakuSceneData.scene_15.sf}
            alt={YakuSceneData.scene_15.alt}
            initial={{ translateX: -200 }}
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
          <FrontImage
            src={YakuSceneData.scene_15.cr}
            alt={YakuSceneData.scene_15.alt}
            l="-1px"
          />
          <BgVideo muted loop autoPlay>
            <source src={YakuSceneData.scene_15.bg} type="video/mp4" />
          </BgVideo>
        </TaleContainer>
        {/* end scene 14 */}
      </HorizontalScroll>
      <Footer audio={audioFile} volumes={0.5} />
    </div>
  );
};

export default YakuTaleMain;
