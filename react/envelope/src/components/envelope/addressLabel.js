import React from 'react';
import PropTypes from 'prop-types';

const AddressLabel = ({ className, address }) => {
    const {
        sender,
        street,
        city,
        state,
        zip,
    } = address;

    return (
        <div className={className}>
            <span>{sender}</span>
            <br />
            <span>{street}</span>
            <br />
            <span>{city}</span>
            ,&nbsp;
            <span>{state}</span>
            &nbsp;
            <span>{zip}</span>
        </div>
    );
};

AddressLabel.propTypes = {
    className: PropTypes.string.isRequired,
    address: PropTypes.exact({
        sender: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        zip: PropTypes.string.isRequired,
    }).isRequired,
};

export default AddressLabel;
