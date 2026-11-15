import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Layout from '../Layout';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';

import './ProductListingPage.css';


import product1 from '../../assets/product-thumb-1.jpeg';
import product2 from '../../assets/product-thumb-2.jpeg';
import product3 from '../../assets/product-thumb-3.jpeg';
import product4 from '../../assets/product-thumb-4.jpeg';
import product5 from '../../assets/product-thumb-5.jpeg';

const ProductListingPage = () => {

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('filter') || '';


  const [sortOrder, setSortOrder] = useState('lowest-price');
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    category: [],
    gender: []
  });


  const allProducts = [
    {
      id: 1,
      name: "K-Swiss V8 - Masculino",
      brand: "k-swiss",
      category: "casual",
      gender: "masculino",
      image: product1,
      price: 200,
      priceDiscount: 100
    },
    {
      id: 2,
      name: "Adidas Forum Low - Unissex",
      brand: "adidas",
      category: "casual",
      gender: "unissex",
      image: product2,
      price: 250,
      priceDiscount: 180
    },
    {
      id: 3,
      name: "Nike Revolution 6 - Masculino",
      brand: "nike",
      category: "corrida",
      gender: "masculino",
      image: product3,
      price: 300,
      priceDiscount: 219
    },
    {
      id: 4,
      name: "Puma Rs-X - Masculino",
      brand: "puma",
      category: "esporte",
      gender: "masculino",
      image: product4,
      price: 350,
      priceDiscount: 299
    },
    {
      id: 5,
      name: "Balenciaga Track - Unissex",
      brand: "balenciaga",
      category: "casual",
      gender: "unissex",
      image: product5,
      price: 600,
      priceDiscount: 450
    },
    {
      id: 6,
      name: "K-Swiss Classic - Masculino",
      brand: "k-swiss",
      category: "casual",
      gender: "masculino",
      image: product1,
      price: 180,
      priceDiscount: 90
    }
  ];


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
    ? allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [...allProducts];


  if (selectedFilters.brand.length > 0) {
    resultProducts = resultProducts.filter(p => selectedFilters.brand.includes(p.brand));
  }
  if (selectedFilters.category.length > 0) {
    resultProducts = resultProducts.filter(p => selectedFilters.category.includes(p.category));
  }
  if (selectedFilters.gender.length > 0) {
    resultProducts = resultProducts.filter(p => selectedFilters.gender.includes(p.gender));
  }


  resultProducts.sort((a, b) => {
    const priceA = a.priceDiscount !== undefined ? a.priceDiscount : a.price;
    const priceB = b.priceDiscount !== undefined ? b.priceDiscount : b.price;

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
                  { text: "Esporte e Lazer", value: "esporte" },
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