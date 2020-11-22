import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Countries from "./components/Countries";
import Header from "./components/Header";
import SearchCountries from "./components/SearchCountries";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      if (searchCountries === "") {
        const result = await axios(`https://restcountries.eu/rest/v2/all`);

        setCountries(result.data);
        setIsLoading(false);
      } else {
        const result = await axios(
          `https://restcountries.eu/rest/v2/name/${searchCountries}`
        );
        setCountries(result.data);
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [searchCountries]);

  return (
    <div className="App">
      <Header />
      <SearchCountries searchCountries={(q) => setSearchCountries(q)} />
      <Countries countries={countries} isLoading={isLoading} />
    </div>
  );
}

export default App;
