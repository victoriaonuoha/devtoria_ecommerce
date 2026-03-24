import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import CartDropdown from "./CartDropdown";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-0 h-20 flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-16">
            {/* Hamburger (Mobile) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden"
              aria-label="Open menu"
            >
              <img src="/images/icon-menu.svg" alt="" />
            </button>

            {/* Logo */}
            <h1 className="text-2xl font-bold tracking-tight">sneakers</h1>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-8 text-gray-500">
              <a href="#" className="hover:text-black transition">
                Collections
              </a>
              <a href="#" className="hover:text-black transition">
                Men
              </a>
              <a href="#" className="hover:text-black transition">
                Women
              </a>
              <a href="#" className="hover:text-black transition">
                About
              </a>
              <a href="#" className="hover:text-black transition">
                Contact
              </a>
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6 relative">
            {/* Cart */}
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className="relative"
              aria-label="Cart"
            >
              <img src="/images/icon-cart.svg" alt="" />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Avatar */}
            <img
              src="/images/image-avatar.png"
              alt="User avatar"
              className="w-10 h-10 rounded-full border-2 border-transparent hover:border-orange-500 cursor-pointer transition"
            />

            <AnimatePresence>{cartOpen && <CartDropdown />}</AnimatePresence>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
