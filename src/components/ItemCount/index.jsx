import React, { useState } from "react";
import "./styles.css";

const ItemCount = ({ stock }) => {

  const [cantidad, setCantidad] = useState(1);

  const agregaCantidad = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuyeCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAddCart = () => {
    alert(`Se agregan ${cantidad} al carrito`);
  };

  return (
    <>
      <div className="btn-group btn-group-lg d-flex justify-content-center mt-2" role="group" aria-label="Large button group">
        <button type="button" className="btn btn-outline-success" onClick={disminuyeCantidad}> - </button>
        <span className="input-group-text flex-grow-1 justify-content-center bg-light">{cantidad}</span>
        <button type="button" className="btn btn-outline-success" onClick={agregaCantidad}> + </button>
      </div>	
        <button type="button" className="btn btn-success d-grid col-12 btn-lg mt-1 " onClick={handleAddCart}>Agregar a carrito</button>
    </>
  );
};

export default ItemCount;