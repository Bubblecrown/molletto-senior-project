import { motion } from "framer-motion";
import styled from "styled-components";
import seat from "../../assets/images/HoverPopup.png";

export const DessertContainer = styled(motion.div)`
  width: 500px;
  height: auto;
  /* border: 2px solid black; */
  display: flex;
  align-items: flex-end;
`;

export const DessertContainerImage = styled(motion.div)`
  max-width: 300px;
  width: auto;
  height: 230px;
  z-index: 1;
  position: relative;
  border-radius: 12px;
  filter: drop-shadow(3px 4px 6px #000 5);
`;

export const DessertImage = styled(motion.img)`
  max-width: 100%;
  max-height: 100%;

  border-radius: 12px;
`;
export const DessertText = styled.div`
  background-image: url(${seat});
  max-width: 100%;
  max-height: 80vw;
  width: 309.06px;
  height: 248px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  filter: drop-shadow(3px 4px 6px #000 5);
`;
export const DessertTitle = styled.div`
  margin-left: 10%;
  margin-top: 5%;
`;

export const DessertDescription = styled.div`
  margin-top: 5%;
  width: 80%;
`;

export const DessertHeader = styled.div`
  position: relative;
`;

export const DessertHandwriting = styled.div`
  position: absolute;
  top: 0%;
  left: 30%;
  @media only screen and (max-width: 900px) {
    top: -10%;
    left: 30%;
  }
`;
