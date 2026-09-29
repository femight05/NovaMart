import { ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <nav className="navbar-mobile-menu-enter flex flex-col items-start gap-8 mt-2 px-5 md:gap-10 md:text-2xl backdrop-blur-3xl bg-white/70 rounded-2xl py-4 md:py-6">
      <Link to="/" className="text-2xl hover:text-red-500">
        Home
      </Link>
      <Link to="/product" className="text-2xl hover:text-red-500">
        Product
      </Link>
      <Link to="/about" className="text-2xl hover:text-red-500">
        About
      </Link>
      <Link to="/contact" className="text-2xl hover:text-red-500">
        Contact
      </Link>
      <ShoppingCartIcon className="w-8 h-7 md:w-7 md:h-7 hover:text-red-500" />
    </nav>
  );
};

export default MobileMenu;
