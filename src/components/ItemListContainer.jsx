import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock.js";
import ItemCard from "./ItemCard.jsx";

// Filtrado de productos por categoria
function ItemListContainer({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => {
      const filteredProducts = category ? data.filter(product => product.category === category) : data;
      setProducts(filteredProducts);
    });
  }, [category]);

  return (
    <section className="container-products">
      {products.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ItemListContainer;


