import { Animator, ScrollContainer } from "react-scroll-motion";
import {
  batch,
  Fade,
  MoveIn,
  Sticky,
} from "react-scroll-motion/dist/animations";
import ScrollPage from "react-scroll-motion/dist/ScrollPage";
import AboutMain from "./AboutMain";
import AboutUs from "./AboutUs";

const ScrollAnimation = () => {
  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Sticky())}>
            <AboutMain/>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Sticky(), MoveIn(0, -2000))}>
            <AboutUs />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
};

export default ScrollAnimation;
