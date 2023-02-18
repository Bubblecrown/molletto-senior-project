import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-evenly;
`;

export const Card = styled(motion.div)<{radius?: string,y?: string,c?: string, xMove?:any}>`
  width: 330px;
  height: 460px;
  border-radius: 20px;
  transform: rotate(${({ radius }) => (radius ? radius : "-2.24")}deg)
    translateY(${({ y }) => (y ? y : "0")}px) translateX(${({ xMove }) => (xMove ? xMove : "0")}px);
  background-color: ${({ c }) => (c ? c : "#fff")};
  filter: drop-shadow(0px 24px 8px rgba(0, 0, 0, 0.06));
`;
