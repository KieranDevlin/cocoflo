import React from 'react';
import './styles.scss';
import Button from '../Button';
const Form = ({
  className,
  onSubmit,
  onChangeAPI,
  valueKey,
  placeholder,
  selectOptions,
  optionName,
  seletOnChange,
  valueQuery,
  onChangeQuery,
  queryPlaceholder,
  valueFeatured,
  onChangeFeatured,
}) => {
  return (
    <form
      className={`custom-form ${className}`}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <label htmlFor="api-key">Your API key:</label>
      <input
        value={valueKey}
        id="api-key"
        onChange={(event) => onChangeAPI(event.target.value)}
        placeholder={placeholder}
      />

      {selectOptions.length > 0 && (
        <>
          <label htmlFor={`${optionName}-select`}>
            Choose an {optionName}:
          </label>
          <select
            onChange={(e) => seletOnChange(e.target.value)}
            name={`${optionName}-select`}
            id={`${optionName}-select`}
          >
            {selectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </>
      )}
      <label htmlFor="query">Query:</label>
      <input
        value={valueQuery}
        id="query"
        onChange={(event) => onChangeQuery(event.target.value)}
        placeholder={queryPlaceholder}
      />
      <label htmlFor="featured">Featured:</label>
      <input
        type="button"
        value={valueFeatured ? 'Yes' : 'No'}
        id="feautred"
        onClick={() => onChangeFeatured(!valueFeatured)}
        placeholder={'No'}
      />
      <Button className="get-new-photo" onClick={() => onSubmit()}>
        GET NEW PHOTO
      </Button>
    </form>
  );
};

export default Form;
