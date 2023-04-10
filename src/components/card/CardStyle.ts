import { motion } from "framer-motion";
import ReactCardFlip, { ReactFlipCardProps } from "react-card-flip";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { notosans } from "../../GlobalStyle";

export const CardContainer = styled(motion.div)`
  display: flex;
  position: relative;
  height: 70%;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled(motion.div)`
  display: flex;
  align-items: center;
`;

export const CardItem = styled(motion.div)`
  display: flex;
  min-width: auto;
  width: 100%;
  height: fit-content;
  margin-left: 1rem;
  margin-right: 1rem;
  gap: 24px;
  justify-content: space-evenly;
  perspective: 1000px;
  @media only screen and (max-width: 480px) {
    padding-top: 5rem;
    z-index: 4;
  }
  @media only screen and (max-width: 900px) {
    z-index: 4;
  }
`;

export const Card = styled(motion.div)<{ c?: string }>`
  min-width: 200px;
  width: 330px;
  max-width: 330px;
  aspect-ratio: 3 / 4;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${({ c }) => (c ? c : "#fff")};
  filter: drop-shadow(0px 24px 8px rgba(0, 0, 0, 0.06));
`;

export const LinkCard = styled(motion(Link))<{ c?: string }>`
  min-width: 200px;
  width: 330px;
  max-width: 330px;
  aspect-ratio: 3 / 4;
  position: relative;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ c }) => (c ? c : "#fff")};
  filter: drop-shadow(0px 24px 8px rgba(0, 0, 0, 0.06));
  transform-style: preserve-3d;
  perspective: 1000px;
  z-index: auto;
`;

export const CardVideo = styled.video`
  border-radius: 17px;
  width: 100%;
  height: auto;
`;

export const RoleCard = styled.div`
  position: absolute;
  width: 80%;
  height: 12%;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
  border-top: 1px solid #fff;
  padding-top: clamp(2px, 1vw, 15px);
  text-transform: uppercase;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }

`;

export const CardFront = styled(motion.div)<{ c?: string }>`
  max-width: 100%;
  max-height: 100%;
`;

export const CardBack = styled(motion.img)<{ c?: string }>`
  max-height: 100%;
  max-width: 100%;
`;
export const FlipCardContainer = styled(ReactCardFlip)<{ c?: string }>`
  position: relative;
  max-width: 100%;
  max-height: 100%;
`;
