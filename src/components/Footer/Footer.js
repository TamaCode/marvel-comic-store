import './Footer.css';
import footerImg from "./marvel_footer_logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer-box" >
      <div className='footer-links'>
        <div className="footer-img-box">
          <img className='footer-img' src={footerImg} alt="footer pic" />
        </div>
        <div className="footer-cols-box">
          <div className="footer-col">
            <h5>Social Media</h5>
            <p><span className='social-media-icon'><FontAwesomeIcon icon={faFacebook} /></span>Facebook</p>
            <p><span className='social-media-icon'><FontAwesomeIcon icon={faInstagram} /></span>Instagram</p>
            <p><span className='social-media-icon'><FontAwesomeIcon icon={faTwitter} /></span>Twitter</p>
          </div>
          <div className="footer-col">
            <h5>Products</h5>
            <p>Product 1</p>
            <p>Product 2</p>
            <p>Product 3</p>
          </div>
          <div className="footer-col">
            <h5>Legal Policy</h5>
            <p>Legal Notices</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
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