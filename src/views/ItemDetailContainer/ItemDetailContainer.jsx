import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import ItemDetail from '../../components/ItemDetail/ItemDetail';


//Proceso de renderizado de ItemDetail con useEffect para menejo de error
function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const productData = getProduct(id);
    if (productData) {
      setProduct(productData);
      setError(null);
    } else {
      setProduct(null);
      setError('Producto no encontrado.');
    }
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;







