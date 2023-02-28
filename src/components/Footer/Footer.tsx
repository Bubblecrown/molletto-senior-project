import { motion } from "framer-motion";
import React, { createRef, useRef, useState } from "react";
import { IconContainer, SvgNav } from "./FooterStyle";
import audioFile from "../../assets/modern.mp3";

const Footer = () => {
  const [isMuted, setIsMuted] = useState(true);

  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    setIsMuted(!isMuted);
    if (audioRef?.current?.paused) {
      audioRef.current.play();
    } else {
      audioRef?.current?.pause();
    }
  };

  return (
    <IconContainer>
      <SvgNav initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {/* audio */}
        <audio ref={audioRef} muted={isMuted} loop>
          <source src={audioFile} type="audio/mpeg" />
        </audio>
        {/* end audio */}

        {/* svg audio */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_2"
          data-name="Layer 2"
          viewBox="0 0 43.5 43.5"
          onClick={toggleAudio}
        >
          <defs>
            <style>
              {
                "\n      .cls-1 {\n        fill: #fff;\n      }\n\n      .cls-2 {\n        fill: none;\n        stroke: #fff;\n        stroke-miterlimit: 10;\n        stroke-width: 1.5px;\n      }\n    "
              }
            </style>
          </defs>
          <motion.g
            id="Layer_4"
            data-name="Layer 4"
            animate={isMuted ? { opacity: 0.5 } : { opacity: 1 }}
            whileHover={{ fill: "#d9d9d9", opacity: 1 }}
          >
            <g id="click_for_mute" data-name="click for mute">
              <circle className="cls-2" cx={21.75} cy={21.75} r={21} />
              <motion.path
                className="cls-1"
                d="M3.16,41.28C15.83,28.61,28.5,15.95,41.16,3.28c.68-.68-.38-1.74-1.06-1.06C27.43,14.89,14.77,27.55,2.1,40.22c-.68,.68,.38,1.74,1.06,1.06h0Z"
                animate={isMuted ? { opacity: 1 } : { opacity: 0 }}
              />
              <g>
                <rect
                  className="cls-2"
                  x={10.33}
                  y={21.24}
                  width={6.01}
                  height={9.55}
                  rx={2}
                  ry={2}
                />
                <rect
                  className="cls-2"
                  x={26.92}
                  y={21.22}
                  width={6.01}
                  height={9.55}
                  rx={2}
                  ry={2}
                />
                <path
                  className="cls-2"
                  d="M13.11,21.06c0-4.62,3.87-8.38,8.48-8.35,4.52,.03,8.28,3.7,8.35,8.22"
                />
              </g>
            </g>
          </motion.g>
        </svg>
        {/* end svg audio */}

        {/* Home */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_2"
          data-name="Layer 2"
          viewBox="0 0 43.5 43.5"
        >
          <defs>
            <style>
              {
                "\n      .cls-1 {\n        fill: none;\n        stroke: #fff;\n        stroke-miterlimit: 10;\n        stroke-width: 1.5px;\n      }\n    .cls-2 {\n        fill: none;\n        stroke: #fff;\n        stroke-miterlimit: 10;\n        stroke-width: 1.5px;\n      }\n"
              }
            </style>
          </defs>
          <g id="Layer_4" data-name="Layer 4">
            <g id="home_not_holding" data-name="home_not holding">
              <circle className="cls-1" cx={21.75} cy={21.75} r={21} />

              <path
                className="cls-2"
                d="M12.45,28.55v-9.98c0-.82,.38-1.59,1.04-2.08l6.72-5.07c.74-.56,1.77-.56,2.51,.01l7.67,5.9c.42,.32,.67,.82,.67,1.35v9.88c0,.71-.57,1.28-1.28,1.28h-3.98c-.71,0-1.28-.57-1.28-1.28v-4.11c0-1.5-1.21-2.71-2.71-2.71h0c-1.5,0-2.71,1.21-2.71,2.71v4.11c0,.71-.57,1.28-1.28,1.28h-4.09c-.71,0-1.28-.57-1.28-1.28Z"
              />
            </g>
          </g>
        </svg>
        {/* end Home */}
      </SvgNav>
    </IconContainer>
  );
};

export default Footer;
