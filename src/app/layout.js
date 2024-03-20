// import { Inter } from "next/font/google";
// import "../styles/globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="select-none">
//         <Navbar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
