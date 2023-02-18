import React from "react";
import { Header } from "../../data/aboutData";
import { H3Roboto } from "../../GlobalStyle";
import { Line, Logo, SpanText } from "./HeaderStyle";

const HeaderMember = () => {
  return (
    <>
      <Line>
        <H3Roboto>{Header.title}</H3Roboto>
        <SpanText>
          <Logo src={Header.imgPath} alt={Header.imageAlt} />
        </SpanText>
      </Line>
    </>
  );
};

export default HeaderMember;
