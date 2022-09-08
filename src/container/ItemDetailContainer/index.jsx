import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

import { database } from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
	
	const [productoDetalle, setProductoDetalle] = useState(null);
	
	const {itemId} = useParams();
	
	useEffect(()=>{
		const getProductoDetalle= async() =>{
			try {
				
				const docRef = doc(database, "productos", itemId);

				const docSnap = await getDoc(docRef);
				
				if (docSnap.exists()) {
				  console.log(`Document data:, id: ${docSnap.id} => data: ${JSON.stringify(docSnap.data())}`);
				  setProductoDetalle({id: docSnap.id, ...docSnap.data()});
				} else {
				  // doc.data() will be undefined in this case
				  console.log("No such document!");
				}

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