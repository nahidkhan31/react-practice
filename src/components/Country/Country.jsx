import React from "react";

const Country = ({ country }) => {
  console.log(country);
  return (
    <div>
      <h3>Name: {country.name.common}</h3>
      <h4>Capital: {country.capital}</h4>
      <p>Independent: {country.independent ? "Free" : "Not Free"}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Maps: {country.maps.googleMaps}</p>
      <img src={country.flags.png} alt={country.flags.svg} />
    </div>
  );
};

export default Country;
