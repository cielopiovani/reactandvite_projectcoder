import React, { useState, useEffect } from 'react';
import './ItemQuantitySelector.css';
import '../ButtonMenu.css';

// Funcion para agregar al carrito
function ItemQuantitySelector({ productId, onQuantityChange }) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity, onQuantityChange]);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleChange = (e) => {
    const value = Math.max(1, Number(e.target.value));
    setQuantity(value);
  };

  return (
    <div>
      <button onClick={handleDecrement} disabled={quantity === 1} className="botones-menu">-</button>
      <input 
        type="number" 
        value={quantity} 
        onChange={handleChange} 
        min={1} 
        className='input-cant'
      />
      <button onClick={handleIncrement} className="botones-menu">+</button>
      <p>Cantidad seleccionada: {quantity}</p>
    </div>
  );
}

export default ItemQuantitySelector;




  