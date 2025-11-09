import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/img/logo.svg"; 
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); 

  return (
    <nav className="navbar">
      <div className="nav-container">
      
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#mission" onClick={closeMenu}>Mission</a></li>
          <li><a href="#product" onClick={closeMenu}>Product</a></li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              <button className="contact-btn">Contact</button>
            </a>
          </li>
        </ul>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
