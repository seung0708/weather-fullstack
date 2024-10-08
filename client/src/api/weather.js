import {API_ENDPOINT} from './index';

export const get5DayForecast = async (city) => {
    try {
        const response = await fetch(`${API_ENDPOINT}/weather/5day?city=${city}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching 5-day forecast data:', error);
        throw error;
    }
}
 
export const getCurrentConditions = async (city) => {
    try {
        const response = await fetch(`${API_ENDPOINT}/weather?city=${city}`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching current conditions data:', error);
        throw error;
    }
}