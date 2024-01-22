import HeroImg from "./HeroImg";
import HeroText from "./HeroText";

function Hero() {
  return (
    <main className="h-[90%] flex items-center justify-between gap-10">
      <HeroText />
      <HeroImg />
    </main>
  );
}

export default Hero;
