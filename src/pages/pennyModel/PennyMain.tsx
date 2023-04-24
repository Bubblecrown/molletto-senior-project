// YakuMain.tsx
import { Canvas } from "@react-three/fiber";
import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { CanvasContainer } from "../homeModel/HomeStyle";
import PennyModel from "./Pennyweb";
import pennyBg2 from "../../assets/images/tale/pennyStory/penny_model_bg2.png";
import pennyBg from "../../assets/images/tale/pennyStory/penny_model_bg.png";
import Footer from "../../components/Footer/Footer";
import audioFile from "../../assets/sounds/PennySound.mp3";

const PennyMain = () => {
  return (
    <CanvasContainer>
      <Canvas
        style={{
          backgroundImage: `url(${pennyBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize:'cover'
        }}
      >
        <ambientLight intensity={0.6} />
        <OrbitControls
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 2}
        />
        <PennyModel scale={30} position={[0, -0.5, 0]} />
      </Canvas>
      <Footer audio={audioFile} volumes={0.5} />
    </CanvasContainer>
  );
};

export default PennyMain;
