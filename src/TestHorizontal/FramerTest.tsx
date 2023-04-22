import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./styles.css";
import HorizontalScroll from "./HorizontalScroll";

export default function FramerTest() {
  const { scrollX } = useScroll();
  const y1 = useTransform(scrollX, [0, 300], [0, 200]);
  const y2 = useTransform(scrollX, [0, 200], [0, -200]);

  return (
    <>
      <HorizontalScroll>
        <motion.div className="box" style={{ y: y1, position: "absolute" }} />
        <motion.div
          className="box"
          style={{ y: y2, x: 50, background: "salmon" }}
        />
        <div style={{ height: 500 }} />
      </HorizontalScroll>
    </>
  );
}
