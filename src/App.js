import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Countries from "./components/Countries";
import Header from "./components/Header";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://restcountries.eu/rest/v2/all`);

      setCountries(result.data);
      console.log(result.data);
    };

    fetchItems();
  }, []);

  return (
    <div className="App">
      <Header />
      <Countries countries={countries} />
    </div>
  );
}

export default App;
