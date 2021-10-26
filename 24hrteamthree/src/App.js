import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
 
import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Sidebar from './components/site/Sidebar';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import OpenWeather from '../src/components/concepts/OpenWeather/OpenWeather';

function App() {
  return (
    <div className="App">

      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />

      <OpenWeather />
    
    </div>
  );
}

export default App;
