import { useSelector } from "react-redux";
import CardMember from "../../components/card/CardMember";
import HeaderMember from "../../components/HeaderLine/HeaderMember";
import { CardTeam, CurtainContainer, CurtainSection, Header, HeaderBar } from "./AboutStyle";
import { RootState } from "../../app/store";
import PulsingCircle from "../../components/PulsingCircle/PulsingCircle";

const AboutUs = () => {
  const translateX = useSelector(
    (state: RootState) => state.activeCard.translateX
  );

  return (
    <>
      <CurtainSection c="transparent">
        <CurtainContainer p="0 5%">
          <HeaderBar>
            <Header
              animate={{
                translateY: translateX ? 0 : "-100vh",
                display: "absolute",
              }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 6,
              }}
              exit={{
                opacity: 0,
              }}
            >
              <HeaderMember />
            </Header>
          </HeaderBar>
          <CardTeam>
            <CardMember />
            <PulsingCircle />
          </CardTeam>
          
        </CurtainContainer>
      </CurtainSection>
    </>
  );
};

export default AboutUs;
