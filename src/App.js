import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Countries from "./components/Countries";
import Header from "./components/Header";

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Untuk Handle input form
  const [searchCountries, setSearchCountries] = useState("");
  // Untuk Endpoint url search
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    const fetchItems = async () => {
      if (query === "") {
        const result = await axios(`https://restcountries.eu/rest/v2/all`);
        setCountries(result.data);
        setIsLoading(false);
      } else {
        const result = await axios(
          `https://restcountries.eu/rest/v2/name/${query}`
        );
        setCountries(result.data);
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [query]);

  // Assign dark mode
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  }

  const onChange = (e) => {
    setSearchCountries(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchCountries);
    // setSearchCountries("");
  };

  const modeChanger = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? `dark` : `light`}`}>
      <Header darkMode={darkMode} modeChanger={modeChanger} />

      {/* Search Form */}
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

      {/* Show All Data */}
      <Countries
        countries={countries}
        isLoading={isLoading}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
