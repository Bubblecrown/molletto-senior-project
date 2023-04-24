import React from "react";
import { YakuPopupContainer } from "./DessertStyle";
import { useHover } from "../../hooks/useHover";
import { H1Noto, H2Noto, H4Noto } from "../../GlobalStyle";

interface YakuPopupProps {
  name: string;
  description: string;
}

const YakuPopup = ({ name, description }: YakuPopupProps) => {
  return (
    <YakuPopupContainer>
      <H2Noto c="#535353">{name}</H2Noto>
      <H4Noto c="#535353">{description}</H4Noto>
    </YakuPopupContainer>
  );
};

export default YakuPopup;
