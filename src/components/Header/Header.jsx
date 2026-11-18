import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Logo from "../Logo/Logo";
import searchIcon from "../../assets/icons/search.svg";
import cartIcon from "../../assets/icons/mini-cart.svg";

import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/produtos?filter=${encodeURIComponent(searchTerm.trim())}`);

      setSearchOpen(false);
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <button
          type="button"
          className="menu-toggle"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setSearchOpen(false);
          }}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="header-logo">
          <Logo variant="header" />
        </div>

        <button
          type="button"
          className="mobile-search-toggle"
          onClick={() => {
            setSearchOpen(!searchOpen);
            setMenuOpen(false);
          }}
          aria-label={searchOpen ? "Fechar busca" : "Abrir busca"}
          aria-expanded={searchOpen}
          aria-controls="header-search"
        >
          <img src={searchIcon} alt="" />
        </button>

        <form
          id="header-search"
          className={`search-container ${searchOpen ? "open" : ""}`}
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            type="submit"
            className="search-button"
            aria-label="Pesquisar"
          >
            <img src={searchIcon} alt="" />
          </button>
        </form>

        <div className="user-actions">
          <Link to="#" className="register-link">
            Cadastre-se
          </Link>

          <Link to="#" className="login-button">
            Entrar
          </Link>
        </div>

        <div className="cart-container">
          <img src={cartIcon} alt="Carrinho de compras" />
          <span className="cart-badge">2</span>
        </div>
      </div>


{menuOpen && (
  <div
    className="menu-overlay"
    onClick={() => setMenuOpen(false)}
    aria-hidden="true"
  />
)}

<nav
  id="mobile-navigation"
  className={`header-nav ${menuOpen ? "open" : ""}`}
  aria-hidden={!menuOpen}
>
  <ul>
    <li>
      <NavLink
        to="/"
        end
        onClick={() => setMenuOpen(false)}
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/produtos"
        onClick={() => setMenuOpen(false)}
      >
        Produtos
      </NavLink>
    </li>

    <li>
      <a
        href="#categorias"
        onClick={() => setMenuOpen(false)}
      >
        Categorias
      </a>
    </li>

    <li>
      <a
        href="#pedidos"
        onClick={() => setMenuOpen(false)}
      >
        Meus Pedidos
      </a>
    </li>
  </ul>

  {/* Ações do usuário */}
  <div className="mobile-user-actions">
    <Link
      to="#"
      className="login-button"
      onClick={() => setMenuOpen(false)}
    >
      Entrar
    </Link>

    <Link
      to="#"
      className="register-link"
      onClick={() => setMenuOpen(false)}
    >
      Cadastre-se
    </Link>
  </div>
</nav>

    </header>
  );
};

export default Header;
