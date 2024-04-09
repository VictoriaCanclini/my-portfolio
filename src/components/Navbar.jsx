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
        <div className="nav-container">
          <div className="logo">
            <Link href="/">
              <span>
                <Home />
              </span>
            </Link>
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
                    <Link href="about">Acerca de mí</Link>
                  </li>
                  <Link href="skills">
                    <li onClick={closeMenu}>Habilidades</li>
                  </Link>
                  <Link href="projects">
                    <li onClick={closeMenu}>Proyectos</li>
                  </Link>
                  <Link href="contact">
                    <li onClick={closeMenu}>Contacto</li>
                  </Link>
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
            <Link href="/">
              <span>Victoria Canclini</span>
            </Link>
          </div>
          <div className="horizontal-list logo">
            <ul>
              <Link href="about">
                <li>Acerca de mí</li>
              </Link>
              <Link href="skills">
                <li>Habilidades</li>
              </Link>
              <Link href="projects">
                <li>Proyectos</li>
              </Link>
              <Link href="contact">
                <li>Contacto</li>
              </Link>
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
