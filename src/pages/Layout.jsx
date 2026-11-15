import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      {/* Cabeçalho fixo da aplicação */}
      <Header />

      {/* Conteúdo dinâmico da página atual */}
      <main>
        {children}
      </main>

      {/* Rodapé fixo da aplicação */}
      <Footer />
    </div>
  );
};

export default Layout;