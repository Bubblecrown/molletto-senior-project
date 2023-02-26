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
  CardBack,
  CardContainer,
  CardFront,
  CardItem,
  FlipCardContainer,
  LinkCard,
  TitleContainer,
} from "./CardStyle";
import { setActiveCard } from "../../slices/CardSlice";
import { RootState } from "../../app/store";
import { useIsMedium, useIsSmall, useTablet } from "../../hooks/useMediaQuery";
import ScrollPrompt from "../Prompt/ScrollPrompt";
import { Await, Link } from "react-router-dom";
import { useState } from "react";
import Member from "../../pages/AboutUs/Member";
import { useAnimationControls } from "framer-motion";
import ReactCardFlip from "react-card-flip";

const CardMember = () => {
  const dispatch = useDispatch();
  const translateX = useSelector(
    (state: RootState) => state.activeCard.translateX
  );
  const [selectedCardId, setSelectedCardId] = useState("");
  const handleCardClick = (id: string) => {
    setSelectedCardId(id);
    console.log(id);
  };

  const [isFlipped, setIsFlipped] = useState(false);
  function handleFlipCard() {
    setIsFlipped(!isFlipped);
    console.log(isFlipped)
  }

  const animated = useAnimationControls();

  async function sequence(id: any) {
    await animated.start({ rotate: -90 });
    await animated.start({ scale: 1.5 });
    await animated.start({ rotate: 0 });
    animated.start({ scale: 1 });
  }
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
              variants={MemberVariants}
              animate={{
                x: translateX ? animation.xMove : animation.xOrigin,
                y: translateX ? animation.yMove : animation.yOrigin,
                rotate: animation.rotate,
                zIndex: animation.zIndex,
              }}
              whileHover={{
                scale: 1.1,
              }}
              {...(selectedCardId != animation.id && {
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 6,
                },
              })}
              {...(selectedCardId === animation.id && {
                transition: {
                  type: "spring",
                  stiffness: 60,
                  damping: 20,
                },
              })}
              exit={{
                x: animation.xMove,
                y: animation.yMove,
                opacity: 1,
                ...(selectedCardId === animation.id && {
                  rotateY: 180,
                  rotate: 0,
                  zIndex: 6,
                  translateY: "-100vh",

                  transition: {
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                  },
                }),
                ...(selectedCardId != animation.id && {
                  transition: {
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    repeat: Infinity,
                    delay: 100,
                  },
                }),
              }}
              onTap={() => {
                handleCardClick(animation.id);
              }}
            >
              
            </LinkCard>
          ))}
        </CardItem>
      </CardContainer>
    </>
  );
};

export default CardMember;
