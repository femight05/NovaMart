import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import ShopByCategory from "./components/ShopByCategory";
import WhyShopWithUs from "./components/WhyShopWithUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <ShopByCategory />
      <WhyShopWithUs />
    </div>
  );
};

export default App;
