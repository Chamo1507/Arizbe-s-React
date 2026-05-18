import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import "./Producto.css";
import TarjetaProductoCatalogo from "../components/TarjetaProductoCatalogo/ProductoCatalogo.jsx";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import Btn from "../components/Btn/Btn";
import { PRODUCTOS } from "../data/product.js";

const Producto = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    if (carrito.some((item) => item.id === producto.id)) {
      alert("El item ya se encuentra en el carrito");
      return;
    }
    setCarrito((prev) => [...prev, { ...producto, cantidad: 1 }]);
  };

  const eliminarDelCarrito = (id) =>
    setCarrito((prev) => prev.filter((item) => item.id !== id));

  const cambiarCantidad = (id, delta) =>
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id && item.cantidad + delta >= 1
          ? { ...item, cantidad: item.cantidad + delta }
          : item,
      ),
    );

  const pagar = () => {
    alert("Gracias por la compra");
    setCarrito([]);
  };

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0,
  );

  return (
    <main className="pagina-productos">
      <BannerTitulo
        titulo="Productos"
        subtitulo="Descubre nuestra selección de productos de calidad"
      />

      <div className="contenedor">
        <div className="catalogo">
          {PRODUCTOS.map((producto) => (
            <TarjetaProductoCatalogo
              key={producto.id}
              imagen={producto.imagen}
              imagenAlt={producto.imagenAlt}
              titulo={producto.titulo}
              descripcion={producto.descripcion}
              precio={`$${producto.precio}.00`}
              alAgregarAlCarrito={() => agregarAlCarrito(producto)}
            />
          ))}
        </div>

        <aside className="carrito">
          <div className="carrito__header">
            <h2>Tu Carrito</h2>
          </div>

          <div className="carrito__items">
            {carrito.length === 0 ? (
              <p className="carrito__vacio">Tu carrito está vacío</p>
            ) : (
              carrito.map((item) => (
                <div key={item.id} className="carrito__item">
                  <img src={item.imagen} alt={item.imagenAlt} width={80} />

                  <div className="carrito__item-detalles">
                    <span className="carrito__item-titulo">{item.titulo}</span>
                    <div className="carrito__selector-cantidad">
                      <button
                        className="carrito__btn-cantidad"
                        onClick={() => cambiarCantidad(item.id, -1)}
                      >−</button>
                      <span>{item.cantidad}</span>
                      <button
                        className="carrito__btn-cantidad"
                        onClick={() => cambiarCantidad(item.id, +1)}
                      >+</button>
                    </div>
                    <span className="carrito__item-precio">
                      ${item.precio * item.cantidad}.00
                    </span>
                  </div>

                  <button
                    className="carrito__btn-eliminar"
                    onClick={() => eliminarDelCarrito(item.id)}
                  >
                    <TrashIcon width={16} />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="carrito__total">
            <div className="carrito__total-fila">
              <strong>Tu Total</strong>
              <span>${total.toLocaleString("es")}.00</span>
            </div>
            <Btn className="carrito__btn-pagar" onClick={pagar}>
              Pagar
            </Btn>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Producto;
