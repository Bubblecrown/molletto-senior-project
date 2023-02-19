import { useSelector } from "react-redux";
import CardMember from "../../components/card/CardMember";
import HeaderMember from "../../components/HederLine/HeaderMember";
import { CardTeam, Container, Header, Section } from "./AboutStyle";
import {RootState} from '../../app/store'
const AboutUs = () => {
  const translateX = useSelector((state: RootState) => state.activeCard.translateX);
  
  return (
    <>
      <Section>
        <Container>
          <CardTeam>
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

            <CardMember />
          </CardTeam>
        </Container>
      </Section>
    </>
  );
};

export default AboutUs;
