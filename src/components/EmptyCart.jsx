import Button from "../components/Button";
import { shoppingCart } from "lucide-react";
const EmptyCart = () => {
  return (
    <div>
      <div className="flex justify-center py-10">
        <shoppingCart className="w-16 h-16" />
      </div>
      <h1 className="text-2xl md:text-4xl text-center py-10">
        Your Cart is Empty
      </h1>
      <p>Looks like you haven't added anything to your cart yet.</p>
      <div className="flex justify-center py-10">
        <Button text={"Start Shopping"} />
      </div>
    </div>
  );
};

export default EmptyCart;
