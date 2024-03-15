import "../assets/NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <div id="logo">Peruvian</div>
      <div id="nav-options">
        <Link to="/">
          <div>About Us</div>
        </Link>
        <Link to="/">
          <div>Examples</div>
        </Link>
        <Link to="/">
          <div>Documentation</div>
        </Link>
      </div>
    </nav>
  );
};
