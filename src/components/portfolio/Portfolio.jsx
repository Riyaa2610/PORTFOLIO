import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "TEDxPICT Blogs Website",
    img: "/tedxpict.png",
    desc: "Collaborated as a UI/UX Designer for TEDxPICT Blogs, contributing to the creation of innovative website interfaces using Figma.",
  },
  {
    id: 2,
    title: "PrintEZ",
    img: "/PrintEZ-project.png",
    desc: "PrintEZ, a Web and App portal to reduce clutter at local stationery shops This is a ’Project Based Learning’ Project and the entire website is made in ReactJS with NextJS framework.",
  },
  {
    id: 3,
    title: "Lemon Tree(Freelance UI/UX)",
    img: "/lemontree.png",
    desc: "Worked as a Freelance UI/UX designer, Lemon Tree is a BTC (Bitcoin) Price Prediction Website.",
  },
  {
    id: 4,
    title: "LawPal",
    img: "/lawpal.png",
    desc: "An App based portal, designed to make an e-MarketPlace for lawyers to be onboarded for job opportunities and even for users to reachout lawyers.",
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  let buttons;
  if (item.id === 1) {
    buttons = (
      <>
        <a href="https://blogs.tedxpict.in/" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
        <a href="https://medium.com/@riyawani26/tedxpict-blogs-website-ui-ux-case-study-bf389410b35a" target="_blank" rel="noopener noreferrer">
          <button>View Case Study</button>
        </a>
      </>
    )
  }
  else if (item.id === 2) {
    buttons = (
      <>
        <a href="https://printez.netlify.app/" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
        <a href="https://www.behance.net/gallery/176674093/UIUX-Case-Study-PrintEZ" target="_blank" rel="noopener noreferrer">
          <button>View Case Study</button>
        </a>
      </>
    )
  }
  else if (item.id === 3)
  { 
    buttons = (
      <>
        <a href="https://www.figma.com/file/vqxFLKWe16zi9bmX2d3onu/Lemon-Tree?type=design&node-id=0-1&mode=design&t=RdANscuMpqa64tjT-0" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
      </>
    )  
  }
  else if (item.id === 4)
  {
    buttons = (
      <>
        <a href="https://www.figma.com/file/LLq5Q1mnp8C1VQuHlIq7pj/SIH-Lawyer-Screens?type=design&node-id=0-1&mode=design&t=PbGtUSmalF5cMNLr-0" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
      </>
    )
    }
  

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.div className="buttonContainer" >{buttons}</motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Relevant Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
