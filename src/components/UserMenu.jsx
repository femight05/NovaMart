import { useEffect, useRef, useState } from "react";
import { ChevronRight, LogOut, Package, UserRound } from "lucide-react";
import Button from "./Button";

const UserMenu = ({ details = {} }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const name = details?.name || "NovaMart shopper";
  const email = details?.email || "Welcome back";

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        aria-label={isMenuOpen ? "Close user menu" : "Open user menu"}
        aria-haspopup="true"
        aria-expanded={isMenuOpen}
        aria-controls="user-menu"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-900/15 bg-blue-950 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        OA
      </button>
      {isMenuOpen && (
        <div
          id="user-menu"
          className="absolute right-0 top-full z-[60] mt-3 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white text-sm shadow-[0_20px_50px_rgba(15,23,42,0.2)] ring-1 ring-black/5"
        >
          <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-800 px-5 py-4 text-white">
            <p className="font-semibold">{name}</p>
            <p className="mt-1 truncate text-xs text-blue-100/80">{email}</p>
          </div>
          <ul className="space-y-1 p-2 text-slate-700">
            <li className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50">
              <UserRound className="h-4 w-4 text-blue-900" />
              <span>My account</span>
              <ChevronRight className="ml-auto h-4 w-4 text-slate-400" />
            </li>
            <li className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50">
              <Package className="h-4 w-4 text-blue-900" />
              <span>My orders</span>
              <ChevronRight className="ml-auto h-4 w-4 text-slate-400" />
            </li>
          </ul>
          <div className="border-t border-slate-100 p-2">
            <Button
              text="Log Out"
              icon={<LogOut className="h-4 w-4" />}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
