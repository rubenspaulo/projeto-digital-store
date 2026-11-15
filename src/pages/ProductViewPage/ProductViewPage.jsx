import Layout from "../Layout";
import Gallery from "../../components/Gallery/Gallery";
import BuyBox from "../../components/BuyBox/BuyBox";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import "./ProductViewPage.css";

// Importando imagens de exemplo dos assets
import shoeThumb1 from "../assets/product-thumb-1.jpeg";
import shoeThumb2 from "../assets/product-thumb-2.jpeg";
import shoeThumb3 from "../assets/product-thumb-3.jpeg";
import shoeThumb4 from "../assets/product-thumb-4.jpeg";
import shoeThumb5 from "../assets/product-thumb-5.jpeg";

const ProductViewPage = () => {
  // Imagens para a galeria de visualização do produto
  const productImages = [
    { src: shoeThumb1 },
    { src: shoeThumb2 },
    { src: shoeThumb3 },
    { src: shoeThumb4 },
    { src: shoeThumb5 },
  ];

  // Array de exemplo para os produtos relacionados
  const relatedProducts = Array(4).fill({
    name: "K-Swiss V8 - Masculino",
    image: shoeThumb1,
    price: 200,
    priceDiscount: 100,
  });

  return (
    <Layout>
      <div className="product-view-container">
        {/* Seção Principal: Galeria e BuyBox */}
        <div className="product-main-content">
          <div className="product-gallery-wrapper">
            <Gallery
              width="700"
              height="570"
              radius="4px"
              showThumbs={true}
              images={productImages}
            />
          </div>

          <div className="product-buybox-wrapper">
            <BuyBox
              name="Tênis Nike Revolution 6 Next Nature Masculino"
              reference="REF: 38167717"
              category="Casual | Nike"
              rating={4.7}
              totalReviews={90}
              price={219.0}
              priceDiscount={199.0}
              description="Conforto e sustentabilidade definem o Nike Revolution 6. Ideal para acompanhar o seu dia a dia com estilo e leveza em cada passada."
              sizes={["38", "39", "40", "41", "42"]}
              colors={["#6F7E8C", "#E86F6F", "#4A3B5C", "#62B6CB"]}
            />
          </div>
        </div>

        {/* Seção de Produtos Relacionados */}
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