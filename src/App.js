import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Countries from "./components/Countries";
import Header from "./components/Header";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      if (query === "") {
        const result = await axios(`https://restcountries.eu/rest/v2/all`);

        setCountries(result.data);
        setIsLoading(false);
      } else {
        const result = await axios(
          `https://restcountries.eu/rest/v2/name/${query}`
        )
        setCountries(result.data);
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [query]);
  
  const onChange = (e) => {
    setSearchCountries(e.target.value);
  };
  
  const onSubmit = e => {
    e.preventDefault();
    setQuery(searchCountries);
    setSearchCountries("");
  }
  
  const modeChanger = () => {
    if (darkMode === true) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

  return (
    <div className={`App ${darkMode ? `dark` : `light`}`}>
      <Header darkMode={darkMode} modeChanger={modeChanger} />

      {/* Search Form */}
      <div className={`search container ${darkMode ? `dark` : `light`}`}>
        <form className={`search-form ${darkMode ? `charcoal` : `light`}`} onSubmit={onSubmit}>
          <div>
            <i className="fas fa-search"></i>
          </div>
          <input
            type="text"
            placeholder="Search countries"
            value={searchCountries}
            onChange={onChange}
            className={`${darkMode ? `charcoal` : `light`}`}
          />
        </form>
      </div>

      <Countries
        countries={countries}
        isLoading={isLoading}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
