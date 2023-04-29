import {
  MemberText,
  CardAnimationSmall,
  CardAnimationLarge,
  CardAnimationMedium,
  CardAnimationTablet,
  EachMember,
} from "../../data/aboutData";
import { H1Roboto, H3Eng } from "../../GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import {
  CardContainer,
  CardItem,
  CardVideo,
  LinkCard,
  RoleCard,
  TitleContainer,
} from "./CardStyle";
import { setActiveCard } from "../../slices/CardSlice";
import { RootState } from "../../app/store";
import { useIsMedium, useIsSmall, useTablet } from "../../hooks/useMediaQuery";
import { useState } from "react";
import { useAnimationControls } from "framer-motion";

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
    console.log(isFlipped);
  }

  const animated = useAnimationControls();

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
          >
            {MemberText.member1}
          </H1Roboto>
          <H1Roboto
            p="absolute"
            r="0"
            d="flex"
            variants={MemberVariants}
            animate="animateBers"
          >
            {MemberText.member2}
          </H1Roboto>
        </TitleContainer>

        {/* Card for each member */}
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
              {/* Card profile image */}
              <CardVideo
                src={
                  EachMember.find((member) => member.id === animation.id)
                    ?.profile
                }
                muted
                loop
                autoPlay
              />
              {/* end Card profile image */}

              {/* Role of each member */}
              <RoleCard>
                <H3Eng fw={600}>
                  {
                    EachMember.find((member) => member.id === animation.id)
                      ?.role
                  }
                </H3Eng>
              </RoleCard>
              {/* end Role of each member */}
            </LinkCard>
          ))}
        </CardItem>
        {/* end Card for each member */}
      </CardContainer>
    </>
  );
};

export default CardMember;
