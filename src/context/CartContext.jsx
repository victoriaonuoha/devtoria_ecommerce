import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItem, setCartItem] = useState(null);

  const addToCart = (product, quantity) => {
    if (quantity <= 0) return;

    setCartItem({
      ...product,
      quantity,
    });
  };

  const removeFromCart = () => {
    setCartItem(null);
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);