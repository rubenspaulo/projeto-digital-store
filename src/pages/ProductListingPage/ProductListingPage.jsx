import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup'
import './ProductListingPage.css'; // Estilos de layout da página

const ProductListingPage = () => {
  // Hook do React Router DOM para ler a query string (ex: /produtos?filter=nike)
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('filter') || '';

  // Dados mockados de exemplo para os produtos da listagem
  const allProducts = [
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-1.png", price: 200, priceDiscount: 100 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-2.png", price: 200, priceDiscount: 100 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-3.png", price: 200, priceDiscount: 100 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-4.png", price: 200, priceDiscount: 100 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-5.png", price: 300, priceDiscount: 100 },
    { name: "K-Swiss V8 - Masculino", image: "/product-thumb-1.png", price: 200, priceDiscount: 100 },
  ];

  // Filtragem básica com base na query string recebida do Header
  const filteredProducts = searchTerm 
    ? allProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : allProducts;

  return (
    <Layout>
      <div className="product-listing-page-container">
        
        {/* Coluna Esquerda: Ordenação e Filtros */}
        <aside className="filters-sidebar">
          
          {/* Caixa de Ordenação */}
          <div className="sort-box">
            <label htmlFor="sort-select">Ordenar por</label>
            <select id="sort-select" className="sort-select">
              <option value="lowest-price">Menor preço</option>
              <option value="highest-price">Maior preço</option>
            </select>
          </div>

          {/* Caixa de Filtros */}
          <div className="filter-box">
            <h3>Filtrar por</h3>
            <hr className="filter-divider" />

            <FilterGroup 
              title="Marka" 
              inputType="checkbox" 
              options={[
                { text: "Adidas", value: "adidas" },
                { text: "Balenciaga", value: "balenciaga" },
                { text: "K-Swiss", value: "k-swiss" },
                { text: "Nike", value: "nike" },
                { text: "Puma", value: "puma" }
              ]}
            />

            <FilterGroup 
              title="Categoria" 
              inputType="checkbox" 
              options={[
                { text: "Esporte e Lazer", value: "esporte" },
                { text: "Casual", value: "casual" },
                { text: "Utilitário", value: "utilitario" },
                { text: "Corrida", value: "corrida" }
              ]}
            />

            <FilterGroup 
              title="Gênero" 
              inputType="checkbox" 
              options={[
                { text: "Masculino", value: "masculino" },
                { text: "Feminino", value: "feminino" },
                { text: "Unissex", value: "unissex" }
              ]}
            />
          </div>
        </aside>

        {/* Coluna Direita: Listagem de Produtos */}
        <main className="products-content">
          <Section 
            title={`Resultados para "${searchTerm || 'Todos'}" — ${filteredProducts.length} produtos`} 
            titleAlign="left"
          >
            <ProductListing products={filteredProducts} />
          </Section>
        </main>

      </div>
    </Layout>
  );
};

export default ProductListingPage;