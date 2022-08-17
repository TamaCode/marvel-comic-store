import marvel_comics_logo from './marvel_logo.jpeg';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faStore, faCartShopping, faMobileScreen } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='navbar-box'>
      {/* <div className='img-box'>
        <img src={marvel_comics_logo} alt="Marvel Comics Logo" />
      </div> */}
      <nav>
        <ul>
          <li><a href="#"><Button variant='danger'><span className='menu-icon'><FontAwesomeIcon icon={faHome} /></span>INIT</Button></a></li>
          <li><a href="#"><Button variant='danger'><span className='menu-icon'><FontAwesomeIcon icon={faStore} /></span>STORE</Button></a></li>
          <li><a href="#"><Button variant='danger'><span className='menu-icon'><FontAwesomeIcon icon={faCartShopping} /></span>CART</Button></a></li>
          <li><a href="#"><Button variant='danger'><span className='menu-icon'><FontAwesomeIcon icon={faMobileScreen} /></span>CONTACT</Button></a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;