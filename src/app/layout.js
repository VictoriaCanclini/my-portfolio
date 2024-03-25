"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
};

export default RootLayout;
