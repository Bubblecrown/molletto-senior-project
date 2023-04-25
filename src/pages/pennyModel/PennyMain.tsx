// YakuMain.tsx
import { Canvas } from "@react-three/fiber";
import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { CanvasContainer } from "../homeModel/HomeStyle";
import PennyModel from "./Pennyweb";
import pennyBg from "../../assets/images/tale/pennyStory/BG8.jpg";

import Footer from "../../components/Footer/Footer";
import audioFile from "../../assets/sounds/PennySound.mp3";
import { AfterStorytData } from "../../data/afterStory";
import BookMarks from "../../components/bookmarks/BookMarks";

const PennyMain = () => {
  return (
    <CanvasContainer>
      <Canvas
        style={{
          backgroundImage: `url(${pennyBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <OrbitControls
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 2}
        />
        <PennyModel scale={35} position={[0, -0.2, 0]} />
      </Canvas>
      <BookMarks
        name={AfterStorytData.penny.name}
        nameDescription={AfterStorytData.penny.nameDescription}
        meaning={AfterStorytData.penny.meaning}
      />
      <Footer audio={audioFile} volumes={0.5} />
    </CanvasContainer>
  );
};

export default PennyMain;
