import "./styles/global.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { MainProvider } from "./provider/MainProvider";

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
    //     element: <Home id="home" />,
    //   },
    //   {
    //     path: "/about",
    //     element: <About id="about" />,
    //   },
    //   {
    //     path: "/skills",
    //     element: <Skills id="skills" />,
    //   },
    //   {
    //     path: "/projects",
    //     element: <Projects id="projects" />,
    //   },
    //   {
    //     path: "/contact",
    //     element: <Contact id="contact" />,
    //   },
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainProvider initialTheme="dark">
      <RouterProvider router={router} />
    </MainProvider>
  </React.StrictMode>
);
