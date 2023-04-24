// YakuMain.tsx
import { Canvas } from "@react-three/fiber";
import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { CanvasContainer } from "../homeModel/HomeStyle";

import { YakuReal } from "./Yaku_real";
import Footer from "../../components/Footer/Footer";
import audioFile from "../../assets/sounds/yakuSound.mp3";

const YakuMain = () => {
  return (
    <CanvasContainer>
      <Canvas style={{ background: "#e8e8e8" }}>
        <ambientLight intensity={0.6} />
        <OrbitControls
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
        <YakuReal scale={30} position={[0, -0.5, 0]} />
      </Canvas>
      <Loader />
      <Footer audio={audioFile} volumes={0.5} />
    </CanvasContainer>
  );
};

export default YakuMain;
