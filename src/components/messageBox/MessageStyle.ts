import { motion } from "framer-motion";
import styled from "styled-components";

export const MessageContainer = styled.div`
  width: 150px;
  height: 75px;
  background-color: black;
  color: #fff;
  padding: 20px;
  position: relative;
  margin: 40px;
  float: left;
  z-index: 100;
  :after {
    content: " ";
    position: absolute;
    right: -15px;
    top: 15px;
    border-top: 15px solid transparent;
    border-right: none;
    border-left: 15px solid black;
    border-bottom: 15px solid transparent;
  }
`;
