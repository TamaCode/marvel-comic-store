// import marvel_comics_logo from './marvel_logo.jpeg';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import CartWidget from '../CartWidget/CartWidget.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStore, faCartShopping, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='navbar-box'>
      <nav>
        <ul>
          <li><a href="#"><Button variant='danger'><span className='menu-icon'><FontAwesomeIcon icon={faHome} /></span>HOME</Button></a></li>
          <li><a href="#"><Button variant='danger'><span className='menu-icon'><FontAwesomeIcon icon={faStore} /></span>STORE</Button></a></li>
          <CartWidget />
          <li><a href="#"><Button variant='danger'><span className='menu-icon'><FontAwesomeIcon icon={faMobileScreen} /></span>CONTACT</Button></a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;