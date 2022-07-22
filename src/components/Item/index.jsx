import React from "react";
import ItemCount from "../ItemCount";

const Item = ({ producto }) => {
  return (
    <div className="card" style={{width: 400}}>
      <img src={producto.image} className="card-img-top" alt={producto.title} />
      <div className="card-body">
        <h5 className="card-title">{producto.title}</h5>
        <p className="card-text">{producto.description}</p>
       <ItemCount stock={10}/>
      </div>
    </div>
  );
};

export default Item;
