"use client";

import { Burguer, Download, Moon, Sun } from "@/common/icons";
import Link from "next/link";
import "../styles/globals.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkWindowSize();

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* modo mobile */}
      {isMobile ? (
        <div className="nav-container">
          <div className="logo">
            <Link href="/">
              <span>VC</span>
            </Link>
          </div>
          <div>
            <Moon color="#c9a4e8" />
            {/* <Sun color="#c9a4e8" /> */}
          </div>
          <div className="cta-btn">
            <div onClick={toggleMenu}>
              <Burguer />
            </div>
          </div>
          {isMenuOpen && (
            <div className="menu-container">
              <div className="vertical-list">
                <ul>
                  <li onClick={closeMenu}>
                    <Link href="about">Acerca de mi</Link>
                  </li>
                  <Link href="skills">
                    <li onClick={closeMenu}>Habilidades</li>
                  </Link>
                  <Link href="projects">
                    <li onClick={closeMenu}>Proyectos</li>
                  </Link>
                  <a href="mailto:vikicanclini@gmail.com">
                    <li onClick={closeMenu}>Contacto</li>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/12DF7E6KQDnzHYsbcTeZAoZx0zkoK_isO/view?usp=drive_link"
                    target="_blank"
                  >
                    <li onClick={closeMenu}>
                      <Download color="#c9a4e8" />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          )}
        </div>
      ) : (
        // modo Escritorio
        <div className="nav-container">
          <div className="logo">
            <Link href="/">
              <span>Victoria Canclini</span>
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
              <li>
                <Moon color="#c9a4e8" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
