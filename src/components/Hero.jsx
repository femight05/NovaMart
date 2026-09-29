import Button from "./Button";
import hero from "../assets/hero.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      style={{
        "--hero-background": `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${hero})`,
      }}
      className="hero-scene-enter relative isolate flex h-screen items-center justify-center overflow-hidden rounded-xs px-4 py-1 text-[#F5F2EA]"
    >
      <div className="relative z-10 flex flex-col items-center gap-10 px-10 py-8 text-center">
        <h1 className="hero-title-enter text-3xl md:text-6xl tracking-wider">
          Find Products You Love.
        </h1>
        <h2 className="hero-subtitle-enter text-2xl md:text-4xl italic tracking-widest">
          Simple. Affordable. Quality.
        </h2>
        <div className="hero-cta-enter">
          <Button text={"Show Now"} icon={<ArrowRight className="w-6 h-5" />} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
