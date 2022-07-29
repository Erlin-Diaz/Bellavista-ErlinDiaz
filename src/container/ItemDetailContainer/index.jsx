import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

	const [productoDetalle, setProductoDetalle] = useState(null);

	useEffect(()=>{
		const getProductoDetalle= async() =>{
			try {
				const response =await fetch('/mocks/productos.json')
				const data = await response.json();
				const id = data.find(elemento => {
					return elemento.id===14
				})
				setProductoDetalle(id);
			} catch (error) {
				alert(`Hubo un error: ${error.message}`)
			}
		}
		getProductoDetalle();

	},[])

  return (
	<ItemDetail productoDetalle={productoDetalle}/>
  )
}

export default ItemDetailContainer