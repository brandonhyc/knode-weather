import React, { useEffect, useState } from 'react';
import './app.css';
import ForecastTable from './ForecastTable';
import LocationInput from './LocationInput';

const App = () => {
  const [forecastData, setForecastData] = useState(null);
  const [locationInput, setLocationInput] = useState(null);

  useEffect(() => {
    if (locationInput) {
      fetch(`/api/weather?address=${ locationInput }`)
      .then(res => res.json())
      .then(data => setForecastData( data.forecast ))
      .then((_) => console.log(forecastData));
    }
  })

  return (
    <div>
      <LocationInput onLocationSubmit={ (data) => {
        console.log('onLocationSearch')
        setLocationInput(data)} }/>
      {forecastData && forecastData.length > 0 ? <ForecastTable data={ forecastData } /> : <h1> No Found! </h1>}
    </div>
  );
}

export default App;