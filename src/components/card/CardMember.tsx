import React, { useState } from "react";
import { CardAnimation, Member, HeadMember } from "../../data/aboutData";
import { H1Roboto } from "../../GlobalStyle";
import HeaderMember from "../HederLine/HeaderMember";
import {
  Card,
  CardContainer,
  CardItem,
  Header,
  TitleContainer,
} from "./CardStyle";

const CardMember = () => {
  const [translateX, setTranslateX] = useState(false);
  const MemberVariants = {
    animateMem: {
      translateX: translateX ? "-200%" : 0,
      translateY: "-50%",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 6,
      },
    },
    animateBers: {
      translateX: translateX ? "200%" : 0,
      translateY: "-50%",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 6,
      },
    },
    exit: { display: "none" },
  };
  return (
    <>
      <Header
        initial={{ display: "absolute" }}
        animate={{
          translateY: translateX ? 0 : -200,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 6,

        }}
      >
        <HeaderMember />
      </Header>

      <CardContainer
        onClick={() => {
          setTranslateX(!translateX);
        }}
      >
        <TitleContainer>
          <H1Roboto
            p="absolute"
            l="0"
            variants={MemberVariants}
            animate="animateMem"
            exit="exit"
          >
            {Member.member1}
          </H1Roboto>
          <H1Roboto
            p="absolute"
            r="0"
            variants={MemberVariants}
            animate="animateBers"
            exit={{ display: "none" }}
          >
            {Member.member2}
          </H1Roboto>
        </TitleContainer>
        <CardItem>
          {CardAnimation.map((animation, index) => (
            <Card
              key={index}
              c={animation.color}
              animate={{
                translateX: translateX ? animation.xMove : animation.xOrigin,
                translateY: translateX ? animation.yMove : animation.yOrigin,
                rotate: animation.rotate,
                zIndex: animation.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 6,
              }}
            ></Card>
          ))}
        </CardItem>
      </CardContainer>
    </>
  );
};

export default CardMember;
