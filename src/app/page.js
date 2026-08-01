import Image from "next/image";
import Banner from "./Component/Banner";
import About from "./Component/About";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
    </div>
  );
}
