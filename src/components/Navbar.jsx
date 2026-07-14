"use client";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-profile">
          <a href="#hero">
            <span className="nav-name nav-name-full">Victoria Canclini</span>
            <span className="nav-name nav-name-short">VC</span>
          </a>
        </div>

        <ul className={`side-nav ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#about" onClick={closeMenu}>
              <span className="dot"></span>Sobre mí
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              <span className="dot"></span>Habilidades
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              <span className="dot"></span>Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              <span className="dot"></span>Contacto
            </a>
          </li>
        </ul>

        <div className="nav-right">
          <a
            className="side-cv"
            href="https://drive.google.com/file/d/1wdsXAlS6wqgK6z7EPYfAjiVtJZu78DAq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar CV
          </a>
          <button
            className="menu-toggle"
            aria-label="Abrir menú"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
