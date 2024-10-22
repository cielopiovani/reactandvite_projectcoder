import React from 'react';
import '../Checkout.css';

function AddItemButton({ onAdd }) {
  return (
    <button onClick={onAdd} className="button-send">AGREGAR AL CARRITO</button>
  );
}

export default AddItemButton;


