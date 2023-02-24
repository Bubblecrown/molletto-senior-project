import {
  MemberText,
  CardAnimationSmall,
  CardAnimationLarge,
  CardAnimationMedium,
  CardAnimationTablet,
} from "../../data/aboutData";
import { H1Roboto } from "../../GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardContainer,
  CardItem,
  LinkCard,
  TitleContainer,
} from "./CardStyle";
import { setActiveCard } from "../../slices/CardSlice";
import { RootState } from "../../app/store";
import { useIsMedium, useIsSmall, useTablet } from "../../hooks/useMediaQuery";
import ScrollPrompt from "../Prompt/ScrollPrompt";
import { Link } from "react-router-dom";
import { useState } from "react";
import Member from "../../pages/AboutUs/Member";

const CardMember = () => {
  const dispatch = useDispatch();
  const translateX = useSelector(
    (state: RootState) => state.activeCard.translateX
  );
  const [selectedCardId, setSelectedCardId] = useState("");
  const handleCardClick = (id: string) => {
    setSelectedCardId(id);
  };

  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }
  const isSmall = useIsSmall();
  const isTablet = useTablet();
  const isMedium = useIsMedium();

  const CardAnimation = isSmall
    ? CardAnimationSmall
    : isTablet
    ? CardAnimationTablet
    : isMedium
    ? CardAnimationMedium
    : CardAnimationLarge;

  const Cardvariants = {};
  const MemberVariants = {
    animateMem: {
      x: translateX ? "-200%" : 0,
      y: "-50%",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 6,
      },
    },
    animateBers: {
      x: translateX ? "200%" : 0,
      y: "-50%",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 6,
      },
    },
    exit: { opacity: 0 },
  };

  return (
    <>
      <CardContainer onClick={() => dispatch(setActiveCard())}>
        <TitleContainer>
          <H1Roboto
            p="absolute"
            l="0"
            variants={MemberVariants}
            animate="animateMem"
            // exit="exit"
          >
            {MemberText.member1}
          </H1Roboto>
          <H1Roboto
            p="absolute"
            r="0"
            d="flex"
            variants={MemberVariants}
            animate="animateBers"
            // exit="exit"
          >
            {MemberText.member2}
          </H1Roboto>
        </TitleContainer>
        <CardItem>
          {CardAnimation.map((animation, index) => (
            <LinkCard
              to={translateX ? `/about/${animation.id}` : ``}
              
              key={index}
              c={animation.color}
              animate={{
                x: translateX ? animation.xMove : animation.xOrigin,
                y: translateX ? animation.yMove : animation.yOrigin,
                rotate: animation.rotate,
                zIndex: animation.zIndex,
              }}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 6,
              }}
              exit={{
                x: animation.xMove,
                y: animation.yMove,
                opacity:1,
                ...(selectedCardId === animation.id && {
                  rotateY: 360,
                  rotate: 0,
                }),
                transition: {
                  type: "spring",
                  stiffness: 10,
                  damping: 5,
                  repeat: Infinity
                },
              }}
              // {...(selectedCardId === animation.id && {
              //   onClick: { openModal },
              // })}
              onClick={() => handleCardClick(animation.id)}
            ></LinkCard>
          ))}
        </CardItem>
      </CardContainer>
      {/* {showModal && (
        <Member />
      )} */}
    </>
  );
};

export default CardMember;
