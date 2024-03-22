import { Download } from "@/common/icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo text-[#c9a4e8]">
        <Link href="/" className="text-[#c9a4e8]">
          <span className="hidden-mobile">Portfolio VC</span>
          {/* <span className="sm: hidden">Portfolio Victoria Canclini</span> */}
        </Link>
      </div>
      <a
        href="https://drive.google.com/file/d/12DF7E6KQDnzHYsbcTeZAoZx0zkoK_isO/view?usp=drive_link"
        className="cta-btn"
        target="_blank"
      >
        <Download />
      </a>
    </div>
  );
};

export default Navbar;
