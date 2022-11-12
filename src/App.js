import NavBarWidget from "./components/Menu/Menu";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetalle from "./components/ItemDetail/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <NavBarWidget />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route
          path="/categoria/:categoriaId"
          element={<ItemListContainer />}
        />
        <Route path="/detail/:productId" element={<ItemDetalle />} />
        {/* <Route path="/cart" element={<Cart />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
