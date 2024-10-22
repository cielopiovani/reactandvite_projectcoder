import React from 'react';
import { useCart } from '../CartContext';
import "./CardWidget.css";
import { useNavigate } from 'react-router-dom';


// Renderizado carrito + cant productos pedido
function CardWidget() {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <button className="button-card" onClick={handleClick}>
      <i className="bi bi-cart">{totalItems > 0 ? totalItems : ''}</i>
    </button>
  );
}

export default CardWidget;

