import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Icon";
const Icon = ({ reference, icontype, className = "" }) => {
  return (
    <a
      className={`icon ${className}`.trim()}
      href={reference}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={icontype} />
    </a>
  );
};
export default Icon;
