// import marvel_comics_logo from './marvel_logo.jpeg';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import CartWidget from '../CartWidget/CartWidget.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStore, faMobileScreen, faTicket } from '@fortawesome/free-solid-svg-icons';
import  { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-box'>
      <nav>
        <ul>
          <li><Link to="/"><Button variant='danger'><span className='menu-icon'><FontAwesomeIcon icon={faHome} /></span>HOME</Button></Link></li>
          <li><Link to="/#comic_store"><Button variant='danger'><span className='menu-icon'><FontAwesomeIcon icon={faStore} /></span>STORE</Button></Link></li>
          <CartWidget />
          <li><Link to="#"><Button variant='danger'><span className='menu-icon'><FontAwesomeIcon icon={faMobileScreen} /></span>CONTACT</Button></Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;