import { Animation } from "react-scroll-motion";

export const MoveInPage = (dy: number, dyOut: number) =>
  ({
    in: {
      style: {
        // `value` is number (0~1)
        // When just before this page appear, `value` will be 0 y - 0
        // When this page filled your screen, `value` will be 1 y - 100
        // AboutUs: -1 * 100 - 100 = -200
        // Line: 0 * 100 - 100 = 0
        // transform: (value) => `translateY(${(value - 1) * dy}vh)`,
        transform: (value) => `translateY(${(value - 1) * dy - dy}vh)`,
      },
    },
    out: {
      style: {
        // `value` is number (0~1)
        // When this page filled your screen, `value` will be 0
        // When just after this page disappear, `value` will be 1 -100
        // AboutUs: 0 * 100 - 100 = -100
        // Line: 1 * 100 - 0 = 100
        // transform: (value) => `translateY(${value * dy}vh)`,
        transform: (value) => `translateY(${value * dy - dyOut - 0.2}vh)`,
      },
    },
  } as Animation);
