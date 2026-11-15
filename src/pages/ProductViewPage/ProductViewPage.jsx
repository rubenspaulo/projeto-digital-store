import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import Gallery from '../../components/Gallery/Gallery';
import BuyBox from '../../components/BuyBox/BuyBox';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import { productsData } from '../../data/products'; 
import './ProductViewPage.css';

const ProductViewPage = () => {
  
  const { id } = useParams();

  
  const product = productsData.find(p => p.id === id) || productsData[0];

  
  const relatedProducts = productsData
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      <div className="product-view-container">
        
        <div className="product-main-content">
          <div className="product-gallery-wrapper">
            <Gallery
              width="700"
              height="570"
              radius="4px"
              showThumbs={true}
              images={product.images}
            />
          </div>

          <div className="product-buybox-wrapper">
            <BuyBox
              name={product.name}
              reference={product.reference}
              category={product.category}
              rating={product.rating}
              totalReviews={product.totalReviews}
              price={product.price}
              priceDiscount={product.priceDiscount}
              description={product.description}
              sizes={["38", "39", "40", "41", "42"]}
              colors={["#6F7E8C", "#E86F6F", "#4A3B5C", "#62B6CB"]}
            />
          </div>
        </div>

       
        <Section 
          title="Produtos Relacionados" 
          titleAlign="left" 
          link={{ text: "Ver todos →", href: "/produtos" }}
        >
          <ProductListing products={relatedProducts} />
        </Section>
      </div>
    </Layout>
  );
};

export default ProductViewPage;