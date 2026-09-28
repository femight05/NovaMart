import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import ShopByCategory from "./components/ShopByCategory";
import WhyShopWithUs from "./components/WhyShopWithUs";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <ShopByCategory />
      <WhyShopWithUs />
      <Footer />
    </>
  );
};

export default HomePage;
