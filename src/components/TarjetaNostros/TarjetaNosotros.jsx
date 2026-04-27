import './TarjetaNosotros.css';

const CardValor = ({ icono, titulo, descripcion }) => {
  return(
    <div className="value-card">
      <i className={icono}></i>
      <h3 className="satisfy-regular">{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
};

export default CardValor;