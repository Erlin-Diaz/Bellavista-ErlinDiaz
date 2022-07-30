import React from 'react'
import ItemCount from '../ItemCount'
/* import { useNavigate } from 'react-router-dom' */

const ItemDetail = ({productoDetalle}) => {
	if (productoDetalle !== null) {
        return (
            <>
                <div className="container d-flex text-center mt-5 vh-100" >
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src={productoDetalle.image} className="card-img-top mt-3" alt={productoDetalle.title} />
                        </div>
                        <div className="col-md-4">
                            <h5 className="card-title ">{productoDetalle.title}</h5>
                            <p className="card-text ">{productoDetalle.description}</p>
                        </div>
                        <div className="col-md-4">
                            <div className="card-footer">
                            <small className="fs-4">${productoDetalle.price}</small>
                            </div>
                        <ItemCount stock={10}/>
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

