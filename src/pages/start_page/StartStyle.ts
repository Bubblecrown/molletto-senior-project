import { motion } from "framer-motion";
import styled from "styled-components";

export const StartContainer = styled.div<{ c?: string; o?: number }>`
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
;

`;
export const StartContent = styled.div`
 
`;

export const CloseBox = styled.div<{ c?: string; o?: number }>`
  width: 232px;
  max-width: 100%;
  height: 97px;
  border-radius: 53px 0 0 53px;
  background-color: ${({ c }) => (c ? c : "#000")};

  @media only screen and (max-width: 800px) {
    /* max-height: 10%; */
    /* bottom: -20%; */
  }
  @media only screen and (max-width: 350px) and (max-height: 900px) {
    /* bottom: -50%; */
  }
`;

