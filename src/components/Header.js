import { Link } from "react-router-dom";
import logoH from "../img/logoH.png";

function Header() {
  return (
    <header className="container header">
      <Link to="/"><img src={logoH} alt="Little Lemon logo" className="logo" /></Link>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;