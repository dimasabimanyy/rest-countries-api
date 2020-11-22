import React from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  return (
    <section className="countries container">
      {countries.map((country, index) => (
        <Country key={index} country={country} />
      ))}
    </section>
  );
};

export default Countries;
