import React from "react";
import "../Checkout.css";

// Componente boton agregar producto
function AddItemButton({ onAdd }) {
  return (
    <button onClick={onAdd} className="button-send">
      AGREGAR AL CARRITO
    </button>
  );
}

export default AddItemButton;
