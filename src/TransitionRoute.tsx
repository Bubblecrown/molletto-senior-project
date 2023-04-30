import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import Member from "./pages/AboutUs/Member";
import React, { Suspense} from "react";
import Loading from "./pages/Loading";

const HomeLazy = React.lazy(() => import("./pages/homeModel/HomeMain"));
const AboutLazy = React.lazy(() => import("./pages/AboutUs/ScrollAnimation"));
const YakuStoryLazy = React.lazy(
  () => import("./pages/yakuStory/YakuStoryMain")
);
const PennyStoryLazy = React.lazy(
  () => import("./pages/pennyStory/PennyStoryMain")
);
const YakuModelLazy = React.lazy(() => import("./pages/yakuModel/YakuMain"));
const PennyModelLazy = React.lazy(() => import("./pages/pennyModel/PennyMain"));

const TransitionRoute = () => {
  const location = useLocation();

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
              <div style={{ position: "relative" }}>
                <AboutLazy />
              </div>
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

      </Routes>
    </AnimatePresence>
  );
};

export default TransitionRoute;
