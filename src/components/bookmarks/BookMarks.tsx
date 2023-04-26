import React, { useState } from "react";
import {
  BookBody,
  BookHead,
  BookMarkBody,
  BookMarksContainer,
  Bookline,
} from "./BookMarksStyle";
import { H3Noto, H4Noto, PNoto } from "../../GlobalStyle";
import { AfterStoryType } from "../../types/afterStoryType";

const BookMarks = ({ name, nameDescription, meaning }: AfterStoryType) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div style={{ cursor: "pointer" }} onClick={() => setIsClicked(!isClicked)}>
      <BookMarksContainer
        initial={{ translateY: "95vh" }}
        animate={{ translateY: isClicked ? "5vh" : "95vh" }}
      >
        <BookMarkBody>
          <Bookline></Bookline>
          <BookHead>
            <H3Noto c="#434343">
              ความหมายเชิง <H3Noto c="#9860D0">“วรรณศิลป์”</H3Noto>
            </H3Noto>
          </BookHead>
          <BookBody>
            <H4Noto fw={700} fs="clamp(0.75rem, 4vw, 1.3rem)" c="#9860D0">
              {name}
            </H4Noto>
            <PNoto width="100%" align="left">
              {nameDescription}
            </PNoto>
          </BookBody>
          <BookBody>
            <H4Noto fw={700} fs="clamp(0.75rem, 4vw, 1.3rem)" c="#9860D0">
              ประเด็นการสื่อสาร
            </H4Noto>
            <PNoto width="100%" align="left">
              {meaning}
            </PNoto>
          </BookBody>
        </BookMarkBody>
      </BookMarksContainer>
    </div>
  );
};

export default BookMarks;
