import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/CreditCard/creditCard'
import CreditCard from './components/CreditCard/creditCard';

const label = 'Big Bank, Inc.';
const account = '1234567823456789';
const validThrough =  new Date(2024, 8);
const cardholderName = 'Card D. Holder'

ReactDOM.render(
  <React.StrictMode>
    <CreditCard
        label={label}
        account={account}
        validThrough={validThrough}
        cardholderName={cardholderName} />
  </React.StrictMode>,
  document.getElementById('root')
);
