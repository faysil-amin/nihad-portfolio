import Image from "next/image";
import Banner from "./Component/Banner";
import About from "./Component/About";
import SkillsSection from "./Component/SkillsSection";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <SkillsSection></SkillsSection>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}
