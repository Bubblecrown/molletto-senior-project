import React, { useEffect, useState } from "react";
import { LogoContainer, LogoImage } from "./LogoStyle";
import Logo from "../../assets/Logotitle.png";
const LogoOpened = () => {
  return (
    <>
      <LogoContainer>
        <LogoImage src={Logo} alt="Logo" />
      </LogoContainer>
    </>
  );
};

export default LogoOpened;
