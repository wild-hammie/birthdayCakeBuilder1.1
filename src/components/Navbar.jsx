
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-small">THE LITTLE BAKERY</span>
        <span className="brand-name">Sheida's Bakery</span>
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/builder">Build a Cake</Link>
        <a
          href="https://t.me/ThisCouldBeNik"
          target="_blank"
          rel="noreferrer"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
