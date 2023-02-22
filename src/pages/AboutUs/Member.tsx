import React from "react";
import { Card } from "../../components/card/CardStyle";
import HeaderMember from "../../components/HeaderLine/HeaderMember";
import { EachMember } from "../../data/aboutData";
import { BodyEng, H1Noto, H3Eng, H3Roboto } from "../../GlobalStyle";
import { Container, Header, HeaderBar, Section } from "./AboutStyle";
import {
  CardDetail,
  CardMember,
  CardMemberBlock,
  CardMemberBody,
  CardMemberContainer,
  CardSection,
  MemberDetailHeader,
  Responsibilities,
} from "./MemberStyle";

const Member = () => {
  return (
    <Section c="#000000" o={0.8}>
      <Container>
        <HeaderBar>
          <Header animate={{}} transition={{}}>
            <HeaderMember logoColor="#000000" />
          </Header>
        </HeaderBar>

        <CardMemberContainer>
          <CardMemberBlock>
            <CardMemberBody>
              <CardSection>
                <CardMember
                  c="#fff"
                  animate={{}}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 6,
                  }}
                ></CardMember>
              </CardSection>
              <CardDetail>
                <MemberDetailHeader>
                  <H3Roboto d="block">Responsibility</H3Roboto>
                  <H1Noto d="block">Pimchawisa SapaRram</H1Noto>
                  <Responsibilities>
                    <H3Eng>Ux/Ui Designer</H3Eng>
                    <H3Eng>Art Director</H3Eng>
                    <H3Eng>3D Modeller</H3Eng>
                    <H3Eng>Animator</H3Eng>
                  </Responsibilities>
                </MemberDetailHeader>
                <BodyEng indent="2rem">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s
                </BodyEng>
              </CardDetail>
            </CardMemberBody>
          </CardMemberBlock>
        </CardMemberContainer>
      </Container>
    </Section>
  );
};

export default Member;
