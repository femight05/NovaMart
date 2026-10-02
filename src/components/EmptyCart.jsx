import Button from "./Button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-center py-10">
        <ShoppingCart className="w-16 h-16" />
      </div>
      <h1 className="text-2xl md:text-4xl text-center py-10">
        Your Cart is Empty
      </h1>
      <p>Looks like you haven't added anything to your cart yet.</p>
      <div className="flex justify-center py-10">
        <Button text="Start Shopping" onClick={() => navigate("/product")} />
      </div>
    </div>
  );
};

export default EmptyCart;
