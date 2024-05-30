"use client";

import { Burguer, DownloadCV, Home } from "@/common/icons";
import Link from "next/link";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "./themeSwitcher";

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
        <div className="nav-container-mobile">
          <div className="logo">
            {/* <Link href="/"> */}
            <a href="#hero">
              <span>
                <Home />
              </span>
            </a>
            {/* </Link> */}
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
                    <a href="#about">Acerca de mí</a>
                  </li>
                  <li onClick={closeMenu}>
                    <a href="#skills">Habilidades</a>
                  </li>
                  <li onClick={closeMenu}>
                    <a href="#projects">Proyectos</a>
                  </li>
                  <li onClick={closeMenu}>
                    <a href="#contact">Contacto</a>
                  </li>
                  <a
                    href="https://drive.google.com/file/d/1sji27GuIC0UcXfZ5M7XGVfaSnuS62SFd/view?usp=drive_link"
                    target="_blank"
                  >
                    <li onClick={closeMenu}>
                      <DownloadCV color="#c9a4e8" />
                    </li>
                  </a>
                  <li onClick={closeMenu}>
                    <ThemeSwitcher />
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      ) : (
        // modo Escritorio
        <div className="nav-container">
          <div className="logo">
            {/* <Link href="/"> */}
            <a href="#hero">
              <span>Victoria Canclini</span>
            </a>
            {/* </Link> */}
          </div>
          <div className="horizontal-list logo">
            <ul>
              <li>
                <a href="#about">Acerca de mí</a>
              </li>
              <li>
                <a href="#skills">Habilidades</a>
              </li>
              <li>
                <a href="#projects">Proyectos</a>
              </li>
              <li>
                <a href="#contact">Contacto</a>
              </li>
              <a
                href="https://drive.google.com/file/d/1sji27GuIC0UcXfZ5M7XGVfaSnuS62SFd/view?usp=drive_link"
                target="_blank"
              >
                <li className="viki">
                  <DownloadCV color="#c9a4e8" />
                </li>
              </a>
              <li>
                <ThemeSwitcher />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
