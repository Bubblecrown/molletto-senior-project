import React from "react";
import { YakuPopupContainer } from "./DessertStyle";
import { useHover } from "../../hooks/useHover";
import { H1Noto, H2Noto, H4Noto } from "../../GlobalStyle";

interface YakuPopupProps {
  name: string;
  description: string;
}

const TalePopup = ({ name, description }: YakuPopupProps) => {
  return (
    <YakuPopupContainer>
      <H2Noto c="#3a3a3a">{name}</H2Noto>
      <H4Noto c="#3a3a3a">{description}</H4Noto>
    </YakuPopupContainer>
  );
};

export default TalePopup;
