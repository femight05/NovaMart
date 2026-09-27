import Button from "./Button";

const ProductCard = ({ productImage, productName, productPrice }) => {
  return (
    <section id="product-card" className="p-4 border rounded-xl">
      <div className="bg-gray-200 h-48 ">
        <img
          src={productImage}
          alt={productName}
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{productName}</h3>

        <p className="text-xl font-bold">${productPrice.toFixed(2)}</p>
        <Button text={"Add"} />
      </div>
    </section>
  );
};

export default ProductCard;
