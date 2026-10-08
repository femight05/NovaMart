import Button from "./Button";
import { useState } from "react";
import { useCart } from "../context/useCart";

const ProductCard = ({ product }) => {
  const [addQuantity, setAddQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <article
      id="product-card"
      className="featured-product-card group overflow-hidden rounded-[28px] bg-gradient-to-b from-white via-slate-50 to-slate-100 p-3 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
    >
      <div className="relative overflow-hidden rounded-[22px] bg-slate-200">
        <div className="absolute left-3 top-3 z-10 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700 shadow-sm backdrop-blur-sm">
          New
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="featured-product-image h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-2 pb-2 pt-4">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-lg font-bold tracking-tight text-slate-900">
            {product.name}
          </h3>
          <span className="rounded-full bg-red-50 px-2 py-1 text-sm font-semibold text-red-600">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1.5 shadow-sm">
            <label
              htmlFor={`quantity-${product.id}`}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500"
            >
              Qty
            </label>
            <input
              id={`quantity-${product.id}`}
              type="number"
              min="1"
              value={addQuantity}
              onChange={(event) =>
                setAddQuantity(Math.max(1, Number(event.target.value) || 1))
              }
              className="w-12 border-none bg-transparent text-center text-sm font-semibold text-slate-800 outline-none"
            />
          </div>

          <Button text="Add" onClick={() => addToCart(product, addQuantity)} />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
