import { Transition } from "framer-motion";
import LogoTitle from "../assets/LogoTitle.png";

export const HeadMember: { imgPath: string; imageAlt: string; title: string } =
  {
    imgPath:
      "https://gateway.pinata.cloud/ipfs/QmQoxJQp5ePJDDHiLbK14UoF6a2bSyzJx9ymUhna3PQz3C",
    imageAlt: "moletto-logo",
    title: "Moletto’s Members",
  };

export const Prompt: {
  scrolltitle: string;
  handPrompt: string;
  handTitle: string;
  handPromptAlt: string;
} = {
  scrolltitle: "Scrolling for see members",
  handPrompt:
    "https://gateway.pinata.cloud/ipfs/QmR5wxWso5X4jovhvCqPpqPJVW6JKA3iF8DzVdpNzdK1hY",
  handPromptAlt: "Dragging hand",
  handTitle: "Dragging to see members",
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
  MobileDescription: string;
  Line: string;
  LineAlt: string;
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
  MobileDescription:
    "https://gateway.pinata.cloud/ipfs/QmNS5q87TEB9YMbfDne7ZPkPMdM1BKyiTffxtHMUz6Bj1u",
  Line: "https://gateway.pinata.cloud/ipfs/QmbjbdqSLsgzCS4pDa7QVsYnpFf28t4c527WbNcRcGkSEf",
  LineAlt: "Line taped to see members",
};

export const EachMember: {
  memberName: string;
  responsibility: string[];
  desciption: string;
  social: string[];
}[] = [
  {
    memberName: "Pimchawisa SapaRram",
    responsibility: [
      "Ux/Ui Designer",
      "Art Director",
      "3D Modeller",
      "Animator",
    ],
    desciption:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s ",
    social: ["1", "2", "3"],
  },
  {
    memberName: "Suchanya Namwong",
    responsibility: [
      "Front-end Developer",
    ],
    desciption:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s ",
    social: ["1", "2", "3"],
  },
  {
    memberName: "Saowarod Kimbud",
    responsibility: [
      "Concept Art",
    ],
    desciption:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s ",
    social: ["1", "2", "3"],
  },
];

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
