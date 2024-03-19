import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">Portfolio de Victoria</Link>
      </div>
      <a
        href="https://drive.google.com/file/d/12DF7E6KQDnzHYsbcTeZAoZx0zkoK_isO/view?usp=drive_link"
        className="cta-btn"
        target="_blank"
      >
        CV
      </a>
    </div>
  );
};

export default Navbar;
