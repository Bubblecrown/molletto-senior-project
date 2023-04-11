import { Canvas, useThree } from "@react-three/fiber";
import { Stats, Environment, Html } from "@react-three/drei";
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


const HomeMain = () => {
  return (
    <CanvasContainer>
      <Canvas shadows>
        <Teleport />
        {/* <Environment
          files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@teleport/public/img/rustig_koppie_puresky_1k.hdr"
          background
        /> */}

        <Home />

        <YakuHome />
        <NanaHome />
        <PennyHome />
        <LightModel />
        <Stats />
      </Canvas>

      <Footer audio={homeSound} />
    </CanvasContainer>
  );
};

export default HomeMain;
