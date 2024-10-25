import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getProducts,
  getProductsByCategory,
} from "../../firebase/firesebase.js";
import ItemCard from "../../components/ItemCard.jsx";
import "./ProductsView.css";

// Funcion que ejecuta renderizacion de productos por categoria desde firebase.js
const ProductsView = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = category
          ? await getProductsByCategory(category)
          : await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="container-products-category">
      {products.length > 0 ? (
        products.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))
      ) : (
        <p>No se encontraron productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ProductsView;
