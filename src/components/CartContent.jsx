import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import EmptyCart from "./EmptyCart";
import { useCart } from "../context/useCart";

const CartContent = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div>
      <h1 className="text-2xl md:text-4xl text-center py-10 font-semibold">
        Your Cart
      </h1>
      <div className="flex flex-col md:flex-row gap-30 px-20">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="text-xl text-center md:text-2xl font-bold italic">
            {cartItems.length > 1 ? "Products" : "Product"}
          </h2>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeFromCart}
            />
          ))}
        </div>
        <div className="w-full md:w-1/3">
          <OrderSummary cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default CartContent;
