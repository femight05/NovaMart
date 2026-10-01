import Button from "../components/Button";

const OrderSummary = ({ item }) => {
  return (
    <div className="flex flex-col gap-4 border-b py-2">
      <h1 className="text-xl text-center md:text-2xl">ORDER</h1>
      <div className="flex flex-col gap-2">
        <h2>Subtotal</h2>
        <p>${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Tax</h2>
        <p>${(item.price * item.quantity * 0.08).toFixed(2)}</p>
      </div>
      <div className="flex flex-col gap-2">
        <h2>Total</h2>
        <p>${(item.price * item.quantity * 1.08).toFixed(2)}</p>
      </div>
      <Button text={"Checkout"} />
    </div>
  );
};

export default OrderSummary;
