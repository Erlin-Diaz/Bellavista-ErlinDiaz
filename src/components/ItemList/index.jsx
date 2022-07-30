import React from 'react'
import Item from '../Item'

const ItemList = ({productos}) => {
  return (
    <div className='container'>
      <div className='row m-5 d-flex justify-content-center'>
        {productos.map(producto => {
            return <Item key={producto.id} producto={producto}/>
        })}
      </div>
    </div>
  )
}

export default ItemList