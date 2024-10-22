import "./ItemCard.css";
import { Link } from "react-router-dom";

function ItemCard({ product }) {
  return (
    <div className="container-product">
      <h4>{product.title}</h4>
      <img src={product.image} alt={product.title} className="img-product" />
      <p>$ {product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button className="button-details">Detalles</button>
      </Link>
    </div>
  );
}

export default ItemCard;
