import React from "react";
import seat from "../../assets/images/HoverPopup.png";
import {
  DessertContainer,
  DessertContainerImage,
  DessertDescription,
  DessertHandwriting,
  DessertHeader,
  DessertImage,
  DessertText,
  DessertTitle,
} from "./DessertStyle";
import { H1Noto, H4Mali, H4Noto } from "../../GlobalStyle";
import { dessert } from "../../types/DessertType";

const DessertPopup = ({ data }: dessert) => {
  const [origin, ingredient, name, des, image, imageAlt] = data ?? [];

  return (
    <DessertContainer>
      {/* dessert image */}
      <DessertContainerImage
        initial={{ translateX: 150 }}
        animate={{
          translateX: 5,
          transition: {
            duration: 0.2,
          },
        }}
      >
        <DessertImage src={image} alt={imageAlt} />
      </DessertContainerImage>
      {/* end dessert image */}

      {/* Text body */}
      <DessertText>
        <DessertTitle>
          {/* Title */}
          <DessertHeader>
            <H4Noto c="#000">แหล่งกำเนิด ........................</H4Noto>
            <DessertHandwriting>
              <H4Mali c="#B73838">{origin}</H4Mali>
            </DessertHandwriting>
          </DessertHeader>
          {/* end title */}

          {/* Title */}
          <DessertHeader>
            <H4Noto c="#000">วัตถุดิบหลัก .........................</H4Noto>
            <DessertHandwriting>
              <H4Mali c="#B73838">{ingredient}</H4Mali>
            </DessertHandwriting>
          </DessertHeader>
          {/* end title */}

          {/* dessert info */}
          <DessertDescription>
            <H1Noto c="#000" fs={1.75}>
              {name}
            </H1Noto>
            <H4Noto c="#000">{des}</H4Noto>
          </DessertDescription>
          {/* end dessert info */}
        </DessertTitle>
      </DessertText>
    </DessertContainer>
  );
};

export default DessertPopup;
