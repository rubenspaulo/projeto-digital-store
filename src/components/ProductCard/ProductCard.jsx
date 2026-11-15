import "./ProductCard.css";

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
        {priceDiscount && <span className="discount-tag">30% OFF</span>}
      </div>
      <div className="product-info">
        <span className="product-category">Tênis</span>
        <h3 className="product-name">{name}</h3>
        <div className="product-prices">
          {priceDiscount ? (
            <>
              <span className="price-original">${price}</span>
              <span className="price-discount">${priceDiscount}</span>
            </>
          ) : (
            <span className="price-normal">${price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;