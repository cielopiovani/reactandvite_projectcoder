import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../firebase/firesebase.js"; // Asegúrate de importar ambas funciones
import ItemCard from "../../components/ItemCard.jsx";

const ProductsView = () => {
  const { category } = useParams(); // Obtenemos la categoría de la URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = category
          ? await getProductsByCategory(category) // Filtramos por categoría
          : await getProducts(); // Si no hay categoría, obtenemos todos
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
    <div>
      {products.length > 0 ? (
        products.map(product => (
          <ItemCard key={product.id} product={product} />
        ))
      ) : (
        <p>No se encontraron productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ProductsView;

