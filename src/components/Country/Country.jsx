import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  //   console.log(country);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(true);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <div className="flex">
        <div>
          <h3>Name: {country.name.common}</h3>
          <h4>Capital: {country.capital}</h4>
          <p>Independent: {country.independent ? "Free" : "Not Free"}</p>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Maps: {country.maps.googleMaps}</p>
        </div>
        <div>
          <img src={country.flags.png} alt={country.flags.svg} />
        </div>
      </div>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
