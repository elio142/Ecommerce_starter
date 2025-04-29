import React, { useState, useEffect, createContext } from 'react';
import { initialProducts } from '../lib/data';

// Create the Context object
export const CartContext = createContext();

// Create the Provider component
export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  function addItem(productID) {
    console.log(productID);
    const existingItemIndex = cart.findIndex(item => item.id === productID);

    if (existingItemIndex > -1) {
      setCart(prevItems =>
        prevItems.map(item =>
          item.id === productID ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        )
      );
    } else {
      setCart(prevItems => [...prevItems, { id: productID, quantity: 1 }]);
    }
  };


  function removeItem(productID) {
    setCart(prevItems => prevItems.filter(item => item.id !== productID));
  };


  function updateItemQuantity(productID, quantity) {
    if (quantity > 0) {
      setCart(prevItems =>
        prevItems.map(item =>
          item.id === productID ? { ...item, quantity: parseInt(quantity, 10) } : item
        )
      );
    } else { // Remove if quantity becomes 0 or less
      removeItem(productID);
    }
  };


  function clearCart() {
    setCart([]);
  };

  // const totalItems = Array.isArray(cart) ? cart.reduce((total, item) => total + item.quantity, 0) : 0;

  const totalPrice = cart.reduce((total, item) => {
    const product = initialProducts.find(p => p.id === item.id);
    if (product) {
      return total + product.price * item.quantity;
    }
    return total;
  }, 0).toFixed(2);



  return (
    <CartContext.Provider value={{
      cartItems: cart,
      addItem,
      removeItem,
      updateItemQuantity,
      clearCart,
      // totalItems,
      totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
}