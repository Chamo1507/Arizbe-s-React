import './BannerTitulo.css';

const BannerTitulo = ({ 
  titulo = "Nuestra Pasión por el Trigo", 
  subtitulo = "Horneando momentos inolvidables desde el primer día." 
}) => {
  return (
    <section className="banner-titulo">
      <div className="banner-content">
        <h1 className="satisfy-regular">{titulo}</h1>
        <p>{subtitulo}</p>
      </div>
    </section>
  );
};

export default BannerTitulo;