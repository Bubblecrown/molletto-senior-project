import { motion } from "framer-motion";
import styled from "styled-components";
import { Container, Section, roboto } from "../../GlobalStyle";
import bgAbout from "../../assets/images/aboutus/BG_About-us.png";
import bgMember from "../../assets/images/aboutus/curtain_flat.png";
// About Us
export const CurtainSection = styled(Section)`
  background-image: url(${bgMember});
  height: 130vh;
  /* Full height */
  width: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const CurtainContainer = styled(Container)`
  @media only screen and (max-width: 767px) {
    overflow-y: scroll;
    overflow-x: hidden;
    padding-bottom: 300px;
  }
`;

export const HeaderBar = styled(motion.div)<{ h?: string }>`
  position: relative;
  display: block;
  /* height: 20%; */
  height: ${({ h }) => (h ? h : "auto")};
`;
export const Header = styled(motion.div)`
  position: absolute;
  padding-top: 30px;
  left: 0;
  right: 0;
  padding-bottom: 75px;
`;

export const CardTeam = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// end about us

// About main

export const AboutSection = styled(Section)`
  background-image: url(${bgAbout});
  width: auto;
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const AboutMainContainer = styled.div`
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
  @media only screen and (max-width: 1100px) {
    justify-content: flex-start;
    flex-grow: 0;
    padding-right: 5%;
  }
`;
export const AboutDescription = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`;
export const AboutTitle = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  align-items: center;
  justify-content: space-between;
`;

export const BodyAboutMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0, -15%);
  width: 100%;
  max-width: 100%;
  height: 100%;
`;

export const BodyAboutContainer = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AboutSubTitle = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;
`;
export const AboutMainTitle = styled.div`
  text-align: center;
`;
export const SubLogo = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
`;
export const AboutMobileDescription = styled.img`
  text-align: center;
  max-width: 107.64px;
  max-height: 71.61px;
`;

export const AboutMainDescription = styled.div`
  text-align: center;
`;
export const AboutHangingLine = styled.div`
  position: absolute;
  top: 0;
  right: 20%;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
export const AboutLine = styled(motion.img)`
  max-height: 90vh;
  width: auto;
`;

// end about main
