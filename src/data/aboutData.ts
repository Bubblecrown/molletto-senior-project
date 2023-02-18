import { Transition } from "framer-motion";
import molettoLogo from "../assets/moletto.png";

export const HeadMember: { imgPath: string; imageAlt: string; title: string} = {
  imgPath:
    "https://gateway.pinata.cloud/ipfs/QmQoxJQp5ePJDDHiLbK14UoF6a2bSyzJx9ymUhna3PQz3C",
  imageAlt: "moletto-logo",
  title: "Moletto’s Members",
};

export const Member: { member1:string, member2:string } = {
  member1:"'mem",
  member2:'bers'
};

export const CardAnimation: {
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
    xOrigin: 340,
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
    xOrigin: -340,
    xMove: 0,
    yMove: 25,
    rotate: 5.48,
  },
];
