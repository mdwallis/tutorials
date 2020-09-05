import React from 'react';
import PropTypes from 'prop-types';
import WeatherCard from './weatherCard';
import './weatherCardList.css';

const WeatherCardList = ({ items, onClickWeatherCard }) => {
    return (
        <ol className='weather-card-list'>
            {
                items.map((item, index) => (
                    <WeatherCard
                        key={index}
                        item={item}
                        onClick={onClickWeatherCard} />
                ))
            }
        </ol>
    );
};

WeatherCardList.props = {
    items: PropTypes.array.isRequired,
    onClickWeatherCard: PropTypes.func.isRequired,
}

export default WeatherCardList;
