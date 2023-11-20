/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import React from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";

import logo from "./logo.svg";
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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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

//export default App;
