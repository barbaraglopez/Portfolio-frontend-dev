import { useEffect, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../img/Animation - workingwoman.json";
import "./Homepage.css";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "../Navbar/Navbar.jsx"; 


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Homepage = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
      <div className="backgroundImage" onMouseMove={handleMouseMove}>
        <Navbar />
        <div
          className="mouseTrail"
          style={{ left: cursorPosition.x, top: cursorPosition.y }}
        ></div>
        <div
          className="cursorShadow"
          style={{
            left: cursorPosition.x - 35,
            top: cursorPosition.y - 35,
          }}
        ></div>

        <div className="contentContainer">
          <div className="image">
            <Lottie className="animation" animationData={animationData} />
          </div>
          <div className="content">
            <img
              src="../../img/BLneon-removebg-preview.png"
              className="BLretro"
            />
            <p>Desarrolladora frontend & diseñadora ux ui</p>
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              whileHover={{
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="buttonStart"
            >
              Sobre Mi
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </div>
        </div>

        {/* Efecto de fondo */}
        <motion.section
          style={{
            backgroundImage,
          }}
          className="haloEffect"
        ></motion.section>
      </div>
    </>
  );
};

export default Homepage;
