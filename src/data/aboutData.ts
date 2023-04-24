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
import github from "../assets/images/social/github.png";
import facebook from "../assets/images/social/facebook_logo.png";
import artstation from "../assets/images/social/artstation.png";
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
      "UE",
      "Modeller",
      "Animator",
    ],
    desciption:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s ",
    social: [
      {
        platform: "linkedin",
        link: "https://www.linkedin.com/in/pimchawisa-saparram/",
      },
      { platform: "instagram", link: "https://www.instagram.com/mint_pchw/" },
      {
        platform: "behance",
        link: "https://www.behance.net/pimchawsaparra",
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
      "I'm Front-End Developer currently working on a senior project in web development. I take pride in my ability to create engaging and user-friendly website, utilizing my skills in HTML, CSS, JavaScript, and various front-end frameworks. As I contribute to this significant project, I continuously strive to learn new technologies and best practices to enhance the end product. In my spare time, I love exploring the world of art, diving into captivating books, and constantly working on self-improvement through skill development. Feel free to explore my GitHub repositories to see my progress and other projects I've been working on. I'm always open to feedback and collaboration, so don't hesitate to reach out if you have any questions or suggestions,I'm thankful!, I'm excited to learn and collaborate with others on this journey!",
    social: [
      {
        platform: "linkedin",
        link: "hhttps://www.linkedin.com/in/suchanya-namwong-0b6929250/",
      },
      {
        platform: "github",
        link: "https://translate.google.co.th/?hl=th&sl=en&tl=th&text=%0Aaqua&op=translate",
      },
    ],
  },
  {
    id: "concept-art",
    role: "concept art",
    profile: art,
    color: black,
    memberName: "Saowarod Kimbut",
    responsibility: ["Concept Artist", "Modeler", "Character setup"],
    desciption:
      "I have contributed to the design of concept art on this website that is cute and accessible, in order to give a new image to traditional Thai desserts and introduce them to more young people. My goal is to work in the field of concept art design. Currently, I am looking for a job as a concept artist. I have the ability to work well with others and am willing to take on work and receive advice from everyone, as I believe that everyone has different potential. Therefore, I am determined to develop myself and constantly learn new things. If you have any questions or would like to contact me, please feel free to reach out to me through any of the contact channels provided",
    social: [
      {
        platform: "linkedin",
        link: "https://www.linkedin.com/in/saowarod-kimbut-8099a5250/",
      },
      {
        platform: "instagram",
        link: "https://www.instagram.com/passiflora09art/",
      },
      {
        platform: "facebook",
        link: "https://www.facebook.com/Passiflora09ART/",
      },
      {
        platform: "twitter",
        link: "https://twitter.com/Passiflora09Art",
      },
      {
        platform: "artstation",
        link: "https://www.artstation.com/passiflora09art",
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
  {
    socialImg: github,
    socialAlt: "github",
  },
  {
    socialImg: facebook,
    socialAlt: "facebook",
  },
  {
    socialImg: artstation,
    socialAlt: "artstation",
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
