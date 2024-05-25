import axios from "axios";
import { Type_for_WeatherData } from "./types";



async function openWeatherAPI(): Promise<Type_for_WeatherData | undefined> {
    const baseUrl = "http://api.openweathermap.org/data/2.5";
    const key = "key";
    const city = "Skalica";
    const kelvin = 273.15;

    try {
        const data = await axios.get(`${baseUrl}/weather?q=${city}&appid=${key}`);

        const returnedData = {
            clouds: data.data.clouds.all,
            feels_like: Math.round((data.data.main.feels_like - kelvin) * 10) / 10,
            humidity: data.data.main.humidity,
            pressure: data.data.main.pressure,
            temp: Math.round((data.data.main.temp - kelvin) * 10) / 10,
            temp_max: Math.round((data.data.main.temp_max - kelvin) * 10) / 10,
            temp_min: Math.round((data.data.main.temp_min - kelvin) * 10) / 10,
            name: data.data.name,
            country: data.data.sys.country,
            sunrise: data.data.sys.sunrise,
            sunset: data.data.sys.sunset,
            timezone: data.data.timezone,
            visibility: data.data.visibility,
            description: data.data.weather[0].description,
            icon: data.data.weather[0].icon,
            main: data.data.weather[0].main,
            deg: data.data.wind.deg,
            gust: data.data.wind.gust,
            speed: data.data.wind.speed,
            lon: data.data.coord.lon,
            lat: data.data.coord.lat,
            id: data.data.id,
            weather: data.data.weather[0].description
        }
        return returnedData;

    } catch (error) {
        return undefined;
    };
};

export default openWeatherAPI;



const defaultWeatherData = {
    clouds: 0,
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    name: "",
    country: "",
    sunrise: 0,
    sunset: 0,
    timezone: 0,
    visibility: 0,
    description: "",
    icon: "",
    main: "",
    deg: 0,
    gust: 0,
    speed: 0,
    lon: 0,
    lat: 0,
    id: 0,
    weather: ""
}

