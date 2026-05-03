import { NavLink } from "react-router-dom";
import { useState } from "react";
import logoH from "../img/logoH.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="container header">
      <NavLink to="/" aria-label="On Click">
        <img src={logoH} alt="Little Lemon logo" className="logo" />
      </NavLink>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <nav className={open ? "nav open" : "nav"}>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
          <li><NavLink to="/menu" className={({ isActive }) => isActive ? "active" : ""}>Menu</NavLink></li>
          <li><NavLink to="/reservations" className={({ isActive }) => isActive ? "active" : ""}>Reservations</NavLink></li>
          <li><NavLink to="/order" className={({ isActive }) => isActive ? "active" : ""}>Order Online</NavLink></li>
          <li><NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;