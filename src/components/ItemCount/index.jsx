import React, { useState } from 'react'

const ItemCount = ({stock}) => {
	
	const [cantidad, setCantidad] = useState(1);

	const agregaCantidad= () =>{
		if(cantidad<stock){
			setCantidad(cantidad+1)
		}
	}

	const disminuyeCantidad= () =>{
		if(cantidad>1){
			setCantidad(cantidad-1)
		}
	}

	const handleAddCart = () =>{
		document.write(`Se agregan ${cantidad} al carrito`)
	}


  return (
	<div>
		
		<button onClick={disminuyeCantidad}>-</button>
		<span>{cantidad}</span>
		<button onClick={agregaCantidad}>+</button>
		<button onClick={handleAddCart}>Agregar al carrito</button>
	</div>
  )
}

export default ItemCount