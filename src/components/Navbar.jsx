import { Link } from "react-router-dom";
import './Navbar.css'; // Importa el archivo CSS

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/CartPage" className="navbar-link">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
