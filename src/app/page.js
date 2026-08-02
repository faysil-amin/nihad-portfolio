import Image from "next/image";
import Banner from "./Component/Banner";
import About from "./Component/About";
import SkillsSection from "./Component/SkillsSection";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <SkillsSection></SkillsSection>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
