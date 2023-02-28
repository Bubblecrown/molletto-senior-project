import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

// Font
export const santhai = "'Noto Sans Thai', sans-serif";
export const roboto = "'Roboto', sans-serif";
export const notosans = "'Noto Sans', sans-serif";
export const guildaFont = "'Gilda Display', serif";
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
        width: 100%;
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }
    a {
        font-weight: 500;
        text-decoration: none;
    }
    
`;

export const Section = styled.div<{ c?: string; o?: number }>`
  background-color: ${({ c }) => (c ? c : "#d9d9d9")};
  height: 100%;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  opacity: ${({ o }) => (o ? o : 1)};
`;

export const Container = styled.div<{
  p?: string;
}>`
  height: 100vh;
  padding: ${({ p }) => (p ? p : "2% 5%")};
  @media only screen and (min-width: 1920px) {
    padding: ${({ p }) => (p ? p : "2% 15%")};
  }
  @media only screen and (max-width: 1440px) {
    padding: ${({ p }) => (p ? p : "2% 10%;")};
  }
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

// Roboto
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
  font-size: clamp(5rem, 10vw, 8rem);
  line-height: 150%;
  letter-spacing: 0.7rem;
  text-transform: uppercase;
  color: ${({ c }) => (c ? c : "#fff")};
  margin: ${({ m }) => (m ? m : "0 0 -26px 0")};
  display: ${({ d }) => (d ? d : "block")};
  position: ${({ p }) => (p ? p : "")};
  left: ${({ l }) => (l ? l : "")};
  right: ${({ r }) => (r ? r : "")};
  top: ${({ t }) => (t ? t : "50%")};
  /* transform: translate(0, ${({ t }) => (t ? t : "-50%")}); */
  @media screen and (max-width: 1430px) {
    top: ${({ r }) => (r ? "100%" : "0")};
  }
`;

export const H3Roboto = styled.h3<{
  c?: string;
  m?: string;
  d?: string;
  w?: string;
}>`
  font-family: ${roboto};
  font-size: clamp(0.25rem, 2.5vw, 1rem);
  width: ${({ w }) => (w ? w : "100%")};
  color: ${({ c }) => (c ? c : "#fff")};
  margin: ${({ m }) => (m ? m : "0")};
  display: ${({ d }) => (d ? d : "flex")};
  z-index: 1;
  position: relative;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 500;
  text-align: left;
  @media screen and (max-width: 600px) {
    width: ${({ w }) => (w ? w : "15vw")};
  }
`;
// end Roboto

// Noto san thai
export const H1Noto = styled.h1<{
  c?: string;
  m?: string;
  d?: string;
  u?: string;
}>`
  font-family: ${santhai};
  font-size: clamp(0.75rem, 5vw, 2.75rem);
  font-weight: 700;
  color: ${({ c }) => (c ? c : "#fff")};
  margin: ${({ m }) => (m ? m : "0")};
  display: ${({ d }) => (d ? d : "inline")};
  text-transform: ${({ u }) => (u ? u : "uppercase")};
`;
// end Noto san thai

// Notosan font
export const H2Eng = styled.h2<{ c?: string; m?: string; d?: string }>`
  font-family: ${notosans};
  font-size: clamp(0.75rem, 5vw, 1.75rem);
  font-weight: 700;
  color: ${({ c }) => (c ? c : "#fff")};
  margin: ${({ m }) => (m ? m : "0")};
  display: ${({ d }) => (d ? d : "inline")};
`;

export const H3Eng = styled.h3<{
  c?: string;
  m?: string;
  d?: string;
  mw?: string;
  align?: string;
}>`
  font-family: ${notosans};
  font-size: clamp(0.75rem, 3vw, 1.1rem);
  font-weight: 400;
  letter-spacing: -0.022em;
  line-height: clamp(1.2rem, 3vw, 2rem);
  color: ${({ c }) => (c ? c : "#fff")};
  text-align: ${({ align }) => (align ? align : "center")};
  margin: ${({ m }) => (m ? m : "0")};
  display: ${({ d }) => (d ? d : "inline")};
  max-width: ${({ mw }) => (mw ? mw : "auto")};
`;

export const H4Eng = styled.h4<{ c?: string; m?: string; d?: string }>`
  font-family: ${notosans};
  font-size: clamp(0.25rem, 1vw, 1rem);
  font-weight: 100;
  color: ${({ c }) => (c ? c : "#fff")};
  margin: ${({ m }) => (m ? m : "0")};
  display: ${({ d }) => (d ? d : "block")};
`;

export const H5Eng = styled.h5<{
  c?: string;
  m?: string;
  d?: string;
  mw?: string;
}>`
  font-family: ${notosans};
  font-size: clamp(0.75rem, 2vw, 0.78rem);
  font-weight: 100;
  line-height: 1.406rem;
  text-transform: uppercase;
  letter-spacing: 0.088rem;
  color: ${({ c }) => (c ? c : "#fff")};
  margin: ${({ m }) => (m ? m : "0")};
  display: ${({ d }) => (d ? d : "block")};
  max-width: ${({ mw }) => (mw ? mw : "auto")};
`;
export const BodyEng = styled.p<{
  c?: string;
  m?: string;
  d?: string;
  indent?: string;
}>`
  font-family: ${notosans};
  font-size: clamp(0.25rem, 1vw, 1rem);
  font-weight: 200;
  color: ${({ c }) => (c ? c : "#fff")};
  margin: ${({ m }) => (m ? m : "0")};
  display: ${({ d }) => (d ? d : "block")};
  text-indent: ${({ indent }) => (indent ? indent : "0")}; ;
`;

// endNotosan

// Guilda
export const GuildaFont = styled.p<{ c?: string; m?: string; d?: string }>`
  font-family: ${guildaFont};
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ c }) => (c ? c : "#fff")};
  margin: ${({ m }) => (m ? m : "0")};
  display: ${({ d }) => (d ? d : "block")};
`;

// end Gilda

// end Design System

export default GlobalStyles;
