import React from "react";
import { useParams } from "react-router";

import { Card } from "../../components/card/CardStyle";
import HeaderMember from "../../components/HeaderLine/HeaderMember";
import { EachMember, SocialLogo } from "../../data/aboutData";
import { BodyEng, H1Noto, H3Eng, H3Roboto } from "../../GlobalStyle";
import { Container, Header, HeaderBar, Section } from "./AboutStyle";
import {
  CardDetail,
  CardMember,
  CardMemberBlock,
  CardMemberBody,
  CardMemberContainer,
  CardSection,
  LinkLogo,
  MemberDetailHeader,
  Responsibilities,
  SocialImg,
  SocialLogoContainer,
} from "./MemberStyle";

const Member = () => {
  const { id } = useParams();
  const member = EachMember.find((m) => m.id === id);
  const socialLogos = SocialLogo.filter((logo) =>
    member?.social?.some((s) => s.platform === logo.socialAlt)
  );
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
                  c={member?.color}
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
                  <H1Noto d="block">{member?.memberName}</H1Noto>
                  <Responsibilities>
                    {member?.responsibility?.map((responsibility) => (
                      <H3Eng c="#92E5FF" key={responsibility}>
                        {responsibility}
                      </H3Eng>
                    ))}
                  </Responsibilities>
                </MemberDetailHeader>
                <BodyEng indent="2rem">{member?.desciption}</BodyEng>
                <SocialLogoContainer>
                  {socialLogos.map((logo) => {
                    const socialMedia = member?.social?.find(
                      (s) => s.platform === logo.socialAlt
                    );
                    return (
                      <LinkLogo key={logo.socialAlt} href={socialMedia?.link}>
                        <SocialImg src={logo.socialImg} alt={logo.socialAlt} />
                      </LinkLogo>
                    );
                  })}
                </SocialLogoContainer>
              </CardDetail>
            </CardMemberBody>
          </CardMemberBlock>
        </CardMemberContainer>
      </Container>
    </Section>
  );
};

export default Member;
