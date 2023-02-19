import { motion } from "framer-motion";
import styled from "styled-components";
import { roboto } from "../../GlobalStyle";

export const Section = styled.div`
  background-color: #d9d9d9;
  height: 100vh;
  width: 100vw;
  font-size: ${roboto};
  overflow: hidden;
`;

export const Container = styled.div`
  margin: 0 10%;
`;

export const Header = styled(motion.div)`
  padding-top: 30px;
  /* padding-bottom: 75px; */
`;

export const CardTeam = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
