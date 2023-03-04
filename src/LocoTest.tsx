import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import "./locomotive-scroll.css";

const SectionWrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  object-fit: cover;
`;
const Image2 = styled.img`
  width: 40%;
  height: auto;
  position: absolute;
  z-index: 10;
  object-fit: cover;

  right: 100px;
  bottom: 0;
  /* transform: translateY(-200px);
  transition: transform 3s ease-in;
  .is-inview {
    transform: translateY(0);
  } */
`;
const Image3 = styled.img`
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 11;
`;

const H1 = styled.h1`
  width: 100%;
  height: 100%;
  font-size: 20rem;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  text-align: center;
`;
const LocoTest = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: "horizontal",
        tablet: {
          direction: "horizontal",
        },
        smartphone: {
          direction: "horizontal",
        },
      }}
      watch={[]}
    >
      <main
        data-scroll-container
        ref={containerRef}
        style={{ position: "relative" }}
      >
        <SectionWrapper data-scroll-section>
          <H1 data-scroll data-scroll-speed="10">
            Hey
          </H1>
          <Image3
            data-scroll
            data-scroll-sticky
            src="https://media0.giphy.com/media/mDGqpNBhFIZZnkdKb1/200w.gif?cid=82a1493b3wwqng3b5c9983dgnk23nyhpef0g1z8rnw38bcoo&rid=200w.gif&ct=s"
          />
          <Image
            data-scroll
            src="https://t3.ftcdn.net/jpg/01/14/47/12/360_F_114471291_nbYCT471AB0Ck6Wingz7YVCRFlUhdUvG.jpg"
          />
        </SectionWrapper>

        <SectionWrapper data-scroll-section>
          <H1 data-scroll data-scroll-speed="10">
            Hey
          </H1>
          <Image
            data-scroll
            src="https://miro.medium.com/max/1400/0*-pOySD-Yf6yiyInP.jpg"
          />
          <Image2
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-3"
            src="http://www.clker.com/cliparts/9/2/8/f/1296845123264859256tree1-hi.png"
          />
          <Image2
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="3"
            src="http://www.clker.com/cliparts/9/2/8/f/1296845123264859256tree1-hi.png"
          />
        </SectionWrapper>
        <SectionWrapper data-scroll-section>
          <Image
            data-scroll
            src="https://pxpx.imgix.net/2021/10/parallax-1.jpg?auto=compress%2Cformat&fit=crop&h=1080&q=90&w=1920&s=1b27afe5d267cee4c23c37e4c2cd1067"
          />
        </SectionWrapper>
        <SectionWrapper data-scroll-section>
          <Image
            data-scroll
            src="https://images.pond5.com/animated-parallax-background-mountains-and-footage-170788646_iconl.jpeg"
          />
        </SectionWrapper>
      </main>
    </LocomotiveScrollProvider>
  );
};

export default LocoTest;
