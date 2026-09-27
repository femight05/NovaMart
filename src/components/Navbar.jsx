const Navbar = () => {
  return (
    <section className="px-2 py-2">
      <div className="py-4 px-5 flex flex-row justify-between items-center border-2 rounded-2xl">
        <h2 className="text-xl md:text-3xl">Logo</h2>
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
