import {
  Member,
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

const CardMember = () => {
  const dispatch = useDispatch();
  const translateX = useSelector(
    (state: RootState) => state.activeCard.translateX
  );
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
            exit="exit"
          >
            {Member.member1}
          </H1Roboto>
          <H1Roboto
            p="absolute"
            r="0"
            d="flex"
            variants={MemberVariants}
            animate="animateBers"
            exit={{ display: "none" }}
          >
            {Member.member2}
          </H1Roboto>
        </TitleContainer>
        <CardItem>
          {CardAnimation.map((animation, index) => (
            <LinkCard to={`/about/${animation.id}`}>
            <Card
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
              // onClick={() => {
              //   if (translateX) {
              //     window.location.href = `/about/${animation.id}`;
              //   }
              // }}
            ></Card></LinkCard>
          ))}
        </CardItem>
      </CardContainer>
    </>
  );
};

export default CardMember;
