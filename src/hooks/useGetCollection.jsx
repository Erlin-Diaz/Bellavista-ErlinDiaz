import { database } from "../firebase/config";
import { collection, query, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

const useGetCollection = (categoriaId) => {
  const [data, setData] = useState([]);
  const [productosOriginales, setProductosOriginales] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        //Llamado de productos desde Firebase
        if (productosOriginales.length === 0) {
          const q = query(collection(database, "productos"));
          const querySnapshot = await getDocs(q);
          const productos = [];
          querySnapshot.forEach((doc) => {
            const producto = { id: doc.id, ...doc.data() };
            productos.push(producto);
          });
          setProductosOriginales(productos);
        } else {
          let productosFiltrados = [...productosOriginales];
          if (categoriaId) {
            productosFiltrados = productosOriginales.filter(
              (prod) => prod.categoria === categoriaId
            );
          }
          setData(productosFiltrados);
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [categoriaId, productosOriginales]);

  return {
    data,
    error,
    loading,
  };
};

export default useGetCollection;
