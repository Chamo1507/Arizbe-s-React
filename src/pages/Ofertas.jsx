import TarjetaProducto from "../components/TarjetaProducto/TarjetaProducto.jsx";

const Ofertas = () => {
  return (
    <>
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
            imagen="\src\Assets\brand\LogoBrownie.png"
          />

          <TarjetaProducto
            nombre="Pan de Caja Artesanal"
            precioOriginal={80}
            precioOferta={65}
            imagen="\src\Assets\brand\cuernitos.jpeg"
          />
        </div>
      </main>
    </>
  );
};

export default Ofertas;
