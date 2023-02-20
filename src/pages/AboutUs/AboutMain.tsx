import React from "react";
import { Logo } from "../../components/HeaderLine/HeaderStyle";
import { AboutMainData, HeadMember } from "../../data/aboutData";
import { H2Eng, H3Eng, H4Eng, H5Eng } from "../../GlobalStyle";
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
  AboutLogo,
  SubLogo,
  BodyAboutContainer,
} from "./AboutStyle";

const AboutMain = () => {
  return (
    <Section c="#1A1230">
      <Container>
        <AboutMainContainer>
          {/* Header */}
          <HeaderAboutMain>
            <AboutDescription>
              <H5Eng mw="360px">{AboutMainData.aboutDescription}</H5Eng>
            </AboutDescription>
            <AboutLogo>
              <Logo
                src={HeadMember.imgPath}
                alt={HeadMember.imageAlt}
                c="#1A1230"
              ></Logo>
            </AboutLogo>
            <AboutTitle>
              {AboutMainData.aboutTitle.map((title) => (
                <H4Eng key={title}>{title}</H4Eng>
              ))}
            </AboutTitle>
          </HeaderAboutMain>
          {/* end Header */}
          {/* Body */}
          <BodyAboutMain>
            <BodyAboutContainer>
              <AboutSubTitle>
                <H2Eng>{AboutMainData.aboutSubTitle}</H2Eng>
              </AboutSubTitle>
              <AboutMainTitle>
                <SubLogo
                  src={AboutMainData.LogoImage}
                  alt={AboutMainData.LogoImageAlt}
                ></SubLogo>
              </AboutMainTitle>
              <AboutMainDescription>
                <H3Eng>{AboutMainData.AboutMainDescription}</H3Eng>
              </AboutMainDescription>
            </BodyAboutContainer>
          </BodyAboutMain>
          {/* end body */}

          <AboutHangingLine></AboutHangingLine>
        </AboutMainContainer>
      </Container>
    </Section>
  );
};

export default AboutMain;
