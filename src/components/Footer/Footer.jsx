import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="left">
        <a href="./Index.html">
          <img
            src="/2do_Proyecto_Arizbe-s/ASSETS/IMG/Logo_Arizbe's_invertido_Transparente.png"
            alt="Logo Arizbe's panadería & postrería"
          />
        </a>
      </div>

      <div className="center">
        <ul>
          <li>
            <a href="./Index.html">Inicio</a>
          </li>
          <li>
            <a href="./PAGES/Producto.html">Productos</a>
          </li>
          <li>
            <a href="./PAGES/Nosotros.html">Nosotros</a>
          </li>
          <li>
            <a href="./PAGES/Contacto.html">Contactanos</a>
          </li>
        </ul>
      </div>

      <div className="right">
        <div className="icons">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="https://wa.me/+522205199447?text=Me gustaría ordenar:"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
