import Image from "next/image";
import { Twitter, GitHub, LinkedIn } from "@/common/icons";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/images/vic.jpg"
        className="profile-img"
        width={300}
        height={300}
        alt="personal"
        priority={true}
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
            <Twitter color="#808080" />
          </a>
          <a
            href="https://github.com/VictoriaCanclini"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub color="#808080" />
          </a>
          <a
            href="http://www.linkedin.com/in/victoriacanclini"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn color="#808080" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
