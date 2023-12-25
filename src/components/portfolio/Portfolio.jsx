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
    desc: "Worked as a Freelance Ui/Ux designer, Lemon Tree is a BTC (Bitcoin)Price Prediction Website.",
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
            <motion.div className="buttonContainer" >
            {item.id === 1 || item.id === 2 ? (
              <>
                <button>View Project</button>
                <button>View Case Study</button>
              </>
            ) : (
              <button>View Project</button>
              )}
            </motion.div>
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
