import "./pages.css";
const Home = () => {
  return (
    <div className="mainContainer">
      <img
        id="BackInicio"
        src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyNDR1ZnNneW56Ym1iNmxkZ3lnNGM0bDV0NzBkNjI0NDJzd3o1eTMzeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ovvRlfxOfy5PvAPdTo/giphy.gif"
        alt="Fondo de inicio"
      />

      <main>
        <div className="container">
          <img id="logoInicio" src="" alt="Logo Arizbes" />
        </div>
      </main>

      <div className="secciones" id="PocoDeNosotros">
        <div className="PocoNosotrosText">
          <h1>Un poco de nosotros</h1>
          <h2>
            Elaboramos nuestros productos con ingredientes de calidad, procesos
            tradicionales y el cuidado que solo el trabajo hecho a mano puede
            ofrecer.
          </h2>
        </div>
        <div className="IMGPocoDeNosotros">
          <img src="" alt="Pan 1" />
          <img src="" alt="Pan 2" />
          <img src="" alt="Pan 3" />
          <img src="" alt="Pan 4" />
        </div>
      </div>

      <div className="secciones" id="BannerContainer">
        <div>
          <Link to="/productos#panaderia">
            <img src="" alt="Icono Panadería" />
            <h1>Panadería</h1>
            <h2>Ver más</h2>
          </Link>
        </div>
        <div>
          <Link to="/productos#postres">
            <img src="" alt="Icono Postres" />
            <h1>Postres</h1>
            <h2>Ver más</h2>
          </Link>
        </div>
        <div>
          <Link to="/productos#especiales">
            <img src="" alt="Icono Especiales" />
            <h1>Especiales de la casa</h1>
            <h2>Ver más</h2>
          </Link>
        </div>
      </div>

      <div className="secciones" id="Galeria">
        <div className="GaleriaText">
          <h1> GALERÍA </h1>
        </div>
        <div className="GaleriaContainer"></div>
      </div>
    </div>
  );
};

export default Home;
