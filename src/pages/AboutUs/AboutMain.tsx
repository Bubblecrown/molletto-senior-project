import { Animator } from "react-scroll-motion";
import { MoveInPage } from "../../animations/MoveIn";
import Footer from "../../components/Footer/Footer";
import { Logo } from "../../components/HeaderLine/HeaderStyle";
import ScrollPrompt from "../../components/Prompt/ScrollPrompt";
import { AboutMainData, HeadMember } from "../../data/aboutData";
import { Container, H2Eng, H3Eng, H4Eng, H5Eng } from "../../GlobalStyle";
import { useTablet } from "../../hooks/useMediaQuery";
import AboutMainMobile from "./AboutMainMobile";
import {
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
  AboutSection,
} from "./AboutStyle";
import audioFile from "../../assets/sounds/aboutus.mp3";

const AboutMain = () => {
  const isTablet = useTablet();

  return (
    <AboutSection>
      <Container>
        <AboutMainContainer>
          {/* mobile version */}
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

                {/* Nav role */}
                <AboutTitle>
                  {AboutMainData.aboutTitle.map((title) => (
                    <H4Eng key={title}>{title}</H4Eng>
                  ))}
                </AboutTitle>
                {/* end nav role */}
              </HeaderAboutMain>
              {/* end Header */}

              {/* Body */}
              <BodyAboutMain>
                <BodyAboutContainer>
                  {/* about */}
                  <AboutSubTitle>
                    <H2Eng>{AboutMainData.aboutSubTitle}</H2Eng>
                  </AboutSubTitle>
                  {/* end about */}

                  {/* Logo text */}
                  <AboutMainTitle>
                    <SubLogo
                      src={AboutMainData.LogoImage}
                      alt={AboutMainData.LogoImageAlt}
                    ></SubLogo>
                  </AboutMainTitle>
                  {/* end Logo text */}

                  {/* Description */}
                  <AboutMainDescription>
                    <H3Eng>{AboutMainData.AboutMainDescription}</H3Eng>
                  </AboutMainDescription>
                  {/* end Description */}
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
        <Footer audio={audioFile} />
      </Container>
    </AboutSection>
  );
};

export default AboutMain;
