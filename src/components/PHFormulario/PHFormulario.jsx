import React, { useState } from "react"; // 1. Importamos useState
import "./PHFormulario.css";
import Btn from "../Btn/Btn.jsx";
import axios from "axios";

const PHFormulario = () => {
  // 2. Creamos un estado único para recolectar toda la información del formulario
  const [formData, setFormData] = useState({
    Nombre: "",
    Email: "",
    Telefono: "",
    Tipo_Pedido: "",
    Detalle_Pedido: "",
    Calle: "",
    Num: "",
    CP: "",
    Ciudad: "",
    Fecha_Entrega: "",
    Presupuesto: "",
  });

  const [formularioEnviado, setFormularioEnviado] = useState(false);

  // 3. Función para capturar todo lo que el usuario escribe o selecciona
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Actualiza dinámicamente el campo según su atributo 'name'
    });
  };

  // 5. Función para procesar y enviar los datos a la futura DB
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const formulario = e.target; 

  if (!formulario.checkValidity()) {
    // Mensaje de error si faltan campos obligatorios
    alert("El formulario no se ha podido enviar debido a que faltan campos obligatorios por llenar. Por favor, inténtalo de nuevo.");
    formulario.reportValidity(); // Resalta los campos que faltan
    return; //Detiene el envío
  }
  
  console.log("Datos listos para enviar a la DB:", formData);

    try {
      // 2. CORREGIDO: Enviamos los datos REALES antes de limpiar el estado
      console.log("Enviando datos a la DB...", formData);
      const response = await axios.post('http://localhost:3000/contact', formData);
      
      // 3. CORREGIDO: Axios maneja la respuesta exitosa si entra al bloque try. 
      // NestJS devuelve un status 201 Created por defecto para POST.
      if (response.status === 201 || response.status === 200) {
        alert("¡Gracias por contactarnos! Tu pedido ha sido guardado con éxito.");
        
        // 4. CORREGIDO: Reseteamos el estado del formulario SOLÓ si la DB lo aceptó con éxito
        setFormData({
          Nombre: "", Email: "", Telefono: "", Tipo_Pedido: "",
          Detalle_Pedido: "", Calle: "", Num: "", CP: "",
          Ciudad: "", Fecha_Entrega: "", Presupuesto: "",
        });
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert("Hubo un error al conectar con el servidor. Por favor, inténtalo más tarde.");
    }
  };
  
  return (
    <section className="contacto-formulario-container">
      <div className="contacto-formulario">
        <p><strong>
          ¡Queremos saber de ti! Escríbenos y nos pondremos en contacto contigo.
        </strong></p>

        {/* Añadimos el evento onSubmit aquí */}
        <form id="formulario" onSubmit={handleSubmit} noValidate> {/* Usamos noValidate para manejar la validación manual con useState */}
          <fieldset>
            {/* Nombre completo */}
            <div className="form-group full-width">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="Nombre"
                name="Nombre"
                value={formData.Nombre} 
                onChange={handleChange} // Escucha cambios
                placeholder="Fulanito Pérez"
              />
            </div>

            {/* Correo Electrónico */}
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="Email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="fulanito_perez@gmail.com"
              />
            </div>

            {/* Teléfono */}
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="Telefono"
                name="Telefono"
                value={formData.Telefono}
                onChange={handleChange}
                placeholder="+52 222 123 4567"
              />
            </div>

            {/* Tipo de pedido */}
            <div className="form-group full-width">
              <label>Tipo de pedido</label>
              <div className="radio-group">
                <label className="radio-item">
                  <input
                    type="radio"
                    name="Tipo_Pedido"
                    value="Pan tradicional" // El value debe ser el string real que guardarás
                    checked={formData.Tipo_Pedido === "Pan tradicional"} // Controla cuál está marcado
                    onChange={handleChange}
                  />
                  Pan tradicional
                </label>

                <label className="radio-item">
                  <input
                    type="radio"
                    name="Tipo_Pedido"
                    value="Pastel personalizado"
                    checked={formData.Tipo_Pedido === "Pastel personalizado"}
                    onChange={handleChange}
                  />
                  Pastel personalizado
                </label>

                <label className="radio-item">
                  <input
                    type="radio"
                    name="Tipo_Pedido"
                    value="Postres"
                    checked={formData.Tipo_Pedido === "Postres"}
                    onChange={handleChange}
                  />
                  Postres
                </label>

                <label className="radio-item">
                  <input
                    type="radio"
                    name="Tipo_Pedido"
                    value="Evento especial"
                    checked={formData.Tipo_Pedido === "Evento especial"}
                    onChange={handleChange}
                  />
                  Evento especial
                </label>
              </div>
            </div>

            {/* Detalles */}
            <div className="form-group full-width">
              <label htmlFor="detalles">Detalles del pedido</label>
              <textarea
                id="Detalle_Pedido"
                name="Detalle_Pedido"
                rows="5"
                value={formData.Detalle_Pedido}
                onChange={handleChange}
                placeholder="Sabores, cantidades, fecha, decoración, etc."
              ></textarea>
            </div>

            {/* Dirección */}
            <div className="address-grid full-width">
              <div className="form-group">
                <label htmlFor="calle">Calle</label>
                <input
                  type="text"
                  id="Calle"
                  name="Calle"
                  value={formData.Calle}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="numero">N°</label>
                <input
                  type="text"
                  id="Num"
                  name="Num"
                  value={formData.Num}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="codigo_postal">CP</label>
                <input
                  type="text"
                  id="CP"
                  name="CP"
                  value={formData.CP}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="address-grid full-width">
            <div className="form-group">
              <label htmlFor="ciudad">Ciudad</label>
              <select
                id="Ciudad"
                name="Ciudad"
                value={formData.Ciudad}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una ciudad</option>
                <option value="Puebla">Puebla</option>
                <option value="Ciudad de México">Ciudad de México</option>
                <option value="Tlaxcala">Tlaxcala</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="fecha">Fecha de entrega</label>
              <input
                type="date"
                id="Fecha_Entrega"
                name="Fecha_Entrega"
                value={formData.Fecha_Entrega}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="presupuesto">Presupuesto estimado MXN</label>
              <input
                type="number"
                id="Presupuesto"
                name="Presupuesto"
                value={formData.Presupuesto}
                onChange={handleChange}
                placeholder="0.00"
                required
              />
            </div>
          </div>
          </fieldset>
          {/* No necesitas OnClick aquí si el botón es de tipo submit dentro de un form con onSubmit */}
          <Btn texto="Guardar Información" />
        </form>
      </div>
    </section>
  );
};

export default PHFormulario;
