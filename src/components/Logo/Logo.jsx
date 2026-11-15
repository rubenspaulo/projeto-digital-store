import logoHeaderSvg from '../../assets/icons/logo-header.svg';
import logoFooterSvg from '../../assets/icons/logo-footer.svg';
import './Logo.css';

const Logo = ({ variant = 'header', className = '' }) => {
  const logoSrc = variant === 'footer' ? logoFooterSvg : logoHeaderSvg;

  return (
    <div className={`logo-container logo-${variant} ${className}`}>
      <img src={logoSrc} alt="Digital Store Logo" />
    </div>
  );
};

export default Logo;