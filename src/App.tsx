import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-sans bg-primary text-primary">
      <Header />
      <Outlet />
      <Home id={"home"} />
      <About id={"about"} />
      <Skills id={"skills"} />
      <Projects id={"projects"} />
      <Contact id={"projects"} />
      <Footer />
      <ScrollRestoration
        getKey={(location) => {
          const paths = ["/", "/about", "/skills", "/projects", "/contacts"];

          return paths.includes(location.pathname)
            ? location.pathname
            : location.key;
        }}
      />
    </div>
  );
}
