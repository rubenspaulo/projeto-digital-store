import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import searchIcon from '../../assets/icons/search.svg'; 
import cartIcon from '../../assets/icons/mini-cart.svg';
import './Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      if (searchTerm.trim()) {
        navigate(`/produtos?filter=${encodeURIComponent(searchTerm)}`);
      }
    }
  };

  return (
    <header className="header">
      <div className="top-bar">
        <Logo />
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Pesquisar produto..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
          <img 
            src={searchIcon} 
            alt="Pesquisar" 
            onClick={handleSearch} 
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="auth-container">
          <a href="/cadastrar" className="register-link">Cadastre-se</a>
          <a href="/entrar" className="login-button">Entrar</a>
        </div>

        <div className="cart-container">
          <img src={cartIcon} alt="Carrinho" />
        </div>
      </div>

      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/produtos" className={({ isActive }) => (isActive ? 'active' : '')}>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="/categorias" className={({ isActive }) => (isActive ? 'active' : '')}>
              Categorias
            </NavLink>
          </li>
          <li>
            <NavLink to="/pedidos" className={({ isActive }) => (isActive ? 'active' : '')}>
              Meus Pedidos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;