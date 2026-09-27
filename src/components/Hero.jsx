import Button from "./Button";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="px-2 py-1 text-[#F5F2EA] h-screen flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-10 px-10 py-8 text-center">
        <h1 className="text-3xl md:text-6xl tracking-wider">
          Find Products you love.
        </h1>
        <h2 className="text-2xl md:text-4xl italic tracking-widest">
          Simple. Affordable. Quality.
        </h2>
        <Button text={"Show Now"} />
      </div>
    </section>
  );
};

export default Hero;
