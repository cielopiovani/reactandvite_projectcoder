// Función: Muestra el contenido del carrito de compras.
// Elementos:
// Título como "Tu carrito".
// Listado de productos en el carrito, posiblemente usando un componente ItemCard o similar para cada producto.
// Resumen del total de la orden.
// Formulario para la información del usuario (nombre, apellido, teléfono, email).
// Botón para "Realizar compra" que activará el proceso de checkout.

import Cart from "../components/cart";

function CartView() {
    return (
      <>
        <Cart />
      </>
    );
  }
  
  export default CartView;
  