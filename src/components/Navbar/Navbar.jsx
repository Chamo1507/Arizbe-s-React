import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChatBubbleOvalLeftIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logoArizbes from "../../Assets/brand/LogoOnlyNombre_Arizbes.png";
import "./Navbar.css";
const links = [
  { to: "/", label: "Inicio" },
  { to: "/Producto", label: "Productos" },
  { to: "/Nosotros", label: "Nosotros" },
  { to: "/Contacto", label: "Contactanos" },
  { to: "/Ofertas", label: "Ofertas" },
];
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="navbar" role="banner">
      <div className="navbar__container">
        <Link className="navbar__brand" to="/" aria-label="Ir a inicio">
          <img src={logoArizbes} alt="logoArizbes" />
        </Link>
        <button
          className="navbar__toggle"
          type="button"
          aria-controls="navbar-menu"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {openMenu ? (
            <XMarkIcon width={22} height={22} />
          ) : (
            <Bars3Icon width={22} height={22} />
          )}
        </button>

        <nav
          id="navbar-menu"
          className={`navbar__nav ${openMenu ? "navbar__nav--open" : ""}`}
          aria-label="Navegacion principal"
        >
          <ul className="navbar__list">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} onClick={() => setOpenMenu(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
