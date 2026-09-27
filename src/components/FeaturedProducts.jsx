import ProductCard from "./ProductCard";
import products from "../data/product.json";

const FeaturedProducts = () => {
  return (
    <section className="px-4 py-8 md:px-6 md:py-6 lg:px-16 lg:py-8">
      <h2 className="text-4xl font-bold text-center mb-10 tracking-wider">
        Featured Products
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 sm:gap-8 md:gap-10 ">
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            productImage={product.image}
            productName={product.name}
            productPrice={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
