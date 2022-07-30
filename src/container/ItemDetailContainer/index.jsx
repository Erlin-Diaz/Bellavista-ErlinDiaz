import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

	const [productoDetalle, setProductoDetalle] = useState(null);

	const {itemId} = useParams();	

	useEffect(()=>{
		const getProductoDetalle= async() =>{
			try {
				const response =await fetch('/mocks/productos.json')
				const data = await response.json();
				const id = data.find(elemento => {
					return elemento.id==itemId;
                    
				})
				setProductoDetalle(id);
			} catch (error) {
				alert(`Hubo un error: ${error.message}`)
			}
		}
		getProductoDetalle();

	},[itemId])

  return (
	<ItemDetail productoDetalle={productoDetalle}/>
  )
}

export default ItemDetailContainer