import React, { useState } from 'react';
import './styles.css';

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
		alert(`Se agregan ${cantidad} al carrito`)
	}


  return (
	<div className='grupoCompra'>		
		<div className='grupoMasMenos'>
		<button className='disminuyeCantidadStyles' onClick={disminuyeCantidad}>-</button>
		<span className='cantidadStyles'>{cantidad}</span>
		<button className='agregaCantidadStyles' onClick={agregaCantidad}>+</button>
		</div>
		<button className='handleAddCartStyle' onClick={handleAddCart}>Agregar al carrito</button>
	</div>
  )
}

export default ItemCount