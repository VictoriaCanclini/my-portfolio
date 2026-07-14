import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { fraunces, inter } from "./fonts";
import "../styles/globals.css";

export const metadata = {
  title: "Victoria Canclini — Desarrolladora Full Stack",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
};

export default RootLayout;
