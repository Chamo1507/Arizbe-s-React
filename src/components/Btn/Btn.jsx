import './Btn.css'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const ICONS = {
  carrito: <ShoppingCartIcon width={18} />,
}

const Btn = ({ texto = "Enviar", tipo = "button", onClick, icono }) => {
  return (
    <button type={tipo} className="btn-formulario" onClick={onClick}>
      {icono && ICONS[icono]}
      {texto}
    </button>
  )
}

export default Btn
