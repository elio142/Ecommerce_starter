import { useState, useEffect, createContext, useContext } from 'react';
import { initialProducts } from '../lib/data';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const userId = user?.id || "guest"; // fallback for not logged in

  const [cart, setCart] = useState([]);

 // Load cart whenever user changes
useEffect(() => {
  if (!user) {
    // Logged out → clear cart state & localStorage
    setCart([]);
    localStorage.removeItem(`cart_${userId}`);
  } else {
    const storedCart = localStorage.getItem(`cart_${userId}`);
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }
}, [user, userId]);

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
  }, [cart, userId]);

  function addItem(productID) {
    setCart(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === productID);
      if (existingItemIndex > -1) {
        return prevItems.map(item =>
          item.id === productID ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      } else {
        return [...prevItems, { id: productID, quantity: 1 }];
      }
    });
  }

  function removeItem(productID) {
    setCart(prevItems => prevItems.filter(item => item.id !== productID));
  }

  function updateItemQuantity(productID, quantity) {
    if (quantity > 0) {
      setCart(prevItems =>
        prevItems.map(item =>
          item.id === productID ? { ...item, quantity: parseInt(quantity, 10) } : item
        )
      );
    } else {
      removeItem(productID);
    }
  }

  function clearCart() {
    setCart([]);
  }

  const totalPrice = cart.reduce((total, item) => {
    const product = initialProducts.find(p => p.id === item.id);
    return product ? total + product.price * item.quantity : total;
  }, 0).toFixed(2);

  return (
    <CartContext.Provider value={{
      cartItems: cart,
      addItem,
      removeItem,
      updateItemQuantity,
      clearCart,
      totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
};
