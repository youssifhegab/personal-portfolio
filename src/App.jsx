import React from "react";
import "./App.css";
import Home from "./components/container/Home";
import Navbar from "./components/Navbar";

const About = React.lazy(() => import("./components/container/About"));
const Contact = React.lazy(() => import("./components/container/Contact"));
const Footer = React.lazy(() => import("./components/container/Footer"));
const Portfolio = React.lazy(() => import("./components/container/Portfolio"));
const Skills = React.lazy(() => import("./components/container/Skills"));

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
