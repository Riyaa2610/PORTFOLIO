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
            <p> Embracing the world of product design, I am Riya Wani, committed to shaping intuitive interactions. With 3 months of experience as a Product Design Intern at eZpedal Rideshare, alongside my ongoing studies in Computer Science at PICT, Pune, I am dedicated to making design and technology seamlessly coexist.
    <br></br>
My passion lies in working with product-based companies. I thrive on immersing myself in the product domain, exploring its intricacies and complexities, and developing innovative solutions to improve it. I believe in using data and user insights to inform my design decisions.
            </p>
            <br></br>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
