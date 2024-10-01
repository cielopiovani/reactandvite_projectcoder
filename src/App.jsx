import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView.jsx";
import CategoryActiveView from "./views/CategoryActiveView/CategoryActiveView.jsx";
import CategoryCorpinioView from "./views/CategoryCorpinioView/CategoryCorpinioView.jsx";
import CategoryBombachaView from "./views/CategoryBombachaView/CategoryBombachaView.jsx";
import ProductDetailsView from "./views/ProductDetailsView/ProductDetailsView.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/products" element={<HomeView />} />
          <Route exact path="/active" element={<CategoryActiveView />} />
          <Route exact path="/corpinio" element={<CategoryCorpinioView />} />
          <Route exact path="/bombacha" element={<CategoryBombachaView />} />
          <Route exact path="/product/:id" element={<ProductDetailsView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
