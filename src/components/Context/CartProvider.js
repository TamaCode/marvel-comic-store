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

    console.log('item agregado al carrito: ', cartItems);
  };

  const removeItem = (comic) => {
    const isInCartFlag = isInCart(comic);

    if (isInCartFlag !== false) {
      const newItemCartArray = cartItems.filter(item => item.id === comic.id);
      setCartItems([...newItemCartArray]);
    }
  };

  const clear = () => {
    if (window.confirm('¿Está seguro que desea vaciar el Carrito?') === true) {
      setCartItems([]);
    }
  };

  const isInCart = (comic) => {
    const isInCartFlag = cartItems.findIndex(item => item.id === comic.id);
    return isInCartFlag === -1 ? false : isInCartFlag;
  };

  return <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, cartItems }}>{children}</CartContext.Provider>;
};

export {
   CartContext,
   CartProvider
};