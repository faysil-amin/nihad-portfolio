import Image from "next/image";
import Banner from "./Component/Banner";
import About from "./Component/About";
import SkillsSection from "./Component/SkillsSection";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <SkillsSection></SkillsSection>
    </div>
  );
}
