import React from "react";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import TarjetaNosotros from "../components/TarjetaNostros/TarjetaNosotros";
import "./Nosotros.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Nosotros = () => {
  return (
    <main className='pagina-nosotros'>
      <BannerTitulo
        titulo="Nuestra Pasión por el Trigo"
        subtitulo="Horneando momentos inolvidables desde el primer día."
      />
      <section className="historia-container">
        <div className="historia-texto">
          <h2 className="satisfy-regular titulo-historia">Nuestra Historia</h2>
          <p>
            En <strong>Arizbe's</strong>, creemos que el pan no es solo comida, es una tradición que une familias. Lo que comenzó como un sueño en una pequeña cocina, se ha convertido en el lugar favorito de la comunidad para encontrar pan recién horneado con ingredientes de la más alta calidad.
          </p>
          <p>
            Cada pieza que sale de nuestro horno lleva consigo el secreto de la casa: paciencia, amor y respeto por los procesos artesanales.
          </p>
        </div>

        <div className="historia-imagen">
          <img src="src\Assets\brand\rol12.jpeg" alt="Rol 1" />
        </div>
      </section>

      <section className="about-values">
        <div className="grid-values">
          <TarjetaNosotros
            icono="fa fa-heart"
            titulo="Pasión por la Panadería"
            descripcion="En Panadería Arizbe's, cada producto es elaborado con amor y dedicación, utilizando ingredientes de la más alta calidad."
          />
          <TarjetaNosotros
            icono="fa fa-seedling"
            titulo="Sostenibilidad"
            descripcion="Nos esforzamos por minimizar nuestro impacto ambiental utilizando prácticas sostenibles en nuestros procesos."
          />
          <TarjetaNosotros
            icono="fa fa-users"
            titulo="Comunidad"
            descripcion="Valoramos a nuestra comunidad y nos comprometemos a apoyar a productores locales fomentando relaciones cercanas."
          />
        </div>
      </section>
    </main>
  );
};

export default Nosotros;