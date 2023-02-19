import { motion } from "framer-motion";
import styled from "styled-components";
import { roboto } from "../../GlobalStyle";

export const Section = styled.div`
  background-color: #d9d9d9;
  height: 100%;
  width: 100vw;
  font-size: ${roboto};
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Container = styled.div`
  margin: 0 10%;
  height: 100%;
`;

export const HeaderBar = styled(motion.div)`
  position: relative;
`;
export const Header = styled(motion.div)`
  position: absolute;
  padding-top: 30px;
  left: 0;
  right: 0;
  /* padding-bottom: 75px; */
`;

export const CardTeam = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
