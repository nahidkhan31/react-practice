import React from "react";

const Country = ({ country }) => {
  console.log(country);
  return (
    <div>
      <h3>Name: {country.name.common}</h3>
      <h4>Capital: {country.capital}</h4>
    </div>
  );
};

export default Country;
