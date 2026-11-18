import { useState } from 'react';
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

  const [sortOrder, setSortOrder] = useState('lowest-price');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    category: [],
    gender: [],
    condition: []
  });

  const handleFilterChange = (categoryType, value) => {
    setSelectedFilters(prev => {
      const currentList = prev[categoryType] || [];
      const exists = currentList.includes(value);
      
      const updatedList = exists
        ? currentList.filter(item => item !== value)
        : [...currentList, value];

      return { ...prev, [categoryType]: updatedList };
    });
  };

  let resultProducts = searchTerm
    ? productsData.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [...productsData];

  if (selectedFilters.brand.length > 0) {
    resultProducts = resultProducts.filter(p => 
      selectedFilters.brand.some(b => p.brand.toLowerCase() === b.toLowerCase())
    );
  }
  if (selectedFilters.category.length > 0) {
    resultProducts = resultProducts.filter(p => 
      selectedFilters.category.some(c => p.category.toLowerCase().includes(c.toLowerCase()))
    );
  }
  if (selectedFilters.gender.length > 0) {
    resultProducts = resultProducts.filter(p => 
      selectedFilters.gender.some(g => p.gender.toLowerCase() === g.toLowerCase())
    );
  }
  if (selectedFilters.condition && selectedFilters.condition.length > 0) {
    resultProducts = resultProducts.filter(p => 
      selectedFilters.condition.some(c => p.condition?.toLowerCase() === c.toLowerCase())
    );
  }

  resultProducts.sort((a, b) => {
    const priceA = a.priceDiscount !== undefined && a.priceDiscount !== null ? a.priceDiscount : a.price;
    const priceB = b.priceDiscount !== undefined && b.priceDiscount !== null ? b.priceDiscount : b.price;

    if (sortOrder === 'lowest-price') {
      return priceA - priceB;
    } else {
      return priceB - priceA;
    }
  });

  return (
    <Layout>
      <div className="product-listing-page-container">

        {/* Overlay para fechar os filtros no mobile */}
        {filtersOpen && (
          <div 
            className="filters-overlay" 
            onClick={() => setFiltersOpen(false)} 
          />
        )}

        {/* Barra lateral de filtros (Fica à esquerda no desktop e vira gaveta no mobile) */}
        <aside className={`filters-sidebar ${filtersOpen ? 'open' : ''}`}>
          <div className="filters-header-mobile">
            <h3>Filtrar por</h3>
            <button 
              type="button" 
              className="filters-close-btn"
              onClick={() => setFiltersOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="filter-box">
            <h3 className="desktop-filter-title">Filtrar por</h3>
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
              onChange={(e) => handleFilterChange('brand', e.target.value)}
            />

            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={[
                { text: "Esporte", value: "esporte" },
                { text: "Casual", value: "casual" },
                { text: "Utilitário", value: "utilitario" },
                { text: "Corrida", value: "corrida" }
              ]}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            />

            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={[
                { text: "Masculino", value: "masculino" },
                { text: "Feminino", value: "feminino" },
                { text: "Unissex", value: "unissex" }
              ]}
              onChange={(e) => handleFilterChange('gender', e.target.value)}
            />

            <FilterGroup
              title="Estado"
              inputType="radio"
              options={[
                { text: "Novo", value: "novo" },
                { text: "Usado", value: "usado" }
              ]}
              onChange={(e) => handleFilterChange('condition', e.target.value)}
            />
          </div>
        </aside>

        <main className="products-content">
          
          {/* Topo da listagem: No desktop exibe o Ordenar por à direita. No mobile exibe ordenação e botão de filtros lado a lado. */}
          <div className="listing-top-bar">
            <div className="mobile-actions-row">
              <button 
                type="button" 
                className="mobile-filter-toggle"
                onClick={() => setFiltersOpen(true)}
              >
                
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#C92071"/>
                  <path d="M7 8H17M9 12H15M11 16H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="sort-box">
              <label htmlFor="sort-select">
                Ordenar por:
              </label>
              <select
                id="sort-select"
                className="sort-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="lowest-price">menor preço</option>
                <option value="highest-price">maior preço</option>
              </select>
            </div>
          </div>

          <Section
            title={`Resultados ${searchTerm ? `para "${searchTerm}"` : ""} — ${resultProducts.length} produtos`}
            titleAlign="left"
          >
            <ProductListing products={resultProducts} />
          </Section>
        </main>

      </div>
    </Layout>
  );
};

export default ProductListingPage;