import "./Btn.css";

const Btn = ({ texto = "Enviar", tipo = "button", onClick }) => {
  return (
    <button type={tipo} className="btn-formulario" onClick={onClick}>
      {texto}
    </button>
  );
};

export default Btn;
