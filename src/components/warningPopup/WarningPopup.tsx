import React from "react";
import {
  WarningButton,
  WarningContainer,
  WarningContent,
} from "./WarningStyle";
import { H1Noto, H2Noto } from "../../GlobalStyle";

interface WarningPopupProps {
  onClose: () => void;
}

const WarningPopup = ({ onClose }: WarningPopupProps) => {
  return (
    <WarningContainer>
      <WarningContent
        initial={{ translateY: -40 }}
        animate={{
          translateY: 40,
          transition: {
            type: "spring",
            stiffness: 80,
            damping: 5,
          },
        }}
      >
        <H2Noto c="#848484">
          This website will display the best performance on PC devices
        </H2Noto>
        <H2Noto c="#990808" fs={1.25} fw={500}>
          Trigger Warning : Violence / Attempted / murder / Blood / emotional
          abuse / Paranomal / Domestic violence
        </H2Noto>
        <WarningButton onClick={onClose}>Close</WarningButton>
      </WarningContent>
    </WarningContainer>
  );
};

export default WarningPopup;
