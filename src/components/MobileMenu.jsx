import { motion } from "framer-motion";

export default function MobileMenu({ onClose }) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black z-40"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween" }}
        className="fixed top-0 left-0 w-2/3 max-w-xs h-full bg-white z-50 p-6"
      >
        <button onClick={onClose} className="mb-10">
          <img src="/images/icon-close.svg" alt="Close menu" />
        </button>

        <nav className="flex flex-col gap-6 font-bold text-lg">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </motion.div>
    </>
  );
}