import React from 'react';
import PropTypes from 'prop-types';
import './creditCard.css';

const formatAccount = account => account.match(/.{4}/g).join(' ');

const formatValidThrough = date => {
    const monthNum = date.getUTCMonth() + 1;
    const month = ('' + monthNum).length === 1 ? '0' + monthNum : monthNum;
    const year = date.getUTCFullYear().toString().substr(-2);
    return `${month}/${year}`;
};

const formatCardholderName = cardholderName => cardholderName.toUpperCase();

const CreditCard = ({ label, account, validThrough, cardholderName}) => {
    return (
        <div className='credit-card'>
            <div className='header'>
                <div className='header-image'></div>
                <div className='header-label'>{label}</div>
            </div>
            <div className='account'>{formatAccount(account)}</div>
            <div className='valid-through'>
                <div className='valid-through-label'>
                    <span>Valid Thru</span>
                </div>
                <div className='valid-through-date'>
                    {formatValidThrough(validThrough)}
                </div>
            </div>
            <div className='cardholder-name'>{formatCardholderName(cardholderName)}</div>
        </div>
    );
};

function accountValidator(props, propName, componentName) {
    if (props[propName].length != 16) {
        return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Length not 16.'
        );
    }

    const basicCreditCardPattern = new RegExp('^[0-9]{16}$');
    if (!basicCreditCardPattern.test(props[propName])) {
        return new Error(
            'Invalid prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Account contains non-numeric characters.'
        );
    }
}

CreditCard.propTypes = {
    label: PropTypes.string.isRequired,
    account: accountValidator,
    validThrough: PropTypes.instanceOf(Date).isRequired,
    cardholderName: PropTypes.string.isRequired,
};

export default CreditCard;
