import React from 'react';
import PropTypes from 'prop-types';
import './envelope.css';
import AddressLabel from './addressLabel';

const Envelope = ({ fromPerson, toPerson }) => {
    return (
        <div className='envelope'>
            <AddressLabel className='addressLabel fromPerson' address={fromPerson} />
            <AddressLabel className='addressLabel toPerson' address={toPerson} />
            <div className="stamp">
                <div>Stamp</div>
            </div>
        </div>
    );
};

Envelope.propTypes = {
    fromPerson: PropTypes.node.isRequired,
    toPerson: PropTypes.node.isRequired,
};

export default Envelope;
