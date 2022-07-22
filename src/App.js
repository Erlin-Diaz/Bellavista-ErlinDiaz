import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {

  const opcion = "Eventos"

  return (
    <>
      <NavBar opcionAdicional={opcion}/>
      <ItemListContainer greeting={"Hola comisión 28860"}/>
    </>
  );
}

export default App;