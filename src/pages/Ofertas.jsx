/*import BannerOferta from "../components/ofertaBanner";
import TarjetaProducto from "../components/TarjetaProducto";*/
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";

const Ofertas = () => {
  return (
    <>
    <BannerTitulo
      titulo="Ofertas Especiales"
      subtitulo="Descubre nuestras mejores ofertas"
    />
      <main className="container">
        {/*<div className="grid-productos">
          <TarjetaProducto
            nombre="Roles de Canela (4 pack)"
            precioOriginal={120}
            precioOferta={90}
            imagen="/2do_Proyecto_Arizbe-s/ASSETS/IMG/rol1.jpeg"
          />

          <TarjetaProducto
            nombre="Brownie Especial"
            precioOriginal={45}
            precioOferta={35}
            imagen="/2do_Proyecto_Arizbe-s/ASSETS/IMG/LogoBrownie-removebg-preview.png"
          />

          <TarjetaProducto
            nombre="Pan de Caja Artesanal"
            precioOriginal={80}
            precioOferta={65}
            imagen="/2do_Proyecto_Arizbe-s/ASSETS/IMG/rol3.jpeg"
          />
        </div>*/}
      </main>
    </>
  );
};

export default Ofertas;
