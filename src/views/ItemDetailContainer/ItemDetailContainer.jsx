// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getProduct } from '../../asyncMock';
// import ItemDetail from '../../components/ItemDetail/ItemDetail';


// //Proceso de renderizado de ItemDetail con useEffect para menejo de error
// function ItemDetailContainer() {
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const productData = getProduct(id);
//     if (productData) {
//       setProduct(productData);
//       setError(null);
//     } else {
//       setProduct(null);
//       setError('Producto no encontrado.');
//     }
//   }, [id]);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!product) {
//     return <div>Cargando...</div>;
//   }

//   return (
//     <div>
//       <ItemDetail product={product} />
//     </div>
//   );
// }

// export default ItemDetailContainer;

import React, { useEffect, useState } from 'react';
import "./ItemDetailContainer.css";
import { useParams } from 'react-router-dom';
import { getProduct } from '../../firebase/firesebase'; // Importa la función correcta
import ItemDetail from '../../components/ItemDetail/ItemDetail';

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









