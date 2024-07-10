// Carousel.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./Carousel.scss";

const images = [
    "1.jpg",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.png",
    
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="carousel-container">
      <h1 className="carousel-title">Creative Work</h1>
      <div className="carousel" ref={carouselRef}>
        <motion.div
          className="carousel-inner"
          initial={{ x: 0 }}
          animate={{ x: -currentIndex * 100 + "%" }} // Change to percentage for smoother transitions
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {images.map((image, index) => (
            <motion.div className="carousel-item" key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
