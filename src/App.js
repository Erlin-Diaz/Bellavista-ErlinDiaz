import './App.css';
//import Button from './components/Button';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

const temp = 20;
const OpcionAlterna = "Eventos"

function App() {
  return (
    <>
      <NavBar ciertaVariable = {temp} opcion={OpcionAlterna}/>
      <ItemListContainer greeting="Catálogo de Productos...!!!"/>

    </>
  );
}

export default App; 