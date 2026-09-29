import ProductCard from "../components/ProductCard";
import products from "../data/product.json";
import Button from "../components/Button";

const ProductsPage = () => {
  return (
    <section className="px-6 py-6 bg-gray-50/45 flex flex-col items-center">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 sm:gap-8 md:gap-14 ">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productImage={product.image}
            productName={product.name}
            productPrice={product.price}
          />
        ))}
      </div>
      <Button text={"More Products"} />
    </section>
  );
};

export default ProductsPage;
