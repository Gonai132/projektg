import { Link } from "react-router-dom";
import logoV from "../img/logoV.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-col">
          <img src={logoV} alt="Little Lemon logo" className="footer-logo" />
        </div>

        <div className="footer-col">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>Address: Chicago, USA</li>
            <li>Phone: +1 123 456 789</li>
            <li>Email: contact@littlelemon.com</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Social Media</h4>
          <ul>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
          </ul>
        </div>

      </div>

      <p className="footer-copy">© 2026 Little Lemon</p>
    </footer>
  );
}

export default Footer;