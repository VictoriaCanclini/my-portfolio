"use client";

import Image from "next/image";
import _document from "next/document";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/images/vic.jpg"
        className="profile-img"
        width={300}
        height={300}
        alt="Joe's personal headshot"
      />
      <div className="hero-text">
        <h1>Hola! soy Victoria 👋</h1>
        <p>Una desalloradora web Full Stack y Contadora pública.</p>
        <div className="social-icons">
          <a
            href="https://twitter.com/vikicanclini"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/VictoriaCanclini"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="http://www.linkedin.com/in/victoriacanclini"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
