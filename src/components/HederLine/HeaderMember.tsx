import React from "react";
import { Header } from "../../data/aboutData";
import { Line, Logo, SpanText } from "./HeaderStyle";

const HeaderMember = () => {
  return (
    <>
      <Line>
        <h2>gggggggg</h2>
        <SpanText>
          <Logo src={Header.imgPath} alt={Header.imageAlt} />
        </SpanText>
      </Line>
    </>
  );
};

export default HeaderMember;
