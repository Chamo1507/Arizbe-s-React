import PHFormulario from "../components/PHFormulario/PHFormulario";
import BannerTitulo from "../components/BannerTitulo/BannerTitulo";
import "./Contacto.css";

const Contacto = () => {
  return (
    <>
      <BannerTitulo 
        titulo="Contáctanos"
        subtitulo="Estamos aquí para ayudarte"
      />
      <PHFormulario />
    </>
  );
};

export default Contacto;
