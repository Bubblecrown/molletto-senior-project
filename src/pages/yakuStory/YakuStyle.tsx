import { motion } from "framer-motion";
import styled from "styled-components";
import cloud5 from "../../assets/images/tale/yakuStory/cloud5.png";

export const TaleContainer = styled.span`
  position: relative;
  transform-style: preserve-3d;
`;

export const BgVideo = styled.video`
  position: relative;
  width: auto;
  height: 100%;
  top: 0;
  left: 0;
`;
export const ParallaxContainer = styled(motion.div)`
  
`;

export const BgImage = styled.img`
  position: relative;
  width: auto;
  height: 100%;
  top: 0;
  left: 0;
`;

export const TextContainer = styled(motion.div)<{
  t?: string;
  l?: string;
  r?: string;
}>`
  /* background-image: url(${cloud5}); */
  /* background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
  background-color: #fff;
  position: absolute;
  top: ${({ t }) => (t ? t : "0")};
  left: ${({ l }) => (l ? l : "0")};
  right: ${({ r }) => (r ? r : "0")};
  z-index: 5;
  width: 550px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0px 0px 20px 20px #fff;
`;

export const SFrontImage = styled(motion.img)<{
  t?: string;
  l?: string;
  r?: string;
  tm?: string;
  lm?: string;
  rm?: string;
}>`
  position: absolute;
  width: auto;
  height: 100%;
  top: ${({ t }) => (t ? t : "0")};
  left: ${({ l }) => (l ? l : "0")};
  right: ${({ r }) => (r ? r : "0")};
  z-index: 3;
  will-change: transform;
  @media screen and (max-width: 1000px) {
    top: ${({ tm }) => (tm ? tm : "0")};
    left: ${({ lm }) => (lm ? lm : "0")};
    right: ${({ rm }) => (rm ? rm : "0")};
  }
`;

export const FrontImage = styled(motion.img)<{
  t?: string;
  l?: string;
  r?: string;
  tm?: string;
  lm?: string;
  rm?: string;
}>`
  position: absolute;
  width: auto;
  height: 100%;
  top: ${({ t }) => (t ? t : "0")};
  left: ${({ l }) => (l ? l : "0")};
  right: ${({ r }) => (r ? r : "0")};
  z-index: 3;
  will-change: transform;
  @media screen and (max-width: 1000px) {
    top: ${({ tm }) => (tm ? tm : "0")};
    left: ${({ lm }) => (lm ? lm : "0")};
    right: ${({ rm }) => (rm ? rm : "0")};
  }
`;
export const MidImage = styled(motion.img)<{
  t?: string;
  l?: string;
  r?: string;
  tm?: string;
  lm?: string;
  rm?: string;
}>`
  position: absolute;
  width: auto;
  height: 100%;
  top: ${({ t }) => (t ? t : "0")};
  left: ${({ l }) => (l ? l : "0")};
  right: ${({ r }) => (r ? r : "0")};
  z-index: 2;
  will-change: transform;
  @media screen and (max-width: 1000px) {
    top: ${({ tm }) => (tm ? tm : "0")};
    left: ${({ lm }) => (lm ? lm : "0")};
    right: ${({ rm }) => (rm ? rm : "0")};
  }
`;
export const BackImage = styled(motion.img)<{
  t?: string;
  l?: string;
  r?: string;
  tm?: string;
  lm?: string;
  rm?: string;
}>`
  position: absolute;
  width: auto;
  height: 100%;
  top: ${({ t }) => (t ? t : "0")};
  left: ${({ l }) => (l ? l : "0")};
  right: ${({ r }) => (r ? r : "0")};
  z-index: 1;
  will-change: transform;

  @media screen and (max-width: 1000px) {
    top: ${({ tm }) => (tm ? tm : "0")};
    left: ${({ lm }) => (lm ? lm : "0")};
    right: ${({ rm }) => (rm ? rm : "0")};
  }
`;
