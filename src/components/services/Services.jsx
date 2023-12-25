import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on creating simple, intutive
          <br /> and aesthetic interfaces.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/ux.png" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Skills</motion.b> And
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Services</motion.b>
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UI/UX Design</h2>
          <p>
            I'm a skilled UI/UX designer with experience in various freelance projects.
            I pay close attention to details, follow user-friendly design principles, and stay updated on the latest trends to create designs that give users good user experience.
          </p>
          <button>View Relevant Work</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Graphic Design</h2>
          <p>
          I am an experienced graphic designer with a flair for creating visually captivating designs, having one internship specialising in Graphic Design. I am also Head of Design at TEDxPICT.
          </p>
          <button>View Relevant Work</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
          I'm a frontend web developer.With hands-on experience in coding and design, I focus on making user interfaces both attractive and easy to navigate for a seamless online experience.
          </p>
          <button>View Relevant Work</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UX Writing</h2>
          <p>
          Passionate UX writer specializing in crafting engaging Medium articles on UI/UX and staying updated on the latest trends in user experience. I'm drawn to creating content that not only educates but also sparks interest in the dynamic world of UI/UX design.
          </p>
          <button>View Relevant Work</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
