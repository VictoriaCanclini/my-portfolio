"use client";

import { Burguer, Download, Moon } from "@/common/icons";
import Link from "next/link";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
                    href="https://drive.google.com/file/d/12DF7E6KQDnzHYsbcTeZAoZx0zkoK_isO/view?usp=drive_link"
                    target="_blank"
                  >
                    <li onClick={closeMenu}>
                      <Download color="#c9a4e8" />
                    </li>
                  </a>
                  <li
                    onClick={() =>
                      setTheme(resolvedTheme === "light" ? "dark" : "light")
                    }
                  >
                    <Moon color="#c9a4e8" />
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
