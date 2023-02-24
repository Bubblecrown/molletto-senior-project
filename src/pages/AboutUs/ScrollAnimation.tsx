import { Animator, ScrollContainer } from "react-scroll-motion";
import { batch, MoveIn, Sticky } from "react-scroll-motion/dist/animations";
import ScrollPage from "react-scroll-motion/dist/ScrollPage";
import { MoveInPage } from "../../animations/MoveIn";
import { StickyPage } from "../../animations/StickyPage";
import AboutMain from "./AboutMain";
import { Section } from "./AboutStyle";
import AboutUs from "./AboutUs";
import Member from "./Member";

const ScrollAnimation = () => {
  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(StickyPage())}>
            <AboutMain />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Sticky(), MoveInPage(100))}>
            <AboutUs />
          </Animator>
        </ScrollPage>

      </ScrollContainer>
    </>
  );
};

export default ScrollAnimation;
