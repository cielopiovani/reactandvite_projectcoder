// import "./ItemListContainer.css";
// import { useEffect, useState } from "react";
// import { getProducts } from "../asyncMock.js";
// import ItemCard from "./ItemCard.jsx";

// // Filtrado de productos por categoria
// function ItemListContainer({ category }) {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts.then((data) => {
//       const filteredProducts = category ? data.filter(product => product.category === category) : data;
//       setProducts(filteredProducts);
//     });
//   }, [category]);

//   return (
//     <section className="container-products">
//       {products.map((product) => (
//         <ItemCard key={product.id} product={product} />
//       ))}
//     </section>
//   );
// }

// export default ItemListContainer;

import "./ItemListContainer.css";
import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../firebase/firesebase.js";
import ItemCard from "./ItemCard.jsx";

function ItemListContainer({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = category ? await getProductsByCategory(category) : await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, [category]);

  // Si no hay productos, muestra el mensaje
  if (products.length === 0) {
    return <div>No hay productos</div>;
  }

  return (
    <section className="container-products">
      {products.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ItemListContainer;



