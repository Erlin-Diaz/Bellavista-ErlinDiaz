import React, { createContext, useEffect, useState } from 'react'

export const ShopData = createContext();

const ShopProvider = ({children}) =>{
	
	const [ cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);
	
	const estaEnCart = (productId)=>{
		const productoEncontrado = cart.find(producto => producto.id === productId);
		if(productoEncontrado) return true
		return false
	} 
	
	const addItem = (item, cantidad) =>{

		const ctd = cantidad
	
		const flag = estaEnCart(item.id)		
       if(flag){
			const cartModificado = cart.map(producto => {
				if (producto.id === item.id) return{...producto, cantidad: producto.cantidad + ctd}
				else return producto
			})
			setCart(cartModificado)
		}
		else{
			const itemToAdd = {
			...item,
			cantidad
		}
	
		const newCart = [...cart, itemToAdd];
		setCart(newCart);	

		}
}

	const removeItem = (itemId)=>{
		const cartFiltrado = cart.filter(producto => producto.id !== itemId);
		console.log("🚀 ~ file: Shop.js ~ line 44 ~ removeItem ~ itemId", itemId)
		setCart(cartFiltrado);
	}	

	const clearCart = ()=>{
		setCart([]);
	}

	useEffect(()=>{
		const total = cart.reduce((acumulador, currentProduct) =>
		 acumulador = acumulador + currentProduct.cantidad * currentProduct.precio,
		 0)
		 setTotal(total)
	}, [cart] )


	return (
		<ShopData.Provider value = {{addItem, removeItem, clearCart, cart, total}}>
			{children}
		</ShopData.Provider>
	  )

}
export default ShopProvider