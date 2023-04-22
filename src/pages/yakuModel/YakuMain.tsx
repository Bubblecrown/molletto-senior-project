import { Canvas } from "@react-three/fiber";

// import { FPSControls } from "react-three-fpscontrols/dist/cjs";
import { FPSControls } from "react-three-fpscontrols";
// import { FPSControls } from "../../../node_modules/react-three-fpscontrols/dist/cjs/index.js";
import { Suspense } from "react";
import {
  Environment,
  Html,
  Loader,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  TrackballControls,
} from "@react-three/drei";
import YakuStory from "../yakuStory/YakuStory";
import MessageBox from "../../components/messageBox/MessageBox";
import { CanvasContainer } from "../homeModel/HomeStyle";
import YakuModel from "./Yakuweb";

const YakuMain = () => {
  return (
    <CanvasContainer>
      <Canvas>
        {/* <Environment
          files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_08_4k.hdr"
          background
        /> */}

        <ambientLight intensity={0.6} />
        {/* <PerspectiveCamera position={[0, 0, 5]} makeDefault /> */}
        <OrbitControls></OrbitControls>
        <YakuModel scale={40} position={[0, 0, 0]} />

        {/* <group scale={20} position={[0, 0, 0]}>
          <Html>
            <MessageBox />
          </Html>
        </group> */}
      </Canvas>
      <Loader />
      {/* <Footer audio={homeSound} /> */}
    </CanvasContainer>
  );
};

export default YakuMain;
