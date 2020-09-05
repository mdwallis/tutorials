import React from 'react';
import PropTypes from 'prop-types';
import './weatherCard.css';

const getDayName = dateStr => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en', { weekday: 'short' });
}

const WeatherCard = ({ item, onClick }) => {
    const iconUrl = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

    return (
        <li className='weather-card' onClick={onClick}>
            <div className='date'>
                <span>{getDayName(item.dt * 1000)}</span>
            </div>
            <div className='icon'>
                <img src={iconUrl} alt={item.weather[0].main} />
            </div>
            <div className='description'>
                <span>{item.weather[0].main}</span>
            </div>
            <div className='temperatures'>
                <span>{Math.round(item.temp.max)}&#176;</span>
                <span>{Math.round(item.temp.min)}&#176;</span>
            </div>
        </li>
    );
};

WeatherCard.props = {
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default WeatherCard;
