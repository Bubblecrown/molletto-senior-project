import stair_1 from "../assets/images/dessert/stair_1.png";
import stair_2 from "../assets/images/dessert/stair_2.png";
import budda from "../assets/images/dessert/budda1_budda.png";
import tent from "../assets/images/dessert/tent.png";
import penie_area from "../assets/images/dessert/penie_area.png";
import home_nana from "../assets/images/dessert/home_nana.png";
import yaku_home from "../assets/images/dessert/yaku_home.png";
import seat_chan from "../assets/images/dessert/seat_chan.png";
import thongyib_1 from "../assets/images/dessert/thongyib_1_ thongyib_2.png";
import seat_tang from "../assets/images/dessert/seat_tang.png";
import thongm from "../assets/images/dessert/thongm.png";
import thongms from "../assets/images/dessert/thongms.png";
import morgang from "../assets/images/dessert/morgang.png";
import aunchan from "../assets/images/dessert/aunchan.png";
import yoksod from "../assets/images/dessert/yoksod_yoksod1.png";
import bean from "../assets/images/dessert/bean_top_ bean.png";
import { DessertDataType } from "../types/DessertType";

export const DessertData: Record<string, DessertDataType> = {
  stair_1: {
    origin: "ภาคใต้",
    ingredient: "แป้งข้าวเจ้า",
    dessertName: "ขนมโก้ยตาล้าม",
    description: "แป้งกวนนึ่งตัวนุ่ม ผสมใบเตยสีเขียว",
    image: stair_1,
    imageAlt: "Thai Layered Dessert",
  },
  stair_2: {
    origin: "ภาคใต้",
    ingredient: "แป้งข้าวเหนียว",
    dessertName: "ขนมโก๋ไส้",
    description:
      "เพราะลักษณะร่างกายสูงใหญ่เป็นแท่ง โก๋ไส้จึงมักปวดหลัง เขาแก้ปัญหาด้วยการนอนขวางทางเพื่อให้ชาวเมืองช่วยเหยียบหลังให้เขา",
    image: stair_2,
    imageAlt: "Thai Snazzy Snacks",
  },
  budda: {
    origin: "ภาคใต้",
    ingredient: "มะพร้าวทึนทึก",
    dessertName: "ขนมบุหงาบูดะ",
    description: "เกสรดอกไม้สุดสวยผู้เกิดจากมะพร้าวและแป้งข้าวเหนียว",
    image: budda,
    imageAlt: "Lamjiak flower dessert",
  },
  tent: {
    origin: "ภาคกลาง",
    ingredient: "มะพร้าวทึนทึก",
    dessertName: "ขนมใส่ไส้",
    description:
      "อย่ามาแตะ! เด็กน้อยผู้เหนียวนุ่มมักห่อตัวเองด้วยใบตอง แล้วซ่อนมะพร้าวแสนอร่อยไว้ภายใน",
    image: tent,
    imageAlt: "Steamed flour with coconut filling",
  },
  penie_area: {
    origin: "ภาคใต้",
    ingredient: "แป้งมัน",
    dessertName: "ขนมสัมปันนี",
    description:
      "เจ้าหญิงสัมปันนี เธอมีชุดเต้นรำที่ทำจากแป้งมากมาย โดยมีลายและสีที่ไม่ซ้ำกัน",
    image: penie_area,
    imageAlt: "Thai Melting-Moment Cookies",
  },
  home_nana: {
    origin: "ภาคกลาง",
    ingredient: "แป้งสาลี",
    dessertName: "ขนมทองโปร่ง",
    description:
      "เลดี้มักจะโมโหเสมอเมื่อมีคนมาแตะต้องชุดสีทองอันโอ่อ่าของเธอ เพราะมันจะทำให้ชุดของเธอมีรอย",
    image: home_nana,
    imageAlt: "Golden Egg Yolk Threads",
  },
  yaku_home: {
    origin: "ภาคตะวันออกเฉียงเหนือ",
    ingredient: "แป้งข้าวเจ้า",
    dessertName: "ขนมยาคู",
    description: "เจ้าหนูยาคูมักเกาะตึดหนึบเสมอ ดังนั้นช่วยเล่นกับเขาหน่อยนะ",
    image: yaku_home,
    imageAlt: "Kao Gra Ya Koo",
  },
  seat_chan: {
    origin: "ภาคกลาง",
    ingredient: "แป้งมัน",
    dessertName: "ขนมชั้น",
    description:
      "ขนมชั้นเป็นคนขี้หนาว เขาจึงหาทางออกด้วยการนำผ้าห่มหลายผืนมาซ้อนทับกัน เอาล่ะ หายหนาวแล้ว!",
    image: seat_chan,
    imageAlt: "Thai Layered Dessert",
  },
  thongyib_1: {
    origin: "ภาคกลาง",
    ingredient: "ไข่แดง",
    dessertName: "ขนมทองหยิบ",
    description:
      "ทองหยิบไม่มั่นใจในรูปร่างของตัวเอง ชาวเมืองเลยมักพบเขาอยู่ในสภาพที่พยายามแขม่วพุงให้ตัวผอม แต่เขาไม่รู้ว่ามันน่าเอ็นดูขนาดไหน!",
    image: thongyib_1,
    imageAlt: "Pinched gold egg yolk",
  },
  seat_tang: {
    origin: "ภาคเหนือ",
    ingredient: "ข้าวเหนียว",
    dessertName: "ข้าวแต๋นน้ำแตงโม",
    description:
      "หญิงชราผู้ใจดี เธอชอบออกมารับแสงแดด และดูความมีชีวิตชีวาของเมือง บางครั้งเธอก็จะมีขนมมาแบ่งให้กับชาวเมือง ทุกคนรักเธอ!",
    image: seat_tang,
    imageAlt: "Crispy Rice Cracker",
  },
  thongm: {
    origin: "ภาคกลาง",
    ingredient: "แป้งมันสำปะหลัง",
    dessertName: "ขนมทองม้วนกรอบ",
    description:
      "ยามรักษาการผู้น่าเชื่อถือ ด้วยรูปร่างที่สูงใหญ่ของเขา เขาติดอันดับหนุ่มโสดที่เป็นที่ต้องการมากที่สุดในเมืองนี้!",
    image: thongm,
    imageAlt: "Thai crispy roll",
  },
  thongms: {
    origin: "ภาคกลาง",
    ingredient: "แป้งมัน",
    dessertName: "ขนมทองม้วนสด",
    description:
      "น้องชายของคุณยามรักษาการ เพราะอาการป่วยทำให้เขาไม่แข็งแรงเท่าพี่ชาย ดังนั้นช่วยใจดีกับเขาหน่อยนะ!",
    image: thongms,
    imageAlt: "Thai crispy roll",
  },
  morgang: {
    origin: "ภาคกลาง",
    ingredient: "ไข่",
    dessertName: "ขนมหม้อแกง",
    description:
      "เธอเป็นเจ้าของร้านขายของชำที่มักจะใส่เครื่องประดับที่มาจากแบรนด์ที่แตกต่างกัน ไม่ว่าจะเป็นถั่ว หรือเผือก แล้วยังชอบชุดโทนสีส้มเป็นพิเศษด้วย",
    image: morgang,
    imageAlt: "Thai custard cake",
  },
  aunchan: {
    origin: "ภาคกลาง",
    ingredient: "น้ำดอกอัญชัน",
    dessertName: "ขนมดอกอัญชัน",
    description:
      "อัญชันมักจะใส่ชุดโทนสีน้ำเงิน หรือม่วงที่ดูน่าเศร้า เล่ากันว่าเธอเป็นสตรีมีการศึกษาสูงจากเมืองหลวง แต่เมื่อสามีเสียชีวิต เธอจึงใส่ชุดนี้เพื่อไว้ทุกข์แก่เขามาตลอด",
    image: aunchan,
    imageAlt: "Butterfly-Pea Floral Rice Cake",
  },
  yoksod: {
    origin: "ภาคกลาง",
    ingredient: "น้ำใบเตย",
    dessertName: "ขนมเปียกปูนกะทิสด",
    description:
      "ตระกูลเปียกปูนมักเซ็ทผมทรงเดียวกันอยู่เสมอ แน่นอนว่าเจลในร้านขายของมักถูกพวกเขาเหมาซื้อจนหมด ",
    image: yoksod,
    imageAlt: "Black coconut sweet pudding",
  },
  bean: {
    origin: "ภาคเหนือ",
    ingredient: "ถั่วเขียวเลาะเปลือก",
    dessertName: "ขนมถั่วกวน",
    description:
      "ถั่วกวนมักเสียเวลาช่วงเช้าไปกับการอาบน้ำ เพื่อให้มีกลิ่นหอม รวมถึงใช้เวลาในช่วงสายอีกเล็กน้อยเพื่อแต่งหน้า ก็เขาน่ะเป็นหนุ่มฮอตยังไงล่ะ!",
    image: bean,
    imageAlt: "Thai Layered Dessert",
  },
};
