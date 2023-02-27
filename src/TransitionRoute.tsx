import { PageTransition } from "@steveeeie/react-page-transition";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router";
import About from "./About";
import PulsingCircle from "./components/PulsingCircle/PulsingCircle";
import { CircleContainer } from "./components/PulsingCircle/PulsingStyle";
import Home from "./Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Member from "./pages/AboutUs/Member";
import ScrollAnimation from "./pages/AboutUs/ScrollAnimation";

const TransitionRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ScrollAnimation />} />
        <Route path="/about" element={<PulsingCircle />} />
        <Route path="/about/:id" element={<Member />} />
      </Routes>
    </AnimatePresence>
  );
};

export default TransitionRoute;
