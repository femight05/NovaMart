const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <section className="cart-item flex gap-16 items-center border-b px-10 py-2">
      <div>
        <img
          src={item.image}
          alt={item.name}
          className="border rounded-2xl w-40 h-40 object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-xl font-semibold">${item.price.toFixed(2)}</p>
        <div className="flex gap-2 items-center">
          <button onClick={() => onDecrease(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrease(item.id)}>+</button>
        </div>
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </section>
  );
};

export default CartItem;
