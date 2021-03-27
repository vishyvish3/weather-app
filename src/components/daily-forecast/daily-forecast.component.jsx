import React from "react";
import "./daily-forecast.style.css";
import sunny from "../../img/icons/1.png";
import test1 from "../../img/icons/3.png";

const DailyForecast = ({dailyInfo}) => {
    console.log(dailyInfo)
    return (
        <div>
            <div className="row row-section">
                <div  className="col-5 daily-forecast-day"> MONDAY</div>
                <div className="col-3 daily-forecast-temp"> 30<span>&#176;</span>C</div>
                <div className="col-3"> <img alt="weather" className="img-fluid daily-forecast-icon" src={sunny} /></div>
            </div>

            <div className="row row-section">
                <div className="col-5 daily-forecast-day"> TUESDAY</div>
                <div className="col-3 daily-forecast-temp"> 33<span>&#176;</span>C</div>
                <div className="col-3"> <img alt="weather" className="img-fluid daily-forecast-icon" src={test1} /></div>
            </div>
        </div>
    )
}
export default DailyForecast;