import "./PHFormulario.css";
const PHFormulario = () => {
  return (
    <section className="contacto-formulario-container">
      <div className="contacto-formulario">
        <h2>Formulario de Contacto</h2>

        <p>
          ¡Queremos saber de ti! Escríbenos y nos pondremos en contacto contigo.
        </p>

        <form id="formulario" action="#" method="POST">
          <fieldset>
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Fulanito Pérez"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="fulanito_perez@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="+52 222 123 4567"
                required
              />
            </div>

            <div className="form-group">
              <label>Tipo de pedido</label>

              <div className="radio-group">
                <label className="radio-item">
                  <input
                    type="radio"
                    name="tipo_pedido"
                    value="pan"
                    required
                  />
                  Pan tradicional
                </label>

                <label className="radio-item">
                  <input type="radio" name="tipo_pedido" value="pastel" />
                  Pastel personalizado
                </label>

                <label className="radio-item">
                  <input type="radio" name="tipo_pedido" value="postres" />
                  Postres
                </label>

                <label className="radio-item">
                  <input type="radio" name="tipo_pedido" value="evento" />
                  Evento especial
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="detalles">Detalles del pedido</label>
              <textarea
                id="detalles"
                name="detalles"
                rows="5"
                placeholder="Sabores, cantidades, fecha, decoración, etc."
                required
              ></textarea>
            </div>

            <div className="address-grid">
              <div className="form-group">
                <label htmlFor="calle">Calle</label>
                <input type="text" id="calle" name="calle" required />
              </div>

              <div className="form-group">
                <label htmlFor="numero">N°</label>
                <input type="text" id="numero" name="numero" required />
              </div>

              <div className="form-group">
                <label htmlFor="codigo_postal">CP</label>
                <input
                  type="text"
                  id="codigo_postal"
                  name="codigo_postal"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="ciudad">Ciudad</label>
              <select id="ciudad" name="ciudad" required>
                <option value="">Selecciona una ciudad</option>
                <option value="puebla">Puebla</option>
                <option value="cdmx">Ciudad de México</option>
                <option value="tlaxcala">Tlaxcala</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="fecha">Fecha de entrega</label>
              <input type="date" id="fecha" name="fecha" required />
            </div>

            <div className="form-group">
              <label htmlFor="presupuesto">Presupuesto estimado MXN</label>
              <input
                type="number"
                id="presupuesto"
                name="presupuesto"
                placeholder="0.00"
                required
              />
            </div>

            {/* Aquí después ponemos tu componente BFormulario */}
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default PHFormulario;