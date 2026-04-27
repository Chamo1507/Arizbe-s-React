import TarjetaProductoCatalogo from "../components/TarjetaProductoCatalogo/ProductoCatalogo.jsx";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import Btn from "../components/Btn/Btn";
import "./Producto.css";

const PRODUCTOS = [
  {
    id: 1,
    titulo: "Rol de Canela & Chocolate",
    imagen: "/src/Assets/brand/rol3.jpeg",
    imagenAlt: "Rol de Canela y Chocolate",
    descripcion:
      "Déjate envolver por la suavidad de nuestra masa recién horneada, bañada en una delicada glasa de vainilla que se funde en cada bocado. Coronamos esta delicia con hilos de chocolate oscuro premium y trozos de chocolate macizo para un contraste de texturas inolvidable.",
    precio: 40,
  },
  {
    id: 2,
    titulo: "Rol de Canela & Fresa",
    imagen: "/src/Assets/brand/rol7.jpeg",
    imagenAlt: "Rol de Canela y Fresa",
    descripcion:
      "Nuestra clásica masa esponjosa de canela se eleva a un nuevo nivel de sabor. Cubierto por una generosa capa de glaseado de vainilla, coronado con una vibrante compota de fresas silvestres.",
    precio: 40,
  },
  {
    id: 3,
    titulo: "Rol de Canela Clásico",
    imagen: "/src/Assets/brand/rol15.jpeg",
    imagenAlt: "Rol de Canela Clásico",
    descripcion:
      "Redescubre el placer de lo simple. Un rollo de masa brioche horneado lentamente, con pasas selectas y una delicada lluvia de azúcar glass que realza su elegancia rústica.",
    precio: 40,
  },
  {
    id: 4,
    titulo: 'Galletas "Nube" de Glaseado',
    imagen: "/src/Assets/brand/galletas.jpeg",
    imagenAlt: "Galletas Nube",
    descripcion:
      "Experimenta la felicidad en cada bocado con estas galletas que parecen pequeñas nubes dulces. Base ligera y aireada con un glaseado dulce de contraste irresistible.",
    precio: 40,
  },
  {
    id: 5,
    titulo: 'Brownies "Fudge" de Cacao Intenso',
    imagen: "/src/Assets/brand/Brownies.jpeg",
    imagenAlt: "Brownies Fudge",
    descripcion:
      "La experiencia definitiva para los chocoholics. Centro extraordinariamente húmedo y denso con esa capa superior delicadamente crujiente, elaborados con cacaos premium.",
    precio: 40,
  },
  {
    id: 6,
    titulo: "Cuernitos Artesanales Arizbe's",
    imagen: "/src/Assets/brand/cuernitos.jpeg",
    imagenAlt: "Cuernitos Artesanales",
    descripcion:
      "Siguiendo nuestra receta tradicional, estos cuernitos son el resultado de un cuidado proceso artesanal. Textura suave y sabor auténtico, un clásico irresistible.",
    precio: 40,
  },
];

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
        titulo="Producto"
        subtitulo="Descubre nuestra selección de productos de calidad"
      />
      <h1>Catálogo de Arizbe's</h1>

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

        {carrito.length > 0 && (
          <aside className="carrito">
            <div className="carrito__header">
              <h2>Tu Carrito</h2>
            </div>

            <div className="carrito__items">
              {carrito.map((item) => (
                <div key={item.id} className="carrito__item">
                  <img src={item.imagen} alt={item.imagenAlt} width={80} />

                  <div className="carrito__item-detalles">
                    <span className="carrito__item-titulo">{item.titulo}</span>
                    <div className="carrito__selector-cantidad">
                      <button onClick={() => cambiarCantidad(item.id, -1)}>
                        −
                      </button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => cambiarCantidad(item.id, +1)}>
                        +
                      </button>
                    </div>
                    <span className="carrito__item-precio">
                      ${item.precio * item.cantidad}.00
                    </span>
                  </div>

                  <button
                    className="carrito__btn-eliminar"
                    onClick={() => eliminarDelCarrito(item.id)}
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>

            <div className="carrito__total">
              <div className="carrito__total-fila">
                <strong>Tu Total</strong>
                <span>${total.toLocaleString("es")}.00</span>
              </div>
              <Btn texto="Pagar" icono="pago" tipo="button" onClick={pagar} />
            </div>
          </aside>
        )}
      </div>
    </main>
  );
};

export default Producto;
