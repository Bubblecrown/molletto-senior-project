import { Canvas, useThree } from "@react-three/fiber";
import { Stats, Environment, Html, Loader } from "@react-three/drei";
import * as THREE from "three";

import Teleport from "./Teleport";
import Home from "./Home";
import Footer from "../../components/Footer/Footer";
import homeSound from "../../assets/sounds/homeSound.mp3";
import LightModel from "./LightModel";
import PulsingCircle from "../../components/PulsingCircle/PulsingCircle";
import { Provider, ReactReduxContext } from "react-redux";
import { store } from "../../app/store";
import { Suspense, useEffect, useState } from "react";
import PulsingCanvas from "../../components/PulsingCircle/PulsingCanvas";
import YakuHome from "./YakuHome";
import LogoOpened from "../../components/Logo/LogoOpened";
import { CanvasContainer } from "../../GlobalStyle";
import NanaHome from "./NanaHome";
import PennyHome from "./PennyHome";
// @ts-ignore
import { FPSControls } from "react-three-fpscontrols";
import MainStage from "./MainStage";

const HomeMain = () => {
  return (
    <CanvasContainer>
      <Canvas shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          {/* <Teleport /> */}
          {/* <Environment
          files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@teleport/public/img/rustig_koppie_puresky_1k.hdr"
          background
        /> */}
          <MainStage />
          <FPSControls
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
          />

          {/* <Home /> */}
          {/* <YakuHome />
          <NanaHome />
          <PennyHome /> */}
          {/* <LightModel /> */}
          {/* <Stats /> */}
        </Suspense>
      </Canvas>
      <Loader />

      {/* <Footer audio={homeSound} /> */}
    </CanvasContainer>
  );
};

export default HomeMain;
