import React from "react";
import { Link, NavLink } from "react-router-dom";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Icon from "../CIcons/Icon";
import logoArizbes from "../../Assets/brand/LogoOnlyNombre_Invertido.png";
import "./Footer.css";

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
          <Icon
            className="icon--whatsapp"
            reference="https://www.instagram.com"
            icontype={faWhatsapp}
          />
          <Icon
            className="icon--Instagram"
            reference="https://www.instagram.com"
            icontype={faInstagram}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
