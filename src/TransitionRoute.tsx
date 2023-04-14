import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";

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
import React, { Suspense, useEffect, useState } from "react";
import Loading from "./pages/Loading";
import DessertPopup from "./components/DessertPopup/DessertPopup";
// const HomeLazy = React.lazy(() => import("./pages/homeModel/HomeMain"));
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
        {/* <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <HomeMain />
            </Suspense>
          }
        /> */}
        <Route
          path="/"
          element={<HomeMain />}
        />
        <Route path="/about" element={<ScrollAnimation />} />
        <Route path="/about/:id" element={<Member />} />
      </Routes>
    </AnimatePresence>
  );
};

export default TransitionRoute;
