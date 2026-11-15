import "./ProductOptions.css";

const ProductOptions = ({ options, type = "text", selectedOption, onSelect }) => {
  return (
    <div className="product-options-container">
      <div className="options-grid">
        {options.map((option, index) => {
          const isSelected = selectedOption === option;
          return (
            <button
              key={index}
              type="button"
              className={`option-item ${type} ${isSelected ? "selected" : ""}`}
              style={type === "color" ? { backgroundColor: option } : {}}
              onClick={() => onSelect(option)}
            >
              {type === "text" && option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductOptions;