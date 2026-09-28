import { ShoppingCartIcon, SearchIcon, ShoppingBag } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="px-2 py-2  bg-gray-100">
      <div className="py-3 px-5 flex flex-row justify-between md:justify-evenly gap-10 items-center rounded-2xl">
        <a href="/" className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5 md:h-7 md:w-7 text-blue-950" />
          <span className="text-sm md:text-2xl font-bold text-blue-950">
            NovaMart
          </span>
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
        <nav className="hidden md:flex gap-5 md:gap-10 md:text-2xl">
          <Link to="/" className="text-sm md:text-xl">
            Home
          </Link>
          <Link to="/product" className="text-sm md:text-xl">
            Product
          </Link>
          <Link to="/contact" className="text-sm md:text-xl">
            Contact
          </Link>
          <ShoppingCartIcon className="w-6 h-6 md:w-7 md:h-7" />
        </nav>
        <button
          className="md:hidden absolute top-4 right-4 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMobileMenuOpen && <MobileMenu />}
    </section>
  );
};

export default Navbar;
