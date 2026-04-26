import "./pages.css";
import "./home.css";
//import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="mainContainer">
        <img
          id="BackInicio"
          src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyNDR1ZnNneW56Ym1iNmxkZ3lnNGM0bDV0NzBkNjI0NDJzd3o1eTMzeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ovvRlfxOfy5PvAPdTo/giphy.gif"
          alt="Background Inicio"
        />

        <main>
          <div className="container">
            <img
              id="logoInicio"
              src="src\Assets\brand\Logo_Arizbe's_invertido_Transparente.png"
              alt="Logo Arizbes"
            />
          </div>
        </main>
      </div>

      {/* Seccion Nosotros */}
      <div className="secciones" id="PocoDeNosotros">
        <div className="PocoNosotrosText">
          <h1>Un Poco De Nososotros</h1>
          <h2>
            Elaboramos nuestros productos con ingredientes de calidad, procesos
            tradicionales y el cuidado que solo el trabajo hecho a mano puede
            ofrecer. Nuestro objetivo es compartir sabores auténticos que
            recuerdan a lo casero, creando un espacio donde cada cliente pueda
            disfrutar del aroma, la calidez y la dedicación que ponemos en cada
            pieza recién horneada.
          </h2>
        </div>
        <div className="IMGPocoDeNosotros">
          <img src="src\Assets\brand\rol1.jpeg" alt="Rol 1" />
          <img src="src\Assets\brand\rol2.jpeg" alt="Rol 2" />
          <img src="src\Assets\brand\rol3.jpeg" alt="Rol 3" />
          <img src="src\Assets\brand\rol4.jpeg" alt="Rol 6" />
        </div>
      </div>

      {/* Seccion Banners */}
      <div className="secciones" id="BannerContainer">
        <div>
          <a href="#panaderia">
            <img
              src="src\Assets\brand\LogoHorno-removebg-preview.png"
              alt="Icono Panaderia"
            />
            <h1>Panaderia</h1>
            <h2>Ver más</h2>
          </a>
        </div>
        <div>
          <a href="#postres">
            <img
              src="src\Assets\brand\LogoPostres-removebg-preview.png"
              alt="Icono Postres"
            />
            <h1>Postres</h1>
            <h2>Ver más</h2>
          </a>
        </div>
        <div>
          <a href="#especiales">
            <img
              src="src\Assets\brand\LogoBrownie-removebg-preview.png"
              alt="Icono Especiales"
            />
            <h1>Especiales de la casa</h1>
            <h2>Ver más</h2>
          </a>
        </div>
      </div>

      {/* Galeria */}
      <div className="secciones" id="Galeria">
        <div className="GaleriaText">
          <h1>-- GALERIA --</h1>
        </div>
        <div className="GaleriaContainer">
          <img src="\src\Assets\brand\Diapositiva1.JPG" alt="Rol 1" />
          <img src="\src\Assets\brand\Diapositiva2.JPG" alt="Rol 2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
