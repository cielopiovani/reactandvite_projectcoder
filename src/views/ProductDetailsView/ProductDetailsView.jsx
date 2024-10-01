import "./ProductDetailsView.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";

function ProductDetailsView() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setProduct(getProduct(id));
  }, []);

  return (
    <>
      <article className="details-view">
        <h2>Detalle del producto</h2>
        <h4>{product.title}</h4>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>Precio {product.price}</p>
      </article>
    </>
  );
}
export default ProductDetailsView;
