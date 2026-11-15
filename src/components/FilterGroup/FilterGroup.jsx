import './FilterGroup.css'; // Opcional para os estilos específicos

const FilterGroup = ({ title, inputType = 'checkbox', options = [] }) => {
  return (
    <div className="filter-group">
      <h3 className="filter-group-title">{title}</h3>
      
      <div className="filter-options-list">
        {options.map((option, index) => {
          const optionValue = option.value || option.text;
          
          return (
            <label key={index} className="filter-option-label">
              <input 
                type={inputType} 
                name={title.toLowerCase().replace(/\s+/g, '-')} 
                value={optionValue} 
                className="filter-input"
              />
              <span className="filter-text">{option.text}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FilterGroup;