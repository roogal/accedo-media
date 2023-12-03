/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.module.scss";

const IntroScreen = React.lazy(() =>
  import(/* webpackChunkName: "Intro" */ "./screens/Intro").then((module) => ({
    default: module.IntroScreen,
  }))
);

const HomeScreen = React.lazy(() =>
  import(/* webpackChunkName: "NoMatch" */ "./screens/Home").then((module) => ({
    default: module.HomeScreen,
  }))
);

const NoMatchScreen = React.lazy(() =>
  import(/* webpackChunkName: "NoMatch" */ "./screens/NoMatch").then(
    (module) => ({
      default: module.NoMatchScreen,
    })
  )
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroScreen />} />
      <Route
        path="home"
        element={
          <React.Suspense fallback={<>...</>}>
            <HomeScreen />
          </React.Suspense>
        }
      />
      <Route
        path="*"
        element={
          <React.Suspense fallback={<>...</>}>
            <NoMatchScreen />
          </React.Suspense>
        }
      />
    </Routes>
  );
}
