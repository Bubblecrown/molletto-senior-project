import React, { useRef, useState } from "react";
import { PulsingBox } from "./PulsingStyle";
import { motion } from "framer-motion";
import TalePopup from "../DessertPopup/TalePopup";

interface PulsingModelProps {
  name: string;
  description: string;
}

const PulsingPresent = ({ name, description }: PulsingModelProps) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div style={{ cursor: "pointer" }} onClick={() => setIsClicked(!isClicked)}>
      <PulsingBox />
      {isClicked && (
        <motion.div
          initial={{ translateY: -20 }}
          animate={{ translateY: 0 }}
          exit={{ translateY: 20 }}
        >
          <TalePopup name={name} description={description} />
        </motion.div>
      )}
    </div>
  );
};

export default PulsingPresent;
