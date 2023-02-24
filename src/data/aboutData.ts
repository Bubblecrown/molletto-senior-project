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

export const MemberText: { member1: string; member2: string } = {
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

// Member
export const EachMember: {
  id?: string;
  color: string,
  memberName?: string;
  responsibility?: string[];
  desciption?: string;
  social?: { platform: string; link: string }[];
  linkedin?: string;
  instagram?: string;
  behance?: string;
  twitter?: string;
}[] = [
  {
    id: "ux-ui-designer",
    color: "#92E5FF",
    memberName: "Pimchawisa Saparram",
    responsibility: [
      "Ux/Ui Designer",
      "Art Director",
      "3D Modeller",
      "Animator",
    ],
    desciption:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s ",
    social: [
      {
        platform: "linkedin",
        link: "https://translate.google.co.th/?hl=th&sl=en&tl=th&text=%0Aaqua&op=translate",
      },
      { platform: "instagram", link: "https://www.facebook.com" },
      {
        platform: "behance",
        link: "https://discord.com/channels/593073213412474880/803634758490914826",
      },
      {
        platform: "twitter",
        link: "https://www.youtube.com/watch?v=oVE6cx3UEpM&t=122s",
      },
    ],
  },
  {
    id: "developer",
    color: "#FF92B9",
    memberName: "Suchanya Namwong",
    responsibility: ["Front-end Developer"],
    desciption:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s ",
    social: [
      {
        platform: "linkedin",
        link: "https://www.youtube.com/watch?v=oVE6cx3UEpM&t=122s",
      },
      {
        platform: "instagram",
        link: "https://translate.google.co.th/?hl=th&sl=en&tl=th&text=%0Aaqua&op=translate",
      },
      {
        platform: "behance",
        link: "https://discord.com/channels/593073213412474880/803634758490914826",
      },
      { platform: "twitter", link: "https://www.facebook.com" },
    ],
  },
  {
    id: "concept-art",
    color: "#92FFCA",
    memberName: "Saowarod Kimbud",
    responsibility: ["Concept Art"],
    desciption:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s ",
    social: [
      { platform: "linkedin", link: "https://www.facebook.com" },
      {
        platform: "instagram",
        link: "https://translate.google.co.th/?hl=th&sl=en&tl=th&text=%0Aaqua&op=translate",
      },
      {
        platform: "behance",
        link: "https://discord.com/channels/593073213412474880/803634758490914826",
      },
      {
        platform: "twitter",
        link: "https://www.youtube.com/watch?v=oVE6cx3UEpM&t=122s",
      },

    ],
  },
];
// end Member

export const SocialLogo: {
  socialImg: string;
  socialAlt: string;
}[] = [
  {
    socialImg:
      "https://gateway.pinata.cloud/ipfs/QmNPcncL3NYiyGTTy6UTE1wGaZ1sTTnWHR5SQHSDoaF5iw",
    socialAlt: "linkedin",
  },
  {
    socialImg:
      "https://gateway.pinata.cloud/ipfs/QmWANqDhdiVgDNHiW4juCahcR1EHCfsDJXxFCsmZfDVM8V",
    socialAlt: "instagram",
  },
  {
    socialImg:
      "https://gateway.pinata.cloud/ipfs/QmW2Tu6LVWpJHmvxkTMTLq4KZ6T1yo8JXgFDafZk8dwNxS",
    socialAlt: "behance",
  },
  {
    socialImg:
      "https://gateway.pinata.cloud/ipfs/QmWm5Xs9oaoFaG6VpyeidTj2pcCB2bHybmdf5gGxLG6Aeq",
    socialAlt: "twitter",
  },
];
export const CardAnimationLarge: {
  id:string,
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
    id:"ux-ui-designer",
    color: "#92E5FF",
    xOrigin: "110%",
    xMove: 0,
    yOrigin: 20,
    yMove: 45,
    rotate: -2.24,
    zIndex: 2,
  },
  {
    id:"developer",
    color: "#FF92B9",
    yOrigin: -30,
    yMove: 20,
    rotate: -0.07,
  },
  {
    id:"concept-art",
    color: "#92FFCA",
    xOrigin: "-110%",
    xMove: 0,
    yMove: 25,
    rotate: 5.48,
  },
];

export const CardAnimationMedium: {
  id:string,
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
    id:"ux-ui-designer",
    color: "#92E5FF",
    xOrigin: 250,
    xMove: 0,
    yOrigin: 20,
    yMove: 45,
    rotate: -2.24,
    zIndex: 2,
  },
  {
    id:"developer",
    color: "#FF92B9",
    yOrigin: -30,
    yMove: 20,
    rotate: -0.07,
  },
  {
    id:"concept-art",
    color: "#92FFCA",
    xOrigin: -250,
    xMove: 0,
    yMove: 25,
    rotate: 5.48,
  },
];

export const CardAnimationTablet: {
  id:string,
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
    id:"ux-ui-designer",
    color: "#92E5FF",
    xOrigin: 190,
    xMove: 0,
    yOrigin: 20,
    yMove: 45,
    rotate: -2.24,
    zIndex: 2,
  },
  {
    id:"developer",
    color: "#FF92B9",
    yOrigin: -30,
    yMove: 20,
    rotate: -0.07,
  },
  {
    id:"concept-art",
    color: "#92FFCA",
    xOrigin: -190,
    xMove: 0,
    yMove: 25,
    rotate: 5.48,
  },
];

export const CardAnimationSmall: {
  id:string,
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
    id:"ux-ui-designer",
    color: "#92E5FF",
    xOrigin: 190,
    xMove: 180,
    yOrigin: 20,
    yMove: -160,
    rotate: -2.24,
    zIndex: 2,
  },
  {
    id:"developer",
    color: "#FF92B9",
    yOrigin: -30,
    yMove: 150,
    rotate: -0.07,
  },
  {
    id:"concept-art",
    color: "#92FFCA",
    xOrigin: -190,
    xMove: -180,
    yMove: 460,
    rotate: 5.48,
  },
];
