import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  // Use useMotionValue and useSpring for calibrated animation
  useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position.x, position.y]);

  const springConfig = { damping: 20, stiffness: 300 };
  
  return (
    <motion.div
      className="cursor"
      style={{
        translateX: useSpring(x, springConfig),
        translateY: useSpring(y, springConfig),
      }}
    ></motion.div>
  );
};

export default Cursor;
