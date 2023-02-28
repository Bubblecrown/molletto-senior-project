import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../../components/card/CardStyle";

export const MemberSection = styled(motion.div)<{ c?: string; o?: number }>`
  background-color: ${({ c }) => (c ? c : "#d9d9d9")};
  height: auto;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  opacity: ${({ o }) => (o ? o : 1)};
  position: fixed;
  left: 0;
  top: 0;
  padding: 2% 0;
`;
export const CardMemberContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CardMemberBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CardMemberBody = styled.div`
  width: 70%;
  display: flex;
  gap: 3rem;
  height: 100%;

  @media only screen and (max-width: 1150px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;
export const CardSection = styled.div`
  flex-grow: 0.1;
  max-width: 100%;
  flex-basis: 0;
  align-items: center;
  display: flex;
  @media only screen and (min-width: 550px) and (max-width: 735px) {
    flex-basis: 100%;
  }
`;
export const CardMember = styled(motion(Card))`
  max-width: 100%;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardDetail = styled.div`
  flex-basis: 0;
  flex-grow: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  word-break: break-word;
  position: relative;
  @media only screen and (max-width: 735px) {
    flex-basis: 100%;
  }
`;

export const MemberDetailHeader = styled.div``;
export const Responsibilities = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 100%;
`;

export const SocialLogoContainer = styled.div`
  text-align: center;
  margin: 20px 0 0 0;
`;
export const SocialImg = styled.img`
  max-width: 25px;
  height: auto;
  margin: 0 10px;
`;
export const LinkLogo = styled.a``;
export const CloseBoxContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  align-items: center;
  justify-content: flex-end;
  transform: translate(10%, 10%);
  @media only screen and (max-width: 735px) {
    height: 20%;
  }
  @media only screen and (max-width: 360px) {
    height: 30%;
  }
`;

export const CloseBox = styled(motion(Link))<{ c?: string; o?: number }>`
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
export const CloseContainer = styled.div`
  max-width: 100%;
  height: 100%;
  position: relative;
`;

export const SVGClose = styled(motion.svg)`
  max-width: 15%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  :focus {
    border: none;
    outline: none;
  }
`;
