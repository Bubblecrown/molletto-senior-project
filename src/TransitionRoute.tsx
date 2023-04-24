import { AnimatePresence } from "framer-motion";
import { Route, Routes, redirect, useLocation } from "react-router";
import Member from "./pages/AboutUs/Member";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import Loading from "./pages/Loading";

const HomeLazy = React.lazy(() => import("./pages/homeModel/HomeMain"));
const AboutLazy = React.lazy(() => import("./pages/AboutUs/ScrollAnimation"));
const YakuStoryLazy = React.lazy(() => import("./pages/yakuStory/YakuStoryMain"));
const PennyStoryLazy = React.lazy(() => import("./pages/pennyStory/PennyStoryMain"));
const YakuModelLazy = React.lazy(() => import("./pages/yakuModel/YakuMain"));
const PennyModelLazy = React.lazy(() => import("./pages/pennyModel/PennyMain"));

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
              <HomeLazy />
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
              <YakuStoryLazy />
            </Suspense>
          }
        />
        <Route
          path="/pennyTale"
          element={
            <Suspense fallback={<Loading />}>
              <PennyStoryLazy />
            </Suspense>
          }
        />
        <Route
          path="/yaku_character"
          element={
            <Suspense fallback={<Loading />}>
              <YakuModelLazy />
            </Suspense>
          }
        />
        <Route
          path="/penny_character"
          element={
            <Suspense fallback={<Loading />}>
              <PennyModelLazy />
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
