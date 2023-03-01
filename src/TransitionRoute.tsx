import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import { ParallaxProvider } from "react-scroll-parallax";
import PulsingCircle from "./components/PulsingCircle/PulsingCircle";
import Member from "./pages/AboutUs/Member";
import FairyTale from "./FairyTale";

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
