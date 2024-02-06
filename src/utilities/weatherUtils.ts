import {
  WeatherApiResponse,
  ExtractedWeatherInfo,
} from "../types/weatherTypes";

export function extractWeatherInfo(apiResponse: WeatherApiResponse) {
  if (!apiResponse || apiResponse.cod !== 200) {
    throw new Error("Invalid API Response");
  }

  const {
    main: { temp, humidity },
    wind: { speed },
    weather,
    rain,
  } = apiResponse;

  const mainWeather = weather && weather.length > 0 ? weather[0] : null;
  const weatherDescription = mainWeather ? mainWeather.description : null;
  const precipitation = rain ? rain["1h"] : null;

  const extractedInfo: ExtractedWeatherInfo = {
    temperature: temp,
    humidity,
    windSpeed: speed,
    precipitation,
    weatherDescription,
  };

  return extractedInfo;
}
