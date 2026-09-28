const WhyShopWithUs = () => {
  return (
    <section id="WhyUs">
      <h2 className="text-3xl font-bold text-center my-10">
        Why Shop With Us?
      </h2>
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src="/images/fast-delivery.png"
            alt="Fast Delivery"
            className="w-20 h-20"
          />
          <h3>Fast Delivery</h3>
          <p>Get your Order delivered quickly and efficiently</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src="/images/quality-products.png"
            alt="Quality Products"
            className="w-20 h-20"
          />
          <h3>Quality Products</h3>
          <p>We offer only the best quality products for our customers</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            src="/images/customer-support.png"
            alt="Customer Support"
            className="w-20 h-20"
          />
          <h3>Customer Support</h3>
          <p>Our dedicated support team is always ready to help you</p>
        </div>
      </div>
    </section>
  );
};

export default WhyShopWithUs;
