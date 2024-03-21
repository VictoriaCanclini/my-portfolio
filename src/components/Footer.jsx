import {
  Discord,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@/common/icons";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Victoria Portfolio</p>
        <div className="social_icons">
          <a
            href="https://twitter.com/vikicanclini"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://github.com/VictoriaCanclini"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
          <a
            href="http://www.linkedin.com/in/victoriacanclini"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
          <a
            href="https://www.instagram.com/victoria.canclini"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href=""
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://discord.com/users/victoriacanclini0753"
            aria-label="Discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Discord />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
