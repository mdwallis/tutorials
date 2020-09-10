import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherForecast from './components/WeatherForecast/weatherForecast';

ReactDOM.render(
  <React.StrictMode>
    <WeatherForecast />
  </React.StrictMode>,
  document.getElementById('root')
);
