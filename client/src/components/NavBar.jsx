import "../assets/NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <div id="logo">
        <Link to="/">Peruvian</Link>
      </div>
      <nav>
        <Link to="/demo">
          <div>Demo</div>
        </Link>
        <Link to="/docs">
          <div>Documentation</div>
        </Link>
      </nav>
    </header>
  );
};
