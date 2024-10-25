import React, { useState } from "react";
import { useCart } from "../CartContext";
import { addOrder } from "../firebase/firesebase";
import "./Checkout.css";

//Formulario de checkout y finalización de compra
function Checkout() {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    emailConfirm: "",
  });
  const [orderId, setOrderId] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTermsChange = (e) => {
    setTermsAccepted(e.target.value === "accepted");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }
    const order = {
      items: cart,
      date: new Date(),
      customer: formData,
      total: totalAmount,
    };
    const id = await addOrder(order);
    setOrderId(id);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (orderId) {
    return (
      <div>
        <h3>¡Gracias por tu compra en DUNAS!</h3>
        <p>El número de tu orden es: {orderId}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="contenedor">
        <h3>RESUMEN DE TU PEDIDO</h3>
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
        <div className="container-checkout">
          <h3>DATOS DE CONTACTO</h3>
          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
              <div className="checkout-datos">
                <input
                  name="name"
                  placeholder="Nombre"
                  onChange={handleChange}
                  required
                />
                <input
                  name="surname"
                  placeholder="Apellido"
                  onChange={handleChange}
                  required
                />
                <input
                  name="phone"
                  placeholder="Teléfono"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="checkout-datos">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
                <input
                  name="emailConfirm"
                  type="email"
                  placeholder="Repite tu Email"
                  onChange={handleChange}
                  required
                />
                <label className="checkout-terms">
                  <input
                    type="radio"
                    name="terms"
                    value="accepted"
                    onChange={handleTermsChange}
                    required
                  />
                  Acepto los términos y condiciones
                </label>
              </div>
              <button type="submit" className="button-send">
                REALIZAR PEDIDO
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
