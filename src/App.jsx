import Test from "./Test";
import "./app.scss";
import ContactMe from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import AboutMe from "./components/About/About";
import Carousel from "./components/Carousel/carousel"
const App = () => {
  return (
    <>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Projects">
        <Parallax type="portfolio" />
      </section>
      {/* <Carousel/> */}
      <Projects />
      <section id="About">
        <AboutMe/>
      </section>
      <section id="Contact Me">
        <ContactMe />
      </section>
    </>
  );
};

export default App;
