import { ShoppingCartIcon, SearchIcon, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <section className="px-2 py-2  bg-gray-100">
      <div className="py-3 px-5 flex flex-row justify-evenly gap-10 items-center rounded-2xl">
        <a href="/" className="flex items-center gap-2">
          <ShoppingBag className="h-7 w-7 text-blue-950" />
          <span className="text-2xl font-bold text-blue-950">NovaMart</span>
        </a>
        <div className="hidden border md:flex items-center rounded-full bg-white w-96 h-10 px-4 py-2">
          <SearchIcon className="w-6 h-6 md:w-4 md:h-4 text-gray-500" />
          <input
            type="search"
            name="search"
            id="search item"
            placeholder="Search your favourite products..."
            className=" bg-white outline-none w-full h-full px-2 rounded-full text-sm md:text-base"
          />
        </div>
        <nav className="flex gap-10 md:text-2xl">
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Contact</a>
          <ShoppingCartIcon className="w-6 h-6 md:w-7 md:h-7" />
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
