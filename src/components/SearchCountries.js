import React, { useState } from "react";

const SearchCountries = ({ searchCountries, darkMode }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.prevent.default();
  };

  const onChange = (q) => {
    setQuery(q.target.value);
    searchCountries(q.target.value);
  };

  return (
    <div className={`search container ${darkMode ? `dark` : `light`}`}>
      <form
        onSubmit={handleSubmit}
        className={`search-form ${darkMode ? `charcoal` : `light`}`}
      >
        <div>
          <i className="fas fa-search"></i>
        </div>
        <input
          type="text"
          placeholder="Search countries"
          value={query}
          onChange={onChange}
          className={`${darkMode ? `charcoal` : `light`}`}
        ></input>
      </form>
    </div>
  );
};

export default SearchCountries;
