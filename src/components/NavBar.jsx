import React from "react";
import { Link } from "react-router-dom";
import ButtonMenu from "./ButtonMenu";
import CardWidget from "./CardWidget";
import "./NavBar.css";

const categories = [
  { id: "active", name: "ACTIVE" },
  { id: "corpinios", name: "CORPIÑOS" },
  { id: "bombachas", name: "BOMBACHAS" },
];

// Renderizado de menu
function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img
          src="src/assets/logo_dunas_negro.png"
          alt="dunas"
          className="icon"
        />
      </Link>
      <div>
        {categories.map((category) => (
          <Link key={category.id} to={`/categories/${category.id}`}>
            <ButtonMenu titulo={category.name} />
          </Link>
        ))}
      </div>
      <CardWidget />
    </nav>
  );
}

export default NavBar;
