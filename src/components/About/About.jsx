// About.jsx
import "./about.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const AboutMe = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section className="about">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src="/riya-photo.jpeg" alt="About Me" />
          </div>
          <div className="textContainer">
            <h2>About Me</h2>
            <p>
              I love designing things that look great and work well, especially in the digital world. I'm into user interface and experience design, graphic design, and also enjoy coding for the frontend. Basically, I'm a designer who can also make things function smoothly on the web.
            </p>
            <br></br>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
