import React from 'react';
import PropTypes from 'prop-types';

const getDate = dateStr => {
    const date = new Date(dateStr);
    return date.toString();
}

// dt
// sunrise
// sunset
// temp
// feels_like
// pressure
// humidity
// dew_point
// wind_speed
// wind_deg
// weather
// clouds
// pop
// rain
// uvi

const WeatherCardDetails = ({ show, item }) => {
    if (!show) {
        return null;
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Date</td>
                        <td>{getDate(item.dt * 1000)}</td>
                    </tr>
                    <tr>
                        <td>sunrise</td>
                        <td>{getDate(item.sunrise * 1000)}</td>
                    </tr>
                    <tr>
                        <td>sunset</td>
                        <td>{getDate(item.sunset * 1000)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

WeatherCardDetails.props = {
    show: PropTypes.bool.isRequired,
    item: PropTypes.node.isRequired,
};

export default WeatherCardDetails;