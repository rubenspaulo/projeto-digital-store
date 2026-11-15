
import { useSearchParams } from 'react-router-dom';

import Layout from '../Layout';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';

import './ProductListingPage.css';

// Importação das imagens da pasta src/assets
import product1 from '../../assets/product-thumb-1.jpeg';
import product2 from '../../assets/product-thumb-2.jpeg';
import product3 from '../../assets/product-thumb-3.jpeg';
import product4 from '../../assets/product-thumb-4.jpeg';
import product5 from '../../assets/product-thumb-5.jpeg';

const ProductListingPage = () => {

  // Leitura do parâmetro de pesquisa da URL
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('filter') || '';

  // Dados dos produtos
  const allProducts = [
    {
      name: "K-Swiss V8 - Masculino",
      image: product1,
      price: 200,
      priceDiscount: 100
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: product2,
      price: 200,
      priceDiscount: 100
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: product3,
      price: 200,
      priceDiscount: 100
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: product4,
      price: 200,
      priceDiscount: 100
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: product5,
      price: 300,
      priceDiscount: 100
    },
    {
      name: "K-Swiss V8 - Masculino",
      image: product1,
      price: 200,
      priceDiscount: 100
    }
  ];

  // Filtragem dos produtos pela pesquisa
  const filteredProducts = searchTerm
    ? allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allProducts;

  return (
    <Layout>

      <div className="product-listing-page-container">

        {/* Coluna esquerda: Ordenação e filtros */}
        <aside className="filters-sidebar">

          {/* Ordenação */}
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

          {/* Filtros */}
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

        {/* Coluna direita: Listagem de produtos */}
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
