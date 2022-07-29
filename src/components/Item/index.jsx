import React from "react";
import ItemCount from "../ItemCount";

const Item = ({ producto }) => {
  return (
    <div className="card m-2" style={{width: 300}}>
      <img src={producto.image} className="card-img-top mt-3" alt={producto.title} />
      <div className="card-body">
        <h5 className="card-title">{producto.title}</h5>
        <p className="card-text">{producto.description}</p>
        <div className="card-footer">
        <small className="fs-4">${producto.price}</small>
        </div>
        <ItemCount stock={10}/>
      </div>
    </div>
  );
};

export default Item;
