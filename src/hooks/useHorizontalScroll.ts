import { RefObject, useEffect, useRef } from "react";

export function useHorizontalScroll(): RefObject<HTMLDivElement> {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        const delta = e.deltaY * 3;
        const left = Math.max(
          0,
          Math.min(el.scrollWidth - el.clientWidth, el.scrollLeft + delta)
        );
        el.scrollTo({ left, behavior: "smooth" });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);

  return elRef;
}
