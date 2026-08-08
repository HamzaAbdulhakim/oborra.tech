import { useState } from "react";
import Qualifications from "./pages/Qualifications";
import fadeUp from "./data/fadeUp";
import Reveal from "./components/Reveal";
import { slideLeft, slideRight } from "./animations/variants";
import Footer from "./components/Footer"
import Contact from "./pages/contact";
import About from "./pages/About";
import CallMe from "./pages/CallMe";
import Header from "./pages/Header";
import Projects from "./pages/Projects";
import Stagger from "./components/Stagger";
import Reveal2 from "./components/Reveal2";

import NavBar from "./components/navBar";
function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  return (
    <div className={isLightMode ? "light-theme": "dark-theme"}>
      <header>
        <NavBar isLightMode={isLightMode} setIsLightMode={setIsLightMode} />
      </header>

      <main>
        <Stagger>
          <Reveal2>
            <section id="header">
              <Header />
            </section>
          </Reveal2>
        </Stagger>

        <Stagger>
          <Reveal2>
            <section id="about">
              <About />
            </section>
          </Reveal2>
        </Stagger>

        
        <Stagger>
          <Reveal2>
            <section id="projects">
              <Projects />
            </section>
          </Reveal2>
        </Stagger>

        <Stagger>
          <Reveal2>
            <section id="qualifications">
              <Qualifications />
            </section>
          </Reveal2>
        </Stagger>

        <Stagger>
          <Reveal2>
            {" "}
            <section id="contact">
              <Contact />
            </section>
          </Reveal2>
        </Stagger>

        <CallMe />
      </main>
      <footer>
        <Stagger>
          <Reveal2>
            {" "}
            <Footer id="footer" />
          </Reveal2>
        </Stagger>
      </footer>
    </div>
  );
}

export default App;
