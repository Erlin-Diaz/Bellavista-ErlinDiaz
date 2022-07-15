import './App.css';
import Button from './components/Button';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

const temp = 20;
const OpcionAlterna = "Eventos"
const spanStyles = {
  fontSize: 24,
  margin: 12,
}

const imagen = "https://home.ripley.com.pe/Attachment/WOP_5/2020286239596/2020286239596_2.jpg";

function App() {
  return (
    <>
      <NavBar ciertaVariable = {temp} opcion={OpcionAlterna}/>
      <ItemListContainer greeting="Catálogo de Productos...!!!"/>

    </>
  );
}

export default App; 