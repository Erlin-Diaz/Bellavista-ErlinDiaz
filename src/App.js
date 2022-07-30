import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer';
import NotFound from './components/NotFound/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const opcion = "Eventos"

  return (
    <BrowserRouter>
      <NavBar opcionAdicional={opcion}/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;