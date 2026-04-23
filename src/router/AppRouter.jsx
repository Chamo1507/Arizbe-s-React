import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Producto from "../pages/Producto";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";
import Ofertas from "../pages/Ofertas";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="Producto" element={<Producto />}></Route>
          <Route path="Nosotros" element={<Nosotros />}></Route>
          <Route path="Contacto" element={<Contacto />}></Route>
          <Route path="Ofertas" element={<Ofertas />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export { AppRouter };
