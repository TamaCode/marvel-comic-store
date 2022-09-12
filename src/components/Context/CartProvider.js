import { createContext, useState } from "react";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (comic, quantity) => {
    const item = { ...comic, quantity };

    const isInCartFlag = isInCart(comic);

    if (isInCartFlag !== false) {
      const newItemCartArray = [...cartItems];
      newItemCartArray[isInCartFlag].quantity += item.quantity;
      setCartItems([...newItemCartArray]);
    } else {
      setCartItems([...cartItems, item]);
    }
  };

  const removeItem = (comic) => {
    const isInCartFlag = isInCart(comic);

    if (isInCartFlag !== false) {
      const newItemCartArray = cartItems.filter(item => item.id !== comic.id);
      setCartItems([...newItemCartArray]);
    }
  };

  const clear = () => {
    if (window.confirm('¿Está seguro que desea vaciar el Carrito?') === true) {
      setCartItems([]);
    }
  };

  const getTotal = () => {
    let total = 0;

    cartItems.forEach(item => total += (item.quantity * item.price));

    return parseFloat(total.toFixed(2));
  };

  const getTotalItems = () => {
    let totalItems = 0;

    cartItems.forEach(item => totalItems += item.quantity);

    return totalItems;
  };

  const isInCart = (comic) => {
    const isInCartFlag = cartItems.findIndex(item => item.id === comic.id);
    return isInCartFlag === -1 ? false : isInCartFlag;
  };

  return <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, getTotal, getTotalItems, cartItems }}>{children}</CartContext.Provider>;
};

export {
   CartContext,
   CartProvider
};