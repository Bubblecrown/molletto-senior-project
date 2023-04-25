// YakuMain.tsx
import { Canvas } from "@react-three/fiber";
import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { CanvasContainer } from "../homeModel/HomeStyle";

import { YakuReal } from "./Yaku_real";
import Footer from "../../components/Footer/Footer";
import audioFile from "../../assets/sounds/yakuSound.mp3";
import yakuBg from "../../assets/images/tale/yakuStory/bg_yaku.png";
import PulsingPresent from "../../components/PulsingCircle/PulsingPresent";
import BookMarks from "../../components/bookmarks/BookMarks";
import { AfterStorytData } from "../../data/afterStory";

const YakuMain = () => {
  return (
    <CanvasContainer>
      <Canvas
        style={{
          backgroundImage: `url(${yakuBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <OrbitControls
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
        <YakuReal scale={40} position={[0, -0.5, 0]} />
      </Canvas>
      <BookMarks
        name={AfterStorytData.yaku.name}
        nameDescription={AfterStorytData.yaku.nameDescription}
        meaning={AfterStorytData.yaku.meaning}
      />
      <Footer audio={audioFile} volumes={0.5} />
    </CanvasContainer>
  );
};

export default YakuMain;
