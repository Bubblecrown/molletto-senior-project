import React from "react";
import "./styles.css";
import { YakuSceneData } from "../../data/yakuStory";
import {
  BackImage,
  BgImage,
  FrontImage,
  TaleContainer,
  TextContainer,
} from "./YakuStyle";
import { PNoto } from "../../GlobalStyle";
const YakuTale = () => {
  return (
    <div className="container">
      <div className="wrapper">
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
      </div>
    </div>
  );
};

export default YakuTale;
