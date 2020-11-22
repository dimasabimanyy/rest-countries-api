import React from "react";
import Country from "./Country";

const Countries = ({ countries, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="countries container">
      {countries.map((country, index) => (
        <Country key={index} country={country} />
      ))}
    </section>
  );
};

export default Countries;
