import ButtonMenu from "./ButtonMenu";
import CardWidget from "./CardWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/products">
        <img src="src/assets/logo_dunas_negro.png" alt="dunas" className="icon" />
      </Link>
      <div>
        <Link to="/products?category=active" >
          <ButtonMenu titulo="ACTIVE" />
        </Link>
        <Link to="/products?category=corpinio" >
          <ButtonMenu titulo="CORPIÑOS" />
        </Link>
        <Link to="/products?category=bombacha" >
          <ButtonMenu titulo="BOMBACHAS" />
        </Link>
      </div>
      <CardWidget />
    </nav>
  );
}

export default NavBar;
