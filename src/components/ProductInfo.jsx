import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductInfo({ product }) {
  const { addToCart, getItemQuantity } = useCart();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(getItemQuantity(product.id));
  }, [product, getItemQuantity]);

  return (
    <div className="px-6 lg:px-0 max-w-md">
      
      <p className="uppercase text-orange-500 font-bold tracking-widest text-sm mb-4">
        Sneaker Company
      </p>

      <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
        {product.title}
      </h2>

      <p className="text-gray-500 mb-6">
        Premium sneaker designed for comfort and durability.
      </p>

      <div className="flex items-center gap-4 mb-6">
        <span className="text-2xl font-bold">
          ${product.price}.00
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        
        <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 lg:w-40">
          <button
            onClick={() => setQuantity((q) => Math.max(0, q - 1))}
            className="text-orange-500 font-bold text-xl"
          >
            −
          </button>

          <span className="font-bold">{quantity}</span>

          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="text-orange-500 font-bold text-xl"
          >
            +
          </button>
        </div>

        <button
          onClick={() => addToCart(product, quantity)}
          className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 transition text-white font-bold py-3 rounded-lg shadow-lg shadow-orange-500/30 flex-1"
        >
          <img src="/images/icon-cart.svg" alt="" className="invert" />
          Add to cart
        </button>
      </div>
    </div>
  );
}