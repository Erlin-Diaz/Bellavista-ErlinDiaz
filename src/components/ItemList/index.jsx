import React from 'react'
import Item from '../Item'

const ItemList = ({products}) => {
  return (
    <div className='container'>
      <div className='row m-5 d-flex justify-content-center'>
        {products.map(producto => {
            return <Item key={producto.id} producto={producto}/>
        })}
      </div>
    </div>
  )
}

export default ItemList