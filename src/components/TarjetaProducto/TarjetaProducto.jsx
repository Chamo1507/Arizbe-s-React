import "./TarjetaProducto.css";

const TarjetaProducto = ({ nombre, precioOriginal, precioOferta, imagen }) => {
  const descuento = Math.round(
    ((precioOriginal - precioOferta) / precioOriginal) * 100,
  );

  return (
    <div className="cardOferta">
      <img src={imagen} alt={nombre} className="img-producto" />
      <div className="container-cardText">
        <div className="badge-descuento">-{descuento}%</div>
        <h1>{nombre}</h1>
        <div className="precios">
          <span className="precio-viejo">Antes: ${precioOriginal}</span>
          <p></p>
          <span className="precio-nuevo">Ahora: ${precioOferta}</span>
        </div>
        <button className="btn-comprar">¡Ordenar ahora!</button>
      </div>
    </div>
  );
};

export default TarjetaProducto;
