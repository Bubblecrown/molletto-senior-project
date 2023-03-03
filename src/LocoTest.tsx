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

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LocoTest = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: "horizontal",
      }}
      watch={[
        
      ]}
    >
      <main data-scroll-container ref={containerRef}>
        <SectionWrapper data-scroll-section>
          <Image
            data-scroll
            src="https://t3.ftcdn.net/jpg/01/14/47/12/360_F_114471291_nbYCT471AB0Ck6Wingz7YVCRFlUhdUvG.jpg"
          />
        </SectionWrapper>
        <SectionWrapper data-scroll-section>
          <Image
            data-scroll
            src="https://miro.medium.com/max/1400/0*-pOySD-Yf6yiyInP.jpg"
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
