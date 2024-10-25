import "./ItemListContainer.css";
import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../firebase/firesebase.js";
import ItemCard from "./ItemCard.jsx";

// Renderizado productos por categoría
function ItemListContainer({ category }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = category
        ? await getProductsByCategory(category)
        : await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, [category]);

  if (products === null) {
    return null;
  }

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
