import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';

function App() {
  return (
    <Routes>
      {/* Rota da Página Inicial */}
      <Route path="/" element={<HomePage />} />

      {/* Rota da Listagem de Produtos */}
      <Route path="/produtos" element={<ProductListingPage />} />

      {/* Rota de Visualização de um Produto específico */}
      <Route path="/produto/:id" element={<ProductViewPage />} />
    </Routes>
  );
}

export default App;