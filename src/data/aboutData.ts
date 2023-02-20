import { Transition } from "framer-motion";
import LogoTitle from "../assets/LogoTitle.png";
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

export const AboutMainData: {
  aboutDescription: string;
  aboutTitle: string[];
  aboutSubTitle: string;
  LogoImage: string;
  LogoImageAlt: string;
  AboutMainDescription: string;
} = {
  aboutDescription:
    "We are a triplet team who are interested in website and 3D animation",
  aboutTitle: ["DEVERLOPER", "DESIGNER", "CONCEPT ART"],
  aboutSubTitle: "ABOUT",
  LogoImage:
    "https://gateway.pinata.cloud/ipfs/QmYTou7a1HrVncaqiWxoBBmhVPSsDe6NBfAAB2q8tJehsZ",
  LogoImageAlt: "Logo",
  AboutMainDescription:
    "A senior project for apply computer science - multimedia students of King Mongkut’s University of Technology Thonburi",
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
    xOrigin: "110%",
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
    xOrigin: "-110%",
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
