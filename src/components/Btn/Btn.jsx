import './Btn.css'
import { ShoppingCartIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

const ICONS = {
  cart:    <ShoppingCartIcon width={18} />,
  bag:     <ShoppingBagIcon width={18} />
}

const Btn = ({ texto = "Enviar", tipo = "button", onClick, icono }) => {
  return (
    <button type={tipo} className="btn-formulario" onClick={onClick}>
      {icono && ICONS[icono]}
      {texto}
    </button>
  );
};

export default Btn