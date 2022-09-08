import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
import  { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <li className="cart-box">
      <Link to="/cart"><Button variant='danger'><span className='menu-icon'><FontAwesomeIcon icon={faCartShopping} /></span>CART</Button></Link>
    </li>
  );
};

export default CartWidget;