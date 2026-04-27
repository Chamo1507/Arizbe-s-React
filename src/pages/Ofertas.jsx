import TarjetaProducto from "../components/TarjetaProducto/TarjetaProducto.jsx";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import "./Ofertas.css";
const Ofertas = () => {
  return (
    <>
      <BannerTitulo
        titulo="Ofertas Especiales"
        subtitulo="Descubre nuestras mejores ofertas"
      />
      <main className="container">
        <div className="grid-productos">
          <TarjetaProducto
            nombre="Roles de Canela (4 pack)"
            precioOriginal={120}
            precioOferta={90}
            imagen="\src\Assets\brand\rol1.jpeg"
          />

          <TarjetaProducto
            nombre="Brownie Especial"
            precioOriginal={45}
            precioOferta={35}
            imagen="\src\Assets\brand\Brownies.jpeg"
          />

          <TarjetaProducto
            nombre="Pan de Caja Artesanal"
            precioOriginal={80}
            precioOferta={65}
            imagen="\src\Assets\brand\cuernitos.jpeg"
          />

          <TarjetaProducto
            nombre="Cuernitos de Mantequilla (6 pack)"
            precioOriginal={90}
            precioOferta={70}
            imagen="/src/Assets/brand/cuernitos.jpeg"
          />

          <TarjetaProducto
            nombre="Rol Especial"
            precioOriginal={55}
            precioOferta={40}
            imagen="/src/Assets/brand/rol7.jpeg"
          />

          <TarjetaProducto
            nombre="Galletas de Chispas (Docena)"
            precioOriginal={110}
            precioOferta={85}
            imagen="/src/Assets/brand/galletas.jpeg"
          />
        </div>
      </main>
    </>
  );
};

export default Ofertas;
