import React from "react";
import { HeadMember } from "../../data/aboutData";
import { H3Roboto } from "../../GlobalStyle";
import { Line, Logo, SpanText } from "./HeaderStyle";

const HeaderMember = () => {
  return (
    <>
      <Line>
        <H3Roboto>{HeadMember.title}</H3Roboto>
        <SpanText>
          <Logo src={HeadMember.imgPath} alt={HeadMember.imageAlt} />
        </SpanText>
      </Line>
    </>
  );
};

export default HeaderMember;
