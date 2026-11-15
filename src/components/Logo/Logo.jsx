import logoSvg from '../../assets/icons/logo-header.svg';
import './Logo.css';

const Logo = ({ className = '' }) => {
  return (
    <div className={`logo-container ${className}`}>
      <img src={logoSvg} alt="Digital Store Logo" />
    </div>
  );
};

export default Logo;