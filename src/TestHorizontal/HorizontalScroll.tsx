import React, { useRef, useEffect } from "react";
import "./HorizontalScroll.css";

const HorizontalScroll = ({ onScroll, children }: any) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseWheel = (e: WheelEvent) => {
      if (scrollRef.current) {
        e.preventDefault();
        const scrollSpeedFactor = 5;
        const scrollAmount = e.deltaY * scrollSpeedFactor;
        const newScrollPosition = scrollRef.current.scrollLeft + scrollAmount;

        scrollRef.current.scrollTo({
          left: newScrollPosition,
          behavior: "smooth",
        });
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("wheel", handleMouseWheel, {
        passive: false,
      });
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("wheel", handleMouseWheel);
      }
    };
  }, []);

  return (
    <div ref={scrollRef} className="horizontal-scroll" onScroll={onScroll}>
      <div className="scroll-div">
        <div className="scroll-container">{children}</div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
