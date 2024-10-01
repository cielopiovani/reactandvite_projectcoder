import "./ItemCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <>
      <div className="container-product">
        <h4>{product.title}</h4>
        <img src={product.image} alt={product.title} className="img-product" />
        <p>$ {product.price}</p>
        <button className="button-details">
          <Link to={`/product/${product.id}`}>Details</Link>
        </button>
      </div>
    </>
  );
}

export default ProductCard;
