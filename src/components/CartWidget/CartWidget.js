import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Cart from '../Cart/Cart.js';
import  { Link } from 'react-router-dom';

const CartWidget = () => {
  const [showModal, setShowModal] = useState(false);

  const viewModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
    <li className="cart-box">
      <a /*to="/cart"*/><Button onClick={viewModal} variant='danger'><span className='menu-icon'><FontAwesomeIcon icon={faCartShopping} /></span>CART</Button></a>
    </li>
    {
      showModal ? 
      <Cart show={viewModal}></Cart> :
      null
    }
    </>
  );
};

export default CartWidget;