import { motion } from "framer-motion";
import styled from "styled-components";

export const ScrollPromptContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0);
`;
export const PromptContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;
`;

export const Svg = styled.svg``;

export const PathWheel = styled.path`
  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(100px);
    }
  }
  animation: scroll ease 1.5s infinite;
`;
