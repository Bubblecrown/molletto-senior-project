import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ContainerScroll } from "./GlobalStyle";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const GsapScrollTest = () => {
  const panels = useRef<HTMLDivElement[]>([]);
  const panelsContainer = useRef<HTMLDivElement>(null);

  const createPanelsRefs = (panel: any, index: number) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;

    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + panelsContainer.current?.offsetWidth,
      },
    });
  }, []);

  return (
    <ContainerScroll ref={panelsContainer} >
      <div ref={(e) => createPanelsRefs(e, 0)} style={{ width: "100%", height: "100%" }}>
        <section
          ref={(e) => createPanelsRefs(e, 1)}
          style={{ backgroundColor: "red", width: "100%", height: "100%" }}
        >
          ONE
        </section>
        <section
          ref={(e) => createPanelsRefs(e, 2)}
          style={{ backgroundColor: "green", width: "100%", height: "100%" }}
        >
          TWO
        </section>
        <section
          ref={(e) => createPanelsRefs(e, 3)}
          style={{ backgroundColor: "black", width: "100%", height: "100%" }}
        >
          THREE
        </section>
      </div>
    </ContainerScroll>
  );
};

export default GsapScrollTest;
