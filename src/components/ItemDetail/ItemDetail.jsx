import React, { useState } from 'react';
import { useCart } from '../../CartContext';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';


// Funcion renderizado detalles de producto + component button, quantity y description
function ItemDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const itemToAdd = {
      id: product.id,
      title: product.title,
      price: parseFloat(product.price.replace('$', '')), 
      quantity: quantity,
      image: product.image,
    };
    console.log('Agregar al carrito:', itemToAdd);
    addToCart(itemToAdd);
  };

  return (
    <div>
      <h4>{product.title}</h4>
      <img src={product.image} alt={product.title} className='img-product' />
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      <ItemQuantitySelector productId={product.id} onQuantityChange={handleQuantityChange} />
      <AddItemButton onAdd={handleAddToCart} />
    </div>
  );
}

export default ItemDetail;






