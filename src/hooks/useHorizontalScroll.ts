import { RefObject, useEffect, useRef } from "react";

export function useHorizontalScroll(): RefObject<HTMLDivElement> {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onScroll = (e: Event) => {
        if ((e as WheelEvent).deltaY !== 0) {
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + (e as WheelEvent).deltaY * 5,
            behavior: "smooth",
          });
        }
      };
      el.addEventListener("wheel", onScroll, { passive: false });
      return () => el.removeEventListener("wheel", onScroll);
    }
  }, []);

  return elRef;
}
