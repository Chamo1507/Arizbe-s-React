import './BannerTitulo.css';

const BannerTitulo = ({ 
   titulo, 
   subtitulo  
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