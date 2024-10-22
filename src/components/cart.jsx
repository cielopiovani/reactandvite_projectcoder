import React from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

// Resumen de pedido + button a checkout
function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="contenedor">
      <h3>CARRITO DE COMPRAS</h3>
      {cart.length === 0 ? (
        <div>No hay productos agregados</div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="checkout-conteiner">
              <div className="checkout-img">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "80px", height: "auto" }}
                />
              </div>
              <div className="checkout-subquantity">
                {item.title} - ${item.price} x {item.quantity}
              </div>
              <div className="checkout-subt">
                Subtotal: ${parseFloat(item.price) * item.quantity}
              </div>
            </div>
          ))}
          <h3 className="checkout-total">Total: ${totalAmount}</h3>
          <button onClick={handleCheckout} className="button-send">
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
