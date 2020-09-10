import React from 'react';
import PropTypes from 'prop-types';
import './poster.css';

const partition = text => {
    const first = text.slice(0, 1);
    const last = text.slice(-1);
    const middle = text.slice(1, -1);
    return {
        first,
        middle,
        last,
    };
}

const Poster = ({ image, title, text }) => {
    const { first, middle, last } = partition(title);

    return (
        <div className="poster">
            <div className='image'>
                <img src={image} />
            </div>
            <div className='title'>
                <span>{first}</span>
                <span className='middle'>{middle}</span>
                <span>{last}</span>
            </div>
            <div className='text'>
                {text}
            </div>
        </div>
    );
}

Poster.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Poster;
