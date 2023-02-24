import { useSelector } from "react-redux";
import CardMember from "../../components/card/CardMember";
import HeaderMember from "../../components/HeaderLine/HeaderMember";
import { CardTeam, Container, Header, HeaderBar, Section } from "./AboutStyle";
import { RootState } from "../../app/store";
import { CircleContainer } from "../../components/PulsingCircle/PulsingStyle";
const AboutUs = () => {
  const translateX = useSelector(
    (state: RootState) => state.activeCard.translateX
  );

  return (
    <>
      <Section>
        <Container>
          <HeaderBar>
            <Header
              animate={{
                translateY: translateX ? 0 : -200,
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
            <CircleContainer />
          </CardTeam>
        </Container>
      </Section>
    </>
  );
};

export default AboutUs;
