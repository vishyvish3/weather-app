import React from "react";
import { DayFormat, DateFormat } from '../convert/day'
import "./main-info.style.css";

const MainInfo = ({ currentInfo }) => {
    return (
        <div className="row main-info">
            <div className="col-6 ">
                <div style={{ textTransform: "uppercase" }} className="main-info-day"><DayFormat timestamp={currentInfo.dt} /></div>
                <div className="main-info-temp">{parseInt(currentInfo.temp)}<span>&#176;</span>C</div>
                {/* <div>{currentInfo.dt}</div> */}
            </div>
            <div className="col-6">
                <div><img className="img-fluid main-info-icon" alt="partly cloudy" src={'https://openweathermap.org/img/wn/' + currentInfo.weather[0].icon + '@2x.png'} /></div>
            </div>
            <div className="col-md-12 second-section">
                <div className="second-section-wrapper">
                    <div className="row"><div className="col-6"><DateFormat timestamp={currentInfo.dt} /></div>
                        <div style={{ textTransform: "capitalize" }} className="col-6">{currentInfo.weather[0].description}</div></div>
                </div>
            </div>
        </div>
    )
}
export default MainInfo;