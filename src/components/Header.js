import { Link } from "react-router-dom";
import { useState } from "react";
import logoH from "../img/logoH.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="container header">
      <Link to="/" aria-label="On Click">
        <img src={logoH} alt="Little Lemon logo" className="logo" />
      </Link>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <nav className={open ? "nav open" : "nav"}>
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