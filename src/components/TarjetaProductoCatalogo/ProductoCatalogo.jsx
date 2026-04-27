import './ProductoCatalogo.css'
import Btn from '../Btn/Btn'

const ProductoCatalogo = ({ imagen, imagenAlt, titulo, descripcion, precio, alAgregarAlCarrito }) => {
  return (
    <article className="tarjeta-producto">
      <h2 className="tarjeta-producto__titulo">{titulo}</h2>

      <img
        className="tarjeta-producto__imagen"
        src={imagen}
        alt={imagenAlt}
      />

      <p className="tarjeta-producto__descripcion">{descripcion}</p>

      <span className="tarjeta-producto__precio">{precio}</span>

      <Btn
        texto="Agregar al Carrito"
        icono="carrito"
        alHacerClick={alAgregarAlCarrito}
      />
    </article>
  )
}

export default ProductoCatalogo

