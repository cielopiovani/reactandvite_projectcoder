import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  return (
    <>
      <div className="item-container">
        <h1>{greeting}</h1>
      </div>
    </>
  );
}

export default ItemListContainer;
