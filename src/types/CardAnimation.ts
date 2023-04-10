import { Transition } from "framer-motion";

export type CardAnimation = {
  id: string;
  readonly color?: string;
  xOrigin?: string | number;
  xMove?: number;
  yOrigin?: number;
  yMove?: number;
  rotate?: number;
  zIndex?: number;
  transition?: Transition;
}