import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import CartModal from '../CartModal/CartModal.js';
import { CartContext } from '../Context/CartProvider.js';

const CartWidget = () => {
  const [showModal, setShowModal] = useState(false);
  const cartContext = useContext(CartContext);

  const viewModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
    <li className="cart-box">
      <a><Button onClick={viewModal} variant='danger'><span className='menu-icon'><FontAwesomeIcon icon={faCartShopping} /></span>{`CART (${cartContext.getTotalItems()})`}</Button></a>
    </li>
    {
      showModal ? 
      <CartModal show={viewModal}></CartModal> :
      null
    }
    </>
  );
};

export default CartWidget;