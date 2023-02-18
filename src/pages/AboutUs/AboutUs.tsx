import React from "react";
import CardMember from "../../components/card/CardMember";
import HeaderMember from "../../components/HederLine/HeaderMember";
import { CardTeam, Container, Section } from "./AboutStyle";

const AboutUs = () => {
  return (
    <>
      <Section>
        <Container>
          <CardTeam>
            <CardMember />
          </CardTeam>
        </Container>
      </Section>
    </>
  );
};

export default AboutUs;
