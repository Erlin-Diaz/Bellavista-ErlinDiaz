import React from "react";
import { useNavigate } from "react-router-dom";



const Item = ({ producto }) => {

const navigate = useNavigate();

const handleNavigate = (id) =>{
  navigate(`/item/${id}`)
}

  return (
    <div className="card m-2" style={{width: 300}} onClick={()=>handleNavigate(producto.id)}>
      <img src={producto.image} className="card-img-top mt-3" alt={producto.title} />
      <div className="card-body">
        <h3 className="card-title">{producto.title}</h3>
        <p className="card-text">{producto.description}</p>
          <div className="card-footer">
            <small className="fs-4">${producto.price}</small>
          </div>
          <button type="button" className="btn btn-success d-grid col-12 btn-lg mt-1 ">Comprar</button>
      </div>
    </div>
  );
};

export default Item;
