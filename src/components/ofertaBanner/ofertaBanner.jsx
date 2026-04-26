const BannerOferta = ({ titulo, mensaje }) => {
  return (
    <div className="banner-oferta">
      <h1>{titulo}</h1>
      <p>{mensaje}</p>
    </div>
  );
};

export default BannerOferta;
