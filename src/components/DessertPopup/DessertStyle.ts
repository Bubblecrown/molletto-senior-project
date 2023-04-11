import { motion } from "framer-motion";
import styled from "styled-components";
import seat from "../../assets/images/HoverPopup.png";

export const DessertContainer = styled(motion.div)`
  width: 80%;
  height: auto;
  border: 2px solid black;
`;

export const DessertImage = styled.div`
  background-image: url(${seat});
  max-width: 100%;
  max-height: 80vw;
  width: 491px;
  height: 410px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;

  align-items: center;
`;

export const DessertTitle = styled.div`
  margin-left: 5%;
`;

export const DessertDescription = styled.div`
  margin-top: 10%;
  width: 80%;
`;

export const DessertHeader = styled.div`
  position: relative;
`;

export const DessertHandwriting = styled.div`
  position: absolute;
  top: -15%;
  left: 25%;
`;
