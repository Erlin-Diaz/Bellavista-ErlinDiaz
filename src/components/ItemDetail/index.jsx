import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ShopData } from '../Context/Shop';
import ItemCount from '../ItemCount'
/* import { useNavigate } from 'react-router-dom' */

const  ItemDetail = ({productoDetalle}) => {
console.log("🚀 ~ file: index.jsx ~ line 8 ~ ItemDetail ~ productoDetalle", productoDetalle)

    const {addItem} =useContext(ShopData);
    
    const [cantidad, setCantidad]=useState(0);

    const navigate = useNavigate();
     
    const handleConfirm = (cantidad) => {
         setCantidad(cantidad);
         addItem(productoDetalle,cantidad);
    }

    const confirmaCompra = (precio)=>{
        navigate('/Cart');

    }

	if (productoDetalle !== null) {
        return (
            <>
                <div className="container d-flex text-center mt-5 vh-100" >
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src={productoDetalle.imagen} className="card-img-top mt-3" alt={productoDetalle.nombre} />
                        </div>
                        <div className="col-md-4">
                            <h5 className="card-title ">{productoDetalle.nombre}</h5>
                            <p className="card-text ">{productoDetalle.descripcion}</p>
                        </div>
                        <div className="col-md-4">
                            <div className="card-footer">
                                <small className="fs-4">S/. {productoDetalle.precio}</small>
                            {cantidad === 0 ?
                             <ItemCount stock={productoDetalle.stock} handleAddCart={handleConfirm} /> 
                             : 
                             <button type="button" className="btn btn-success d-grid col-12 btn-lg mt-1 " onClick={confirmaCompra}>Ir a carrito</button>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
        
    }
    return (
        <p>Loading...</p>
    )
}

export default ItemDetail

