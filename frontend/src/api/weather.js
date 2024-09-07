import {API_ENDPOINT} from './index';


export const getWeather = async () => {
    const response = await fetch(`${API_ENDPOINT}/weather/get-weather`);
    const weather = await response.json();

    console.log(weather)
}