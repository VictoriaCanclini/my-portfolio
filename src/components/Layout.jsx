"use client";

import Navbar from "./navbar";
import Footer from "./footer";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathname = usePathname();
  const home = pathname !== "/";

  return (
    <>
      {home && <Navbar />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
