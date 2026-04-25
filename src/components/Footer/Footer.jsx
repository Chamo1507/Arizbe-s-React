import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import logoArizbes from "../../Assets/brand/LogoOnlyNombre_Invertido.png";
const links = [
  { to: "/", label: "Inicio" },
  { to: "/Producto", label: "Productos" },
  { to: "/Nosotros", label: "Nosotros" },
  { to: "/Contacto", label: "Contactanos" },
  { to: "/Ofertas", label: "Ofertas" },
];
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="left">
        <Link className="navbar__brand" to="/" aria-label="Ir a inicio">
          <img src={logoArizbes} alt="logoArizbes" />
        </Link>
      </div>

      <div className="center">
        <ul className="">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="right">
        <div className="icons">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://wa.me/+522205199447"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
