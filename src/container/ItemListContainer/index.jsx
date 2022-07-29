import React,  { useState }   from 'react'
import ItemList from '../../components/ItemList';
import { misProductos } from '../../mocks/productos'; 

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])
  
  const traerProductos = new Promise ((accept, reject)=> {
    setTimeout(()=> {
      accept(misProductos)
    }, 2000)
  })

  traerProductos
  .then(result => {
    setProductos(result)
  })
  .catch(error => {
    alert(`Hubo un error: ${error}`)
  })


  console.log(productos);
  
 return (
    <ItemList products={productos} />
  )
}

export default ItemListContainer