import { motion } from "framer-motion";
import styled from "styled-components";
import { roboto } from "../../GlobalStyle";

// Shared
export const Section = styled.div<{ c?: string }>`
  background-color: ${({ c }) => (c ? c : "#d9d9d9")};
  height: 100%;
  width: 100vw;
  font-size: ${roboto};
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Container = styled.div`
  margin: 0 5%;
  height: 100vh;
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
  height: 100%;
`;
export const HeaderAboutMain = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-height: 17%;
`;
export const AboutLogo = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  justify-content: center;
`;
export const AboutDescription = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;
export const AboutTitle = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  justify-content: flex-end;
`;

export const AboutTitleContainer = styled.div`
  display: flex;
  gap: 50px;
`;
export const BodyAboutMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BodyAboutContainer = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AboutSubTitle = styled.div``;
export const AboutMainTitle = styled.div`
  text-align: center;
`;
export const SubLogo = styled.img`
  width: 500px;
  height: auto;
`;

export const AboutMainDescription = styled.div`
  text-align: center;
`;
export const AboutHangingLine = styled.div``;
// end about main
