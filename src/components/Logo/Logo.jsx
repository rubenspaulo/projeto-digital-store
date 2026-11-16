
import { Link } from 'react-router-dom';
import './Logo.css';
import logoHeaderSvg from '../../assets/icons/logo-header.svg';
import logoFooterSvg from '../../assets/icons/logo-footer.svg';

const Logo = ({ variant = 'header', className = '' }) => {
  const logoSrc = variant === 'footer' ? logoFooterSvg : logoHeaderSvg;

  return (
    <Link
      to="/"
      className={`logo-container logo-${variant} ${className}`}
      aria-label="Voltar para a página inicial"
    >
      <img src={logoSrc} alt="Digital Store Logo" />
    </Link>
  );
};

export default Logo;
