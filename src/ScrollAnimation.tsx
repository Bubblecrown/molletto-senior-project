import { Animator, ScrollContainer } from "react-scroll-motion";
import {
  batch,
  MoveIn,
  Sticky,
} from "react-scroll-motion/dist/animations";
import ScrollPage from "react-scroll-motion/dist/ScrollPage";

const ScrollAnimation = () => {
  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Sticky())}>
            <h1
              style={{
                fontSize: 50,
                backgroundColor: "red",
                height: "100vh",
                width: "100vw",
              }}
            >
              About
            </h1>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Sticky(), MoveIn(0, -2000))}>
            <h1
              style={{
                fontSize: 50,
                backgroundColor: "green",
                height: "100vh",
                width: "100vw",
              }}
            >
              Team
            </h1>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
};

export default ScrollAnimation;
