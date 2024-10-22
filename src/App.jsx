import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView.jsx";
import ItemDetailContainer from "./views/ItemDetailContainer/ItemDetailContainer.jsx";
import ProductsView from "./views/ProductsView/ProductsView.jsx";
import CartView from "./views/CartView.jsx";
import CheckoutView from "./views/CheckoutView.jsx";
import { CartProvider } from "./CartContext.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomeView />} />
          <Route exact path="/products" element={<ProductsView />} />
          <Route exact path="/product/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<CartView />} />
          <Route exact path="/checkout" element={<CheckoutView />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
