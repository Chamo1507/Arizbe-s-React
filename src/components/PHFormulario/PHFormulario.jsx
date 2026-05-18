import React, { useState } from "react"; // 1. Importamos useState
import "./PHFormulario.css";
import Btn from "../Btn/Btn.jsx";

const PHFormulario = () => {
  // 2. Creamos un estado único para recolectar toda la información del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipo_pedido: "",
    detalles: "",
    calle: "",
    numero: "",
    codigo_postal: "",
    ciudad: "",
    fecha: "",
    presupuesto: "",
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

    // useState para ver si el formulario es válido
    const esValido = Object.values(formData).every((campo) => campo.trim() !== "");

    if (!esValido) {
      alert("El formulario no se ha podido enviar porque faltan campos obligatorios. Por favor, inténtalo de nuevo.");
      return;
    }

    // Formulario validado
    alert("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.");

    // Resetea el formulario usando useState
    setFormularioEnviado(true); // marca como enviado
    setFormData({
      nombre: "", 
      email: "", 
      telefono: "", 
      tipo_pedido: "",
      detalles: "", 
      calle: "", 
      numero: "", 
      codigo_postal: "",
      ciudad: "", 
      fecha: "", 
      presupuesto: ""
    });
    setFormularioEnviado(false); // vuelve al estado inicial

    console.log("Datos listos para enviar a la DB:", formData);

    /* 
    CONEXIÓN A TU FUTURA BASE DE DATOS (Ejemplo con fetch/axios):
    try {
      const response = await fetch('TU_API_URL/pedidos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('¡Pedido guardado en la base de datos!');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
    */
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
                id="nombre"
                name="nombre"
                value={formData.nombre} // Vinculado al estado
                onChange={handleChange} 
                placeholder="Fulanito Pérez"
              />
            </div>

            {/* Correo Electrónico */}
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="fulanito_perez@gmail.com"
              />
            </div>

            {/* Teléfono */}
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
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
                    name="tipo_pedido"
                    value="Pan tradicional" 
                    checked={formData.tipo_pedido === "Pan tradicional"} 
                    onChange={handleChange}
                  />
                  Pan tradicional
                </label>

                <label className="radio-item">
                  <input
                    type="radio"
                    name="tipo_pedido"
                    value="Pastel personalizado"
                    checked={formData.tipo_pedido === "Pastel personalizado"}
                    onChange={handleChange}
                  />
                  Pastel personalizado
                </label>

                <label className="radio-item">
                  <input
                    type="radio"
                    name="tipo_pedido"
                    value="Postres"
                    checked={formData.tipo_pedido === "Postres"}
                    onChange={handleChange}
                  />
                  Postres
                </label>

                <label className="radio-item">
                  <input
                    type="radio"
                    name="tipo_pedido"
                    value="Evento especial"
                    checked={formData.tipo_pedido === "Evento especial"}
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
                id="detalles"
                name="detalles"
                rows="5"
                value={formData.detalles}
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
                  id="calle"
                  name="calle"
                  value={formData.calle}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="numero">N°</label>
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  value={formData.numero}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="codigo_postal">CP</label>
                <input
                  type="text"
                  id="codigo_postal"
                  name="codigo_postal"
                  value={formData.codigo_postal}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="address-grid full-width">
            <div className="form-group">
              <label htmlFor="ciudad">Ciudad</label>
              <select id="ciudad" name="ciudad" value={formData.ciudad} onChange={handleChange}>
                <option value="">Selecciona una ciudad</option>
                <option value="Puebla">Puebla</option>
                <option value="Ciudad de México">Ciudad de México</option>
                <option value="Tlaxcala">Tlaxcala</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="fecha">Fecha de entrega</label>
              <input type="date" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="presupuesto">Presupuesto estimado MXN</label>
              <input type="number" id="presupuesto" name="presupuesto" value={formData.presupuesto} onChange={handleChange} placeholder="0.00" />
            </div>
          </div>
          </fieldset>
          <Btn 
            texto="Guardar Información"
            tipo="submit"></Btn>
        </form>
      </div>
    </section>
  );
};

export default PHFormulario;
