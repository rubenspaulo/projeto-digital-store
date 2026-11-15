import Layout from "../Layout";
import Gallery from "../../components/Gallery/Gallery";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import "./HomePage.css";

import slide1 from "../../assets/home-slide-1.jpeg";
import slide2 from "../../assets/home-slide-2.jpeg";
import collection1 from "../../assets/collection-1.png";
import collection2 from "../../assets/collection-2.png";
import collection3 from "../../assets/collection-3.png";
import productThumb from "../../assets/product-thumb-1.jpeg";

const HomePage = () => {
  const galleryImages = [
    { src: slide1 },
    { src: slide2 },
  ];

  const highDemandProducts = Array(8).fill({
    name: "K-Swiss V8 - Masculino",
    image: productThumb,
    price: 200,
    priceDiscount: 100,
  });

  return (
    <Layout>
      <div className="homepage-container">

        <Gallery
          width="1440"
          height="681"
          radius="4px"
          showThumbs
          images={galleryImages}
        />


        <Section title="Coleções em destaque" titleAlign="center">
          <div className="collections-wrapper">
            <img src={collection1} alt="Coleção 1" className="collection-image" />
            <img src={collection2} alt="Coleção 2" className="collection-image" />
            <img src={collection3} alt="Coleção 3" className="collection-image" />
          </div>
        </Section>

        <Section 
          title="Produtos em alta" 
          titleAlign="left" 
          link={{ text: "Ver todos →", href: "/produtos" }}
        >
          <ProductListing products={highDemandProducts} />
        </Section>
      </div>
    </Layout>
  );
};

export default HomePage;