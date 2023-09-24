"use client";
import { useState } from "react";
import { MdMap } from "react-icons/md";

export const CountrySearch = () => {

  const [query, setQuery] = useState('')
  const [countryData, setCountry] = useState('')

  const onChange = async (e) => {
      const {value} = e.target;
      setQuery(value)
      const response = await fetch(`https://restcountries.com/v3.1/name/${value}`);
      setCountry(await response.json());
  }
  const viewMap = () => {
      window.location.href = countryData[0].maps.googleMaps; 
  }

  return (
    <div className="space-y-4">
      <input
        className="p-2 border rounded-md shadow-md w-80"
        type="text"
        onChange={onChange}
        value={query} 
        placeholder="Country name..."
      />
      <div className="p-4 boredr rounded-md shadow-md space-y-4">
        <div className="flex justify-between items-center">
          <p>{countryData[0] ? countryData[0].name.official : 'Name'}</p>
          <p>{countryData[0] ? countryData[0].capital[0] : 'Capital'}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>{countryData[0] ? countryData[0].name.common : 'Common Name'}</p>
          <p>{countryData[0] ? Object.keys(countryData[0].currencies)[0] : 'Currency'}</p>
        </div>
        <p>
          { countryData ? <MdMap onClick={() => viewMap()} className="h-6 w-6 ml-auto" /> : null}
        </p>
      </div>
    </div>
  );
};
