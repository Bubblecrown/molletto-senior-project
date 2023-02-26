import React from "react";
import { Animator, batch, Sticky } from "react-scroll-motion";
import { MoveInPage } from "../../animations/MoveIn";
import { Logo } from "../../components/HeaderLine/HeaderStyle";
import ScrollPrompt from "../../components/Prompt/ScrollPrompt";
import { AboutMainData, HeadMember } from "../../data/aboutData";
import { H2Eng, H3Eng, H4Eng, H5Eng } from "../../GlobalStyle";
import { useTablet } from "../../hooks/useMediaQuery";
import AboutMainMobile from "./AboutMainMobile";
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
  AboutMobileDescription,
  AboutLine,
} from "./AboutStyle";

const AboutMain = () => {
  const isTablet = useTablet();

  return (
    <Section c="#1A1230">
      <Container>
        <AboutMainContainer>
          {isTablet ? (
            <AboutMainMobile />
          ) : (
            <>
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
            </>
          )}

          <ScrollPrompt />
        </AboutMainContainer>
        <AboutHangingLine>
          <Animator animation={MoveInPage(100, 0)}>
            <AboutLine
              src={AboutMainData.Line}
              alt={AboutMainData.LineAlt}
            ></AboutLine>
          </Animator>
        </AboutHangingLine>
      </Container>
    </Section>
  );
};

export default AboutMain;
