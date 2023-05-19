import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Home from "./components/container/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const About = React.lazy(() => import("./components/container/About/About"));
const Contact = React.lazy(() =>
  import("./components/container/Contact/Contact")
);
const Footer = React.lazy(() => import("./components/container/Footer/Footer"));
const Portfolio = React.lazy(() =>
  import("./components/container/Portfolio/Portfolio")
);
const Skills = React.lazy(() => import("./components/container/Skills/Skills"));

const App = () => {
  return (
    <>
      <Helmet>
        <meta
          http-equiv='Content-Security-Policy'
          content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';"
        />
      </Helmet>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
