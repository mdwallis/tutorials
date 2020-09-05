import React, { Fragment } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import WeatherForecast from './components/WeatherForecast/weatherForecast';

function App() {
  return (
      <Router>
        <Switch>
            <Route path="/">
                <WeatherForecast />
            </Route>
        </Switch>
      </Router>
  )
}

export default App;
