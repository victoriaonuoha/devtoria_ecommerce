import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function CartDropdown() {
  const { cartItem, removeFromCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="absolute right-0 top-14 w-80 bg-white shadow-xl rounded-lg z-50"
    >
      <div className="p-4 border-b font-bold">
        Cart
      </div>

      <div className="p-6">
        {!cartItem ? (
          <p className="text-center text-gray-500 font-semibold">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={cartItem.image}
                alt=""
                className="w-12 rounded-md"
              />
              <div className="flex-1 text-sm text-gray-600">
                <p>{cartItem.title}</p>
                <p>
                  $125.00 × {cartItem.quantity}{" "}
                  <span className="font-bold text-black">
                    ${(125 * cartItem.quantity).toFixed(2)}
                  </span>
                </p>
              </div>

              <button onClick={removeFromCart}>
                <img src="/images/icon-delete.svg" alt="Delete" />
              </button>
            </div>

            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold">
              Checkout
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}