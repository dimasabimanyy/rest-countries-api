import React, { useState } from "react";

const SearchCountries = ({ searchCountries }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.prevent.default();
  };

  const onChange = (q) => {
    setQuery(q.target.value);
    searchCountries(q.target.value);
  };

  return (
    <div className="search container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Search countries"
          value={query}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default SearchCountries;
