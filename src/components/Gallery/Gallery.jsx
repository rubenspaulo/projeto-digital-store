import { useState } from "react";
import "./Gallery.css";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

const Gallery = ({
  className = "",
  width,
  height,
  radius = "0px",
  showThumbs = false,
  images = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) return null;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const galleryStyle = {
    width: width ? `${width}px` : "100%",
    height: height ? `${height}px` : "auto",
  };

  const itemStyle = {
    borderRadius: radius,
  };

  return (
    <div className={`gallery-container ${className}`} style={galleryStyle}>
      <div className="gallery-main-slide" style={itemStyle}>
        <button
          className="gallery-arrow gallery-prev"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <img src={arrowLeft} alt="Anterior" />
        </button>

        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="gallery-main-image"
          style={itemStyle}
        />

        <button
          className="gallery-arrow gallery-next"
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
        >
          <img src={arrowRight} alt="Próxima" />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbs">
          {images.map((img, index) => (
            <div
              key={index}
              className={`gallery-thumb-item ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              style={{ borderRadius: radius }}
            >
              <img
                src={img.src}
                alt={`Miniatura ${index + 1}`}
                style={{ borderRadius: radius }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;