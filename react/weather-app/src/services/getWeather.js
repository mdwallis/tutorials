import React from 'react';
import useFetch from '../hooks/useFetch';

const getWeather = (props) => {

    // lat=35.787922
    // lon=-78.482323
    // units=imperial
    // APPID=ad54d0abde9eaf725a35446ccac43ea0
    // exclude=current,minutely,hourly
    const lat = 35.787922;
    const lon = -78.482323;
    const units = 'imperial';
    const exclude = 'current,minutely,timely';
    const appid = process.env.REACT_APP_OPEN_WEATHER_APP_ID;
    const url = `${process.env.REACT_APP_API_BASE_URL}/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=${exclude}&APPID=${appid}`;
    
    const { data, loading, error } = useFetch(url);
    if (loading) return "Loading...";
    if (error) return "Oops!";
    console.log(data);
    return data[0];
};

export default getWeather;
