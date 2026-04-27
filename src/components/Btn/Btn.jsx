import './Button.css'
import { ShoppingCartIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

const ICONS = {
  cart:    <ShoppingCartIcon width={18} />,
  bag:     <ShoppingBagIcon width={18} />,
}

const Button = ({ text, onClick, type = 'button', variant = 'primary', icon, className = '' }) => {
  const buttonClassName = `btn btn--${variant} ${className}`.trim()

  return (
    <button className={buttonClassName} type={type} onClick={onClick}>
      {icon && ICONS[icon]}
      {text}
    </button>
  )
}

export default Button