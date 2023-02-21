import { Animation } from "react-scroll-motion";

export const MoveInPage = (dy: number) =>
  ({
    in: {
      style: {
        // `p` is number (0~1)
        // When just before this page appear, `p` will be 0 y - 0
        // When this page filled your screen, `p` will be 1 y - 100
        transform: (value) => `translateY(${(value - 1) * dy}vh)`,
      },
    },
    out: {
      style: {
        // `p` is number (0~1)
        // 0 -> 100 -> 0
        // -100 -> 0 -> -100
        // When this page filled your screen, `p` will be 0
        // When just after this page disappear, `p` will be 1 -100
        transform: (value) => `translateY(${value * dy}vh)`,
      },
    },
  } as Animation);
