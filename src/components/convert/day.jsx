import React from "react";
import dateFormat from 'dateformat';

const DayFormat = ({timestamp}) => {
    let timestamp1 = parseInt(timestamp) * 1000;
    var s = new Date(timestamp1).toISOString();
    let day = dateFormat(s, "dddd");

    return (
        <span>{day}</span>
    )
}
const DateFormat = ({timestamp}) => {
    let timestamp1 = parseInt(timestamp) * 1000;
    var s = new Date(timestamp1).toISOString();
    let day = dateFormat(s, "dd mmmm yyyy");

    return (
        <span>{day}</span>
    )
}
export {DayFormat, DateFormat};