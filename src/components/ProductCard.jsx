import Button from "./Button";
import { useState } from "react";
import { useCart } from "../context/useCart";

const ProductCard = ({ product }) => {
  const [addQuantity, setAddQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <section
      id="product-card"
      className="featured-product-card p-4 border rounded-xl"
    >
      <div className="bg-gray-200 h-48 overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="featured-product-image h-full w-full object-cover rounded-xl"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>

        <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
        <div className="mt-4 flex justify-content items-center gap-2 md:gap-5">
          <label
            htmlFor={`quantity-${product.id}`}
            className="text-sm font-medium text-center mt-3"
          >
            Qty:
          </label>
          <input
            id={`quantity-${product.id}`}
            type="number"
            min="1"
            value={addQuantity}
            onChange={(event) =>
              setAddQuantity(Math.max(1, Number(event.target.value) || 1))
            }
            className="w-16 rounded mt-6 border px-2 py-1"
          />
          <Button text="Add" onClick={() => addToCart(product, addQuantity)} />
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
