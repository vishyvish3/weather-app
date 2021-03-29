import React from "react";
import { DayFormat } from '../convert/day';
import "./daily-forecast.style.css";

const DailyForecast = ({ dailyInfo }) => {
    // console.log(dailyInfo)
    let info = dailyInfo.map(val => {
        return (<div key={val.dt} className="row row-section">
            <div className="col-5 daily-forecast-day"><DayFormat timestamp={val.dt} /></div>
            <div className="col-3 daily-forecast-temp"> {parseInt(val.temp.eve)}<span>&#176;</span>C</div>
            <div className="col-3"> <img alt="weather" className="img-fluid daily-forecast-icon" src={'https://openweathermap.org/img/wn/' + val.weather[0].icon + '@2x.png'} /></div>
        </div>);
    });
    info.splice(0, 1);
    info.splice(-1, 1);
    return (
        <div>
            {info}
        </div>
    )
}
export default DailyForecast;