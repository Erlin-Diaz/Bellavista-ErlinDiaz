import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';
import useGetCollection from '../../hooks/useGetCollection';

const ItemListContainer = ({greeting}) => {

  const {categoriaId} = useParams();
  const{data, error, loading} = useGetCollection(categoriaId);
  
  console.log("🚀 ~ file: index.jsx ~ line 9 ~ ItemListContainer ~ error", error)
  
  
 return (
  loading ?
  <h4>Loading</h4>
  :
    <ItemList productos={data} />
  )
}

export default ItemListContainer