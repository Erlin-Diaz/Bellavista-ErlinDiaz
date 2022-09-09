import React from "react";
import ShopProvider from "../components/Context/Shop";
import NavBar from "../components/NavBar";
import Cart from "../container/Cart/Cart";
import ItemDetailContainer from "../container/ItemDetailContainer";
import ItemListContainer from "../container/ItemListContainer";
import NotFound from "../components/NotFound/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MainNavigator = () => {
  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
};

export default MainNavigator;
