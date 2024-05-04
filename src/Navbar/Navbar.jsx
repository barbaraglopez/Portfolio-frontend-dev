import { useState } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src="../../img/logoBLnegro.png" className="logo" alt="Logo" />
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          {items.map((item, index) => (
            <motion.button
              key={index}
              style={{
                border: "1px solid rgba(255, 192, 203, 0.5)",
                padding: "8px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "8px",
                boxShadow: "0 0 10px rgba(255, 192, 203, 0.5)",
                margin: "5px",
              }}
              whileHover={{
                scale: 1.015,
                border: "1px solid rgba(0, 0, 255, 0.8)",
                boxShadow: "0 0 20px rgba(0, 0, 255, 0.8)", // Ajusta los valores para hacer el shadow más fuerte y expansivo
              }}
              whileTap={{
                scale: 0.985,
              }}
              className="buttonStart"
            >
              {item}
              <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          ))}
        </ul>
        <div className="navbar-toggle" onClick={handleToggle}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
