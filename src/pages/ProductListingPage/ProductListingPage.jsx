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
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    category: [],
    gender: []
  });


  const handleFilterChange = (categoryType, value) => {
    setSelectedFilters(prev => {
      const currentList = prev[categoryType];
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


        <aside className="filters-sidebar">


          <div className="sort-box">
            <label htmlFor="sort-select">
              Ordenar por
            </label>
            <select
              id="sort-select"
              className="sort-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="lowest-price">Menor preço</option>
              <option value="highest-price">Maior preço</option>
            </select>
          </div>


          <div className="filter-box">
            <h3>Filtrar por</h3>
            <hr className="filter-divider" />

            <div onChange={(e) => handleFilterChange('brand', e.target.value)}>
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
            </div>

            <div onChange={(e) => handleFilterChange('category', e.target.value)}>
              <FilterGroup
                title="Categoria"
                inputType="checkbox"
                options={[
                  { text: "Esporte", value: "esporte" },
                  { text: "Casual", value: "casual" },
                  { text: "Utilitário", value: "utilitario" },
                  { text: "Corrida", value: "corrida" }
                ]}
              />
            </div>

            <div onChange={(e) => handleFilterChange('gender', e.target.value)}>
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

          </div>

        </aside>

        <main className="products-content">
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