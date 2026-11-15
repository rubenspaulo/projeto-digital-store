import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage/ProductViewPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/produtos" element={<ProductListingPage />} />

      <Route path="/produto/:id" element={<ProductViewPage />} />
    </Routes>
  );
}

export default App;