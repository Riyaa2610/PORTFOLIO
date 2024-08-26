import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Capture",
    img: "/capture.png",
    desc: "Capture is a mobile and web application designed to recreate the nostalgic experience of a disposable camera at events. By scanning a unique QR code, attendees can access a dedicated event space to capture and upload photos.",
  },
  {
    id: 2,
    title: "ConvenientCare",
    img: "/convinientcare.png",
    desc: "A home healthcare management app aimed at simplifying sample collection, providing easy lab access, and ensuring quick test results for aging adults and individuals with disabilities..",
  },
  {
    id: 3,
    title: "Riverine",
    img: "/riverine.png",
    desc: "A river management application to allow users to participate in river management campaigns and also track events happening around and be an active member to participate to clean rivers!",
  },
  {
    id: 4,
    title: "TEDxPICT Blogs Website",
    img: "/tedxpict.png",
    desc: "Collaborated as a UI/UX Designer for TEDxPICT Blogs, contributing to the creation of innovative website interfaces using Figma.",
  },
  {
    id: 5,
    title: "Lemon Tree(Freelance UI/UX)",
    img: "/lemontree.png",
    desc: "Worked as a Freelance UI/UX designer, Lemon Tree is a BTC (Bitcoin) Price Prediction Website.",
  },
 
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
        <a href="https://www.figma.com/design/T1jv1F402P64CoVHUX2oM5/Capture-UI?node-id=1-3&t=KwZZUHeNw8BZCu1f-0" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
        <a href="https://www.behance.net/gallery/203463941/Capture-A-Disposable-Camera-App" target="_blank" rel="noopener noreferrer">
          <button>Case Study</button>
        </a>
      </>
    )
  }
  else if (item.id === 2) {
    buttons = (
      <>
        <a href="https://www.figma.com/design/clAtLN9CPBoh9z4gOb9ALE/ConvenientCare?node-id=0-1&t=xBgAZyY1hl7k1MIT-0" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
        <a href="https://medium.com/@riyawani26/convenientcare-app-design-ui-ux-case-study-872c42865602" target="_blank" rel="noopener noreferrer">
          <button>View Case Study</button>
        </a>
      </>
    )
  }
  else if (item.id === 3)
  { 
    buttons = (
      <>
         <a href="https://www.figma.com/design/t7Z1gN3r4Td718wHUfrwnV/Frostbyte-Designathon?node-id=0-1&t=Fgb4kDjtJyJTtGvn-0" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
        <a href="https://www.behance.net/gallery/194022283/Riverine-UIUX-Case-Study" target="_blank" rel="noopener noreferrer">
          <button>View Case Study</button>
        </a>
       
      </>
    )  
  }
  else if (item.id === 4)
  {
    buttons = (
      <>
        <a href="https://www.figma.com/design/6Hfup5NKLlbXtJLWd5sPKN/Tedxpict-blogs-website?node-id=0-1&t=Z5Kqv622ptEJ5B3l-0" target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
        <a href="https://medium.com/@riyawani26/tedxpict-blogs-website-ui-ux-case-study-bf389410b35a" target="_blank" rel="noopener noreferrer">
          <button>View Case Study</button>
        </a>
      </>
    )
  }
  else if (item.id === 5)
    {
      buttons = (
        <>
          <a href="https://www.figma.com/file/vqxFLKWe16zi9bmX2d3onu/Lemon-Tree?type=design&node-id=0-1&mode=design&t=RdANscuMpqa64tjT-0" target="_blank" rel="noopener noreferrer">
            <button>View Project</button>
          </a>
        </>
      )
      }
  

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer">
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
    <div className="portfolio" >
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
    
  );
};

export default Portfolio;
