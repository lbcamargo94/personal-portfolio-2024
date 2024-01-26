import Footer from "./components/Footer";
import Header from "./components/Header";
// import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start font-sans bg-primary text-primary">
      <SmoothScroll>
        <Header />
        {/* <Outlet /> */}
        <Home id={"home"} />
        <About id={"about"} />
        <Skills id={"skills"} />
        <Projects id={"projects"} />
        <Contact id={"projects"} />
        <Footer />
      </SmoothScroll>
    </div>
  );
}
