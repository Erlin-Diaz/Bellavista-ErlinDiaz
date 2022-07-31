import React,  { useEffect, useState }   from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])
/*   
  const traerProductos = new Promise ((accept, reject)=> {
    setTimeout(()=> {
      accept(misProductos)
    }, 2000)
  }) */

  const {categoryId} = useParams();
  
  useEffect(()=>{
    
    const getProductos = async ()=>{
      try{
        const response = await fetch('/mocks/productos.json')
        const data = await response.json(); 
        let opcion =[...data]        
        if(categoryId){
          opcion = data.filter(productos => productos.category === categoryId);
        }
        setProductos(opcion); 
      }catch(error) {
        alert(`Hubo un error: ${error}`)
      }
    }

    getProductos();

  },[categoryId, productos.category])
  
 return (
    <ItemList productos={productos} />
  )
}

export default ItemListContainer