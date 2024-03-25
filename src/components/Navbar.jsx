"use client";

import { Burguer, Download } from "@/common/icons";
import Link from "next/link";
import "../styles/globals.css";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("asdfsadf");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          <span>Portfolio VC</span>
        </Link>
      </div>
      <div className="horizontal-list">
        <ul>
          <Link href="about">
            <li>Acerca de mi</li>
          </Link>
          <Link href="skills">
            <li>Habilidades</li>
          </Link>
          <Link href="projects">
            <li>Proyectos</li>
          </Link>
          <a href="mailto:vikicanclini@gmail.com">
            <li>Contacto</li>
          </a>
          <a
            href="https://drive.google.com/file/d/12DF7E6KQDnzHYsbcTeZAoZx0zkoK_isO/view?usp=drive_link"
            target="_blank"
          >
            <li className="viki">
              <Download color="#c9a4e8" />
            </li>
          </a>
        </ul>
      </div>

      <div className="cta-btn">
        <button onClick={toggleMenu}>
          <Burguer />
        </button>
      </div>
      {isMenuOpen && (
        <div className="vertical-list">
          <ul>
            <li>
              <Link href="skills">Acerca de mi </Link>
            </li>
            <Link href="skills">
              <li>Habilidades</li>
            </Link>
            <Link href="projects">
              <li>Proyectos</li>
            </Link>
            <a href="mailto:vikicanclini@gmail.com">
              <li>Contacto</li>
            </a>
            <a
              href="https://drive.google.com/file/d/12DF7E6KQDnzHYsbcTeZAoZx0zkoK_isO/view?usp=drive_link"
              target="_blank"
            >
              <li>
                <Download color="#c9a4e8" />
              </li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
