import React from "react";
import ShopProvider from "../components/Context/Shop";
import NavBar from "../components/NavBar";
import Cart from "../container/Cart/Cart";
import ItemDetailContainer from "../container/ItemDetailContainer";
import ItemListContainer from "../container/ItemListContainer";
import NotFound from "../components/NotFound/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "../components/Checkout";

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
          <Route path="/Cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
};

export default MainNavigator;
