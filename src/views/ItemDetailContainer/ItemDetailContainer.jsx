import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const productData = getProduct(id);
    if (productData) {
      setProduct(productData);
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;






