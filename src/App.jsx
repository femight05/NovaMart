import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import ShopByCategory from "./components/ShopByCategory";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <ShopByCategory />
    </div>
  );
};

export default App;
