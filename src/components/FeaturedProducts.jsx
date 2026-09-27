import ProductCard from "./ProductCard";
import products from "../data/product.json";

const FeaturedProducts = () => {
  return (
    <section className="">
      <h2 className="text-3xl font-bold">Featured Products</h2>
      <div className="flex gap-8">
        {products.map((product) => (
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
