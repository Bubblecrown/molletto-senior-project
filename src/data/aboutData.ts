import { Transition } from "framer-motion";
import molettoLogo from "../assets/moletto.png";
import { useIsSmall } from "../hooks/useMediaQuery";

export const HeadMember: { imgPath: string; imageAlt: string; title: string } =
  {
    imgPath:
      "https://gateway.pinata.cloud/ipfs/QmQoxJQp5ePJDDHiLbK14UoF6a2bSyzJx9ymUhna3PQz3C",
    imageAlt: "moletto-logo",
    title: "Moletto’s Members",
  };

export const Member: { member1: string; member2: string } = {
  member1: "'mem",
  member2: "bers",
};

export const CardAnimationLarge: {
  color?: string;
  xOrigin?: string;
  xMove?: number;
  yOrigin?: number;
  yMove?: number;
  rotate?: number;
  zIndex?: number;
  transition?: Transition;
}[] = [
  {
    color: "#92E5FF",
    xOrigin: "100%",
    xMove: 0,
    yOrigin: 20,
    yMove: 45,
    rotate: -2.24,
    zIndex: 2,
  },
  {
    color: "#FF92B9",
    yOrigin: -30,
    yMove: 20,
    rotate: -0.07,
  },
  {
    color: "#92FFCA",
    xOrigin: "-100%",
    xMove: 0,
    yMove: 25,
    rotate: 5.48,
  },
];

export const CardAnimationMedium: {
  color?: string;
  xOrigin?: number;
  xMove?: number;
  yOrigin?: number;
  yMove?: number;
  rotate?: number;
  zIndex?: number;
  transition?: Transition;
}[] = [
  {
    color: "#92E5FF",
    xOrigin: 250,
    xMove: 0,
    yOrigin: 20,
    yMove: 45,
    rotate: -2.24,
    zIndex: 2,
  },
  {
    color: "#FF92B9",
    yOrigin: -30,
    yMove: 20,
    rotate: -0.07,
  },
  {
    color: "#92FFCA",
    xOrigin: -250,
    xMove: 0,
    yMove: 25,
    rotate: 5.48,
  },
];

export const CardAnimationTablet: {
  color?: string;
  xOrigin?: number;
  xMove?: number;
  yOrigin?: number;
  yMove?: number;
  rotate?: number;
  zIndex?: number;
  transition?: Transition;
}[] = [
  {
    color: "#92E5FF",
    xOrigin: 190,
    xMove: 0,
    yOrigin: 20,
    yMove: 45,
    rotate: -2.24,
    zIndex: 2,
  },
  {
    color: "#FF92B9",
    yOrigin: -30,
    yMove: 20,
    rotate: -0.07,
  },
  {
    color: "#92FFCA",
    xOrigin: -190,
    xMove: 0,
    yMove: 25,
    rotate: 5.48,
  },
];

export const CardAnimationSmall: {
  color?: string;
  xOrigin?: number;
  xMove?: number;
  yOrigin?: number;
  yMove?: number;
  rotate?: number;
  zIndex?: number;
  transition?: Transition;
}[] = [
  {
    color: "#92E5FF",
    xOrigin: 190,
    xMove: 180,
    yOrigin: 20,
    yMove: -160,
    rotate: -2.24,
    zIndex: 2,
  },
  {
    color: "#FF92B9",
    yOrigin: -30,
    yMove: 150,
    rotate: -0.07,
  },
  {
    color: "#92FFCA",
    xOrigin: -190,
    xMove: -180,
    yMove: 460,
    rotate: 5.48,
  },
];
