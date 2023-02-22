import React from "react";
import { HeadMember } from "../../data/aboutData";
import { H3Roboto } from "../../GlobalStyle";
import { Line, Logo, SpanText } from "./HeaderStyle";

const HeaderMember = ({logoColor}: {logoColor?: string;}) => {
  return (
    <>
      <Line>

        <H3Roboto m="0 0 -26px 0" w="15vw">{HeadMember.title}</H3Roboto>
        <SpanText c={logoColor}>
          <Logo src={HeadMember.imgPath} alt={HeadMember.imageAlt} c={logoColor}/>
        </SpanText>
      </Line>
    </>
  );
};

export default HeaderMember;
