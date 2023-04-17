import bg2 from "../assets/images/tale/yakuStory/BG2.mp4";
import b2 from "../assets/images/tale/yakuStory/2.1_B.png";

import bg3_1 from "../assets/images/tale/yakuStory/BG3.1.mp4";

import bg3_2 from "../assets/images/tale/yakuStory/BG3.2.mp4";
import m3_2 from "../assets/images/tale/yakuStory/3.2_M.png";
import f3_2 from "../assets/images/tale/yakuStory/3.2_F.png";
import b3_2 from "../assets/images/tale/yakuStory/3.2_B.png";

import bg4 from "../assets/images/tale/yakuStory/BG4.mp4";
import b4 from "../assets/images/tale/yakuStory/4_B.png";
import f4 from "../assets/images/tale/yakuStory/4_F.png";

import bg5 from "../assets/images/tale/yakuStory/BG5.mp4";
import b5 from "../assets/images/tale/yakuStory/5_B.png";
import f5 from "../assets/images/tale/yakuStory/5_F.png";

import bg6 from "../assets/images/tale/yakuStory/BG6.mp4";
import m6 from "../assets/images/tale/yakuStory/6_M.png";
import f6 from "../assets/images/tale/yakuStory/6_F.png";

import bg7 from "../assets/images/tale/yakuStory/BG7.mp4";

import bg8 from "../assets/images/tale/yakuStory/BG8.mp4";

import bg9 from "../assets/images/tale/yakuStory/BG9.mp4";

import bg10 from "../assets/images/tale/yakuStory/BG10.mp4";
import f10 from "../assets/images/tale/yakuStory/10_F.png";

import bg12 from "../assets/images/tale/yakuStory/BG12.mp4";

import { TaleDataType } from "../types/TaleType";

export const YakuSceneData: Record<string, TaleDataType> = {
  scene_2: {
    bg: bg2,
    b: b2,
    bgAlt: "yaku story bg scene_2",
    bAlt: "yaku story image scene_2",
  },
  scene_3: {
    bg: bg3_1,
    bgAlt: "yaku story bg scene_3",
  },
  scene_3_2: {
    bg: bg3_2,
    f: f3_2,
    m: m3_2,
    b: b3_2,
    bgAlt: "yaku story bg scene_3_2",
    bAlt: "yaku story image scene_3_2",
    fAlt: "yaku story image scene_3_2",
    mAlt: "yaku story image scene_3_2",
  },
  scene_4: {
    bg: bg4,
    b: b4,
    f: f4,
    bgAlt: "yaku story bg scene_4",
    bAlt: "yaku story image scene_4",
    fAlt: "yaku story image scene_4",
  },
  scene_5: {
    bg: bg5,
    b: b5,
    f: f5,
    bgAlt: "yaku story bg scene_5",
    bAlt: "yaku story image scene_5",
    fAlt: "yaku story image scene_5",
  },
  scene_6: {
    bg: bg6,
    m: m6,
    f: f6,
    bgAlt: "yaku story bg scene_6",
    fAlt: "yaku story image scene_6",
    mAlt: "yaku story image scene_6",
  },
  scene_7: {
    bg: bg7,
    bgAlt: "yaku story bg scene_7",
  },
  scene_8: {
    bg: bg8,
    bgAlt: "yaku story bg scene_8",
  },
  scene_9: {
    bg: bg9,
    bgAlt: "yaku story bg scene_9",
  },
  scene_10: {
    bg: bg10,
    f: f10,
    bgAlt: "yaku story bg scene_10",
    fAlt: "yaku story image scene_10",
  },
  scene_12: {
    bg: bg12,
    bgAlt: "yaku story bg scene_10",
  },
};
