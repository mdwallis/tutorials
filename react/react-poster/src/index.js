import React from 'react';
import ReactDOM from 'react-dom';
import Poster from './components/poster/poster';
import logo from './logo.svg';

ReactDOM.render(
  <React.StrictMode>
    <Poster
      image={logo}
      title='React'
      text='The best thing since jQuery, probably.' />
  </React.StrictMode>,
  document.getElementById('root')
);
