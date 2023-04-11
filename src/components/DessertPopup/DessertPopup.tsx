import React from "react";
import seat from "../../assets/images/HoverPopup.png";
import seat_image from "../../assets/images/seat_image.png";
import {
  DessertContainer,
  DessertDescription,
  DessertHandwriting,
  DessertHeader,
  DessertImage,
  DessertText,
  DessertTitle,
} from "./DessertStyle";
import { H1Noto, H4Mali, H4Noto } from "../../GlobalStyle";
const DessertPopup = () => {
  return (
    <DessertContainer>
      <DessertImage
        src={seat_image}
        initial={{ translateX: 150 }}
        animate={{ translateX: 20 }}
      ></DessertImage>
      <DessertText>
        <DessertTitle>
          <DessertHeader>
            <H4Noto c="#000">แหล่งกำเนิด ........................</H4Noto>
            <DessertHandwriting>
              <H4Mali c="#B73838">ภูเก็ต</H4Mali>
            </DessertHandwriting>
          </DessertHeader>
          <DessertHeader>
            <H4Noto c="#000">วัตถุดิบหลัก .........................</H4Noto>
            <DessertHandwriting>
              <H4Mali c="#B73838"> แป้งข้าวเจ้า</H4Mali>
            </DessertHandwriting>
          </DessertHeader>
          <DessertDescription>
            <H1Noto c="#000" fs={1.75}>
              ขนมโก้ยตาหลาม
            </H1Noto>
            <H4Noto c="#000">
              เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์ หรืองานเรียงพิมพ์
              มันได้กลายมาเป็นเนื้อหาจำลอง มาตรฐานของธุรกิจดังกล่าวมา
            </H4Noto>
          </DessertDescription>
        </DessertTitle>
      </DessertText>
    </DessertContainer>
  );
};

export default DessertPopup;
