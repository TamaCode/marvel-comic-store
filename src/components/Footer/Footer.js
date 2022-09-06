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
            <a href=""><span className='social-media-icon'><FontAwesomeIcon icon={faFacebook} /></span>Facebook</a>
            <a href=''><span className='social-media-icon'><FontAwesomeIcon icon={faInstagram} /></span>Instagram</a>
            <a href=''><span className='social-media-icon'><FontAwesomeIcon icon={faTwitter} /></span>Twitter</a>
          </div>
          <div className="footer-col">
            <h5>Products</h5>
            <a href=''>Product 1</a>
            <a href=''>Product 2</a>
            <a href=''>Product 3</a>
          </div>
          <div className="footer-col">
            <h5>Legal Policy</h5>
            <a href=''>Legal Notices</a>
            <a href=''>Privacy Policy</a>
            <a href=''>Cookie Policy</a>
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