import { motion } from "framer-motion";
import styled from "styled-components";
import { notosans } from "../../GlobalStyle";

export const BookMarksContainer = styled(motion.div)`
  display: block;
  width: clamp(300px, 40vw, 500px);
  height: auto;
  min-height: 500px;
  background-color: #e8e8e8;
  position: absolute;
  bottom: 0;
  left: 5%;
  border-radius: 27px;
`;
export const Bookline = styled.div`
  display: block;
  width: 30%;
  height: 4px;
  background-color: #e8e8e8;
  border-radius: 27px;
`;

export const BookMarkBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  background-color: #fff;
  width: 100%;
  height: 80vh;
  border-radius: 20px;
  position: relative;
  :before {
    content: "Hint";
    width: 120px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: #fff;
    right: 5%;
    top: -60px;
    background-color: #8542a3;
    font-family: ${notosans};
    font-size: 1.75rem;
    font-weight: 600;
  }
`;

export const BookHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const BookBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;
