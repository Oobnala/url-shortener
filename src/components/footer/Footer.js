import './Footer.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Facebook } from '../../assets/images/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../assets/images/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../../assets/images/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <div className="footer">
      <Logo className="footer__logo" />
      <div className="footer__links">
        <div className="footer__link">
          <h2>Features</h2>
          <button>Link Shortening</button>
          <button>Branded Links</button>
          <button>Analytics</button>
        </div>
        <div className="footer__link">
          <h2>Resources</h2>
          <button>Blog</button>
          <button>Developers</button>
          <button>Support</button>
        </div>
        <div className="footer__link">
          <h2>Company</h2>
          <button>About</button>
          <button>Our Team</button>
          <button>Careers</button>
          <button>Contact</button>
        </div>
        <div className="footer__social">
          <Facebook className="footer__icon" />
          <Twitter className="footer__icon" />
          <Pinterest className="footer__icon" />
          <Instagram className="footer__icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
