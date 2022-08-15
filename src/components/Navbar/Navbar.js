import marvel_comics_logo from './marvel_logo.jpeg';
import './Navbar.css';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  return (
    <div className='navbar-box'>
      <div className='img-box'>
        <img src={marvel_comics_logo} alt="Marvel Comics Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#"><Button variant='danger'>INIT</Button></a></li>
          <li><a href="#"><Button variant='danger'>STORE</Button></a></li>
          <li><a href="#"><Button variant='danger'>CART</Button></a></li>
          <li><a href="#"><Button variant='danger'>CONTACT</Button></a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;