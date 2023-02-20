import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled(motion.div)`
  display: flex;
  position: relative;
  top: 50%;
  transform: translateY(-70%);
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

  @media only screen and (max-width: 480px) {
    padding-top: 5rem;
    z-index: 4;
  }
  @media only screen and (max-width: 900px) {
    z-index: 4;
  }
`;

export const Card = styled(motion.div)<{
  radius?: string;
  y?: string;
  c?: string;
  xMove?: any;
}>`
  min-width: 200px;
  width: 330px;
  max-width: 330px;
  aspect-ratio: 3 / 4;
  border-radius: 20px;

  background-color: ${({ c }) => (c ? c : "#fff")};
  filter: drop-shadow(0px 24px 8px rgba(0, 0, 0, 0.06));
`;
