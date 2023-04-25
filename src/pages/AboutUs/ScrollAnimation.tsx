import { Animator, ScrollContainer } from "react-scroll-motion";
import { batch } from "react-scroll-motion/dist/animations";
import ScrollPage from "react-scroll-motion/dist/ScrollPage";
import { MoveInPage } from "../../animations/MoveIn";
import { StickyMove } from "../../animations/StickyMove";
import { StickyPage } from "../../animations/StickyPage";
import AboutMain from "./AboutMain";
import AboutUs from "./AboutUs";
import Footer from "../../components/Footer/Footer";
import audioFile from "../../assets/sounds/aboutus.mp3";

const ScrollAnimation = ({ showAboutUs }: any) => {
  const aboutUsMainAnimation = batch(StickyPage());
  const aboutUsAnimation = batch(StickyMove(), MoveInPage(100, 100));

  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={aboutUsMainAnimation}>
            <AboutMain />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={aboutUsAnimation}>
            <AboutUs />
            <Footer audio={audioFile} />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
};

export default ScrollAnimation;
