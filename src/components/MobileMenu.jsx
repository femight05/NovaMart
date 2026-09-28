import { ShoppingCartIcon } from "lucide-react";

const MobileMenu = () => {
  return (
    <nav className="flex flex-col items-start gap-8 mt-2 px-5 md:gap-10 md:text-2xl backdrop-blur-3xl bg-white/70 rounded-2xl py-4 md:py-6">
      <a href="#" className="text-2xl hover:text-red-500">
        Home
      </a>
      <a href="#" className="text-2xl hover:text-red-500">
        Product
      </a>
      <a href="#" className="text-2xl hover:text-red-500">
        About
      </a>
      <a href="#" className="text-2xl hover:text-red-500">
        Contact
      </a>
      <ShoppingCartIcon className="w-8 h-7 md:w-7 md:h-7 hover:text-red-500" />
    </nav>
  );
};

export default MobileMenu;
