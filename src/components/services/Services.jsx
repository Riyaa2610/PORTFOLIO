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
          {/* <img src="/ux.png" alt="" /> */}
          <h1>
            <motion.b whileHover={{color:"orange"}}>I am proficient in ?</motion.b> 
          </h1>
        </div>
        <div className="title">
          {/* <h1>
            <motion.b whileHover={{color:"orange"}}>Services</motion.b>
          </h1>
          <button>WHAT I DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UI/UX Design</h2>
          <motion.div className="row">
            <img src="/figma.png"/>
          </motion.div>
          
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Graphic Design</h2>
          <motion.div className="row">
            <img src="/photoshop.png" />
            <img src="/illustrator.png" />
            <img src="/indesign.png" />
          </motion.div>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <motion.div className="row">
            <img src="/html.png" />
            <img src="/css.png" />
            <img src="/bootstrap.png" />
            <img src="/react.png" />
          </motion.div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>UX Writing</h2>
          <motion.div className="row">
            <img src="/medium.png"/>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
