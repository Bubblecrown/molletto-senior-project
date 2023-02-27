import { useSelector } from "react-redux";
import CardMember from "../../components/card/CardMember";
import HeaderMember from "../../components/HeaderLine/HeaderMember";
import { CardTeam, Header, HeaderBar } from "./AboutStyle";
import { RootState } from "../../app/store";
import { CircleContainer } from "../../components/PulsingCircle/PulsingStyle";
import PulsingCircle from "../../components/PulsingCircle/PulsingCircle";
import { Container, Section } from "../../GlobalStyle";
import Footer from "../../components/Footer/Footer";
const AboutUs = () => {
  const translateX = useSelector(
    (state: RootState) => state.activeCard.translateX
  );

  return (
    <>
      <Section>
        <Container p="0 5%">
          <HeaderBar>
            <Header
              animate={{
                translateY: translateX ? 0 : '-100vh',
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
          <Footer />
        </Container>
      </Section>
    </>
  );
};

export default AboutUs;
