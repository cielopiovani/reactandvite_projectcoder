import React, { useState, useEffect } from "react";
import ItemListContainer from "../../components/ItemListContainer";
import ReactLoading from "react-loading";
import { getProducts } from "../../asyncMock";
import "./HomeView.css";

function HomeView() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setError("Error al cargar los productos.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2>TODOS LOS PRODUCTOS</h2>
      {loading ? (
        <div className="loading-container">
          <ReactLoading type="spinningBubbles" color="#000" height={90} width={90} />
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ItemListContainer />
      )}
    </>
  );
}

export default HomeView;
