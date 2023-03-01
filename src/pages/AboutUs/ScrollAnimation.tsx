import { Animator, ScrollContainer } from "react-scroll-motion";
import { batch } from "react-scroll-motion/dist/animations";
import ScrollPage from "react-scroll-motion/dist/ScrollPage";
import { MoveInPage } from "../../animations/MoveIn";
import { StickyMove } from "../../animations/StickyMove";
import { StickyPage } from "../../animations/StickyPage";
import AboutMain from "./AboutMain";
import AboutUs from "./AboutUs";

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
          <Animator animation={batch(StickyMove(), MoveInPage(100, 100))}>
            <AboutUs />
          </Animator>
        </ScrollPage>
        
      </ScrollContainer>
    </>
  );
};

export default ScrollAnimation;
