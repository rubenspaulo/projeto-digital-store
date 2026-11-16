
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ id, image, name, price, priceDiscount }) => {
  return (
    <Link to={`/produto/${id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image-container">
          <img src={image} alt={name} className="product-image" />
          {priceDiscount && (
            <span className="discount-tag">30% OFF</span>
          )}
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
    </Link>
  );
};

export default ProductCard;
