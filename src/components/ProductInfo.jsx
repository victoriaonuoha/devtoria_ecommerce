import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductInfo() {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  const product = {
    id: 1,
    title: "Fall Limited Edition Sneakers",
    price: 125,
    image: "/images/image-product-1-thumbnail.jpg",
  };

  return (
    <div className="px-6 lg:px-0 max-w-md">
      
      <p className="uppercase text-orange-500 font-bold tracking-widest text-sm mb-4">
        Sneaker Company
      </p>

      <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
        Fall Limited Edition Sneakers
      </h2>

      <p className="text-gray-500 mb-6">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything
        the weather can offer.
      </p>

      {/* Price */}
      <div className="flex lg:flex-col lg:items-start items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">
            $125.00
          </span>
          <span className="bg-black text-white text-sm px-2 py-1 rounded-md font-bold">
            50%
          </span>
        </div>

        <span className="text-gray-400 line-through font-bold">
          $250.00
        </span>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-4">
        
        {/* Quantity */}
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

        {/* Add to Cart */}
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