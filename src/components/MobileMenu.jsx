import { ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";

const MobileMenu = ({ itemCount, onNavigate }) => {
  return (
    <nav className="navbar-mobile-menu-enter flex flex-col items-start gap-8 mt-2 px-5 md:gap-10 md:text-2xl backdrop-blur-3xl bg-white/70 rounded-2xl py-4 md:py-6">
      <Link to="/" onClick={onNavigate} className="text-2xl hover:text-red-500">
        Home
      </Link>
      <Link
        to="/product"
        onClick={onNavigate}
        className="text-2xl hover:text-red-500"
      >
        Product
      </Link>
      <Link
        to="/about"
        onClick={onNavigate}
        className="text-2xl hover:text-red-500"
      >
        About
      </Link>
      <Link
        to="/contact"
        onClick={onNavigate}
        className="text-2xl hover:text-red-500"
      >
        Contact
      </Link>
      <Link
        to="/cart"
        onClick={onNavigate}
        className="relative hover:text-red-500"
        aria-label={`Cart, ${itemCount} items`}
      >
        <ShoppingCartIcon className="w-8 h-7 md:w-7 md:h-7" />
        {itemCount > 0 && (
          <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1.5 text-xs text-white">
            {itemCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default MobileMenu;
