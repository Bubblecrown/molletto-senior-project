import { useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "../locomotive-scroll.css";
import { PNoto, TaleSection } from "../../GlobalStyle";
import {
  BackImage,
  BgImage,
  BgVideo,
  FrontImage,
  MidImage,
  SFrontImage,
  TextContainer,
} from "./YakuStyle";
import { YakuSceneData } from "../../data/yakuStory";
import { relative } from "path";

const YakuStory = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: "horizontal",
        offset: ["30%", 0],
        // reloadOnContextChange: true,
        tablet: {
          smooth: true,
          direction: "horizontal",
          // gestureDirection: "both",
        },
        smartphone: {
          smooth: true,
          direction: "horizontal",
          // gestureDirection: "both",
        },
      }}
      watch={[]}
    >
      <TaleSection ref={containerRef} data-scroll-container>
        {/* scene 1 */}
        <span data-scroll-section>
          <TextContainer
            data-scroll
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
            data-scroll
            // data-scroll-direction="horizontal"
            // data-scroll-speed="-2"
            // l="-5%"
            // lm="-5%"
            src={YakuSceneData.scene_1.f}
            alt={YakuSceneData.scene_1.alt}
          />
          <BackImage
            data-scroll
            // data-scroll-speed="5"
            // l="10%"
            // lm="5%"
            // data-scroll-direction="horizontal"
            src={YakuSceneData.scene_1.b}
            alt={YakuSceneData.scene_1.alt}
          />
          <BgImage
            data-scroll
            src={YakuSceneData.scene_1.bg}
            alt={YakuSceneData.scene_1.bgAlt}
          />
        </span>
        {/* end scene 1 */}

        {/* scene 1_2 */}
        <span data-scroll-section>
          <TextContainer
            data-scroll
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
            data-scroll
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
            data-scroll
            // data-scroll-direction="vertical"
            // data-scroll-speed="-10"
            // t="-100%"
            src={YakuSceneData.scene_1_2.f}
            alt={YakuSceneData.scene_1_2.alt}
          />
          <BackImage
            data-scroll
            // data-scroll-direction="horizontal"
            // data-scroll-speed="3"
            // l="20%"
            src={YakuSceneData.scene_1_2.b}
            alt={YakuSceneData.scene_1_2.alt}
          />
          <BgImage
            data-scroll
            src={YakuSceneData.scene_1_2.bg}
            alt={YakuSceneData.scene_1_2.bgAlt}
          />
          <FrontImage
            data-scroll
            r="0"
            l="12px"
            lm="12px"
            src={YakuSceneData.scene_1_2.cl}
            alt={YakuSceneData.scene_1_2.alt}
          />
        </span>
        {/* end scene 1_2 */}

        {/* scene 2 */}
        <span data-scroll-section>
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_2.cr}
            alt={YakuSceneData.scene_2.alt}
          />
          <MidImage
            data-scroll
            src={YakuSceneData.scene_2.cl}
            alt={YakuSceneData.scene_2.alt}
          />

          <MidImage
            data-scroll
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
            data-scroll
            // data-scroll-direction="horizontal"
            // data-scroll-speed="5"
            // l="150px"
            src={YakuSceneData.scene_2.sf}
            alt={YakuSceneData.scene_2.alt}
          />
          <BackImage
            data-scroll
            // data-scroll-direction="vertical"
            // data-scroll-speed="2"
            // t="150px"
            src={YakuSceneData.scene_2.b}
            alt={YakuSceneData.scene_2.alt}
          />
          <TextContainer
            data-scroll
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
          <BgVideo data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_2.bg} type="video/mp4" />
          </BgVideo>
        </span>
        {/* end scene 2 */}

        {/* scene 2.2 */}
        <span data-scroll-section>
          <MidImage
            data-scroll
            // data-scroll-speed="-3"
            // l="-300px"
            src={YakuSceneData.scene_2_2.m}
            alt={YakuSceneData.scene_2_2.alt}
          />
          <FrontImage
            data-scroll
            // data-scroll-direction="vertical"
            // data-scroll-speed="-10"
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
          <BgVideo data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_2.bg} type="video/mp4" />
          </BgVideo>
        </span>
        {/* end scene 2.2 */}

        {/* scene 3.1 */}
        <span data-scroll-section style={{ position: "relative" }}>
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_3.cl}
            alt={YakuSceneData.scene_3.alt}
          />

          <BgVideo data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_3.bg} type="video/mp4" />
          </BgVideo>
        </span>
        {/* end scene 3.1 */}

        {/* scene 4 */}
        <span data-scroll-section style={{ position: "relative" }}>
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_4.f}
            alt={YakuSceneData.scene_4.alt}
          />
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_4.cr}
            alt={YakuSceneData.scene_4.alt}
          />
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_4.cl}
            alt={YakuSceneData.scene_4.alt}
          />
          <BackImage
            data-scroll
            src={YakuSceneData.scene_4.b}
            alt={YakuSceneData.scene_4.alt}
          />
          <BgVideo data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_4.bg} type="video/mp4" />
          </BgVideo>
        </span>
        {/* end scene 4 */}

        {/* scene 3_2 */}
        <span data-scroll-section>
          <FrontImage
            data-scroll
            data-scroll-speed="3"
            src={YakuSceneData.scene_3_2.f}
            alt={YakuSceneData.scene_3_2.alt}
            l="400px"
            t="-100px"
          />
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_3_2.cr}
            alt={YakuSceneData.scene_3_2.alt}
          />
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_3_2.cl}
            alt={YakuSceneData.scene_3_2.alt}
          />
          <BackImage
            data-scroll
            src={YakuSceneData.scene_3_2.b}
            alt={YakuSceneData.scene_3_2.alt}
          />
          <MidImage
            data-scroll
            src={YakuSceneData.scene_3_2.m}
            alt={YakuSceneData.scene_3_2.alt}
          />
          <BgVideo data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_3_2.bg} type="video/mp4" />
          </BgVideo>
        </span>
        {/* end scene 3_2 */}

        {/* scene 5 */}
        <span data-scroll-section>
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_5.f}
            alt={YakuSceneData.scene_5.alt}
          />
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_5.cr}
            alt={YakuSceneData.scene_5.alt}
          />
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_5.cl}
            alt={YakuSceneData.scene_5.alt}
          />
          <BackImage
            data-scroll
            src={YakuSceneData.scene_5.b}
            alt={YakuSceneData.scene_5.alt}
          />
          <BgVideo data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_5.bg} type="video/mp4" />
          </BgVideo>
        </span>
        {/* end scene 5 */}

        {/* scene 6 */}
        <span data-scroll-section>
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_6.f}
            alt={YakuSceneData.scene_6.alt}
          />
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_6.cr}
            alt={YakuSceneData.scene_6.alt}
          />
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_6.cl}
            alt={YakuSceneData.scene_6.alt}
          />
          <MidImage
            data-scroll
            src={YakuSceneData.scene_6.m}
            alt={YakuSceneData.scene_6.alt}
          />
          <BackImage
            data-scroll
            src={YakuSceneData.scene_6.b}
            alt={YakuSceneData.scene_6.alt}
          />
          <BgVideo data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_6.bg} type="video/mp4" />
          </BgVideo>
        </span>
        {/* end scene 6 */}

        {/* scene 7 */}
        <span data-scroll-section>
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_7.cl}
            alt={YakuSceneData.scene_7.alt}
          />
          <BgVideo data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_7.bg} type="video/mp4" />
          </BgVideo>
        </span>
        {/* end scene 7 */}

        {/* scene 8 */}
        <span data-scroll-section>
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_8.f}
            alt={YakuSceneData.scene_8.alt}
            t="100px"
          />
          <BackImage
            data-scroll
            src={YakuSceneData.scene_8.cr}
            alt={YakuSceneData.scene_8.alt}
          />
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_8.cl}
            alt={YakuSceneData.scene_8.alt}
          />
          <BgVideo data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_8.bg} type="video/mp4" />
          </BgVideo>
        </span>
        {/* end scene 8 */}

        {/* scene 9 */}
        <span data-scroll-section>
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_9.f}
            alt={YakuSceneData.scene_9.alt}
          />
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_9.cr}
            alt={YakuSceneData.scene_9.alt}
          />
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_9.cl}
            alt={YakuSceneData.scene_9.alt}
          />
          <BgVideo data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_9.bg} type="video/mp4" />
          </BgVideo>
        </span>
        {/* end scene 9 */}

        {/* scene 10 */}
        <span data-scroll-section>
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_10.f}
            alt={YakuSceneData.scene_10.alt}
            t="300px"
          />
          <BgVideo data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_10.bg} type="video/mp4" />
          </BgVideo>
        </span>
        {/* end scene 10 */}

        {/* scene 12 */}
        <span data-scroll-section>
          <BgVideo data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_12.bg} type="video/mp4" />
          </BgVideo>
        </span>
        {/* end scene 12 */}

        {/* end tree */}
      </TaleSection>
    </LocomotiveScrollProvider>
  );
};

export default YakuStory;

{
  /* <span
          className="data-scroll-long"
          data-scroll-section
          style={{ position: "relative" }}
        >
          <img
            data-scroll
            data-scroll-sticky
            data-scroll-target="#pin5"
            id="pin5"
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
          <h1
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="10"
            style={{ zIndex: 100 }}
          >
            That's why I code every day
          </h1>
        </span> */
}
