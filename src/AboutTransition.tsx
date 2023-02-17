import { motion } from "framer-motion";
import { SlideIn, SlideOut } from "./GlobalStyle";

const AboutTransition = (OriginalComponent: any) => {
  return () => (
    <>
      <OriginalComponent />
      <SlideIn
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <SlideOut
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </>
  );
};

export default AboutTransition;
