import React,  { useEffect, useState }   from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import { database } from '../../firebase/config';
import { collection, query, getDocs } from "firebase/firestore";


const ItemListContainer = ({greeting}) => {

  const [productosOriginales, setProductosOriginales] = useState([]);
  const [productos, setProductos] = useState([]);
/*   
  const traerProductos = new Promise ((accept, reject)=> {
    setTimeout(()=> {
      accept(misProductos)
    }, 2000)
  }) */

  const {categoriaId} = useParams();
  
  useEffect(()=>{
    
    const getProductos = async ()=>{
      try{
        // const response = await fetch('/mocks/productos.json')
        // const data = await response.json(); 
        // let opcion =[...data]        
        if(productosOriginales.length === 0){
          //paso 1: genero QUERY
          const q = query(collection(database, "productos"));
          // paso 2: ejecutar QUERY
          const querySnapshot = await getDocs(q);
          // paso 3: obtenemos array con todos los documentos
          const productos = [];
          querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //doc.id => ID generado por FIREBASE
          /* console.log(doc.id, " => ", doc.data()); */
          const producto = {id: doc.id, ...doc.data()};
          productos.push(producto);
          });
          setProductosOriginales(productos); 
        }else{
          let productosFiltrados = [...productosOriginales];
          if(categoriaId){
               productosFiltrados = productosOriginales.filter(prod => prod.categoria === categoriaId)
          }
          setProductos(productosFiltrados);
        }
        
      }catch(error) {
        alert(`Hubo un error: ${error.message}`)
      }
    }

    getProductos();

  },[categoriaId, productosOriginales])
  
 return (
    <ItemList productos={productos} />
  )
}

export default ItemListContainer