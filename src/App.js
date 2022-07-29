import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
/* import ItemListContainer from './container/ItemListContainer'; */

function App() {

  const opcion = "Eventos"

  return (
    <>
      <NavBar opcionAdicional={opcion}/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
    </>
  );
}

export default App;