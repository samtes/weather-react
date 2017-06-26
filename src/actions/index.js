import axios from 'axios';

const API_KEP = '5a50b73a5ce20d49976087aae76ce9f4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEP}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
