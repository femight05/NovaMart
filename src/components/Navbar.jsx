const Navbar = () => {
  return (
    <section className="px-2 py-2  bg-gray-100">
      <div className="py-3 px-5 flex flex-row justify-evenly gap-10 items-center rounded-2xl">
        <h2 className="text-xl md:text-3xl font-bold">Logo</h2>
        <div className="hidden md:block">
          <input
            type="search"
            name="search"
            id="search item"
            placeholder="Search your favourite products..."
            className="border rounded-full w-96 h-10 px-4 py-2 bg-white outline-none"
          />
        </div>
        <nav className="flex gap-10 md:text-2xl">
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">About</a>
          <a href="#">Cart</a>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
