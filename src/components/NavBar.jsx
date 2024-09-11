import ButtonMenu from "./ButtonMenu";
import CardWidget from "./CardWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <a href="">
          <img
            src="src\assets\logo_dunas_negro.png"
            alt="Icono"
            className="icon"
          />
        </a>

        <div>
          <ButtonMenu titulo="INICIO" />
          <ButtonMenu titulo="SHOP" />
          <ButtonMenu titulo="CONTACTO" />
        </div>

        <CardWidget />
      </nav>
    </>
  );
}

export default NavBar;
