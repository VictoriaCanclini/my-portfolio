import { Burguer, Download } from "@/common/icons";
import Link from "next/link";
import "../styles/globals.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo text-[#c9a4e8]">
        <Link href="/" className="text-[#c9a4e8]">
          <span className="text-[#c9a4e8]">Portfolio VC</span>
        </Link>
      </div>
      <div className="horizontal-list">
        <ul>
          <li>
            <a href="/about">Acerca de mi</a>
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

      {/* <button className="cta-btn">
        <Burguer />
      </button> */}
    </div>
  );
};

export default Navbar;
