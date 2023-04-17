import { Animator, ScrollContainer } from "react-scroll-motion";
import { FadeOut, batch } from "react-scroll-motion/dist/animations";
import ScrollPage from "react-scroll-motion/dist/ScrollPage";
import { MoveInPage } from "../../animations/MoveIn";
import { StickyMove } from "../../animations/StickyMove";
import { StickyPage } from "../../animations/StickyPage";
import AboutMain from "./AboutMain";
import AboutUs from "./AboutUs";
import Footer from "../../components/Footer/Footer";
import audioFile from "../../assets/sounds/aboutus.mp3";
import { useLocation, useNavigate } from "react-router";
import { memo, useEffect, useState } from "react";
import { redirect } from "react-router-dom";

const ScrollAnimation = ({ showAboutUs }: any) => {
  const aboutUsAnimation = batch(StickyMove(), MoveInPage(100, 100));
  const aboutUsMainAnimation = batch(StickyPage());

  return (
    <>
      <ScrollContainer snap="mandatory">
        <ScrollPage>
          <Animator animation={aboutUsMainAnimation}>
            <AboutMain />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={aboutUsAnimation}>
            <AboutUs />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <Footer audio={audioFile} />
    </>
  );
};

export default ScrollAnimation;
