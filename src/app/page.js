import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { ThemeSwitcher } from "@/components/themeSwitcher";

const Home = () => {
  return (
    <>
      {/* <ThemeSwitcher /> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
