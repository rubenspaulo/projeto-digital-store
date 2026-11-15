import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import searchIcon from "../../assets/icons/search.svg";
import cartIcon from "../../assets/icons/mini-cart.svg";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/produtos?filter=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        {/* Menu hambúrguer para mobile */}
        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="header-logo">
          <Logo variant="header" />
        </div>

        <form className="search-container" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-button">
            <img src={searchIcon} alt="Pesquisar" />
          </button>
        </form>

        <div className="user-actions">
          <Link to="/cadastro" className="register-link">
            Cadastre-se
          </Link>
          <Link to="/login" className="login-button">
            Entrar
          </Link>
        </div>

        <div className="cart-container">
          <img src={cartIcon} alt="Carrinho de compras" />
          <span className="cart-badge">2</span>
        </div>
      </div>

      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/produtos">Produtos</NavLink>
          </li>
          <li>
            <NavLink to="/categorias">Categorias</NavLink>
          </li>
          <li>
            <NavLink to="/pedidos">Meus Pedidos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;