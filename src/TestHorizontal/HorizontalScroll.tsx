import React, { useRef, useEffect } from "react";
import "./HorizontalScroll.css";

const HorizontalScroll = (props: any) => {
  const scrollRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    const handleMouseWheel = (e: WheelEvent) => {
      if (scrollRef.current) {
        e.preventDefault();
        const scrollSpeedFactor = 5; // Adjust this value to increase or decrease the scrolling speed
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
    <div ref={scrollRef} className="horizontal-scroll">
      <div className="scroll-div">
        <div className="scroll-container">{props.children}</div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
