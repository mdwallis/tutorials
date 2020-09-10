import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Envelope from './components/envelope/envelope';

const fromPerson = {
  sender: 'Mr. Sender',
  street: '123 Fake Street',
  city: 'Raleigh',
  state: 'NC',
  zip: '27610',
};

const toPerson = {
  sender: 'Mrs. Receiver',
  street: '456 Fake Street',
  city: 'Cary',
  state: 'NC',
  zip: '27511',
};

ReactDOM.render(
  <React.StrictMode>
    <Envelope fromPerson={fromPerson} toPerson={toPerson} />
  </React.StrictMode>,
  document.getElementById('root')
);