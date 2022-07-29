import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = ({productoDetalle}) => {
	if (productoDetalle !== null) {
        return (
            <>
                <div class="container d-flex text-center mt-5 vh-100 " >
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <img src={productoDetalle.image} className="card-img-top mt-3" alt={productoDetalle.title} />
                    </div>
                    <div class="col-md-4">
                        <h5 className="card-title ">{productoDetalle.title}</h5>
                        <p className="card-text ">{productoDetalle.description}</p>
                    </div>
                    <div class="col-md-4">
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

