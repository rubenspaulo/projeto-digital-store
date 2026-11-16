
import Layout from "../Layout";
import Gallery from "../../components/Gallery/Gallery";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import { productsData } from "../../data/products";

import "./HomePage.css";

import slide1 from "../../assets/home-slide-3.jpeg";
import slide2 from "../../assets/home-slide-4.jpeg";
import slide3 from "../../assets/home-slide-5.jpeg";
import slide4 from "../../assets/home-slide-6.jpeg";

import collection1 from "../../assets/collection-1.png";
import collection2 from "../../assets/collection-2.png";
import collection3 from "../../assets/collection-3.png";

import iconeCamisetas from "../../assets/colec-1.png";
import iconeCalcas from "../../assets/colec-2.png";
import iconeHeadphones from "../../assets/colec-3.png";
import iconeTenis from "../../assets/colec-4.png";

const HomePage = () => {
  // Imagens da galeria principal
  const galleryImages = [
    { src: slide1 },
    { src: slide2 },
    { src: slide3 },
    { src: slide4 },
  ];

  // Categorias em destaque
  const categoryIcons = [
    { title: "Camisetas", icon: iconeCamisetas, active: true },
    { title: "Calças", icon: iconeCalcas },
    { title: "Headphones", icon: iconeHeadphones },
    { title: "Tênis", icon: iconeTenis },
  ];

  // Produtos em alta utilizando os dados oficiais
  const highDemandProducts = productsData.slice(0, 8);

  return (
    <Layout>
      <div className="homepage-container">

        {/* Galeria principal */}
        <Gallery
          width="1440"
          height="681"
          radius="4px"
          images={galleryImages}
          showThumbs
        />

        {/* Coleções em destaque */}
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="collections-wrapper">
            <img
              src={collection1}
              alt="Coleção 1"
              className="collection-image"
            />

            <img
              src={collection2}
              alt="Coleção 2"
              className="collection-image"
            />

            <img
              src={collection3}
              alt="Coleção 3"
              className="collection-image"
            />
          </div>
        </Section>

        {/* Categorias */}
        <Section title="Nossos produtos" titleAlign="center">
          <div className="categories-circles-grid">
            {categoryIcons.map((item, index) => (
              <div
                key={index}
                className={`category-circle-item ${
                  item.active ? "active" : ""
                }`}
              >
                <div className="circle-icon-wrapper">
                  <img src={item.icon} alt={item.title} />
                </div>

                <span className="category-item-title">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Produtos em alta */}
        <Section
          title="Produtos em alta"
          titleAlign="center"
          link={{ text: "Ver todos →", href: "/produtos" }}
        >
          <ProductListing products={highDemandProducts} />
        </Section>

      </div>
    </Layout>
  );
};

export default HomePage;
