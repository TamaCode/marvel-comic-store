import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <li className="cart-box">
      <a href="#"><Button variant='danger'><span className='menu-icon'><FontAwesomeIcon icon={faCartShopping} /></span>CART</Button></a>
    </li>
  );
};

export default CartWidget;