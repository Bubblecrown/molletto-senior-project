import React, { useRef, useState } from "react";
import { PulsingBox } from "./PulsingStyle";
import { Route, useNavigate } from "react-router";
import soundEffect from "../../assets/sounds/effects/knock_door.mp3";
import { useHover } from "../../hooks/useHover";
import { motion } from "framer-motion";
import YakuPopup from "../DessertPopup/YakuPopup";

interface PulsingModelProps {
  name: string;
  description:string
}

const PulsingPresent = ({name, description}: PulsingModelProps) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div style={{ cursor: "pointer" }} onClick={()=>setIsClicked(!isClicked)}>
      <PulsingBox></PulsingBox>
      {isClicked && (
        <motion.div
          initial={{ translateY: -20 }}
          animate={{ translateY: 0 }}
          exit={{ translateY: 20 }}
        >
          <YakuPopup name={name} description={description} />
        </motion.div>
      )}
    </div>
  );
};

export default PulsingPresent;
