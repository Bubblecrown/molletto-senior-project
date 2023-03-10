import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";

import PulsingCircle from "./components/PulsingCircle/PulsingCircle";
import Member from "./pages/AboutUs/Member";
import FairyTale from "./FairyTale";
import CanvasTest from "./CanvasTest";
import GsapScrollTest from "./GsapScrollTest";
import TestCanvas from "./TestCanvas";
import LocoTest from "./LocoTest";
import ReactSpring from "./ReactSpring";

const TransitionRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<FairyTale />} />

        <Route path="/about" element={<PulsingCircle />} />
        <Route path="/about/:id" element={<Member />} />
      </Routes>
    </AnimatePresence>
  );
};

export default TransitionRoute;
