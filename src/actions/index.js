import axios from 'axios'

const API_KEY =     '392245380b7f86f2b099e5dd69b122a8'
const BASE_URL =    'http://api.openweathermap.org/data/2.5/forecast?q='
// api.openweathermap.org/data/2.5/weather?q={city name},{country code}

const GET_WEATHER = 'GET_WEATHER'

const getWeather = function(city) {
    const url =     `${BASE_URL}${city},us&APPID=${API_KEY}`
    const request = axios.get(url)
    
    return {
        type:       GET_WEATHER,
        payload:    request
    }
}

export { GET_WEATHER, getWeather }
