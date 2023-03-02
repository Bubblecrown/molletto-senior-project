import { useRef } from "react";
import { TaleSection } from "./GlobalStyle";
import { useCanvas } from "./hooks/useCanvas";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";

function CanvasTest() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useHorizontalScroll();

  useCanvas({
    canvasRef,
    imageSources: [
      "https://cdnb.artstation.com/p/assets/images/images/030/024/421/large/julian-gariba-test.jpg?1599376012",
      "https://tistory4.daumcdn.net/tistory/2980695/skin/images/bg03.png",
      "https://tistory4.daumcdn.net/tistory/2980695/skin/images/bg04.png",
      "https://tistory1.daumcdn.net/tistory/2980695/skin/images/bg02-1.png",
    ],
    overlapSources: [
      "http://ansimuz.com/resources/demos/parallax-mountain/img/parallax-mountain-mountains.png",
      "https://raw.githubusercontent.com/Ryoley/moonlight-parallax/main/assets/images/mountains_front.png",
    ],
  });

  return (
    <TaleSection ref={scrollRef}>
      <div style={{ whiteSpace: "nowrap" }}>
        <canvas ref={canvasRef} />
      </div>
    </TaleSection>
  );
}

export default CanvasTest;
