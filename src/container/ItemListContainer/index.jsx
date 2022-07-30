import React,  { useEffect, useState }   from 'react'
import ItemList from '../../components/ItemList';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])
/*   
  const traerProductos = new Promise ((accept, reject)=> {
    setTimeout(()=> {
      accept(misProductos)
    }, 2000)
  }) */

  useEffect(()=>{

    const getProductos = async ()=>{
      try{
        const response = await fetch('/mocks/productos.json')
        const data = await response.json();;
        setProductos(data);
      }catch(error) {
        alert(`Hubo un error: ${error}`)
      }
    }

    getProductos();

  },[])
  
 return (
    <ItemList productos={productos} />
  )
}

export default ItemListContainer