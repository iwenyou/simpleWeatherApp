const api_key = 'b33507aa5491876f5c6fa855ec19ffad';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  }
}
