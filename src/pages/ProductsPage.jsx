import ProductCard from "../components/ProductCard";
import products from "../data/product.json";

const ProductsPage = () => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 sm:gap-8 md:gap-10 ">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          productImage={product.image}
          productName={product.name}
          productPrice={product.price}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
