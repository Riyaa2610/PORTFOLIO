import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
            Riya Wani
          {/* <div>
            <img src="/riya-logo.png" alt=""/>
          </div> */}
        </motion.span>
        <div className="social">
          <a target="_blank" href="https://github.com/Riyaa2610">
            <img src="/github.png" alt="" />
          </a>
          <a target="_blank" href="https://www.instagram.com/riyawani26/">
            <img src="/instagram.png" alt="" />
          </a>
          <a target="_blank" href="https://www.behance.net/riyawani26">
            <img src="/behance.png" alt="" />
          </a>
          <a target="_blank" href="https://medium.com/@riyawani26">
            <img src="/medium.png" alt="" />
          </a>
          <a target="_blank" href="https://drive.google.com/file/d/1AFRCgd1EnUIX1y7tLgxvFmVr1BPwDvav/view?usp=sharing">
            <h3>RESUME</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
