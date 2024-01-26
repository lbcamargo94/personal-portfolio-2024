import "./styles/global.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";
// import Skills from "./pages/Skills";
// import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Home />,
    //   },
    //   {
    //     path: "/about",
    //     element: <About />,
    //   },
    //   {
    //     path: "/skills",
    //     element: <Skills />,
    //   },
    //   {
    //     path: "/projects",
    //     element: <Projects />,
    //   },
    //   {
    //     path: "/contact",
    //     element: <Contact />,
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
