
import HorizontalScroll from "react-scroll-horizontal";
import { PNoto } from "../../GlobalStyle";
import Footer from "../../components/Footer/Footer";
import audioFile from "../../assets/sounds/PennySound.mp3";
import { useTablet } from "../../hooks/useMediaQuery";
import PulsingModel from "../../components/PulsingCircle/PulsingModel";

import { useNavigate } from "react-router";
import {
  BackImage,
  BgImage,
  FrontImage,
  GraveContainer,
  MidImage,
  SFrontImage,
  TaleContainer,
  TextContainer,
} from "../yakuStory/YakuStyle";
import { PennySceneData } from "../../data/pennyStory";

const PennyStoryMain = () => {
  const isTablet = useTablet();
  const navigate = useNavigate();
  return (
    <div style={{ width: "100vw", height: "100vh", overflowX: "hidden" }}>
      <HorizontalScroll
        reverseScroll
        style={{
          height: "100%",
          width: "100%",
          overflowX: isTablet ? "scroll" : "hidden",
        }}
      >
        {/* scene 1 */}
        <TaleContainer>
          <TextContainer
            t="5%"
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
            <PNoto>{PennySceneData.scene_1.text}</PNoto>
          </TextContainer>

          <FrontImage
            src={PennySceneData.scene_1.f}
            alt={PennySceneData.scene_1.alt}
            initial={{ translateX: "-100vw" }}
            whileInView={{
              translateX: "0",
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 5,
              },
            }}
          />
          <SFrontImage
            l="none"
            src={PennySceneData.scene_1.cl}
            alt={PennySceneData.scene_1.alt}
          />

          <BgImage
            src={PennySceneData.scene_1.bg}
            alt={PennySceneData.scene_1.bgAlt}
          />
        </TaleContainer>
        {/* end scene 1 */}

        {/* scene 2 */}
        <TaleContainer>
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
            <PNoto>{PennySceneData.scene_2.text}</PNoto>
          </TextContainer>

          <FrontImage
            l="none"
            src={PennySceneData.scene_2.f}
            alt={PennySceneData.scene_2.alt}
            initial={{ translateY: "100vh" }}
            whileInView={{
              translateY: "0",
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 5,
              },
            }}
          />
          <FrontImage
            src={PennySceneData.scene_2.cr}
            alt={PennySceneData.scene_2.alt}
          />
          <MidImage
            l="none"
            src={PennySceneData.scene_2.cl}
            alt={PennySceneData.scene_2.alt}
          />
          <BgImage
            src={PennySceneData.scene_2.bg}
            alt={PennySceneData.scene_2.bgAlt}
          />
        </TaleContainer>
        {/* end scene 2 */}

        {/* scene 4 */}
        <TaleContainer>
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
            <PNoto>{PennySceneData.scene_4.text}</PNoto>
          </TextContainer>

          <FrontImage
            r="none"
            src={PennySceneData.scene_4.f}
            alt={PennySceneData.scene_4.alt}
            initial={{ translateX: "300px" }}
            whileInView={{
              translateX: "0",
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 5,
              },
            }}
          />
          <FrontImage
            src={PennySceneData.scene_4.cr}
            alt={PennySceneData.scene_4.alt}
          />
          <MidImage
            l="none"
            src={PennySceneData.scene_4.cl}
            alt={PennySceneData.scene_4.alt}
          />
          <BgImage
            src={PennySceneData.scene_4.bg}
            alt={PennySceneData.scene_4.bgAlt}
          />
        </TaleContainer>
        {/* end scene 4 */}
        {/* scene 5 */}
        <TaleContainer>
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
            <PNoto>{PennySceneData.scene_5.text}</PNoto>
          </TextContainer>

          <MidImage
            l="none"
            src={PennySceneData.scene_5.f}
            alt={PennySceneData.scene_5.alt}
            initial={{ translateX: "100vw" }}
            whileInView={{
              translateX: "0",
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 5,
              },
            }}
          />
          <FrontImage
            src={PennySceneData.scene_5.cr}
            alt={PennySceneData.scene_5.alt}
          />
          <FrontImage
            l="none"
            src={PennySceneData.scene_5.cl}
            alt={PennySceneData.scene_5.alt}
          />
          <BgImage
            src={PennySceneData.scene_5.bg}
            alt={PennySceneData.scene_5.bgAlt}
          />
        </TaleContainer>
        {/* end scene 5 */}
        {/* scene 6 */}
        <TaleContainer z={10}>
          <TextContainer
            t="20%"
            l="20%"
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
            <PNoto>{PennySceneData.scene_6.text}</PNoto>
          </TextContainer>

          <FrontImage
            l="none"
            src={PennySceneData.scene_6.f}
            alt={PennySceneData.scene_6.alt}
            initial={{ translateY: "300px" }}
            whileInView={{
              translateY: "0",
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
            l="600px"
            src={PennySceneData.scene_6.b}
            alt={PennySceneData.scene_6.alt}
            initial={{ rotate: -45 }}
            whileInView={{
              rotate: 0,
              transition: {
                type: "spring",
                stiffness: 30,
                damping: 10,
                duration: 5,
              },
            }}
          />
          <FrontImage
            src={PennySceneData.scene_6.cr}
            alt={PennySceneData.scene_6.alt}
          />
          <MidImage
            l="none"
            src={PennySceneData.scene_6.cl}
            alt={PennySceneData.scene_6.alt}
          />
          <BgImage
            src={PennySceneData.scene_6.bg}
            alt={PennySceneData.scene_6.bgAlt}
          />
        </TaleContainer>
        {/* end scene 6 */}
        {/* scene 7 */}
        <TaleContainer z={10}>
          <TextContainer
            t="10%"
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
            <PNoto>{PennySceneData.scene_7.text}</PNoto>
          </TextContainer>

          <FrontImage
            l="none"
            src={PennySceneData.scene_7.f}
            alt={PennySceneData.scene_7.alt}
            initial={{ translateY: "300px" }}
            whileInView={{
              translateY: "0",
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
            r="none"
            l="250px"
            src={PennySceneData.scene_7.b}
            alt={PennySceneData.scene_7.alt}
            initial={{ rotate: -45, translateY: "120vh" }}
            whileInView={{
              rotate: 0,
              translateY: "0",
              transition: {
                type: "spring",
                stiffness: 30,
                damping: 10,
                duration: 5,
                delay: 1,
              },
            }}
          />
          <FrontImage
            src={PennySceneData.scene_7.cr}
            alt={PennySceneData.scene_7.alt}
          />
          <MidImage
            l="none"
            src={PennySceneData.scene_7.cl}
            alt={PennySceneData.scene_7.alt}
          />
          <BgImage
            src={PennySceneData.scene_7.bg}
            alt={PennySceneData.scene_7.bgAlt}
          />
        </TaleContainer>
        {/* end scene 7 */}
        {/* scene 8 */}
        <TaleContainer z={10}>
          <TextContainer
            t="10%"
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
            <PNoto>{PennySceneData.scene_8.text}</PNoto>
          </TextContainer>
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
            <PNoto>{PennySceneData.scene_8.text2}</PNoto>
          </TextContainer>

          <FrontImage
            l="none"
            src={PennySceneData.scene_8.f}
            alt={PennySceneData.scene_8.alt}
            initial={{ translateY: "100vh" }}
            whileInView={{
              translateY: "0",
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 5,
              },
            }}
          />
          <BackImage
            l="none"
            src={PennySceneData.scene_8.b}
            alt={PennySceneData.scene_8.alt}
            initial={{ translateY: "100vh" }}
            whileInView={{
              translateY: "0",
              transition: {
                type: "spring",
                stiffness: 30,
                damping: 10,
                duration: 5,
                delay: 1,
              },
            }}
          />
          <FrontImage
            src={PennySceneData.scene_8.cr}
            alt={PennySceneData.scene_8.alt}
          />
          <MidImage
            l="none"
            src={PennySceneData.scene_8.cl}
            alt={PennySceneData.scene_8.alt}
          />
          <BgImage
            src={PennySceneData.scene_8.bg}
            alt={PennySceneData.scene_8.bgAlt}
          />
        </TaleContainer>
        {/* end scene 8 */}
        {/* scene 9 */}
        <TaleContainer z={10}>
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
            <PNoto>{PennySceneData.scene_9.text}</PNoto>
          </TextContainer>

          <FrontImage
            l="none"
            src={PennySceneData.scene_9.f}
            alt={PennySceneData.scene_9.alt}
            initial={{ translateY: "100vh" }}
            whileInView={{
              translateY: "0",
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 5,
              },
            }}
          />
          <FrontImage
            src={PennySceneData.scene_9.cr}
            alt={PennySceneData.scene_9.alt}
          />
          <GraveContainer
            t="73%"
            l="51%"
            onClick={() => navigate("/penny_character")}
            initial={{ opacity: "0", translateY: "-50px" }}
            whileInView={{
              opacity: "1",
              translateY: "0",
              transition: {
                type: "spring",
                stiffness: 20,
                damping: 10,
                duration: 5,
                delay: 1,
              },
            }}
          >
            <PulsingModel />
          </GraveContainer>
          <BgImage
            src={PennySceneData.scene_9.bg}
            alt={PennySceneData.scene_9.bgAlt}
          />
        </TaleContainer>
        {/* end scene 9 */}
      </HorizontalScroll>
      <Footer audio={audioFile} volumes={0.5} />
    </div>
  );
};

export default PennyStoryMain;
