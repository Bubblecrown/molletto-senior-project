import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const YakuStoryTale = () => {
  const panels = useRef<any>([]);
  const panelsContainer = useRef<any>();

  const createPanelsRefs = (panel: any, index: any) => {
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
        end: () => "+=" + panelsContainer.current.offsetWidth,
      },
    });
  }, []);

  return (
    <>
      <div className="container" ref={panelsContainer}>
        <section className="panel red" ref={(e) => createPanelsRefs(e, 0)}>
          ONE
        </section>
        <section className="panel orange" ref={(e) => createPanelsRefs(e, 1)}>
          TWO
        </section>
        <section className="panel purple" ref={(e) => createPanelsRefs(e, 2)}>
          THREE
        </section>
        <section className="panel green" ref={(e) => createPanelsRefs(e, 3)}>
          FOUR
        </section>
        <section className="panel gray" ref={(e) => createPanelsRefs(e, 4)}>
          FIVE
        </section>
      </div>
    </>
  );
};

export default YakuStoryTale;
