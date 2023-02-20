import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

// Font
export const santhai = "'Noto Sans Thai', sans-serif";
export const roboto = "'Roboto', sans-serif";
export const engfont = "'Noto Sans', sans-serif";
// end Font

const GlobalStyles = createGlobalStyle`
    * {
        border: 0;
        box-sizing: border-box;
        color: inherit;
        font-size: inherit;
        margin: 0;
        padding: 0;
    }

    html, body, #root {
      min-height: 100vh;
        height: auto;
        width: 100vw;
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }
    a {
        font-weight: 500;
        text-decoration: none;
    }
    
`;
export const Container = styled(motion.div)`
  background-color: beige;
  height: 100vh;
  width: 100vw;
`;
export const Container1 = styled(motion.div)`
  background-color: aqua;
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* position: relative; */
`;
export const Container2 = styled(motion.div)`
  background-color: green;
  /* height: 100px;
  width: 100px; */
  height: 100%;
  width: 100%;
  overflow: hidden;
  /* position: absolute; */
  /* top: 0;
  left: 0; */
`;
export const SlideIn = styled(motion.div)`
  background: green;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  transform-origin: top;
`;
export const SlideOut = styled(motion.div)`
  background: green;
  position: fixed;
  top: 0;
  left: 0;
  height: 0;
  width: 100%;
  transform-origin: bottom;
`;

// Design System
export const H3Roboto = styled.h3<{ c?: string; m?: string; d?: string }>`
  font-family: ${roboto};
  font-size: clamp(0.25rem, 5vw, 1rem);
  width: 15vw;
  color: ${({ c }) => (c ? c : "#fff")};
  margin: ${({ m }) => (m ? m : "0 0 -26px 0")};
  display: ${({ d }) => (d ? d : "flex")};
  @media only screen and (max-width:800px) {
    width: 10vw;
  }
  @media only screen and (min-width: 801px) and (max-width: 900px) {
    width: 20vw;
  }
`;

export const H1Roboto = styled(motion.h1)<{
  c?: string;
  m?: string;
  d?: string;
  p?: string;
  l?: string;
  r?: string;
  t?: string;
}>`
  font-family: ${roboto};
  font-weight: 800;
  font-size: 8rem;
  line-height: 150%;
  letter-spacing: 0.7rem;
  text-transform: uppercase;
  color: ${({ c }) => (c ? c : "#fff")};
  margin: ${({ m }) => (m ? m : "0 0 -26px 0")};
  display: ${({ d }) => (d ? d : "flex")};
  position: ${({ p }) => (p ? p : "")};
  left: ${({ l }) => (l ? l : "")};
  right: ${({ r }) => (r ? r : "")};
  top: ${({ t }) => (t ? t : "50%")};
  /* transform: translate(0, ${({ t }) => (t ? t : "-50%")}); */
  @media screen and (max-width: 1430px) {
    top: ${({ r }) => (r ? "100%" : "0")};
  }
`;

// English font
export const H4Eng = styled.h4<{ c?: string; m?: string; d?: string }>`
  font-family: ${engfont};
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 9.375rem;
  color: ${({ c }) => (c ? c : "#fff")};
  margin: ${({ m }) => (m ? m : "0 0 -26px 0")};
  display: ${({ d }) => (d ? d : "flex")};
`;

// end Design System

export default GlobalStyles;
