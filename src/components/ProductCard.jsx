const ProductCard = ({
  productImage,
  productName,
  productDescription,
  productPrice,
}) => {
  return (
    <section id="product-card" className="p-4 border rounded-xl">
      <div className="bg-gray-200 h-48 flex items-center justify-center">
        <span className="text-gray-500">{productImage}</span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{productName}</h3>
        <p className="text-gray-600">{productDescription}</p>
        <p className="text-xl font-bold">${productPrice.toFixed(2)}</p>
      </div>
    </section>
  );
};

export default ProductCard;
