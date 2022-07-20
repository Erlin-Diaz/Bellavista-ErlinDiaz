import React, { useState } from 'react'
import ItemCount from '../../components/ItemCount'

const ItemListContainer = ({greeting}) => {

	//1° ESTADOS
	const [color, setColor] = useState('Verde')
	const variable2 = 'Rojo'

	//2° EFECTOS

	//3°FUNCIONES CALLBACk
	const handleChange= () => {
		console.log("Cambio de color");
		if(color === "Verde"){
			setColor("Rojo");
		}else{
			setColor("Verde");
		}
		

	}

	// 4° JSX
  return (
	<div>
		<h1>{greeting}</h1>
		<h3>{color}</h3>
		<button onClick={handleChange}>Cambiar color</button>
		<h3>{variable2}</h3>
		<ItemCount stock={10}/>
		
	</div>
  )
}

export default ItemListContainer