import { motion } from "framer-motion";
import styled from "styled-components";

export const IconContainer = styled.footer`
  display: block;
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 5%;
  right: 5%;
`;

export const SvgNav = styled(motion.div)`
  svg {
    max-width: 2.187em;
  }

  max-width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  cursor: pointer;

  g:hover circle {
    fill: #d9d9d9;
    position: relative;
    transition: fill 3s ease;
  }
`;
