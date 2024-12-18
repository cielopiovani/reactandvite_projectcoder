import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import ProductsView from "./views/ProductsView/ProductsView.jsx";
import Cart from "./views/CartView.jsx";
import Checkout from "./views/CheckoutView.jsx";
import { CartProvider } from "./CartContext.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/categories/:category" element={<ProductsView />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
