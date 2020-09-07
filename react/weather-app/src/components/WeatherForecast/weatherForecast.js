import React, { useEffect, useState } from 'react';
import WeatherCard from './weatherCard';
import './weatherForecast.css';

// constants used for fetching weather data
const units = 'imperial';
const exclude = 'current,minutely,timely';
const appid = process.env.REACT_APP_OPEN_WEATHER_APP_ID;

export default function WeatherForecast() {
    const [weather, setWeather] = useState({ daily: [] });
    const [latitude, setLatitude] = useState(35.787922);
    const [longitude, setLongitude] = useState(-78.482323);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const url = `${process.env.REACT_APP_API_BASE_URL}/onecall?lat=${latitude}&lon=${longitude}&units=${units}&exclude=${exclude}&APPID=${appid}`;
        console.log(url);
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                console.log(data);
                setWeather(data);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [latitude, longitude]);

    return (
        <div>
            <ol className='weather-card-list'>
                {
                    weather.daily.map((item, index) => (
                        <WeatherCard
                            key={index}
                            item={item} />
                    ))
                }
            </ol>
        </div>
    );
}