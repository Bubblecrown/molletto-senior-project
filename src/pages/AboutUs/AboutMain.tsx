import React from "react";
import { Logo } from "../../components/HeaderLine/HeaderStyle";
import { AboutMainData, HeadMember } from "../../data/aboutData";
import { H4Eng } from "../../GlobalStyle";
import {
  Container,
  Section,
  AboutMainContainer,
  HeaderAboutMain,
  AboutDescription,
  AboutTitle,
  BodyAboutMain,
  AboutSubTitle,
  AboutMainTitle,
  AboutMainDescription,
  AboutHangingLine,
} from "./AboutStyle";

const AboutMain = () => {
  return (
    <Section c="#1A1230">
      <Container>
        <AboutMainContainer>
          {/* Header */}
          <HeaderAboutMain>
            <AboutDescription>
              {AboutMainData.aboutDescription}
            </AboutDescription>
            <Logo src={HeadMember.imgPath} alt={HeadMember.imageAlt}></Logo>
            <AboutTitle>
              {AboutMainData.aboutTitle.map((title) => (
                <H4Eng m="0" key={title}>{title}</H4Eng>
              ))}
            </AboutTitle>
          </HeaderAboutMain>
          {/* end Header */}

          {/* Body */}
          <BodyAboutMain>
            <AboutSubTitle></AboutSubTitle>
            <AboutMainTitle></AboutMainTitle>
            <AboutMainDescription></AboutMainDescription>
          </BodyAboutMain>
          {/* end body */}
          
          <AboutHangingLine></AboutHangingLine>
        </AboutMainContainer>
      </Container>
    </Section>
  );
};

export default AboutMain;
