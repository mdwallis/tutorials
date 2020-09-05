import React, { useState } from 'react';
//import getWeather from '../../services/getWeather';
import useFetch from '../../hooks/useFetch';
import WeatherCardList from './weatherCardList';
import WeatherCard from './weatherCard';
import WeatherCardDetails from './weatherCardDetails';
import HourlyDetails from './hourlyDetails';

const WeatherForecast = (props) => {
    const [item, setItem] = useState(null);
    const [show, setShow] = useState(false);
    
    const lat = 35.787922;
    const lon = -78.482323;
    const units = 'imperial';
    const exclude = 'current,minutely,timely';
    const appid = process.env.REACT_APP_OPEN_WEATHER_APP_ID;
    const url = `${process.env.REACT_APP_API_BASE_URL}/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=${exclude}&APPID=${appid}`;
    
    const { data, loading, error } = useFetch(url);
    if (loading) return "Loading...";
    if (error) return "Oops!";

    const onClickWeatherCard = (item, event) => {
        console.log('Clicked on a weather card item.');
        setItem(item);
        console.log(item);
        setShow(true);
    };

    return (
        <div>
            {/* <WeatherCardList items={data.daily}
                onClick={onClickWeatherCard} /> */}
            <div>
                <ol className='weather-card-list'>
                    {
                        data.daily.map((item, index) => (
                            <WeatherCard
                                key={index}
                                item={item}
                                onClick={onClickWeatherCard.bind(null, item)} />
                        ))
                    }
                </ol>
            </div>
            
            <WeatherCardDetails show={show} item={item} />
        </div>
    );
}

export default WeatherForecast;
