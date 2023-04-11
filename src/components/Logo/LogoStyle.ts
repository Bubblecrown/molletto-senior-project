import { motion } from "framer-motion";
import styled from "styled-components";

export const LogoContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;

  display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoImage = styled.img`
  width: 60%;
  height: auto;
`;
