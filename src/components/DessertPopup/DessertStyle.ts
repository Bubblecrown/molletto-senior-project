import { motion } from "framer-motion";
import styled from "styled-components";
import seat from "../../assets/images/HoverPopup.png";

export const DessertContainer = styled(motion.div)`
  width: 1000px;
  height: 100%;
  /* border: 2px solid black; */
  display: flex;
  align-items: flex-end;
`;

export const DessertImage = styled(motion.img)`
  max-width: 100%;
  width: auto;
  height: 250px;
  z-index: 1;
  position: relative;
`;

export const DessertText = styled.div`
  background-image: url(${seat});
  max-width: 100%;
  max-height: 80vw;
  width: 320px;
  height: 267px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
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
  top: -10%;
  left: 30%;
`;
