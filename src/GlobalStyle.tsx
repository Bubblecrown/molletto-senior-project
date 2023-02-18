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
        height: 100vh;
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
export const H3Roboto = styled.h3<{ c?: string, m?: string, d?: string }>`
  font-family: ${roboto};
  font-size: 1rem;
  color: ${({c})=> (c? c : '#fff')};
  margin: ${({m})=>(m? m : '0 0 -26px 0')};
  display: ${({d})=>(d? d : 'flex')};
`
// end Design System

export default GlobalStyles;
