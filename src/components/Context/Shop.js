import React, { createContext, useState } from 'react'

export const ShopData = createContext();

const ShopProvider = ({children}) =>{
	
	const [ cart, setCart] = useState([]);
	
	const estaEnCart = (productId)=>{
		const productoEncontrado = cart.find(producto => producto.id === productId);
		if(productoEncontrado) return true
		return false
	} 
	
	const addItem = (item, cantidad) =>{

		const ctd = cantidad
	
		const flag = estaEnCart(item.id)		
        console.log("🚀 ~ file: Shop.js ~ line 23 ~ addItem ~ flag", flag)
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
		const cartFiltrado = cart.filter( producto => producto.Id !== itemId );		
		setCart(cartFiltrado);
	}	

	const clearCart = ()=>{
		setCart([]);
	}

	return (
		<ShopData.Provider value = {{addItem, removeItem, clearCart}}>
			{children}
		</ShopData.Provider>
	  )

}
export default ShopProvider