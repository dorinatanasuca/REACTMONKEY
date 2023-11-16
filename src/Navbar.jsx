import { Link } from "react-router-dom";
import "./StyleNavbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="container">
      <div className="nav-elements">
      <ul>
        <li>
      <Link to="/">Acasa</Link>
      </li>
      <li>
      <Link to="/aboutstate">AboutState</Link>
      </li>
      <li>
      <Link to="/aboutstate2">AboutState2</Link>
      </li>
      <li>
      <Link to="/monkeys">Monkeys</Link>
      </li>
      <li>
      <Link to="/form32">Form32</Link>
      </li>
      </ul>
      </div>
    </div>
    </nav>
  );
};
