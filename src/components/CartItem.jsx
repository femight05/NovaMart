const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <section className="cart-item flex gap-8 md:gap-16 items-center border-b-[0.1px] border-b-gray-300 md:px-10 py-2">
      <div>
        <img
          src={item.image}
          alt={item.name}
          className="border rounded-2xl hidden sm:block sm:size-32 md:w-40 md:h-40 object-cover"
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
        <button
          onClick={() => onRemove(item.id)}
          className="mt-3 inline-flex gap-1 cursor-pointer items-center justify-center rounded-xl border px-4 py-1 transition duration-300 ease-out hover:-translate-y-1 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/30 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
        >
          Remove
        </button>
      </div>
    </section>
  );
};

export default CartItem;
