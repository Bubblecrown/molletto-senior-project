import { CardAnimation, Member, HeadMember } from "../../data/aboutData";
import { H1Roboto } from "../../GlobalStyle";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardContainer, CardItem, TitleContainer } from "./CardStyle";
import { setActiveCard } from "../../slices/CardSlice";
import { RootState } from "../../app/store";

const CardMember = () => {
  const dispatch = useDispatch();
  const translateX = useSelector(
    (state: RootState) => state.activeCard.translateX
  );
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
