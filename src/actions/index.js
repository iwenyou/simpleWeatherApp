const api_key = 'b33507aa5491876f5c6fa855ec19ffad';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  return {
    type: FETCH_WEATHER
  }
}
