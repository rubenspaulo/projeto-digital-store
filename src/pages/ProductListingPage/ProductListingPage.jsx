import { useSearchParams } from 'react-router-dom';

import Layout from '../Layout';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import { productsData } from '../../data/products'; 

import './ProductListingPage.css';

const ProductListingPage = () => {

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('filter') || '';

  
  const filteredProducts = searchTerm
    ? productsData.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : productsData;

  return (
    <Layout>
      <div className="product-listing-page-container">

              <aside className="filters-sidebar">

        
          <div className="sort-box">
            <label htmlFor="sort-select">
              Ordenar por
            </label>

            <select
              id="sort-select"
              className="sort-select"
            >
              <option value="lowest-price">
                Menor preço
              </option>

              <option value="highest-price">
                Maior preço
              </option>
            </select>
          </div>

        
          <div className="filter-box">
            <h3>Filtrar por</h3>
            <hr className="filter-divider" />

            <FilterGroup
              title="Marca"
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

        
        <main className="products-content">
          <Section
            title={`Resultados para "${searchTerm || 'Todos'}" — ${filteredProducts.length} produtos`}
            titleAlign="left"
          >
            <ProductListing
              products={filteredProducts}
            />
          </Section>
        </main>

      </div>
    </Layout>
  );
};

export default ProductListingPage;