import { motion } from "framer-motion";
import styled from "styled-components";
import cloud5 from "../../assets/images/tale/yakuStory/cloud5.png";

export const TaleContainer = styled.span<{
  z?: number;
}>`
  position: relative;
  scroll-snap-align: start;
  z-index: ${({ z }) => (z ? z : 0)};
  margin-right: -0.5;
  @media screen and (min-width: 1000px) {
    margin-right: -1px;
  }
  @media screen and (max-width: 1000px) {
    min-width: 1920px;
    height: 100%;
  }
`;

export const BgVideo = styled.video`
  position: relative;
  width: auto;
  height: 100%;
  top: 0;
  left: 0;
  @media screen and (max-width: 1000px) {
    min-width: 1920px;
    height: 100%;
  }
`;
export const ParallaxContainer = styled(motion.div)``;

export const BgImage = styled.img`
  position: relative;
  width: auto;
  height: 100%;
  top: 0;
  left: 0;
  @media screen and (max-width: 1000px) {
    min-width: 1920px;
    height: 100%;
  }
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
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0px 0px 20px 20px #fff;
`;

export const GraveContainer = styled(motion.div)<{
  t?: string;
  l?: string;
  r?: string;
  tm?: string;
  lm?: string;
  rm?: string;
}>`
  position: absolute;
  top: ${({ t }) => (t ? t : "60%")};
  left: ${({ l }) => (l ? l : "30%")};
  z-index: 20;
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
  z-index: 4;
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
`;
export const BackImage = styled(motion.img)<{
  t?: string;
  l?: string;
  r?: string;
  b?: string;
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
  bottom: ${({ b }) => (b ? b : "0")};
  z-index: 1;
  will-change: transform;
`;
