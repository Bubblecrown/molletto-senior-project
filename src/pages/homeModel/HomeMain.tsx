import { Canvas } from "@react-three/fiber";

import Teleport from "./Teleport";
import Home from "./Home";
import Footer from "../../components/Footer/Footer";
import LightModel from "./LightModel";
import PulsingCircle from "../../components/PulsingCircle/PulsingCircle";
import { store } from "../../app/store";
import PulsingCanvas from "../../components/PulsingCircle/PulsingCanvas";
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
import { Environment, Loader, OrbitControls } from "@react-three/drei";


const HomeMain = () => {
  return (
    <CanvasContainer>
      
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <Teleport />
          <Environment
            files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@teleport/public/img/rustig_koppie_puresky_1k.hdr"
            background
          />
          
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
          {/* <LightModel /> */}
        </Suspense>
      </Canvas>
      <Loader />
      {/* <Footer audio={homeSound} /> */}
    </CanvasContainer>
  );
};

export default HomeMain;
