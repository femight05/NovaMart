import Button from "../components/Button";

const OrderSummary = ({ cartItems }) => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.08;

  return (
    <div className="flex flex-col gap-8 border-b py-2">
      <h1 className="text-xl text-center font-semibold italic md:text-2xl">
        ORDER
      </h1>
      <div className="flex flex-row gap-2 justify-between">
        <h2 className="font-bold">Subtotal:</h2>
        <p className="font-semibold">${subtotal.toFixed(2)}</p>
      </div>
      <div className="flex flex-row gap-2 justify-between">
        <h2 className="font-bold">Tax:</h2>
        <p className="font-semibold">${tax.toFixed(2)}</p>
      </div>
      <div className="flex flex-row gap-2 justify-between">
        <h2 className="font-bold">Total:</h2>
        <p className="font-semibold">${(subtotal + tax).toFixed(2)}</p>
      </div>
      <Button text={"Checkout"} />
    </div>
  );
};

export default OrderSummary;
