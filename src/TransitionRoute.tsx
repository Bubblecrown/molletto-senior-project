import { AnimatePresence } from "framer-motion";
import { Route, Routes, redirect, useLocation } from "react-router";

import PulsingCircle from "./components/PulsingCircle/PulsingCircle";
import Member from "./pages/AboutUs/Member";
import FairyTale from "./FairyTale";
import CanvasTest from "./CanvasTest";
import GsapScrollTest from "./GsapScrollTest";
import TestCanvas from "./TestCanvas";
import LocoTest from "./LocoTest";
import TestThree from "./TestThree";
import TestPopupThree from "./TestPopupThree";
import { Canvas } from "react-three-fiber";
import TestMeshClicked from "./TestMeshClicked";
import Player from "./pages/homeModel/Teleport";
import TestMovementThreeMain from "./pages/homeModel/HomeMain";
import TestCanvasPosition from "./TestCanvasPosition";
import AboutMain from "./pages/AboutUs/AboutMain";
import ScrollAnimation from "./pages/AboutUs/ScrollAnimation";
import TestLongSceneScroll from "./TestLongSceneScroll";
import TestHomeModel from "./TestHomeModel";
import HomeMain from "./pages/homeModel/HomeMain";
import React, { Suspense, useEffect, useMemo, useState } from "react";

import DessertPopup from "./components/DessertPopup/DessertPopup";
import YakuMain from "./pages/yakuModel/YakuMain";
import YakuStory from "./pages/yakuStory/YakuStory";
import YakuStoryMain from "./pages/yakuStory/YakuStoryMain";

import YakuStoryTale from "./pages/yakuStory/YakuStoryTale";
import YakuTaleMain from "./pages/yakuStory/YakuTaleMain";
import YakuTale from "./pages/yakuStory/YakuTale";
import Loading from "./pages/Loading";
import Main from "./TestHorizontal/Main";
import FramerTest from "./TestHorizontal/FramerTest";
import HorizontalScroll from "./TestHorizontal/HorizontalScroll";
const HomeLazy = React.lazy(() => import("./pages/homeModel/HomeMain"));
const AboutLazy = React.lazy(() => import("./pages/AboutUs/ScrollAnimation"));
const YakuLazy = React.lazy(() => import("./pages/yakuStory/YakuStoryMain"));
const TransitionRoute = () => {
  const location = useLocation();
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 11000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Main />
            </Suspense>
          }
        />

        <Route
          path="/about"
          element={
            <Suspense fallback={<Loading />}>
              <AboutLazy />
            </Suspense>
          }
        />
        <Route
          path="/yakuTale"
          element={
            <Suspense fallback={<Loading />}>
              <YakuLazy />
            </Suspense>
          }
        />
        <Route path="/about/:id" element={<Member />} />
        {/* <Route path="/yakuTale" element={<YakuStoryMain />} /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default TransitionRoute;
