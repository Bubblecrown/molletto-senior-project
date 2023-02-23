import { PageTransition } from "@steveeeie/react-page-transition";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router";
import About from "./About";
import Home from "./Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Member from "./pages/AboutUs/Member";
import ScrollAnimation from "./pages/AboutUs/ScrollAnimation";

const TransitionRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} onExitComplete={() => null}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ScrollAnimation />} />
        <Route path="/scroll" element={<ScrollAnimation />} />
        <Route path="/about" element={<Member />} />
        <Route path="/about/:id" element={<Member />} />
      </Routes>
    </AnimatePresence>
  );
};

export default TransitionRoute;
