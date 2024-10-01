import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { getProducts, getCategory } from "../asyncMock.js";
import ItemCard from "./ItemCard.jsx";

function ItemListContainer({ category }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => {
      setProducts(data);

      if (category) {
        setFilteredProducts(getCategory(category));
      } else {
        setFilteredProducts(data);
      }
    });
  }, [category]);

  return (
    <>
      <section className="container-products">
        {filteredProducts.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
}

export default ItemListContainer;
