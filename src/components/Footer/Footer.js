import './Footer.css';
import footerImg from "./marvel_footer_logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import  { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-box" >
      <div className='footer-links'>
        <div className="footer-img-box">
        <Link to="/"><img className='footer-img' src={footerImg} alt="footer pic" /></Link>
        </div>
        <div className="footer-cols-box">
          <div className="footer-col">
            <h5>Social Media</h5>
            <Link to="/"><span className='social-media-icon'><FontAwesomeIcon icon={faFacebook} /></span>Facebook</Link>
            <Link to="/"><span className='social-media-icon'><FontAwesomeIcon icon={faInstagram} /></span>Instagram</Link>
            <Link to="/"><span className='social-media-icon'><FontAwesomeIcon icon={faTwitter} /></span>Twitter</Link>
          </div>
          <div className="footer-col">
            <h5>Categories</h5>
            <Link to="/">Iron Man</Link>
            <Link to="/">Wolverine</Link>
            <Link to="/">Deadpool</Link>
          </div>
          <div className="footer-col">
            <h5>Legal Policy</h5>
            <Link to="/">Legal Notices</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Cookie Policy</Link>
          </div>
        </div>
      </div>
      
      <div className="copyright-box">
        <p className="copyright-text">Copyright ©{new Date().getFullYear()} All rights reserved.</p>
        <p className="registered-text">Marvel Comics®</p>
      </div>
    </div>
  );
};

export default Footer;