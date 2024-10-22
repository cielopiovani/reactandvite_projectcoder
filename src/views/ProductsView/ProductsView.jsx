import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../asyncMock.js";
import ItemCard from "../../components/ItemCard.jsx";

const ProductsView = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => {
      const filteredProducts = categoryId ? data.filter(product => product.category === categoryId) : data;
      setProducts(filteredProducts);
    });
  }, [categoryId]);

  return (
    <section className="container-products">
      {products.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductsView;
