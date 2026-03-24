import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import CartDropdown from "./CartDropdown";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Collections");
  const { cartCount } = useCart();

  const navLinks = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <>
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-0 h-20 flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-6 md:gap-16">
            {/* Hamburger (Mobile) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden"
              aria-label="Open menu"
            >
              <img src="/images/icon-menu.svg" alt="menu" />
            </button>

            {/* Logo */}
            <h1 className="text-2xl font-bold tracking-tight cursor-pointer">sneakers</h1>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-8 text-gray-500">
              {navLinks.map((link) => (
                <div key={link} className="relative group">
                  <a
                    href="#"
                    onClick={() => setActiveTab(link)}
                    className={`transition-colors cursor-pointer ${
                      activeTab === link ? "text-black" : "hover:text-black"
                    }`}
                  >
                    {link}
                  </a>
                  {/* Underline */}
                  <span
                    className={`absolute bottom-[-8px] left-0 w-full h-[3px] bg-orange-500 transition-all duration-300
                      ${activeTab === link ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} 
                      origin-left`}
                  />
                </div>
              ))}
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
              <img src="/images/icon-cart.svg" alt="cart" />
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
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu onClose={() => setMenuOpen(false)} activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
        {cartOpen && <CartDropdown onClose={() => setCartOpen(false)} />}
      </AnimatePresence>
    </>
  );
}