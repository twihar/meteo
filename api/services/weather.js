import { KEY_API } from "../helpers/api";
import apiClient from "../helpers/apiClient";
import { NextFiveDaysForCast, TodayForCast } from "../routes/weather";

async function getWeatherToday() {
    const result = await apiClient().get(`${TodayForCast}?q=blida&appid=${KEY_API}&units=metric`)
    return result.data
}
async function getWeatherTodayPosition({ lat, lng }) {
    const result = await apiClient().get(`${TodayForCast}?lat=${lat}&lon=${lng}&appid=${KEY_API}&units=metric`)
    return result.data
}
async function getWeatherTodayCountry(country) {
    const result = await apiClient().get(`${TodayForCast}?q=${country}&appid=${KEY_API}&units=metric`)
    return result.data
}
async function getWeatherFiveDays() {
    const result = await apiClient().get(`${NextFiveDaysForCast}?q=blida&appid=${KEY_API}&units=metric`)
    console.log('hgh', result.data)
    return result.data
}

export {
    getWeatherToday,
    getWeatherFiveDays,
    getWeatherTodayPosition,
    getWeatherTodayCountry

};