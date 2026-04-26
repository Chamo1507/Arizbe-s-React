const TarjetaProducto = ({ nombre, precioOriginal, precioOferta, imagen }) => {
  const descuento = Math.round(
    ((precioOriginal - precioOferta) / precioOriginal) * 100,
  );

  return (
    <div className="cardOferta">
      <div className="badge-descuento">-{descuento}%</div>
      <img src={imagen} alt={nombre} className="img-producto" />
      <h1>{nombre}</h1>
      <div className="precios">
        <span className="precio-viejo">${precioOriginal}</span>
        <span className="precio-nuevo">${precioOferta}</span>
      </div>
      <button className="btn-comprar">¡Ordenar ahora!</button>
    </div>
  );
};

export default TarjetaProducto;
