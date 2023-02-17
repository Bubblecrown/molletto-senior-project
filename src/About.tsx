import React from "react";
import AboutTransition from "./AboutTransition";
import { Container2 } from "./GlobalStyle";

const About = () => {
  const dropin = {
    hidden: {
      y: "-100vh",
      opacity: "0",
    },
    visible: {
      y: "0",
      opacity: "1",
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 100,
        stiffness: 100,
      },
    },
    exit: {
      y: "100vh",
      opacity: "0",
    },
  };
  return (
    <Container2
      // variants={dropin}
      // initial="hidden"
      // animate="visible"
      // exit="exit"
    >
      Aboutttttt
    </Container2>
  );
};

export default About;
