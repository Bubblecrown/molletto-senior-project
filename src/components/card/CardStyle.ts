import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled(motion.div)`
  padding-top: 30px;
  /* padding-bottom: 75px; */
`;

export const CardContainer = styled(motion.div)`
  display: flex;
  position: relative;
  top: 50%;
  transform: translateY(-70%);
  height: 70%;
  align-items: center;
  
`;

export const TitleContainer = styled(motion.div)`
  display: flex;
  align-items: center;
`;

export const CardItem = styled(motion.div)`
  display: flex;
  width: 100%;
  height: fit-content;
  margin-left: 1rem;
  margin-right: 1rem;
  gap: 24px;
  justify-content: space-evenly;
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
