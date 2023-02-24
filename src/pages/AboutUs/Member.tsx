import { motion } from "framer-motion";
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
  CloseBox,
  CloseBoxContainer,
  CloseContainer,
  LinkLogo,
  MemberDetailHeader,
  MemberSection,
  Responsibilities,
  SocialImg,
  SocialLogoContainer,
  SVGClose,
} from "./MemberStyle";

const Member = () => {
  const { id } = useParams();
  const member = EachMember.find((m) => m.id === id);
  const socialLogos = SocialLogo.filter((logo) =>
    member?.social?.some((s) => s.platform === logo.socialAlt)
  );

  return (
    <MemberSection
      c="rgba(0, 0, 0, 0.8)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      exit={{ opacity: 0, transition: { delay: 1 } }}
    >
      <Container>
        <HeaderBar
          h="20%"
          
        >
          <HeaderMember logoColor="rgba(0, 0, 0, 0)" />
        </HeaderBar>
        <CardMemberContainer>
          <CardMemberBlock>
            <CardMemberBody>
              <CardSection>
                <CardMember
                  c={member?.color}
                  initial={{ translateY: "-100vh" }}
                  animate={{ translateY: "0", rotateY: 180 }}
                  transition={{
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    delay: 1,
                  }}
                  exit={{
                    translateY: "-100vh",
                    rotateY: 180,
                    zIndex: 6,
                    transition: {
                      type: "spring",
                      stiffness: 10,
                      damping: 5,
                      delay: 0,
                    },
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
        <CloseBoxContainer>
          <CloseBox
            c={member?.color}
            to={`/`}
            initial={{ translateX: "100vh" }}
            animate={{ translateX: "0" }}
            transition={{
              type: "spring",
              stiffness: 8,
              damping: 5,
              delay: 1,
            }}
          >
            <CloseContainer>
              <SVGClose
                initial={{ translateX: "-50%", translateY: "-50%" }}
                whileTap={{ rotate: 90 }}
                fill="#fff"
                height="200px"
                width="200px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 460.775 460.775"
                xmlSpace="preserve"
                stroke="#fff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>{" "}
                </g>
              </SVGClose>
            </CloseContainer>
          </CloseBox>
        </CloseBoxContainer>
      </Container>
    </MemberSection>
  );
};

export default Member;
