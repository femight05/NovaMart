import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import ShopByCategory from "./components/ShopByCategory";
import WhyShopWithUs from "./components/WhyShopWithUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <ShopByCategory />
      <WhyShopWithUs />
      <Footer />
    </div>
  );
};

export default App;
