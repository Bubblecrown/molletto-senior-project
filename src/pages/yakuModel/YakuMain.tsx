import { Canvas } from "@react-three/fiber";

import { CanvasContainer } from "../../GlobalStyle";
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
import Yaku from "./Yaku";
import MessageBox from "../../components/messageBox/MessageBox";


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

        <Yaku scale={20} position={[0, 0, 0]} />
        <OrbitControls />
        <group scale={20} position={[2, 0, 0]}>
          <Html>
            <MessageBox />
          </Html>
        </group>

        
      </Canvas>
      <Loader />
      {/* <Footer audio={homeSound} /> */}
    </CanvasContainer>
  );
};

export default YakuMain;
