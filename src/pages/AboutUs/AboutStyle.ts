import { motion } from "framer-motion";
import styled from "styled-components";
import { roboto } from "../../GlobalStyle";

// Shared
export const Section = styled.body<{ c?: string }>`
  background-color: ${({ c }) => (c ? c : "#d9d9d9")};
  height: 100%;
  width: 100vw;
  font-size: ${roboto};
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Container = styled.div`
  margin: 0 5%;
  height: 100%;
  @media only screen and (min-width: 1920px) {
    margin: 0 15%;
  }
  @media only screen and (max-width: 1440px) {
    margin: 0 10%;
  }
`;

// end shared

// About Us
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
// end about us

// About main

export const AboutMainContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;
export const HeaderAboutMain = styled.div``;
export const AboutDescription = styled.div``;
export const AboutTitle = styled.div``;
export const BodyAboutMain = styled.div``;
export const AboutSubTitle = styled.div``;
export const AboutMainTitle = styled.div``;
export const AboutMainDescription = styled.div``;
export const AboutHangingLine = styled.div``;
// end about main
