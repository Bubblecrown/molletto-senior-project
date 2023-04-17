import bg1 from "../assets/images/tale/yakuStory/BG1.1.png";
import b1 from "../assets/images/tale/yakuStory/1.1_B.png";
import f1 from "../assets/images/tale/yakuStory/1.1_F.png";

import bg1_2 from "../assets/images/tale/yakuStory/BG1.2.png";
import b1_2 from "../assets/images/tale/yakuStory/1.2_B.png";
import f1_2 from "../assets/images/tale/yakuStory/1.2_F.png";
import c1_2 from "../assets/images/tale/yakuStory/C1_L.png";

import bg2 from "../assets/images/tale/yakuStory/BG2.mp4";
import b2 from "../assets/images/tale/yakuStory/2.1_B.png";

import bg3_1 from "../assets/images/tale/yakuStory/BG3.1.mp4";
import c3_1 from "../assets/images/tale/yakuStory/C3_L.png";

import bg3_2 from "../assets/images/tale/yakuStory/BG3.2.mp4";
import m3_2 from "../assets/images/tale/yakuStory/3.2_M.png";
import f3_2 from "../assets/images/tale/yakuStory/3.2_F.png";
import b3_2 from "../assets/images/tale/yakuStory/3.2_B.png";
import c3_2 from "../assets/images/tale/yakuStory/C3_R.png";
import c3_2_l from "../assets/images/tale/yakuStory/C5_L.png";

import bg4 from "../assets/images/tale/yakuStory/BG4.mp4";
import b4 from "../assets/images/tale/yakuStory/4_B.png";
import f4 from "../assets/images/tale/yakuStory/4_F.png";
import c4 from "../assets/images/tale/yakuStory/C3_R.png";
import c4_l from "../assets/images/tale/yakuStory/C4_L.png";

import bg5 from "../assets/images/tale/yakuStory/BG5.mp4";
import b5 from "../assets/images/tale/yakuStory/5_B.png";
import f5 from "../assets/images/tale/yakuStory/5_F.png";
import c5_r from "../assets/images/tale/yakuStory/C5_R.png";
import c5_l from "../assets/images/tale/yakuStory/C6_L.png";

import bg6 from "../assets/images/tale/yakuStory/BG6.mp4";
import m6 from "../assets/images/tale/yakuStory/6_M.png";
import f6 from "../assets/images/tale/yakuStory/6_F.png";
import b6 from "../assets/images/tale/yakuStory/6_B.png";
import c6_r from "../assets/images/tale/yakuStory/C6_R.png";
import c6_l from "../assets/images/tale/yakuStory/C7_L.png";

import bg7 from "../assets/images/tale/yakuStory/BG7.mp4";
import c7_l from "../assets/images/tale/yakuStory/C9_L.png";

import bg8 from "../assets/images/tale/yakuStory/BG8.mp4";
import f8 from "../assets/images/tale/yakuStory/8_F.png";
import c8_r from "../assets/images/tale/yakuStory/C8_R.png";
import c8_l from "../assets/images/tale/yakuStory/C9_L.png";

import bg9 from "../assets/images/tale/yakuStory/BG9.mp4";
import f9 from "../assets/images/tale/yakuStory/9_F.png";
import c9_r from "../assets/images/tale/yakuStory/C8_R.png";
import c9_l from "../assets/images/tale/yakuStory/C7_L.png";

import bg10 from "../assets/images/tale/yakuStory/BG10.mp4";
import f10 from "../assets/images/tale/yakuStory/10_F.png";

import bg12 from "../assets/images/tale/yakuStory/BG12.mp4";

import { TaleDataType } from "../types/TaleType";

export const YakuSceneData: Record<string, TaleDataType> = {
  scene_1: {
    bg: bg1,
    b: b1,
    f: f1,
    bgAlt: "yaku story bg scene_1",
    alt: "yaku story image scene_1",
    text: "ในเมืองที่แสนวิเศษ แน่นอนว่าทุกอย่างภายในก็ล้วนพิเศษเช่นกันผู้คนที่อาศัยอยู่ในเมืองแห่งนี้มีความสามารถในการดูดซับน้ำได้ดังฟองน้ำหากแต่เมืองแห่งนี้ยังมีความพิเศษอีกอย่างที่ทุกคนในโลกนี้ปราถนานั่นก็คือการได้รับความเป็นอมตะจากต้นไม้ศักดิ์สิทธิ์",
  },
  scene_1_2: {
    bg: bg1_2,
    b: b1_2,
    f: f1_2,
    cl: c1_2,
    bgAlt: "yaku story bg scene_1",
    alt: "yaku story image scene_1",
  },
  scene_2: {
    bg: bg2,
    b: b2,
    bgAlt: "yaku story bg scene_2",
    alt: "yaku story image scene_2",
  },
  scene_3: {
    bg: bg3_1,
    cl: c3_1,
    alt: "yaku story image scene_3_2",
    bgAlt: "yaku story bg scene_3",
  },
  scene_3_2: {
    bg: bg3_2,
    f: f3_2,
    m: m3_2,
    b: b3_2,
    cr: c3_2,
    cl: c3_2_l,
    bgAlt: "yaku story bg scene_3_2",
    alt: "yaku story image scene_3_2",
  },
  scene_4: {
    bg: bg4,
    b: b4,
    f: f4,
    cr: c4,
    cl: c4_l,
    bgAlt: "yaku story bg scene_4",
    alt: "yaku story image scene_4",
  },
  scene_5: {
    bg: bg5,
    b: b5,
    f: f5,
    cr: c5_r,
    cl: c5_l,
    bgAlt: "yaku story bg scene_5",
    alt: "yaku story image scene_5",
  },
  scene_6: {
    bg: bg6,
    m: m6,
    f: f6,
    b: b6,
    cr: c6_r,
    cl: c6_l,
    bgAlt: "yaku story bg scene_6",
    alt: "yaku story image scene_6",
  },
  scene_7: {
    bg: bg7,
    cl: c7_l,
    bgAlt: "yaku story bg scene_7",
  },
  scene_8: {
    bg: bg8,
    f: f8,
    cr: c8_r,
    cl: c8_l,
    bgAlt: "yaku story bg scene_8",
  },
  scene_9: {
    bg: bg9,
    f: f9,
    cr: c9_r,
    cl: c9_l,
    bgAlt: "yaku story bg scene_9",
  },
  scene_10: {
    bg: bg10,
    f: f10,
    bgAlt: "yaku story bg scene_10",
    alt: "yaku story image scene_10",
  },
  scene_12: {
    bg: bg12,
    bgAlt: "yaku story bg scene_10",
  },
};
