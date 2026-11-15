import logoImg from '../assets/logo.png'; // Ajuste o nome exato do arquivo PNG da logo na sua pasta assets

const Logo = ({ className = '' }) => {
  return (
    <div className={`logo-container ${className}`}>
      <img 
        src={logoImg} 
        alt="Digital Store Logo" 
        style={{ width: '253px', height: '44px', objectFit: 'contain' }} 
      />
    </div>
  );
};

export default Logo;