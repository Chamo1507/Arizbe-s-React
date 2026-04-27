import "./CInput.css";
const CInput = ({ lbNombre, ph, nombre, tipo, className = "" }) => {
  <div className={`cinput ${className}`.trim()}>
    <label htmlFor="nombre">{lbNombre}</label>
    <input type={tipo} id={nombre} name={nombre} placeholder={ph} required />
  </div>;
};
export default CInput;
