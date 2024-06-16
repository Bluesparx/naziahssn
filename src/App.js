import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Project from "./components/Projects/project";
import Resume from "./components/Resume/resume";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nazia Hassan</title>
        <link rel="canonic" href="https://bluesparx.github.io/naziahssn/" />
      </Helmet>
      <Navbar/>
      <Intro/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
