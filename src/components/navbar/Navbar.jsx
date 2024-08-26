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
          <a href="/#Home">
            <img src="/Rlogo.png" alt=""/>
          </a> 
        </motion.span>
        <div className="social">
          <a target="_blank" href="https://www.linkedin.com/in/riya-wani-114672229/">
            <img src="/linkedin.png" alt="" />
          </a>
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
          <a target="_blank" href="https://drive.google.com/file/d/1TcTDJ0K8hP2ZFAauLQ3bSGMNIxv4tB2m/view?usp=sharing">
            <h3>RESUME</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
