import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-box">
      <a href="#"><Button variant='danger'><span className='menu-icon'><FontAwesomeIcon icon={faCartShopping} /></span></Button></a>
    </div>
  );
};

export default CartWidget;