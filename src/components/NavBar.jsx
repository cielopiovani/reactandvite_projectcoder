import ButtonMenu from "./ButtonMenu";
import CardWidget from "./CardWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/products">
          <img
            src="src\assets\logo_dunas_negro.png"
            alt="dunas"
            className="icon"
          />
        </Link>

        <div>
          <Link to="/active">
            <ButtonMenu titulo="ACTIVE" />
          </Link>
          <Link to="/corpinio">
            <ButtonMenu titulo="CORPIÑOS" />
          </Link>
          <Link to="/bombacha">
            <ButtonMenu titulo="BOMBACHAS" />
          </Link>
        </div>

        <CardWidget />
      </nav>
    </>
  );
}

export default NavBar;
