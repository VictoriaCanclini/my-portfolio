"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { roboto } from "./fonts";
import "../styles/globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
