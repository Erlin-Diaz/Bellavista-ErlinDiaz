import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer';
import NotFound from './components/NotFound/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopProvider from './components/Context/Shop';
import Cart from './container/Cart/Cart';
import UserSettingsProvider from './components/Context/UserSettings';

function App() {

  const opcion = "Eventos"

  return (
    <UserSettingsProvider>
      <ShopProvider>  
        <BrowserRouter>
          <NavBar opcionAdicional={opcion}/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path='/Cart' element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
      </ShopProvider>
    </UserSettingsProvider>

  );
}

export default App;