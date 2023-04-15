
import LogoTitle from "../assets/images/logo/LogoTitle.png";
import dev from "../assets/videos/members/dev.mp4";
import uxui from "../assets/videos/members/uxui.mp4";
import art from "../assets/videos/members/art.mp4";
import logoImage from "../assets/images/logo/molletto.png";
import mobile_des from "../assets/images/prompt/mobile_des.png";
import hand from "../assets//images/prompt/handPrompt.png";
import linkedin from "../assets/images/social/linkedin.png";
import twitter from "../assets/images/social/twit.png";
import instagram from "../assets/images/social/instag.png";
import behance from "../assets/images/social/behance.png";
import { CardAnimation } from "../types/CardAnimation";

const skyblue = "#678BDF";
const pink = "#c47cd4";
const black = "#0D0F1E";

export const HeadMember: { imgPath: string; imageAlt: string; title: string } =
  {
    imgPath: logoImage,
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
  handPrompt: hand,
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
  LogoImage: LogoTitle,
  LogoImageAlt: "Logo",
  AboutMainDescription:
    "A senior project for apply computer science - multimedia students of King Mongkut’s University of Technology Thonburi",
  MobileDescription: mobile_des,
  Line: "https://gateway.pinata.cloud/ipfs/QmbjbdqSLsgzCS4pDa7QVsYnpFf28t4c527WbNcRcGkSEf",
  LineAlt: "Line taped to see members",
};

// Member
export const EachMember: {
  id?: string;
  color: string;
  role?: string;
  profile?: string;
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
    role: "ux/ui designer",
    profile: uxui,
    color: skyblue,
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
    role: "front-end developer",
    profile: dev,
    color: pink,
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
    role: "concept art",
    profile: art,
    color: black,
    memberName: "Saowarod Kimbut",
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
    socialImg: linkedin,
    socialAlt: "linkedin",
  },
  {
    socialImg: instagram,
    socialAlt: "instagram",
  },
  {
    socialImg: behance,
    socialAlt: "behance",
  },
  {
    socialImg: twitter,
    socialAlt: "twitter",
  },
];

export const CardAnimationLarge: CardAnimation[] = [
  {
    id: "ux-ui-designer",
    color: skyblue,
    xOrigin: "120%",
    xMove: 0,
    yOrigin: 20,
    yMove: 45,
    rotate: -2.24,
    zIndex: 2,
  },
  {
    id: "developer",
    color: pink,
    yOrigin: -30,
    yMove: 20,
    rotate: -0.07,
  },
  {
    id: "concept-art",
    color: black,
    xOrigin: "-120%",
    xMove: 0,
    yMove: 25,
    rotate: 5.48,
  },
];

export const CardAnimationMedium: CardAnimation[] = [
  {
    id: "ux-ui-designer",
    color: skyblue,
    xOrigin: 250,
    xMove: 0,
    yOrigin: 20,
    yMove: 45,
    rotate: -2.24,
    zIndex: 2,
  },
  {
    id: "developer",
    color: pink,
    yOrigin: -30,
    yMove: 20,
    rotate: -0.07,
  },
  {
    id: "concept-art",
    color: black,
    xOrigin: -250,
    xMove: 0,
    yMove: 25,
    rotate: 5.48,
  },
];

export const CardAnimationTablet: CardAnimation[] = [
  {
    id: "ux-ui-designer",
    color: skyblue,
    xOrigin: 190,
    xMove: 0,
    yOrigin: 20,
    yMove: 45,
    rotate: -2.24,
    zIndex: 2,
  },
  {
    id: "developer",
    color: pink,
    xOrigin: 0,
    xMove: 0,
    yOrigin: -30,
    yMove: 20,
    rotate: -0.07,
  },
  {
    id: "concept-art",
    color: black,
    xOrigin: -190,
    xMove: 0,
    yOrigin: 0,
    yMove: 25,
    rotate: 5.48,
  },
];

export const CardAnimationSmall: CardAnimation[] = [
  {
    id: "ux-ui-designer",
    color: skyblue,
    xOrigin: 190,
    xMove: 180,
    yOrigin: 20,
    yMove: -160,
    rotate: -2.24,
    zIndex: 2,
  },
  {
    id: "developer",
    color: pink,
    yOrigin: -30,
    yMove: 150,
    rotate: -0.07,
  },
  {
    id: "concept-art",
    color: black,
    xOrigin: -190,
    xMove: -180,
    yMove: 460,
    rotate: 5.48,
  },
];
