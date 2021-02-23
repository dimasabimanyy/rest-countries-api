import React from "react";

const SearchForm = ({ darkMode, handleSubmit, onChange, searchCountries }) => {
  return (
    <div className={`search container ${darkMode ? `dark` : `light`}`}>
      <form
        className={`search-form ${darkMode ? `charcoal` : `light`}`}
        onSubmit={handleSubmit}
      >
        <div>
          <i className="fas fa-search"></i>
        </div>
        <input
          type="text"
          placeholder="Search countries"
          onChange={onChange}
          value={searchCountries}
          className={`${darkMode ? `charcoal` : `light`}`}
        />
      </form>
    </div>
  );
};

export default SearchForm;
