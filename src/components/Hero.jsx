import Button from "./Button";

const Hero = () => {
  return (
    <section className="px-2 py-1">
      <div className="flex flex-col-reverse sm:flex-row gap-8 justify-between px-10 py-3 mt-8">
        <div className="flex flex-col flex-1 gap-6 items-start">
          <h1 className="text-3xl md:text-5xl">Find Products you love</h1>
          <h2 className="text-2xl md:text-3xl">Simple. Affordable. Quality.</h2>
          <Button text={"Show Now"} />
        </div>
        <div>
          <img src="" alt="heroimage" className="pr-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
