import {
  animate,
  useMotionTemplate,
  useMotionValue,
  Variant,
  Variants,
} from "framer-motion";
import React, { useState } from "react";
import { Card, CardContainer } from "./CardStyle";

const CardMember = () => {
  const [translateX, setTranslateX] = useState(false);
  const variants: Variants = {
    animate: (xMove)=> {
      translateX: translateX ? 0 : 360,
      translateY: 45,
      rotate: -2.24,
      zIndex: 2,
    },
  };
  return (
    <>
      <CardContainer
        onClick={() => {
          setTranslateX(!translateX);
        }}
      >
        <Card
          y="20"
          c="#92E5FF"
          custom={xMove}
          variants={variants}
          animate={{
            translateX: translateX ? 0 : 360,
            translateY: 45,
            rotate: -2.24,
            zIndex: 2,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        ></Card>

        <Card
          radius="-0.07"
          c="#FF92B9"
          animate={{
            translateY: translateX ? 20 : 0,
            rotate: -0.07,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        ></Card>
        <Card
          radius="5.48"
          y="10"
          c="#92FFCA"
          animate={{
            translateX: translateX ? 0 : -360,
            translateY: 25,
            rotate: 5.48,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        ></Card>
      </CardContainer>
    </>
  );
};

export default CardMember;
