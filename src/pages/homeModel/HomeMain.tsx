import { Canvas } from "@react-three/fiber";

import Teleport from "./Teleport";
import Home from "./Home";
import Footer from "../../components/Footer/Footer";
import LightModel from "./LightModel";
import PulsingCircle from "../../components/PulsingCircle/PulsingCircle";
import { store } from "../../app/store";
import YakuHome from "./YakuHome";
import LogoOpened from "../../components/Logo/LogoOpened";
import { CanvasContainer } from "../../GlobalStyle";
import NanaHome from "./NanaHome";
import PennyHome from "./PennyHome";
// import { FPSControls } from "react-three-fpscontrols/dist/cjs";
import { FPSControls } from "react-three-fpscontrols";
// import { FPSControls } from "../../../node_modules/react-three-fpscontrols/dist/cjs/index.js";
import MainStage from "./MainStage";
import { Suspense } from "react";
import {
  Environment,
  FirstPersonControls,
  KeyboardControls,
  Loader,
  OrbitControls,
} from "@react-three/drei";

const HomeMain = () => {
  return (
    <CanvasContainer>
      {/* style={{ background: '#000' }} */}
      <Canvas
        shadows
        style={{
          background:
            "linear-gradient(90deg, rgba(230,192,255,1) 0%, rgba(255,209,209,1) 50%, rgba(252,176,69,1) 100%)",
        }}
      >
        <Suspense fallback={null}>
          <Teleport />

          {/* <Environment
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/satara_night_no_lamps_4k.hdr"
            background
          /> */}

          {/* <MainStage /> */}
          {/* <FPSControls
            camProps={{
              makeDefault: true,
              fov: 80,
              position: [0, 2.537, 0.7],
            }}
            orbitProps={{
              target: [0, 2.537, 0],
            }}
            enableJoystick
            enableKeyboard
          /> */}
          {/* <OrbitControls /> */}
          <Home />
          <YakuHome />
          <NanaHome />
          <PennyHome />
          {/* <Yaku /> */}
          <LightModel />
        </Suspense>
      </Canvas>
      <Loader />
      {/* <Footer audio={homeSound} /> */}
    </CanvasContainer>
  );
};

export default HomeMain;
