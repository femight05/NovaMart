const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <section className="cart-item flex gap-4 items-center border-b py-2">
      <div>
        <img src={item.image} alt={item.name} />
      </div>
      <div>
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
        <div>
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
