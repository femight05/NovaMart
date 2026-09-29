import { Truck, ShieldCheck, RotateCcw } from "lucide-react";

const WhyShopWithUs = () => {
  return (
    <section
      id="WhyUs"
      className="px-4 py-8 md:px-6 md:py-6 lg:px-16 lg:py-6 bg-gray-50/45"
    >
      <h2 className="why-us-heading text-xl md:text-3xl font-bold text-center tracking-wider my-10">
        Why Shop With Us?
      </h2>
      <div className="why-us-grid flex flex-col md:flex-row justify-evenly items-center gap-10">
        <div className="why-us-benefit flex flex-col justify-center items-center gap-5">
          <Truck className="why-us-icon h-8 w-8 md:w-10 md:h-10" />
          <h3 className="text-xl font-semibold">Fast Delivery</h3>
          <p className="text-center">Get your Order delivered fast.</p>
        </div>
        <div className="why-us-benefit flex flex-col justify-center items-center gap-5">
          <ShieldCheck className="why-us-icon h-8 w-8 md:w-10 md:h-10 " />
          <h3 className="text-xl font-semibold">Secured Payment</h3>
          <p className="text-center text-wrap">Your payment is safe with us.</p>
        </div>
        <div className="why-us-benefit flex flex-col justify-center items-center gap-5">
          <RotateCcw className="why-us-icon h-8 w-8 md:w-10 md:h-10" />
          <h3 className="text-xl font-semibold">Easy Returns</h3>
          <p className="text-center text-wrap">
            We make returns simple and hassle-free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyShopWithUs;
