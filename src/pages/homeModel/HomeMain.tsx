import { Canvas } from "@react-three/fiber";

import Teleport from "./Teleport";
import Home from "./Home";
import Footer from "../../components/Footer/Footer";
import LightModel from "./LightModel";

import YakuHome from "./YakuHome";

import NanaHome from "./NanaHome";
import PennyHome from "./PennyHome";
import { Suspense, useEffect, useState } from "react";
import { CanvasContainer } from "./HomeStyle";
import homeSound from "../../assets/sounds/homeSound.mp3";
import WarningPopup from "../../components/warningPopup/WarningPopup";

import { useLocation } from "react-router-dom";
import { Loader } from "@react-three/drei";

const HomeMain = () => {
  const [isPopupDisplayed, setIsPopupDisplayed] = useState(false);
  const location = useLocation();
  const [reloadPage, setReloadPage] = useState(true);
  const handleClosePopup = () => {
    setIsPopupDisplayed(false);
  };

  useEffect(() => {
    const hasPopupBeenDisplayed = localStorage.getItem("hasPopupBeenDisplayed");

    if (!hasPopupBeenDisplayed) {
      setIsPopupDisplayed(true);
      localStorage.setItem("hasPopupBeenDisplayed", "true");
    }
  }, []);

  return (
    <CanvasContainer key={location.key}>
      {/* {isPopupDisplayed && <WarningPopup onClose={handleClosePopup} />} */}
      <Canvas
        shadows
        style={{
          background:
            "linear-gradient(180deg, #c0efff 0%, rgba(255,209,209,1) 50%, rgba(252,176,69,1) 100%)",
        }}
      >
        <Teleport />
        <Home />
        <YakuHome />
        <NanaHome />
        <PennyHome />
        <LightModel />
      </Canvas>
      <Footer audio={homeSound} />
    </CanvasContainer>
  );
};

export default HomeMain;
