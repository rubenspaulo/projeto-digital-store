import { useState } from "react";
import ProductOptions from "../ProductOptions/ProductOptions";
import "./BuyBox.css";


const BuyBox = ({
  name,
  reference,
  category,
  rating,
  totalReviews,
  price,
  priceDiscount,
  description,
  sizes = [],
  colors = [],
}) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");

  const handleBuy = () => {
    alert(`Produto adicionado ao carrinho!\nTamanho: ${selectedSize}\nCor: ${selectedColor}`);
  };

  return (
    <div className="buy-box">
      <h1 className="buybox-title">{name}</h1>
      <p className="buybox-meta">
        {category} | {reference}
      </p>

      <div className="buybox-rating">
        <div className="stars">
          <span>★ {rating}</span>
        </div>
        <span className="reviews-count">({totalReviews} avaliações)</span>
      </div>

      <div className="buybox-prices">
        {priceDiscount ? (
          <>
            <span className="current-price">R$ {priceDiscount.toFixed(2)}</span>
            <span className="original-price">R$ {price.toFixed(2)}</span>
          </>
        ) : (
          <span className="current-price">R$ {price.toFixed(2)}</span>
        )}
      </div>

      <div className="buybox-section">
        <span className="section-label">Descrição do produto</span>
        <p className="buybox-description">{description}</p>
      </div>

      <div className="buybox-section">
        <span className="section-label">Tamanho</span>
        <ProductOptions
          options={sizes}
          type="text"
          selectedOption={selectedSize}
          onSelect={setSelectedSize}
        />
      </div>

      <div className="buybox-section">
        <span className="section-label">Cor</span>
        <ProductOptions
          options={colors}
          type="color"
          selectedOption={selectedColor}
          onSelect={setSelectedColor}
        />
      </div>

      <button className="buybox-button" onClick={handleBuy}>
        COMPRAR
      </button>
    </div>
  );
};

export default BuyBox;