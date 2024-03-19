import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">Porfolio</Link>
      </div>
      <a
        href="https://drive.google.com/file/d/12DF7E6KQDnzHYsbcTeZAoZx0zkoK_isO/view?usp=drive_link"
        className="cta-btn"
        target="_blank"
      >
        cv
      </a>
    </div>
  );
};

export default Navbar;
