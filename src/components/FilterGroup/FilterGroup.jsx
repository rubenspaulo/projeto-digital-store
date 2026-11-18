import './FilterGroup.css';

const FilterGroup = ({ title, inputType = 'checkbox', options = [], onChange }) => {
  return (
    <div className="filter-group">
      <h4 className="filter-group-title">{title}</h4>
      <ul className="filter-options-list">
        {options.map((option, index) => {
          const value = option.value || option.text;
          return (
            <li key={index}>
              <label className="filter-option-item">
                <input
                  type={inputType}
                  name={title.toLowerCase()}
                  value={value}
                  onChange={onChange}
                />
                <span>{option.text}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterGroup;