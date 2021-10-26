import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import UserLocation from './Components/geolocation/GeoLocation';
import OpenWeather from './Components/concepts/OpenWeather/OpenWeather';


function App() {
  return (
    <div className="App">
  <UserLocation/>
  <OpenWeather />
    </div>
  );
}

export default App;
