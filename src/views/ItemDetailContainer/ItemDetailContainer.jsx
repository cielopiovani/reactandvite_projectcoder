import React, { useEffect, useState } from 'react';
import "./ItemDetailContainer.css";
import { useParams } from 'react-router-dom';
import { getProduct } from '../../firebase/firesebase';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

// Ejecucion de un producto por id, al ingresar a detalles del producto
function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProduct(id);
      if (productData) {
        setProduct(productData);
        setError(null);
      } else {
        setProduct(null);
        setError('Producto no encontrado.');
      }
    };
    fetchProduct();
  }, [id]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!product) {
    return <div className="loading-message">Cargando...</div>;
  }

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;









